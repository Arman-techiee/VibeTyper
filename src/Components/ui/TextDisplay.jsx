import React from 'react';

export const TextDisplay = ({ currentText, input }) => {
  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = "text-gray-400 dark:text-slate-500";

      if (index < input.length) {
        if (input[index] === char) {
          className = "text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-900/20";
        } else {
          className = "text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-900/20";
        }
      } else if (index === input.length) {
        className =
          "text-gray-900 bg-blue-100 dark:text-white dark:bg-blue-600/30 border-l-2 border-blue-500 dark:border-blue-400 animate-pulse";
      }

      return (
        <span
          key={index}
          className={`${className} ${char === ' ' ? 'inline-block w-2' : 'inline'}`}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="mb-6">
      <div className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg p-6 min-h-[140px] overflow-hidden">
        <div className="text-lg leading-relaxed font-mono tracking-wide break-words whitespace-pre-wrap">
          {renderTextWithHighlight()}
        </div>
      </div>
    </div>
  );
};
