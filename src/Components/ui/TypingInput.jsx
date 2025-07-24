import React from 'react';
import { countWords } from '../../lib/utils';
import { Type, Hash } from 'lucide-react';

export const TypingInput = ({ 
  input, 
  onChange, 
  disabled, 
  inputRef, 
  currentText, 
  completed, 
  remainingTime 
}) => {
  const progress = (input.length / currentText.length) * 100;
  
  return (
    <div className="mb-6">
      <div className="relative">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full p-6 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono text-lg rounded-xl shadow-sm transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
          rows="5"
          placeholder={completed || remainingTime === 0 ? "Assessment completed" : "Start typing the text above..."}
          autoFocus
        />
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-700 rounded-b-xl overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center">
            <Type className="w-4 h-4 mr-2 text-slate-500" />
            <span className="font-medium">{input.length}</span>
            <span className="text-slate-400 mx-1">/</span>
            <span>{currentText.length} chars</span>
          </div>
          <div className="flex items-center">
            <Hash className="w-4 h-4 mr-2 text-slate-500" />
            <span className="font-medium">{countWords(input)}</span>
            <span className="text-slate-400 ml-1">words</span>
          </div>
        </div>
        
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {Math.round(progress)}%
          </span>
          <span className="ml-1">complete</span>
        </div>
      </div>
    </div>
  );
};