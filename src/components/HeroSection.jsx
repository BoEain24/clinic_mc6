import React, { useState } from "react";
import slides from "../util/sliderLink.js";
import LinkButton from "./LinkButton.jsx";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const [currentIndex] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[430px] bg-[#102946]/20">
      {/* Background Image */}
      <div className="absolute w-full h-420px sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] top-0 left-0 z-[1]">
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center text-center gap-10 z-[5] h-full">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[#f9f9f9] text-sm font-normal leading-tight font-['Satoshi']">
            {slides[currentIndex].title}
          </p>
          <h1 className="text-[#f9f9f9] text-5xl font-semibold leading-[48px] font-['Lora']">
            {slides[currentIndex].subtitle}
          </h1>
          <p className="text-[#f9f9f9] text-base font-medium leading-normal font-['Satoshi']">
            {slides[currentIndex].description}
          </p>
        </div>

        {/* Button */}
        <LinkButton
          className="w-[170px] h-[45px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#102946] rounded-[4px] z-[6] 
          sm:w-[200px] sm:h-[50px] 
          md:w-[250px] md:h-[55px] 
          lg:w-[300px] lg:h-[60px]"
          spanClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#f9f9f9] text-left"
          onClick={() => navigate("/booking")}
        >
          Book Consultation
        </LinkButton>
      </div>
    </div>
  );
};

export default HeroSection;
