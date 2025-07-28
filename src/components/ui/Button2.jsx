import React from "react";

const Button2 = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button2;
