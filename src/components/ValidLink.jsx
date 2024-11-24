import React from "react";

const ValidLink = ({ href, children, isButton = false, className = "" }) => {
  const baseStyles = isButton
    ? "flex items-center px-[12px] py-[8px] bg-[#102946] rounded-[4px] text-[#f9f9f9] font-bold text-[16px] leading-[24px] hover:bg-[#0c1f35] transition"
    : "text-[16px] font-normal leading-[24px] text-[#17171b] hover:text-[#102946] transition";

  return (
    <a href={href} className={`${baseStyles} ${className}`}>
      {children}
    </a>
  );
};

export default ValidLink;
