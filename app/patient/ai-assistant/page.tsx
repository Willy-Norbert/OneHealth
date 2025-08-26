"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Mic, StopCircle, ImageIcon, Volume2, Loader, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

// --- Mocking External Components and Hooks to make the component self-contained ---

// Mock HealthCard component
const HealthCard = ({ children, className = "" }) => (
  <div className={`p-0 flex flex-col h-[600px] rounded-2xl shadow-xl bg-white dark:bg-gray-900 ${className}`}>
    {children}
  </div>
);

// Mock `t` and `useLanguage` functions for internationalization
const useLanguage = () => ({
  t: (key) => {
    const translations = {
      "aiAssistant.chat.welcomeMessage": "Hello! How can I assist you with your health today?",
      "aiAssistant.chat.mockReply": "Thank you for the information. A professional will review this shortly.",
      "aiAssistant.chat.title": "AI Assistant",
      "aiAssistant.chat.inputPlaceholder": "Type your message..."
    };
    return translations[key] || key;
  },
});
const t = useLanguage().t;

// --- Helper Functions for Audio Processing ---

// Function to convert PCM audio data (from API) to a WAV blob
function pcmToWav(pcmData, sampleRate) {
  const wavHeader = new ArrayBuffer(44);
  const view = new DataView(wavHeader);
  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + pcmData.byteLength, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // AudioFormat: 1 for PCM
  view.setUint16(22, 1, true); // NumChannels: 1
  view.setUint32(24, sampleRate, true); // SampleRate
  view.setUint32(28, sampleRate * 2, true); // ByteRate
  view.setUint16(32, 2, true); // BlockAlign
  view.setUint16(34, 16, true); // BitsPerSample
  writeString(view, 36, 'data');
  view.setUint32(40, pcmData.byteLength, true);

  const wavBlob = new Blob([wavHeader, pcmData], { type: 'audio/wav' });
  return wavBlob;
}

// Function to convert a Blob to a Base64 string
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

// --- Main AI Assistant Component ---

