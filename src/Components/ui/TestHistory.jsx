import React from 'react';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

export const TestHistory = ({ testHistory }) => {
  if (testHistory.length === 0) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-slate-900 dark:text-white flex items-center text-lg">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
            <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          Performance History
        </h4>
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
          <TrendingUp className="w-4 h-4 mr-1" />
          Recent Tests
        </div>
      </div>
      
      <div className="space-y-3">
        {testHistory.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center space-x-6">
              {index === 0 && (
                <div className="flex items-center justify-center w-6 h-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                  <Award className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                </div>
              )}
              <div className="flex space-x-6">
                <span className="font-semibold text-slate-900 dark:text-white min-w-[60px]">
                  {result.wpm} WPM
                </span>
                <span className="text-slate-600 dark:text-slate-300 min-w-[80px]">
                  {result.accuracy}% acc.
                </span>
                <span className="text-slate-500 dark:text-slate-400 min-w-[70px]">
                  {result.errors} errors
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {result.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {testHistory.length >= 3 && (
        <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <p className="text-indigo-800 dark:text-indigo-300 text-sm">
            <strong>Progress Tracking:</strong> Keep practicing to see your improvement over time. Consistent practice leads to better results.
          </p>
        </div>
      )}
    </div>
  );
};