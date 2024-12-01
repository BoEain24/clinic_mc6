import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({
  onClick = () => {},
  children,
  className = "w-[170px] h-[45px] py-[8px] px-[16px] gap-[8px]", // Default width and padding
  spanClassName = "text-[16px] font-bold text-[#f9f9f9]", // Default styling for the text
  imageUrl = "", // Image URL for icon
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#102946] rounded-[4px] ${className} flex justify-center items-center`}
      aria-label="Link Button"
    >
      <span className={`${spanClassName} whitespace-nowrap`}>{children}</span>
      {imageUrl && (
        <div className="w-[16px] h-[16px] ml-[8px]">
          <div
            className="w-[9.067px] h-[9.067px] bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "100% 100%",
            }}
          />
        </div>
      )}
    </button>
  );
};

LinkButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  spanClassName: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default LinkButton;
