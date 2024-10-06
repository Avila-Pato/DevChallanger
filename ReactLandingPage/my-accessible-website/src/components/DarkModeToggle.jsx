import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Recuperar el estado del modo oscuro desde el localStorage
    return localStorage.getItem('dark-mode') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  // Guardar el estado del modo oscuro en localStorage
  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <button 
        onClick={toggleDarkMode} 
        className={`flex items-center p-2 rounded-full transition duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} hover:bg-gray-300`}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-6 h-6 transition duration-300 ${isDarkMode ? 'text-yellow-300' : 'text-gray-600'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isDarkMode ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M1 12h1m20 0h1m-3.22-8.22l-.71.71M5.93 19.07l-.71.71M3 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8z"
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M1 12h1m20 0h1m-3.22-8.22l-.71.71M5.93 19.07l-.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default DarkModeToggle;
