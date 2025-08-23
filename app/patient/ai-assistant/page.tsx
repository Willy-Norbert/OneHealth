"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { motion } from "framer-motion";

interface Message {
  sender: "assistant" | "user";
  text: string;
}

export default function AIAssistant() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: t("aiAssistant.chat.welcomeMessage"),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate assistant reply (replace with API later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: t("aiAssistant.chat.mockReply") },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <HealthCard className="p-0 flex flex-col h-[600px]">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-border bg-muted/40">
        <h2 className="text-lg font-bold">{t("aiAssistant.chat.title")}</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
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
            <div
              className={`px-4 py-3 rounded-2xl max-w-[70%] text-sm shadow-sm ${
                msg.sender === "assistant"
                  ? "bg-muted text-foreground"
                  : "bg-healthcare-primary text-black"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="px-6 py-4 border-t border-border bg-background">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("aiAssistant.chat.inputPlaceholder")}
            className="flex-1 px-4 py-3 border border-border rounded-lg focus:border-healthcare-primary focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-healthcare-primary text-black px-6 py-3 rounded-lg hover:bg-healthcare-primary/90 transition flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </HealthCard>
  );
}
