import React from 'react';
import { countWords } from '../../lib/utils';

export const TypingInput = ({ 
  input, 
  onChange, 
  disabled, 
  inputRef, 
  currentText, 
  completed, 
  remainingTime 
}) => {
  return (
    <div className="mb-6">
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono text-lg transition-colors"
        rows="4"
        placeholder={completed || remainingTime === 0 ? "Assessment completed" : "Begin typing here..."}
        autoFocus
      />
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Characters typed: {input.length}/{currentText.length}</span>
        <span>Words: {countWords(input)}</span>
      </div>
    </div>
  );
};