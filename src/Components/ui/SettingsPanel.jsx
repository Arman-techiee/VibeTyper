import React from 'react';
import { Settings, X } from 'lucide-react';

export const SettingsPanel = ({ testSettings, setTestSettings, onClose }) => {
  const duration = testSettings?.duration ?? 60;
  const difficulty = testSettings?.difficulty ?? 'casual';

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Test Settings
        </h3>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close settings panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Test Duration</label>
          <select
            value={duration}
            onChange={(e) => setTestSettings(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={30}>30 seconds</option>
            <option value={60}>1 minute</option>
            <option value={120}>2 minutes</option>
            <option value={300}>5 minutes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
          <select
            value={difficulty}
            onChange={(e) => setTestSettings(prev => ({ ...prev, difficulty: e.target.value }))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
            <option value="technical">Technical</option>
          </select>
        </div>
      </div>
    </div>
  );
};
