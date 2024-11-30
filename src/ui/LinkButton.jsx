import React from "react";
import PropTypes from "prop-types";

// Using default parameters for function props
const LinkButton = ({ onClick = () => {}, children, className = "w-[170px] h-[45px] py-[8px] px-[16px] gap-[8px]", spanClassName = "text-[16px] font-bold" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#102946] rounded-[4px] text-[#f9f9f9] ${className} flex justify-center items-center`}
      aria-label="Link Button"
    >
      <span className={`${spanClassName} text-[16px] font-bold`}>
        {children}
      </span>
    </button>
  );
};

// PropTypes remain the same for validation
LinkButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spanClassName: PropTypes.string,
};

export default LinkButton;
