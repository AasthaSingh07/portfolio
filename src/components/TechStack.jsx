// src/components/TechStack.jsx
import React, { useState, useEffect } from "react";

const techs = ["HTML", "CSS", "React", "Next", "Node", "GraphQL", "MongoDB"];

const TechStack = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % techs.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-semibold text-gray-800 mt-4">
      I build things with {" "}
      <span style={{ color: "#8A2BE2" }} className="animate-pulse">
        {techs[index]}
      </span>
    </div>
  );
};

export default TechStack;
