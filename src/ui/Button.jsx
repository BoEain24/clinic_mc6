import React from "react";

const Button = ({ children, className, type }) => {
  return (
    <button
      type={type}
      className={` bg-primary-950 hover:bg-heading-950 focus:ring-4 focus:outline-none focus:ring-heading-800 font-bold rounded-sm text-zinc-50 text-center  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
