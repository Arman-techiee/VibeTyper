import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  const [latestResult, setLatestResult] = useState(null);
  const [allResults, setAllResults] = useState([]);

  useEffect(() => {
    try {
      const lastResultRaw = localStorage.getItem('lastTestResult');
      const allResultsRaw = localStorage.getItem('allTestResults');

      if (!lastResultRaw) return;

      const parsedLastResult = JSON.parse(lastResultRaw);
      setLatestResult(parsedLastResult);

      let parsedResults = allResultsRaw ? JSON.parse(allResultsRaw) : [];

      const isDuplicate = parsedResults.some(r => r.timestamp === parsedLastResult.timestamp);

      if (!isDuplicate) {
        parsedResults.push(parsedLastResult);
        parsedResults = parsedResults.slice(-5);
        localStorage.setItem('allTestResults', JSON.stringify(parsedResults));
      }

      setAllResults(parsedResults.slice().reverse());
    } catch (error) {
      console.error('Error loading results:', error);
    }
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getPerformanceLevel = (wpm) => {
    if (wpm >= 70) return { level: 'Expert', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900' };
    if (wpm >= 50) return { level: 'Advanced', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900' };
    if (wpm >= 30) return { level: 'Intermediate', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900' };
    if (wpm >= 15) return { level: 'Beginner', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-yellow-900' };
    return { level: 'Novice', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-900' };
  };

  const clearHistory = () => {
    localStorage.removeItem('allTestResults');
    setAllResults([]);
  };

  if (!latestResult) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">No Results Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">You haven't completed any typing tests yet.</p>
          <Link
            to="/typing-test"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take a Test
          </Link>
        </div>
      </div>
    );
  }

  const performance = getPerformanceLevel(latestResult.wpm);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Test Results</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ResultCard label="Words Per Minute" value={latestResult.wpm} color="blue" />
          <ResultCard label="Accuracy" value={`${latestResult.accuracy}%`} color="green" />
          <ResultCard label="Errors" value={latestResult.errors} color="red" />
          <ResultCard label="Time Taken" value={formatTime(latestResult.timeElapsed)} color="purple" />
        </div>

        <div className={`${performance.bg} p-6 rounded-lg mb-8`}>
          <h3 className="text-xl font-semibold dark:text-white mb-2">Performance Level</h3>
          <div className={`text-2xl font-bold ${performance.color}`}>{performance.level}</div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {latestResult.wpm >= 70 && "Outstanding! You're typing at professional speed."}
            {latestResult.wpm >= 50 && latestResult.wpm < 70 && "Great job! You're typing faster than most people."}
            {latestResult.wpm >= 30 && latestResult.wpm < 50 && "Good work! You're developing solid typing skills."}
            {latestResult.wpm >= 15 && latestResult.wpm < 30 && "Keep practicing! You're making progress."}
            {latestResult.wpm < 15 && "Don't worry, everyone starts somewhere. Keep practicing!"}
          </p>
        </div>

        <div className="flex gap-4">
          <Link to="/typing-test" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Take Another Test
          </Link>
          <Link to="/" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      {allResults.length > 1 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Test History</h2>
            <button
              onClick={clearHistory}
              className="text-red-600 hover:text-red-800 dark:hover:text-red-400 text-sm"
              aria-label="Clear test history"
            >
              Clear History
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="border-b text-gray-700 dark:text-gray-300">
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">WPM</th>
                  <th className="text-left py-2">Accuracy</th>
                  <th className="text-left py-2">Errors</th>
                  <th className="text-left py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {allResults.map((r, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-2">{formatDate(r.timestamp)}</td>
                    <td className="py-2 font-semibold">{r.wpm}</td>
                    <td className="py-2">{r.accuracy}%</td>
                    <td className="py-2">{r.errors}</td>
                    <td className="py-2">{formatTime(r.timeElapsed)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const ResultCard = ({ label, value, color }) => {
  const bgColorMap = {
    blue: 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    green: 'bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400',
    red: 'bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-400',
    purple: 'bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
  };

  return (
    <div className={`${bgColorMap[color]} p-6 rounded-lg`}>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
};

export default Results;