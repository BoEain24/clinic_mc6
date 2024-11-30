import React, { useState } from "react"; // Import second image
import slides from "../util/sliderLink.js";
import LinkButton from "../ui/LinkButton.jsx";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      {/* Carousel Content */}
      <div className="flex flex-col gap-[40px] justify-center items-center flex-nowrap relative z-[3] mt-[87px] px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[4]">
          <div className="flex flex-col gap-[16px] justify-center items-center shrink-0 flex-nowrap relative z-[5]">
            <span className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#f9f9f9] text-center z-[6]">
              {slides[currentIndex].title}
            </span>
            <span className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#f9f9f9] text-center z-[7]">
              {slides[currentIndex].subtitle}
            </span>
          </div>
          <span className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#f9f9f9] text-center z-[8]">
            {slides[currentIndex].description}
          </span>
        </div>

        <LinkButton
          className="w-[170px] h-[45px] py-[8px] px-[16px] gap-[8px] justify-center items-center bg-[#102946] rounded-[4px] z-9 
          sm:w-[200px] sm:h-[50px] 
          md:w-[250px] md:h-[55px] 
          lg:w-[300px] lg:h-[60px]"
          spanClassName="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#f9f9f9] text-left"
        >
          Book Consultation
        </LinkButton>
      </div>

      {/* Background Image */}
      <div className="w-full h-full sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] absolute top-0 left-1/2 transform -translate-x-1/2 z-[1] ">
        <div
          className="w-full h-full bg-cover bg-no-repeat absolute top-20 left-1/2 transform -translate-x-1/2 translate-y-[-50%] z-[2]"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
            backgroundSize: "cover", // Ensures image fills the container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-800 z-10"
      >
        &#10094; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full text-white hover:bg-gray-800 z-10"
      >
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
