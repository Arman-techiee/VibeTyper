import React from 'react';

export const StatCard = ({ icon: Icon, label, value, subtext, color = "blue" }) => (
  <div className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow`}>
    <div className="flex items-center justify-between mb-2">
      <Icon className={`w-5 h-5 text-${color}-600`} />
      <span className="text-2xl font-bold text-gray-900">{value}</span>
    </div>
    <div className="text-sm font-medium text-gray-700">{label}</div>
    {subtext && <div className="text-xs text-gray-500 mt-1">{subtext}</div>}
  </div>
);