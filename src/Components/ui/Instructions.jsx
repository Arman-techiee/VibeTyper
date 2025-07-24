import React from 'react';
import { Target } from 'lucide-react';

export const Instructions = ({ isActive, completed }) => {
  if (isActive || completed) return null;

  return (
    <div 
      className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-600 rounded-lg p-6 transition-opacity duration-500 ease-in-out"
      aria-live="polite"
    >
      <h4 className="font-bold text-blue-900 dark:text-white mb-3 flex items-center">
        <Target className="w-5 h-5 mr-2 text-blue-900 dark:text-blue-300" />
        Assessment Guidelines
      </h4>
      <div className="grid md:grid-cols-2 gap-4">
        <ul className="list-disc pl-4 text-blue-800 dark:text-slate-300 space-y-2">
          <li>Type the displayed text exactly as shown</li>
          <li>Assessment begins when you start typing</li>
          <li>Green highlighting indicates correct input</li>
          <li>Red highlighting shows errors</li>
        </ul>
        <ul className="list-disc pl-4 text-blue-800 dark:text-slate-300 space-y-2">
          <li>Complete as much text as possible within the time limit</li>
          <li>Focus on accuracy over speed initially</li>
          <li>Professional standard is 40+ WPM with 95%+ accuracy</li>
          <li>Use proper touch typing technique</li>
        </ul>
      </div>
    </div>
  );
};
