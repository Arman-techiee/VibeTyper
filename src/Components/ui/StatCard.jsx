import React from 'react';

export const StatCard = ({ icon: Icon, label, value, subtext, color = "blue" }) => {
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
    green: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
    purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
    red: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20",
    amber: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color] || colorClasses.blue}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{value}</div>
          {subtext && (
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
              {subtext}
            </div>
          )}
        </div>
      </div>
      <div className="text-sm font-medium text-slate-600 dark:text-slate-300">{label}</div>
    </div>
  );
};