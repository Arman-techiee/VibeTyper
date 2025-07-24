import React from 'react';
import { Settings, X, Clock, Zap } from 'lucide-react';

export const SettingsPanel = ({ testSettings, setTestSettings, onClose }) => {
  const duration = testSettings?.duration ?? 60;
  const difficulty = testSettings?.difficulty ?? 'casual';

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
            <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Test Configuration
          </h3>
        </div>
        <button 
          onClick={onClose} 
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          aria-label="Close settings panel"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            <Clock className="w-4 h-4 mr-2 text-slate-500" />
            Test Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setTestSettings(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value={30}>30 seconds</option>
            <option value={60}>1 minute</option>
            <option value={120}>2 minutes</option>
            <option value={300}>5 minutes</option>
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
            <Zap className="w-4 h-4 mr-2 text-slate-500" />
            Difficulty Level
          </label>
          <select
            value={difficulty}
            onChange={(e) => setTestSettings(prev => ({ ...prev, difficulty: e.target.value }))}
            className="w-full p-3 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="casual">Casual</option>
            <option value="professional">Professional</option>
            <option value="technical">Technical</option>
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-blue-800 dark:text-blue-300 text-sm">
          <strong>Tip:</strong> Start with shorter durations and casual difficulty, then progress to longer tests as your skills improve.
        </p>
      </div>
    </div>
  );
};