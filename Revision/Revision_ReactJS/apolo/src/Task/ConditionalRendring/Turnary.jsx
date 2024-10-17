import React, { useState } from "react";

const Turnary = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-black text-white transition-colors duration-500' : 'bg-white text-black transition-colors duration-500'}>
      <h1 className="text-2xl font-bold py-4">React Conditional Rendering Using Turnary Operator</h1>


      <div>
        <h2 className="text-xl font-semibold">
          {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </h2>
        <p className="mt-2">
          {isDarkMode
            ? 'Dark mode is easier on the eyes in low-light environments.'
            : 'Light mode is suitable for bright environments.'}
        </p>
      </div>


      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default Turnary;
