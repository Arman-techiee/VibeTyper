import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import TypingTest from './Pages/TypingTest';
import Results from './Pages/Results';
import About from './Pages/About';  

import Footer from './components/Footer';  // Make sure you have Footer component
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Results />} />
        <Route path="/about" element={<About />} />

        <Route path="/typing-test" element={<TypingTest />} />
        
        
        {/* Optionally add 404 NotFound route here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
