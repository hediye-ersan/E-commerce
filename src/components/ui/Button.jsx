import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 border-2 border-gray-200 bg-white/30 backdrop-blur-md text-black rounded-full font-semibold transition duration-300 hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
