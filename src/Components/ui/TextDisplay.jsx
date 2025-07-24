import React from 'react';

export const TextDisplay = ({ currentText, input }) => {
  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = "text-slate-400 dark:text-slate-500";

      if (index < input.length) {
        if (input[index] === char) {
          className = "text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/20 rounded-sm px-0.5";
        } else {
          className = "text-rose-700 bg-rose-50 dark:text-rose-300 dark:bg-rose-900/20 rounded-sm px-0.5";
        }
      } else if (index === input.length) {
        className = "text-slate-900 bg-blue-100 dark:text-white dark:bg-blue-600/30 border-l-2 border-blue-500 dark:border-blue-400 animate-pulse rounded-sm";
      }

      return (
        <span
          key={index}
          className={`${className} ${char === ' ' ? 'inline-block w-2' : 'inline'} transition-colors duration-150`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="mb-6">
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-8 min-h-[160px] shadow-sm">
        <div className="text-lg leading-8 font-mono tracking-wide break-words whitespace-pre-wrap selection:bg-blue-100 dark:selection:bg-blue-900/50">
          {renderTextWithHighlight()}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>Focus on accuracy and maintain steady rhythm</span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-200 dark:bg-emerald-900/40 rounded mr-2"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-rose-200 dark:bg-rose-900/40 rounded mr-2"></div>
            <span>Error</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-900/40 rounded mr-2"></div>
            <span>Current</span>
          </div>
        </div>
      </div>
    </div>
  );
};