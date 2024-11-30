import React from "react";

const Input = ({ type, className, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-zinc-100 border text-zinc-500 border-zinc-100  rounded-sm focus:ring-zinc-400 focus:border-zinc-50 block w-full px-3 py-2 ${className}`}
    />
  );
};

export default Input;
