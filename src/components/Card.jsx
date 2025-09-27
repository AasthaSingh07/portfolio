import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, buttonText, path, isExternal }) => {
  const navigate = useNavigate();

  if (isExternal) {
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col items-center 
                   hover:scale-105 transition-transform duration-300"
        style={{ width: "18rem" }}
      >
        <img src={image} alt={buttonText} className="w-full h-64 object-cover" />
        <div className="mt-4 mb-6 bg-[#8A2BE2] text-white px-4 py-2 rounded hover:bg-[#DA70D6] transition text-center cursor-pointer">
          {buttonText}
        </div>
      </a>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col items-center 
    hover:scale-105 transition-transform duration-300" style={{ width: "18rem" }}>
      <img src={image} alt={buttonText} className="w-full h-64 object-cover" />
      <button
        onClick={() => navigate(path)}
        className="mt-4 mb-6 bg-[#8A2BE2] text-white px-4 py-2 rounded hover:bg-[#DA70D6] transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
