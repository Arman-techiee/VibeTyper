import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import TypingTest from '../Pages/TypingTest';
import Results from '../Pages/Results';
import About from '../Pages/About';
import ProtectedRoute from '../Components/ProtectedRoute';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/typing-test" 
        element={
          <ProtectedRoute>
            <TypingTest />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/result" 
        element={
          <ProtectedRoute>
            <Results />
          </ProtectedRoute>
        } 
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoute;