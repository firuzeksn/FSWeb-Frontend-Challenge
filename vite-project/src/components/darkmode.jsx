import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="description">
      <button id="acKapa" onClick={toggleTheme}>
        {isDarkMode ? 'Karanlık temayı kapat' : 'Karanlık temayı aç'}
      </button>
    </div>
  );
};

export default ThemeToggle;