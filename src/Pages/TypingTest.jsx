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


  return (
    <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen p-6 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Keyboard className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Typing Assessment</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Measure your typing proficiency with {testSettings.difficulty}-grade content. 
            Assess your words per minute, accuracy, and overall performance.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
            <button
              onClick={() => handleRestart(texts)}
              className="flex items-center px-4 py-2 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-md transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Test
            </button>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Test {currentTextIndex + 1} of {texts.length} • {testSettings.difficulty} level
          </div>
        </div>

        {showSettings && (
          <SettingsPanel
            testSettings={testSettings}
            setTestSettings={setTestSettings}
            onClose={() => setShowSettings(false)}
          />
        )}

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard icon={Clock} label="Time Remaining" value={`${Math.floor(remainingTime)}s`} color="blue" />
          <StatCard icon={Trophy} label="Words per Minute" value={wpm} subtext={isActive ? performance.level : ""} color="green" />
          <StatCard icon={Target} label="Accuracy" value={`${accuracy}%`} subtext={`${correctChars} correct chars`} color="purple" />
          <StatCard icon={BarChart3} label="Characters" value={input.length} subtext={`of ${currentText.length}`} color="orange" />
          <StatCard icon={CheckCircle} label="Errors" value={errors} subtext={errors > 0 ? "Check accuracy" : "Perfect!"} color="red" />
        </div>

        {/* Typing Area */}
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

        {/* Live Indicator */}
        {isActive && !completed && (
          <div className={`${performance.bgColor} border rounded-lg p-4 mb-6 dark:border-gray-600`}>
            <div className="flex items-center justify-center">
              <span className="text-gray-700 dark:text-gray-300 mr-2">Current Performance Level:</span>
              <span className={`font-bold text-lg ${performance.color}`}>{performance.level}</span>
            </div>
          </div>
        )}

        {/* Results */}
        <ResultsDisplay
          wpm={wpm}
          accuracy={accuracy}
          elapsedTime={elapsedTime}
          errors={errors}
          completed={completed}
        />

        {/* Time Expired Alert */}
        {remainingTime === 0 && !completed && (
          <div className="bg-orange-50 dark:bg-orange-900 border border-orange-200 dark:border-orange-700 rounded-lg p-6 mb-6 text-center">
            <h3 className="text-xl font-bold text-orange-700 dark:text-orange-300 mb-2">Time Expired</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Assessment completed: {input.length} characters, {accuracy}% accuracy, {wpm} WPM
            </p>
          </div>
        )}

        {/* View Results */}
        {completed && (
          <div className="text-center mb-6">
            <button
              onClick={() => navigate('/result')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Results
            </button>
          </div>
        )}

        {/* History + Instructions */}
        <TestHistory testHistory={testHistory} />
        <Instructions isActive={isActive} completed={completed} />
      </div>
    </div>
  );
};

export default TypingTest;
