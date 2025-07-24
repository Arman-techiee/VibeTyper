import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { DarkModeProvider } from './context/DarkModeContext';  // <-- import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>  {/* Wrap App with DarkModeProvider */}
      <App />
    </DarkModeProvider>
  </StrictMode>,
);
