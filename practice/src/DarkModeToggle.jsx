import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } min-h-screen flex flex-col justify-center items-center transition-colors duration-500 px-4 sm:px-6`}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        Dark Mode Toggle
      </h1>

      <button
        onClick={toggleDarkMode}
        className="px-5 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-md transition bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-lg"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
