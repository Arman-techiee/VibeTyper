import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { DarkModeContext } from './DarkModeContext';

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useContext(DarkModeContext);

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default DarkModeToggle;
