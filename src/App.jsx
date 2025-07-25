import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AppRoute from './routes/AppRoute';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <AppRoute />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
