import { useContext, useState, useEffect } from 'react';
import { FaBook, FaFeather, FaPen } from 'react-icons/fa';
import DarkModeContext from '../context/DarkModeContext';

const LoadingScreen = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev + 1) % 3);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      darkMode ? "bg-gray-900" : "bg-white"
    }`}>
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/irabaruta-logo.png" 
            alt="Irabaruta" 
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Irabaruta
          </h1>
          <p className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Healthcare Platform
          </p>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className={`transition-all duration-300 ${loadingStep === 0 ? 'scale-125' : 'scale-100'}`}>
            <FaBook className="text-4xl text-primary animate-bounce" />
          </div>
          <div className={`transition-all duration-300 ${loadingStep === 1 ? 'scale-125' : 'scale-100'}`}>
            <FaFeather className="text-4xl text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <div className={`transition-all duration-300 ${loadingStep === 2 ? 'scale-125' : 'scale-100'}`}>
            <FaPen className="text-4xl text-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Loading Bar */}
        <div className={`w-64 h-2 rounded-full mx-auto ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}>
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <p className={`mt-4 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}>
          Loading your healthcare experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;