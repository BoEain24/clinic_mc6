import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({ onClick, children, className, spanClassName }) => {
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

LinkButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spanClassName: PropTypes.string,
};

LinkButton.defaultProps = {
  onClick: () => {},
  className: "w-[170px] h-[45px] py-[8px] px-[16px] gap-[8px]",
  spanClassName: "text-[16px] font-bold",
};

export default LinkButton;
