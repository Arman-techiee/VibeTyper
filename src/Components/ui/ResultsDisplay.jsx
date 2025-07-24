import React from 'react';
import { Trophy } from 'lucide-react';
import { getPerformanceLevel } from '../../lib/utils';

export const ResultsDisplay = ({ wpm, accuracy, elapsedTime, errors, completed }) => {
  const performance = getPerformanceLevel(wpm);

  if (!completed) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
        <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
        Assessment Results
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-green-700">{wpm}</div>
          <div className="text-gray-600 font-medium">Words per Minute</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-700">{accuracy}%</div>
          <div className="text-gray-600 font-medium">Accuracy Rate</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-700">{elapsedTime}s</div>
          <div className="text-gray-600 font-medium">Time Taken</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-red-700">{errors}</div>
          <div className="text-gray-600 font-medium">Total Errors</div>
        </div>
      </div>
      <div className={`text-center p-4 ${performance.bgColor} border rounded-lg`}>
        <div className="text-lg font-semibold text-gray-700">Performance Classification</div>
        <div className={`text-2xl font-bold ${performance.color}`}>{performance.level}</div>
      </div>
    </div>
  );
};