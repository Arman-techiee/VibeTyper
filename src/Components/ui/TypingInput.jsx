import React, { useState, useEffect } from 'react';
import { Type, Hash } from 'lucide-react';

// Mock countWords function for demo
const countWords = (text) => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

export const TypingInput = ({
  input,
  onChange,
  disabled,
  inputRef,
  currentText,
  completed,
  remainingTime
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [lastInputLength, setLastInputLength] = useState(0);
  const [showProgressPulse, setShowProgressPulse] = useState(false);
  
  const progress = (input.length / currentText.length) * 100;
  
  // Trigger progress pulse animation when progress increases
  useEffect(() => {
    if (input.length > lastInputLength) {
      setShowProgressPulse(true);
      const timer = setTimeout(() => setShowProgressPulse(false), 300);
      setLastInputLength(input.length);
      return () => clearTimeout(timer);
    }
    setLastInputLength(input.length);
  }, [input.length, lastInputLength]);

  return (
    <div className="mb-6">
      <div className="relative group">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={`w-full p-6 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono text-lg rounded-xl shadow-sm transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 transform-gpu ${
            isFocused ? 'scale-[1.01] shadow-lg ring-2 ring-blue-500/20' : 'hover:shadow-md hover:border-slate-400 dark:hover:border-slate-500'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          rows="5"
          placeholder={completed || remainingTime === 0 ? "Assessment completed" : "Start typing the text above..."}
          autoFocus
        />
        
        {/* Animated focus indicator */}
        <div className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${
          isFocused ? 'bg-blue-500/5 dark:bg-blue-400/10' : 'bg-transparent'
        }`}></div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-700 rounded-b-xl overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 ease-out relative ${
              showProgressPulse ? 'animate-progress-pulse' : ''
            }`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            {/* Progress glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 animate-progress-glow"></div>
          </div>
        </div>
        
        {/* Completion celebration effect */}
        {progress >= 100 && (
          <div className="absolute inset-0 pointer-events-none animate-completion-flash rounded-xl"></div>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Type className="w-4 h-4 mr-2 text-slate-500 transition-colors duration-200 group-hover:text-blue-500" />
            <span className="font-medium transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400">
              {input.length}
            </span>
            <span className="text-slate-400 mx-1">/</span>
            <span className="transition-colors duration-200">{currentText.length} chars</span>
          </div>
          
          <div className="flex items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Hash className="w-4 h-4 mr-2 text-slate-500 transition-colors duration-200 group-hover:text-green-500" />
            <span className="font-medium transition-all duration-200 hover:text-green-600 dark:hover:text-green-400">
              {countWords(input)}
            </span>
            <span className="text-slate-400 ml-1">words</span>
          </div>
        </div>
        
        <div className="text-sm text-slate-500 dark:text-slate-400 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <span className={`font-medium transition-all duration-300 ${
            progress >= 100 ? 'text-green-600 dark:text-green-400 animate-bounce-gentle' : 'text-blue-600 dark:text-blue-400'
          }`}>
            {Math.round(progress)}%
          </span>
          <span className="ml-1 transition-colors duration-200">
            {progress >= 100 ? 'completed! 🎉' : 'complete'}
          </span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progress-pulse {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(1.2); }
          100% { transform: scaleY(1); }
        }
        
        @keyframes progress-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }
        
        @keyframes completion-flash {
          0% { background-color: transparent; }
          50% { background-color: rgba(34, 197, 94, 0.1); }
          100% { background-color: transparent; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes typing-indicator {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
        
        .animate-progress-pulse {
          animation: progress-pulse 0.3s ease-out;
        }
        
        .animate-progress-glow {
          animation: progress-glow 2s ease-in-out infinite;
        }
        
        .animate-completion-flash {
          animation: completion-flash 0.8s ease-out;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        /* Custom focus ring animation */
        .group:focus-within .animate-focus-ring {
          animation: focus-ring 0.3s ease-out;
        }
        
        @keyframes focus-ring {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};