interface Message {
  sender: "assistant" | "user";
  text?: string;
  image?: string; // Base64 image URL
  audio?: string; // Base64 audio URL
  isProcessing?: boolean;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: t("aiAssistant.chat.welcomeMessage"),
    },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-scroll to the bottom of the chat when new messages arrive
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle dark mode state and persist it in localStorage
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  // Handle sending a text message
  const handleSend = async () => {
    if (isLoading || !input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage, { sender: "assistant", isProcessing: true }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await simulateLLMResponse(input);
      setMessages((prev) => prev.filter(msg => !msg.isProcessing));
      setMessages((prev) => [...prev, { sender: "assistant", text: response }]);
      
      await handleAssistantVoiceResponse(response);
    } catch (error) {
      console.error("Error with mock API call:", error);
      setMessages((prev) => prev.filter(msg => !msg.isProcessing));
      setMessages((prev) => [...prev, { sender: "assistant", text: "Sorry, I'm having trouble right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    if (isLoading) return;
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Url = reader.result as string;
        const userMessage: Message = { sender: "user", image: base64Url };
        setMessages((prev) => [...prev, userMessage, { sender: "assistant", isProcessing: true }]);
        setIsLoading(true);

        // Simulate a mock API call for image analysis
        setTimeout(() => {
          setMessages((prev) => prev.filter(msg => !msg.isProcessing));
          const mockResponse = "Thank you for the image. It looks like a great day to get a health check!";
          setMessages((prev) => [...prev, { sender: "assistant", text: mockResponse }]);
          handleAssistantVoiceResponse(mockResponse);
          setIsLoading(false);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle starting the voice recording
  const handleStartRecording = async () => {
    if (isLoading) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm; codecs=opus' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const userAudioBase64 = await blobToBase64(audioBlob);

        const userMessage: Message = { sender: "user", audio: audioUrl };
        setMessages((prev) => [...prev, userMessage, { sender: "assistant", isProcessing: true }]);
        setIsLoading(true);

        try {
          await handleUserVoiceToText(userAudioBase64, audioUrl);
        } catch (error) {
          console.error("Error during voice transcription:", error);
          setMessages((prev) => prev.filter(msg => !msg.isProcessing));
          setMessages((prev) => [...prev, { sender: "assistant", text: "Sorry, I couldn't transcribe that. Please try again." }]);
        } finally {
          setIsLoading(false);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Failed to get microphone access:", err);
      alert("Microphone access denied. Please enable it in your browser settings.");
    }
  };

  // Handle stopping the voice recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  
  // Simulated API call for voice-to-text transcription
  const handleUserVoiceToText = async (base64Audio, audioUrl) => {
    // In a real app, you would send this to a speech-to-text API.
    // For this example, we'll simulate a transcription.
    // Replace with a real API call to gemini-2.5-flash-preview-05-20 for voice.
    const mockTranscription = "I have a sore throat and a high fever.";
    const userMessageWithText = { sender: "user", text: mockTranscription };
    setMessages((prev) => prev.map(msg => msg.audio === audioUrl ? userMessageWithText : msg));
    
    // Get assistant's text response and voice
    const assistantResponse = await simulateLLMResponse(mockTranscription);
    setMessages((prev) => prev.filter(msg => !msg.isProcessing));
    setMessages((prev) => [...prev, { sender: "assistant", text: assistantResponse }]);
    await handleAssistantVoiceResponse(assistantResponse);
  };
  
  // Simulated Gemini LLM response (Text)
  const simulateLLMResponse = async (prompt) => {
    const apiKey = ""; // API key is provided at runtime.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{
        parts: [{ text: prompt }]
      }]
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      return result?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "I'm having trouble connecting right now. Please try again later.";
    }
  };

  // Simulated Gemini TTS API response (Audio)
  const handleAssistantVoiceResponse = async (text) => {
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{
        parts: [{ text: text }]
      }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Zephyr" }
          }
        }
      },
      model: "gemini-2.5-flash-preview-tts"
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      const part = result?.candidates?.[0]?.content?.parts?.[0];
      const audioData = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType;

      if (audioData && mimeType && mimeType.startsWith("audio/")) {
        const pcmData = Uint8Array.from(atob(audioData), c => c.charCodeAt(0));
        const sampleRate = parseInt(mimeType.match(/rate=(\d+)/)[1], 10);
        const pcm16 = new Int16Array(pcmData.buffer);
        const wavBlob = pcmToWav(pcm16, sampleRate);
        const audioUrl = URL.createObjectURL(wavBlob);
        
        const audioMessage: Message = { sender: "assistant", audio: audioUrl };
        setMessages((prev) => [...prev, audioMessage]);

        const audio = new Audio(audioUrl);
        audio.play();
      }
    } catch (error) {
      console.error("Error generating or playing TTS:", error);
    }
};

  return (
    <HealthCard className="p-0 flex flex-col h-[600px] rounded-2xl shadow-xl bg-white dark:bg-gray-800">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 rounded-t-2xl flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t("aiAssistant.chat.title")}</h2>
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.isProcessing ? (
              <div className="flex items-center space-x-2 text-gray-500">
                 <Loader className="w-5 h-5 animate-spin" />
                 <span>Thinking...</span>
              </div>
            ) : (
              <div
                className={`px-4 py-3 rounded-2xl max-w-[70%] text-sm shadow-sm ${
                  msg.sender === "assistant"
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "bg-green-600 text-white"
                }`}
              >
                {msg.text && <div>{msg.text}</div>}
                {msg.image && (
                  <img 
                    src={msg.image} 
                    alt="User uploaded content" 
                    className="max-w-full h-auto rounded-lg"
                    style={{ maxWidth: '300px' }}
                  />
                )}
                {msg.audio && (
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-5 h-5" />
                    <span className="text-xs">Audio Message</span>
                    <audio src={msg.audio} controls className="h-8" />
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-2xl">
        <div className="flex items-center space-x-3">
          {/* File Upload Button */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            disabled={isLoading || isRecording}
          >
            <ImageIcon className="w-5 h-5" />
          </button>

          {/* Voice Recording Button */}
          {isRecording ? (
            <button
              onClick={handleStopRecording}
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <StopCircle className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleStartRecording}
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              disabled={isLoading}
            >
              <Mic className="w-5 h-5" />
            </button>
          )}

          {/* Text Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isRecording ? "Listening..." : t("aiAssistant.chat.inputPlaceholder")}
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-gray-700 dark:bg-gray-800 dark:text-white"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading || isRecording}
          />
          
          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
            disabled={isLoading || isRecording || !input.trim()}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </HealthCard>
  );
}