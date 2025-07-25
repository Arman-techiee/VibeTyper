import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const getPerformanceLevel = (wpm) => {
  if (wpm >= 80) return { 
    level: "Expert", 
    color: "text-purple-700 dark:text-purple-400", 
    bgColor: "bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-slate-600" 
  };
  if (wpm >= 60) return { 
    level: "Advanced", 
    color: "text-blue-700 dark:text-blue-400", 
    bgColor: "bg-blue-50 dark:bg-slate-800 border-blue-200 dark:border-slate-600" 
  };
  if (wpm >= 40) return { 
    level: "Proficient", 
    color: "text-green-700 dark:text-green-400", 
    bgColor: "bg-green-50 dark:bg-slate-800 border-green-200 dark:border-slate-600" 
  };
  if (wpm >= 25) return { 
    level: "Developing", 
    color: "text-yellow-700 dark:text-yellow-400", 
    bgColor: "bg-yellow-50 dark:bg-slate-800 border-yellow-200 dark:border-slate-600" 
  };
  return { 
    level: "Beginner", 
    color: "text-red-700 dark:text-red-400", 
    bgColor: "bg-red-50 dark:bg-slate-800 border-red-200 dark:border-slate-600" 
  };
};

export const calculateProgress = (inputLength, textLength) => {
  return (inputLength / textLength) * 100;
};

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${secs}s`;
};

export const calculateWPM = (wordsTyped, minutes) => {
  return minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
};

export const calculateAccuracy = (correctChars, totalChars) => {
  return totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
};

export const countWords = (text) => {
  return text.trim().split(' ').filter(word => word.length > 0).length;
};