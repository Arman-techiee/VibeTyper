import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, RotateCcw, Trophy, Target, Settings, BarChart3, Keyboard, CheckCircle } from 'lucide-react';

import { useTypingTest } from '../hooks/useTypingTest';
import { getTextsByDifficulty } from '../lib/textSamples';
import { getPerformanceLevel, calculateProgress } from '../lib/utils';

import { StatCard } from '../Components/ui/StatCard';
import { SettingsPanel } from '../Components/ui/SettingsPanel';
import { TextDisplay } from '../Components/ui/TextDisplay';
import { TypingInput } from '../Components/ui/TypingInput';
import { ResultsDisplay } from '../Components/ui/ResultsDisplay';
import { TestHistory } from '../Components/ui/TestHistory';
import { Instructions } from '../Components/ui/Instructions';

const TypingTest = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastWpm, setLastWpm] = useState(0);

  const {
    testSettings,
    setTestSettings,
    currentTextIndex,
    input,
    elapsedTime,
    wpm,
    accuracy,
    completed,
    isActive,
    errors,
    correctChars,
    testHistory,
    inputRef,
    handleRestart,
    handleInputChange
  } = useTypingTest();

  const texts = getTextsByDifficulty(testSettings.difficulty);
  const currentText = texts[currentTextIndex];
  const remainingTime = Math.max(0, testSettings.duration - elapsedTime);
  const progress = calculateProgress(input.length, currentText.length);
  const performance = getPerformanceLevel(wpm);
  const isTestFinished = completed || (remainingTime === 0 && isActive);

  // Load animation on mount
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // WPM improvement celebration
  useEffect(() => {
    if (wpm > lastWpm && wpm > 0 && isActive) {
      if (wpm >= 60 || (wpm > lastWpm + 10)) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 2000);
      }
    }
    setLastWpm(wpm);
  }, [wpm, lastWpm, isActive]);

  useEffect(() => {
    // When the test is finished (either by completion or timeout),
    // save the result to localStorage for the results page.
    if (isTestFinished) {
      const result = {
        wpm,
        accuracy,
        errors,
        timeElapsed: elapsedTime,
        timestamp: Date.now(),
        difficulty: testSettings.difficulty,
        duration: testSettings.duration,
      };
      localStorage.setItem('lastTestResult', JSON.stringify(result));
    }
  }, [isTestFinished, wpm, accuracy, errors, elapsedTime, testSettings.difficulty, testSettings.duration]);

  const handleRestartWithAnimation = () => {
    // Add restart animation
    const container = document.getElementById('typing-container');
    if (container) {
      container.style.transform = 'scale(0.95)';
      container.style.opacity = '0.7';
      setTimeout(() => {
        handleRestart(texts);
        container.style.transform = 'scale(1)';
        container.style.opacity = '1';
      }, 200);
    } else {
      handleRestart(texts);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen p-6 transition-colors duration-300">
      <div 
        id="typing-container"
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-all duration-500 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ 
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease-in-out, opacity 0.2s ease-in-out' 
        }}
      >
        
        {/* Celebration Animation */}
        {showCelebration && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="animate-bounce text-6xl">🎉</div>
            <div className="absolute animate-ping w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute animate-pulse text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-20">
              Great Speed!
            </div>
          </div>
        )}
        
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-700 delay-200 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <div className="animate-pulse">
              <Keyboard className="w-8 h-8 text-blue-600 mr-3 transition-transform hover:scale-110 duration-200" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Professional Typing Assessment
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Measure your typing proficiency with {testSettings.difficulty}-grade content. 
            Assess your words per minute, accuracy, and overall performance.
          </p>
        </div>

        {/* Controls */}
        <div className={`flex justify-between items-center mb-6 transition-all duration-700 delay-300 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-md transform"
            >
              <Settings className={`w-4 h-4 mr-2 transition-transform duration-200 ${showSettings ? 'rotate-90' : ''}`} />
              Settings
            </button>
            <button
              onClick={handleRestartWithAnimation}
              className="flex items-center px-4 py-2 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-md transform group"
            >
              <RotateCcw className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:rotate-180" />
              New Test
            </button>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
            Test {currentTextIndex + 1} of {texts.length} • {testSettings.difficulty} level
          </div>
        </div>

        {showSettings && (
          <div className="animate-slide-down">
            <SettingsPanel
              testSettings={testSettings}
              setTestSettings={setTestSettings}
              onClose={() => setShowSettings(false)}
            />
          </div>
        )}

        {/* Progress Bar */}
        <div className={`mb-6 transition-all duration-700 delay-400 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Progress</span>
            <span className="animate-pulse">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out animate-pulse"
              style={{ 
                width: `${progress}%`,
                animation: progress > 0 ? 'progress-fill 0.5s ease-out' : 'none'
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8 transition-all duration-700 delay-500 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="hover:scale-105 transition-transform duration-200">
            <StatCard 
              icon={Clock} 
              label="Time Remaining" 
              value={`${Math.floor(remainingTime)}s`} 
              color="blue"
              className={remainingTime <= 10 ? 'animate-pulse border-red-300' : ''}
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <StatCard 
              icon={Trophy} 
              label="Words per Minute" 
              value={wpm} 
              subtext={isActive ? performance.level : ""} 
              color="green"
              className={wpm > lastWpm ? 'animate-bounce' : ''}
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <StatCard 
              icon={Target} 
              label="Accuracy" 
              value={`${accuracy}%`} 
              subtext={`${correctChars} correct chars`} 
              color="purple"
              className={accuracy === 100 ? 'animate-pulse border-green-300' : ''}
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <StatCard 
              icon={BarChart3} 
              label="Characters" 
              value={input.length} 
              subtext={`of ${currentText.length}`} 
              color="orange" 
            />
          </div>
          <div className="hover:scale-105 transition-transform duration-200">
            <StatCard 
              icon={CheckCircle} 
              label="Errors" 
              value={errors} 
              subtext={errors > 0 ? "Check accuracy" : "Perfect!"} 
              color="red"
              className={errors === 0 && input.length > 0 ? 'animate-pulse border-green-300' : ''}
            />
          </div>
        </div>

        {/* Typing Area */}
        <div className={`transition-all duration-700 delay-600 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <TextDisplay currentText={currentText} input={input} />
          <TypingInput
            input={input}
            onChange={(value) => handleInputChange(value, currentText)}
            disabled={completed || remainingTime === 0}
            inputRef={inputRef}
            currentText={currentText}
            completed={completed}
            remainingTime={remainingTime}
          />
        </div>

        {/* Live Indicator */}
        {isActive && !completed && (
          <div className={`${performance.bgColor} border rounded-lg p-4 mb-6 dark:border-gray-600 animate-fade-in hover:shadow-lg transition-all duration-300 transform hover:scale-102`}>
            <div className="flex items-center justify-center">
              <span className="text-gray-700 dark:text-gray-300 mr-2">Current Performance Level:</span>
              <span className={`font-bold text-lg ${performance.color} animate-pulse`}>{performance.level}</span>
              {performance.level === 'Expert' && <span className="ml-2 animate-bounce">🏆</span>}
              {performance.level === 'Advanced' && <span className="ml-2 animate-bounce">⭐</span>}
            </div>
          </div>
        )}

        {/* Results */}
        <div className={`transition-all duration-700 delay-700 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <ResultsDisplay
            wpm={wpm}
            accuracy={accuracy}
            elapsedTime={elapsedTime}
            errors={errors}
            completed={completed}
          />
        </div>

        {/* Time Expired Alert */}
        {remainingTime === 0 && !completed && (
          <div className="bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-700 rounded-lg p-6 mb-6 text-center animate-slide-down hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-2 animate-pulse">⏰ Time Expired</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Assessment completed: {input.length} characters, {accuracy}% accuracy, {wpm} WPM
            </p>
          </div>
        )}

        {/* Completion Celebration */}
        {completed && (
          <div className="text-center mb-6 animate-bounce-in">
            <div className="mb-4 text-4xl animate-bounce">🎉</div>
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4 animate-pulse">
              Test Completed!
            </h3>
            <button
              onClick={() => navigate('/result')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse"
            >
              View Detailed Results ✨
            </button>
          </div>
        )}

        {/* History + Instructions */}
        <div className={`transition-all duration-700 delay-800 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <TestHistory testHistory={testHistory} />
          <Instructions isActive={isActive} completed={completed} />
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes progress-fill {
          from { width: 0%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default TypingTest;