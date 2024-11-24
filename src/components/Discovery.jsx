import React from "react";
import image1 from "../assets/images/background1.png"; // Import image directly
import image2 from "../assets/images/background2.png"; // Import second image
import image3 from "../assets/images/background3.png";

const Discovery = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-16 pb-16 px-4 md:px-0 w-full max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* Left Side Image Section */}
        <div className="flex justify-center items-center relative w-full md:w-[502px] h-[490px] overflow-hidden rounded-[8px]">
          <div
            className="w-full h-full bg-cover bg-no-repeat absolute top-0 left-0"
            style={{ backgroundImage: `url(${image2})` }}
          />
        </div>

        {/* Right Side Content Section */}
        <div className="flex flex-col justify-center items-center bg-[#f4f4f5] rounded-[8px] w-full md:w-[521px] p-6 md:p-8 gap-8">
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#003b5c]">
              Discover Our Story
            </h2>
            <p className="text-sm sm:text-base font-normal text-[#17171b] text-left">
              Our aesthetic clinic specializes in advanced, non-surgical treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>

          {/* Key Points */}
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base text-[#17171b]">Highly Qualified Professionals</p>
            <p className="text-sm sm:text-base text-[#17171b]">Hygiene Standards</p>
            <p className="text-sm sm:text-base text-[#17171b]">Satisfied Clients</p>
            <p className="text-sm sm:text-base text-[#17171b]">Personalized Consultations</p>
          </div>

          {/* Discover More Button */}
          <div className="flex items-center gap-2 bg-[#102946] text-white px-4 py-2 rounded-full cursor-pointer mt-8">
            <span className="font-bold text-sm sm:text-base">Discover More</span>
            <div className="w-[16px] h-[16px] bg-[url(${image3})] bg-no-repeat bg-[length:100%_100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
