import { useState, useEffect, useRef } from 'react';
import { Award, Download, Calendar, Target, Zap, CheckCircle, BarChart3, Trophy } from 'lucide-react';

const Results = () => {
  const [latestResult, setLatestResult] = useState(null);
  const [allResults, setAllResults] = useState([]);
  const [showCertificate, setShowCertificate] = useState(false);
  const [holderName, setHolderName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const certificateRef = useRef(null);

  useEffect(() => {
    try {
      const lastResultRaw = localStorage.getItem('lastTestResult');
      const allResultsRaw = localStorage.getItem('allTestResults');
      const savedName = localStorage.getItem('certificateHolderName');

      if (savedName) {
        setHolderName(savedName);
      }

      if (!lastResultRaw) return;

      const parsedLastResult = JSON.parse(lastResultRaw);
      setLatestResult(parsedLastResult);

      let parsedResults = allResultsRaw ? JSON.parse(allResultsRaw) : [];

      const isDuplicate = parsedResults.some(r => r.timestamp === parsedLastResult.timestamp);

      if (!isDuplicate) {
        parsedResults.push(parsedLastResult);
        parsedResults = parsedResults.slice(-10);
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
    if (wpm >= 80) return { 
      level: 'Master Typist', 
      color: 'text-purple-700 dark:text-purple-300', 
      bg: 'bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      border: 'border-purple-200 dark:border-purple-700',
      description: 'Exceptional typing mastery - Professional level'
    };
    if (wpm >= 60) return { 
      level: 'Expert Typist', 
      color: 'text-blue-700 dark:text-blue-300', 
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      border: 'border-blue-200 dark:border-blue-700',
      description: 'Outstanding performance - Above average professional'
    };
    if (wpm >= 40) return { 
      level: 'Proficient Typist', 
      color: 'text-green-700 dark:text-green-300', 
      bg: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      border: 'border-green-200 dark:border-green-700',
      description: 'Good typing skills - Standard professional level'
    };
    if (wpm >= 25) return { 
      level: 'Developing Typist', 
      color: 'text-yellow-700 dark:text-yellow-300', 
      bg: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      border: 'border-yellow-200 dark:border-yellow-700',
      description: 'Developing skills - Room for improvement'
    };
    return { 
      level: 'Novice Typist', 
      color: 'text-red-700 dark:text-red-300', 
      bg: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      border: 'border-red-200 dark:border-red-700',
      description: 'Beginning level - Continue practicing'
    };
  };

  const saveName = () => {
    localStorage.setItem('certificateHolderName', holderName);
    setIsEditingName(false);
  };

  const downloadCertificate = () => {
    if (!certificateRef.current) return;
    
    // Create a canvas to render the certificate
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 800;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f8fafc');
    gradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#1e40af';
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Title with VibeTyper branding
    ctx.fillStyle = '#1e40af';
    ctx.font = 'bold 42px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('VibeTyper', canvas.width / 2, 130);
    
    ctx.font = 'bold 36px Arial';
    ctx.fillText('TYPING PROFICIENCY CERTIFICATE', canvas.width / 2, 180);
    
    // Performance level
    const performance = getPerformanceLevel(latestResult.wpm);
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 36px Arial';
    ctx.fillText(performance.level, canvas.width / 2, 280);
    
    // Holder name
    if (holderName) {
      ctx.fillStyle = '#1f2937';
      ctx.font = 'italic 28px Arial';
      ctx.fillText(`Awarded to: ${holderName}`, canvas.width / 2, 330);
    }
    
    // Stats
    ctx.fillStyle = '#374151';
    ctx.font = '24px Arial';
    const statsY = holderName ? 400 : 380;
    ctx.fillText(`Words Per Minute: ${latestResult.wpm}`, canvas.width / 2, statsY);
    ctx.fillText(`Accuracy: ${latestResult.accuracy}%`, canvas.width / 2, statsY + 40);
    ctx.fillText(`Date: ${formatDate(latestResult.timestamp)}`, canvas.width / 2, statsY + 80);
    
    // Description
    ctx.font = '20px Arial';
    ctx.fillText('This certifies successful completion of a typing proficiency assessment', canvas.width / 2, statsY + 130);
    
    // Download
    const link = document.createElement('a');
    link.download = `typing-certificate-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const clearHistory = () => {
    localStorage.removeItem('allTestResults');
    setAllResults([]);
  };

  if (!latestResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">No Assessment Results</h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-md mx-auto">
              Complete your first typing proficiency assessment to view detailed performance analytics and earn your certificate.
            </p>
            <button
              onClick={() => window.location.href = '/typing-test'}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Target className="w-5 h-5" />
              Begin Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const performance = getPerformanceLevel(latestResult.wpm);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Typing Proficiency Assessment
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Comprehensive performance analysis and certification
          </p>
        </div>

        {/* Main Results Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 mb-8">
          {/* Performance Badge */}
          <div className={`${performance.bg} ${performance.border} border-2 rounded-2xl p-6 mb-8 text-center`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className={`w-8 h-8 ${performance.color}`} />
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Assessment Complete</h2>
            </div>
            <div className={`text-4xl font-bold ${performance.color} mb-2`}>{performance.level}</div>
            <p className="text-slate-600 dark:text-slate-300 text-lg">{performance.description}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              icon={<Zap className="w-6 h-6" />}
              label="Words Per Minute" 
              value={latestResult.wpm} 
              color="blue"
              suffix="WPM"
            />
            <MetricCard 
              icon={<CheckCircle className="w-6 h-6" />}
              label="Accuracy Rate" 
              value={latestResult.accuracy} 
              color="green"
              suffix="%"
            />
            <MetricCard 
              icon={<Target className="w-6 h-6" />}
              label="Error Count" 
              value={latestResult.errors} 
              color="red"
              suffix="errors"
            />
            <MetricCard 
              icon={<Calendar className="w-6 h-6" />}
              label="Duration" 
              value={formatTime(latestResult.timeElapsed)} 
              color="purple"
              suffix=""
            />
          </div>

          {/* Certificate Holder Name Section */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certificate Holder Information
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Name for Certificate
                </label>
                {isEditingName ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={holderName}
                      onChange={(e) => setHolderName(e.target.value)}
                      placeholder="Enter your full name"
                      className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                      onKeyPress={(e) => e.key === 'Enter' && saveName()}
                    />
                    <button
                      onClick={saveName}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditingName(false)}
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
                      {holderName || 'No name set'}
                    </div>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      {holderName ? 'Edit' : 'Add Name'}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              This name will appear on your certificate. You can update it anytime.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Award className="w-5 h-5" />
              View Certificate
            </button>
            <button
              onClick={() => window.location.href = '/typing-test'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Target className="w-5 h-5" />
              Retake Assessment
            </button>
          </div>
        </div>

        {/* Performance History */}
        {allResults.length > 1 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Performance History
              </h2>
              <button
                onClick={clearHistory}
                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium transition-colors"
              >
                Clear History
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-600">
                    <th className="text-left py-4 px-2 font-semibold text-slate-700 dark:text-slate-300">Date & Time</th>
                    <th className="text-left py-4 px-2 font-semibold text-slate-700 dark:text-slate-300">WPM</th>
                    <th className="text-left py-4 px-2 font-semibold text-slate-700 dark:text-slate-300">Accuracy</th>
                    <th className="text-left py-4 px-2 font-semibold text-slate-700 dark:text-slate-300">Errors</th>
                    <th className="text-left py-4 px-2 font-semibold text-slate-700 dark:text-slate-300">Duration</th>
                    <th className="text-left py-4 px-2 font-semibold text-slate-700 dark:text-slate-300">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {allResults.map((result, index) => {
                    const resultPerformance = getPerformanceLevel(result.wpm);
                    return (
                      <tr key={index} className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="py-4 px-2 text-slate-600 dark:text-slate-300">{formatDate(result.timestamp)}</td>
                        <td className="py-4 px-2 font-bold text-blue-600 dark:text-blue-400">{result.wpm}</td>
                        <td className="py-4 px-2 font-semibold text-green-600 dark:text-green-400">{result.accuracy}%</td>
                        <td className="py-4 px-2 text-slate-600 dark:text-slate-300">{result.errors}</td>
                        <td className="py-4 px-2 text-slate-600 dark:text-slate-300">{formatTime(result.timeElapsed)}</td>
                        <td className="py-4 px-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${resultPerformance.color} ${resultPerformance.bg}`}>
                            {resultPerformance.level}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCertificate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Your Certificate</h3>
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div ref={certificateRef} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-8 border-blue-600 dark:border-blue-400 rounded-lg p-12 text-center">
                  <div className="mb-8">
                    <Award className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">VibeTyper</h1>
                    <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">TYPING PROFICIENCY CERTIFICATE</h2>
                    <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-4">This certifies that</p>
                    {holderName ? (
                      <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 italic border-b-2 border-slate-300 dark:border-slate-600 pb-2 inline-block">
                        {holderName}
                      </div>
                    ) : (
                      <div className="text-xl text-slate-500 dark:text-slate-400 mb-4 italic">
                        [Name not provided]
                      </div>
                    )}
                    <p className="text-slate-600 dark:text-slate-300 text-lg">has successfully demonstrated</p>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 mt-2">{performance.level}</div>
                    <p className="text-slate-600 dark:text-slate-300">typing proficiency</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8 mb-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{latestResult.wpm}</div>
                      <div className="text-slate-600 dark:text-slate-300">Words Per Minute</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{latestResult.accuracy}%</div>
                      <div className="text-slate-600 dark:text-slate-300">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{formatTime(latestResult.timeElapsed)}</div>
                      <div className="text-slate-600 dark:text-slate-300">Duration</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 dark:border-slate-600 pt-6">
                    <p className="text-slate-500 dark:text-slate-400">Certified on {formatDate(latestResult.timestamp)}</p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center mt-6">
                  <button
                    onClick={downloadCertificate}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download PNG
                  </button>
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="inline-flex items-center gap-2 bg-slate-500 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, color, suffix }) => {
  const colorMap = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
    green: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
    red: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
  };

  return (
    <div className={`${colorMap[color]} border rounded-xl p-6 text-center transition-all duration-200 hover:shadow-lg`}>
      <div className="flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2">
        {value}{suffix && <span className="text-xl ml-1">{suffix}</span>}
      </div>
      <div className="text-slate-600 dark:text-slate-300 font-medium">{label}</div>
    </div>
  );
};

export default Results;