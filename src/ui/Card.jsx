import React from "react";
import TreatmentCard from "./TreatmentCard.jsx";
import cardData from "../util/cardData.js";

const CardSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[28px] px-[20px] sm:px-[50px] lg:px-[127px]">
      <span className="text-[30px] font-['Lora'] font-medium leading-[36px] text-[#003b5c] text-center">
        Popular Treatments
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] w-full justify-center items-center">
        {cardData.map((card, index) => (
          <TreatmentCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
