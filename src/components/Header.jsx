import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-6 bg-gray-100 dark:bg-gray-900 shadow-md">
  <Link
    to="/"
    className="text-2xl font-bold text-[#8A2BE2] dark:text-[#DA70D6] hover:underline"
  >
    Aastha Singh
  </Link>

  {/* Toggle */}
  <div className="flex items-center gap-4">
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full shadow-inner transition-colors duration-300"></div>
      <div
        className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </label>
  </div>
</header>

  );
};

export default Header;
