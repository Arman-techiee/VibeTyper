import React from 'react';

export const TextDisplay = ({ currentText, input }) => {
  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = "text-gray-400";
      
      if (index < input.length) {
        if (input[index] === char) {
          className = "text-green-700 bg-green-50";
        } else {
          className = "text-red-700 bg-red-50";
        }
      } else if (index === input.length) {
        className = "text-gray-900 bg-blue-100 border-l-2 border-blue-500 animate-pulse";
      }

      return (
        <span key={index} className={`${className} ${char === ' ' ? 'inline-block w-2' : 'inline'}`}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="mb-6">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-h-[140px] overflow-hidden">
        <div className="text-lg leading-relaxed font-mono tracking-wide break-words whitespace-pre-wrap">
          {renderTextWithHighlight()}
        </div>
      </div>
    </div>
  );
};