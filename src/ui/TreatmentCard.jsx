import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // For routing

const TreatmentCard = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col w-full max-w-[328px] items-center rounded-[8px] border border-[#e3e3e7]">
      <div
        className="h-[190px] w-full rounded-tl-[8px] rounded-tr-[8px] relative overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="flex flex-col p-[20px] gap-[24px] bg-[#f4f4f5] rounded-bl-[8px] rounded-br-[8px]">
        <div className="flex flex-col gap-[14px] items-start self-stretch">
          <span className="text-[#003b5c] font-['Satoshi'] text-[20px] font-medium leading-[28px] break-words">
            {title}
          </span>
          <span className="text-[#52525b] font-['Satoshi'] text-[16px] font-normal leading-[24px] break-words">
            {description}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/more-info" // Replace with your actual route
            className="text-[#015775] font-['Satoshi'] text-[16px] font-normal leading-[20px] hover:text-[#003b5c]"
          >
            Check More
          </Link>
        </div>
      </div>
    </div>
  );
};

TreatmentCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TreatmentCard;
