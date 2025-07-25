import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import TypingTest from './Pages/TypingTest';
import Results from './Pages/Results';
import About from './Pages/About';  

  // Make sure you have Footer component
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

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
