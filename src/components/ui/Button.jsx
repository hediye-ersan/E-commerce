import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 border border-white text-white uppercase text-sm tracking-wide hover:bg-white hover:text-black transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
