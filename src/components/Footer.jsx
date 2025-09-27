import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 gap-4">
      
      {/* Left: Social links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/AasthaSingh07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition transform hover:scale-110"
        >
          <FaGithub className="text-2xl" /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aastha-singh07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition transform hover:scale-110"
        >
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>
      </div>

      {/* Right: Copyright */}
      <p className="text-gray-600 text-sm text-center md:text-right">
        © {new Date().getFullYear()} Aastha Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
