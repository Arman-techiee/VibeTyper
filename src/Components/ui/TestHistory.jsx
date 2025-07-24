import React from 'react';
import { BarChart3 } from 'lucide-react';

export const TestHistory = ({ testHistory }) => {
  if (testHistory.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
        <BarChart3 className="w-5 h-5 mr-2" />
        Recent Performance History
      </h4>
      <div className="space-y-3">
        {testHistory.map((result, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white rounded border">
            <div className="flex space-x-6">
              <span className="font-medium">{result.wpm} WPM</span>
              <span className="text-gray-600">{result.accuracy}% accuracy</span>
              <span className="text-gray-600">{result.errors} errors</span>
            </div>
            <span className="text-sm text-gray-500">{result.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};