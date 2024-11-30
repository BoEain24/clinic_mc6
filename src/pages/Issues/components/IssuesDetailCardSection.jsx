import React from "react";
import leftArrow from '../../../assets/images/leftarrow.png'

const IssuesDetailCardSection = ({ card: { id, img, title, description } }) => {
  return (
    <section className="border">
      <div className="flex flex-col">
        <div className="h-[190px]">{img}</div>
        <div className="p-6">
          <h1 className="text-xl mb-4">{title}</h1>
        <p className="text-base mb-6">{description}</p>
        <button className=" w-[127px] h-[40px] flex gap-2 justify-center items-center">
            <p className="text-base">Check More</p>
            <img className="size-4" src={leftArrow} alt="" />
          </button>
        </div>
        
          
        
      </div>
    </section>
  );
};

export default IssuesDetailCardSection;
