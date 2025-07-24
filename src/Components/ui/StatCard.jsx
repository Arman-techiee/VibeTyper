import React from 'react';

export const StatCard = ({ icon: Icon, label, value, subtext, color = "blue" }) => (
  <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-2">
      <Icon className={`w-5 h-5 text-${color}-600 dark:text-${color}-400`} />
      <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
    </div>
    <div className="text-sm font-medium text-gray-700 dark:text-slate-300">{label}</div>
    {subtext && <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">{subtext}</div>}
  </div>
);
