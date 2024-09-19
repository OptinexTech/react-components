import './App.css';
import { useState, useEffect } from 'react';
import Toggle from './components/Toggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const handleDarkModeToggle = (enabled) => {
    setIsDarkMode(enabled);
    localStorage.setItem('dark-mode', JSON.stringify(enabled));
  };

  useEffect(() => {
    if(isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  },[isDarkMode]);

  return (
    <div className="App">
      <h1>{isDarkMode ? 'Dark Mode Enabled' : 'Light mode enabled'}</h1>
      <Toggle 
        label="Dark Mode"
        initial={isDarkMode}
        onToggle={handleDarkModeToggle}
        onColor="#28a745"
        offColor="#ccc"
        size="large"
      />
      <p>Toggle to switch between dark and light mode</p>
    </div>
  );
};

export default App; 