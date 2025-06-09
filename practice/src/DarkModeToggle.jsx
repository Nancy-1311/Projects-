import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen flex flex-col justify-center items-center transition-colors duration-500`}>
      <h1 className="text-3xl font-bold mb-6">Dark Mode Toggle</h1>
      <button
        onClick={toggleDarkMode}
        className="px-6 py-2 rounded-lg font-semibold shadow-md transition bg-blue-600 text-white hover:bg-blue-700"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
