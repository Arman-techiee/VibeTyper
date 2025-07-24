import { useState, useEffect, useRef } from 'react';

export const useTypingTest = (initialSettings = {}) => {
  const defaultSettings = {
    duration: 60,
    showKeyboard: false,
    difficulty: 'professional',
    ...initialSettings
  };

  const [testSettings, setTestSettings] = useState(defaultSettings);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errors, setErrors] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [testHistory, setTestHistory] = useState([]);
  const inputRef = useRef(null);

  // Timer effect
  useEffect(() => {
    let timer;
    if (startTime && !completed && isActive) {
      timer = setInterval(() => {
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(seconds);

        if (seconds >= testSettings.duration) {
          completeTest();
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [startTime, completed, isActive, testSettings.duration]);

  const completeTest = () => {
    setCompleted(true);
    setIsActive(false);
    const finalMinutes = elapsedTime / 60;
    const wordsTyped = input.trim().split(' ').filter(word => word.length > 0).length;
    const finalWPM = finalMinutes > 0 ? Math.round(wordsTyped / finalMinutes) : 0;
    setWpm(finalWPM);

    // Save to history
    const testResult = {
      wpm: finalWPM,
      accuracy,
      duration: elapsedTime,
      errors,
      date: new Date().toLocaleString(),
      textLength: input.length
    };
    setTestHistory(prev => [testResult, ...prev.slice(0, 4)]);
  };

  const handleRestart = (texts) => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    setInput("");
    setStartTime(null);
    setElapsedTime(0);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setCorrectChars(0);
    setCompleted(false);
    setIsActive(false);
    inputRef.current?.focus();
  };

  const handleInputChange = (value, currentText) => {
    if (value.length <= currentText.length) {
      setInput(value);
      
      // Start timer on first character
      if (value.length === 1 && !startTime) {
        setStartTime(Date.now());
        setIsActive(true);
      }

      // Check if test is complete
      if (value === currentText && !completed) {
        completeTest();
      }

      // Calculate real-time stats
      if (startTime && value.length > 0) {
        const minutes = elapsedTime / 60;
        const wordsTyped = value.trim().split(' ').filter(word => word.length > 0).length;
        const currentWPM = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
        setWpm(currentWPM);

        // Calculate accuracy and errors
        let correctCount = 0;
        let errorCount = 0;
        for (let i = 0; i < value.length; i++) {
          if (value[i] === currentText[i]) {
            correctCount++;
          } else {
            errorCount++;
          }
        }
        setCorrectChars(correctCount);
        setErrors(errorCount);
        const currentAccuracy = value.length > 0 ? Math.round((correctCount / value.length) * 100) : 100;
        setAccuracy(currentAccuracy);
      }
    }
  };

  return {
    // State
    testSettings,
    setTestSettings,
    currentTextIndex,
    input,
    startTime,
    elapsedTime,
    wpm,
    accuracy,
    completed,
    isActive,
    errors,
    correctChars,
    testHistory,
    inputRef,
    
    // Actions
    handleRestart,
    handleInputChange,
    completeTest
  };
};