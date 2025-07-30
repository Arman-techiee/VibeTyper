import React from 'react';

export const TextDisplay = ({ currentText, input }) => {
  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = "text-slate-400 dark:text-slate-500";
      let animationClass = "";
      
      if (index < input.length) {
        if (input[index] === char) {
          className = "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/20 rounded-sm px-0.5";
          // Add bounce animation for correct characters
          animationClass = "animate-bounce-subtle";
        } else {
          className = "text-rose-700 bg-rose-50 dark:text-rose-300 dark:bg-rose-900/20 rounded-sm px-0.5";
          // Add shake animation for incorrect characters
          animationClass = "animate-shake";
        }
      } else if (index === input.length) {
        className = "text-slate-900 bg-blue-100 dark:text-white dark:bg-blue-600/30 border-l-2 border-blue-500 dark:border-blue-400 animate-pulse rounded-sm";
        // Add breathing animation for cursor
        animationClass = "animate-breathe";
      }

      return (
        <span
          key={index}
          className={`${className} ${animationClass} ${char === ' ' ? 'inline-block w-2' : 'inline'} transition-all duration-300 ease-out transform-gpu`}
          style={{
            animationDelay: index < input.length ? `${index * 50}ms` : '0ms',
            animationFillMode: 'both'
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="mb-6">
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-8 min-h-[160px] shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="text-lg leading-8 font-mono tracking-wide break-words whitespace-pre-wrap selection:bg-blue-100 dark:selection:bg-blue-900/50">
          {renderTextWithHighlight()}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span className="animate-fade-in">Focus on accuracy and maintain steady rhythm</span>
        <div className="flex items-center space-x-4 animate-fade-in-delay">
          <div className="flex items-center group">
            <div className="w-3 h-3 bg-emerald-200 dark:bg-emerald-900/40 rounded mr-2 transition-transform duration-200 group-hover:scale-110"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center group">
            <div className="w-3 h-3 bg-rose-200 dark:bg-rose-900/40 rounded mr-2 transition-transform duration-200 group-hover:scale-110"></div>
            <span>Error</span>
          </div>
          <div className="flex items-center group">
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-900/40 rounded mr-2 transition-transform duration-200 group-hover:scale-110"></div>
            <span>Current</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-2px) scale(1.05);
          }
        }
        
        @keyframes shake {
          0%, 100% { 
            transform: translateX(0px);
          }
          25% { 
            transform: translateX(-2px);
          }
          75% { 
            transform: translateX(2px);
          }
        }
        
        @keyframes breathe {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.02);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 0.6s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};