import React from 'react';
import { Trophy, TrendingUp } from 'lucide-react';
import { getPerformanceLevel } from '../../lib/utils';

export const ResultsDisplay = ({ wpm, accuracy, elapsedTime, errors, completed }) => {
  const performance = getPerformanceLevel(wpm);

  if (!completed) return null;

  return (
    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-600 rounded-xl p-8 mb-6 shadow-lg">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Assessment Complete
        </h3>
        <p className="text-slate-600 dark:text-slate-400">Your typing performance results</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{wpm}</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">Words/Min</div>
        </div>
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{accuracy}%</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">Accuracy</div>
        </div>
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{elapsedTime}s</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">Duration</div>
        </div>
        <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
          <div className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-1">{errors}</div>
          <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">Errors</div>
        </div>
      </div>

      <div className="text-center p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
        <div className="flex items-center justify-center mb-3">
          <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400 mr-2" />
          <span className="text-slate-700 dark:text-slate-300 font-medium">Performance Level</span>
        </div>
        <div className={`text-2xl font-bold ${performance.color} mb-1`}>{performance.level}</div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Based on professional typing standards</p>
      </div>
    </div>
  );
};