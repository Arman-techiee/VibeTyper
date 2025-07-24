import React from 'react';
import { Target } from 'lucide-react';

export const Instructions = ({ isActive, completed }) => {
  if (isActive || completed) return null;

  return (
    <div 
      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 border border-blue-200 dark:border-slate-600 rounded-xl p-8 shadow-sm transition-all duration-500 ease-in-out"
      aria-live="polite"
    >
      <h4 className="font-semibold text-blue-900 dark:text-white mb-6 flex items-center text-lg">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
          <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        Assessment Guidelines
      </h4>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">Basic Instructions</h5>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Type the displayed text exactly as shown
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Assessment begins when you start typing
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Green highlighting indicates correct input
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Red highlighting shows errors
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wide">Performance Tips</h5>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Complete as much text as possible within time limit
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Focus on accuracy over speed initially
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Professional standard: 40+ WPM with 95%+ accuracy
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use proper touch typing technique
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};