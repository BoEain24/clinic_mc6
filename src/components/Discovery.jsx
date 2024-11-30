import React from "react";
import image1 from "../assets/images/background1.png"; // Import image directly
import image2 from "../assets/images/background2.png"; // Import second image
import image3 from "../assets/images/background3.png";

const Discovery = () => {
  return (
    <div className="main-container flex w-[1280px] pt-[64px] pr-0 pb-[64px] pl-0 flex-col gap-[10px] justify-center items-center flex-nowrap relative mx-auto my-0">
      <div className="flex w-[1024px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative">
        <div className="w-[502px] h-[490px] shrink-0 rounded-tl-[8px] rounded-tr-none rounded-br-none rounded-bl-[8px] relative overflow-hidden z-[1]">
          <div
            className="w-[554px] h-[554px]
            bg-cover bg-no-repeat absolute top-0 left-[-51.5px] z-[2]"
            style={{ backgroundImage: `url(${image2})` }}
          />
        </div>
        <div className="flex w-[521px] pt-0 pr-[14px] pb-0 pl-[34px] flex-col gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f5] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none relative z-[3]">
          <div className="flex flex-col gap-[40px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]">
              <div className="flex flex-col gap-[16px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
                <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Lora'] text-[30px] font-medium leading-[36px] text-[#003b5c] relative text-left whitespace-nowrap z-[7]">
                  Discover Our Story
                </span>
                <span className="flex w-[473px] h-[72px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left z-[8]">
                  Our aesthetic clinic specializes in advanced, non-surgical
                  treatments designed to enhance your natural beauty and boost
                  your confidence.
                </span>
              </div>
              <div className="flex pt-0 pr-[14px] pb-0 pl-[14px] flex-col gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[9]">
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-10">
                  Highly Qualified Professionals
                </span>
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[11]">
                  Hygiene Standards
                </span>
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[12]">
                  Satisfied Clients
                </span>
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[13]">
                  Personalized Consultations
                </span>
              </div>
            </div>
            <div className="flex w-[170px] h-[45px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#102946] rounded-[4px] relative z-[14]">
              <span className="h-[24px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-bold leading-[24px] text-[#f9f9f9] relative text-left whitespace-nowrap z-[15]">
                Discover More
              </span>
              <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[16]">
                <div
                  className="w-[9.067px] h-[9.067px] bg-no-repeat relative z-[17] mt-[3.2px] mr-0 mb-0 ml-[3.732px]"
                  style={{
                    backgroundImage: `url(${image3})`,
                    backgroundSize: "100% 100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center justify-center gap-10 pt-16 pb-16 px-4 md:px-0 w-full max-w-[1280px] mx-auto">
    //   <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
    //     {/* Left Side Image Section */}
    //     <div className="flex justify-center items-center relative w-full md:w-[502px] h-[490px] overflow-hidden rounded-[8px]">
    //       <div
    //         className="w-full h-full bg-cover bg-no-repeat absolute top-0 left-0"
    //         style={{ backgroundImage: `url(${image2})` }}
    //       />
    //     </div>

    //     {/* Right Side Content Section */}
    //     <div className="flex flex-col justify-center items-center bg-[#f4f4f5] rounded-[8px] w-full md:w-[521px] p-6 md:p-8 gap-8">
    //       {/* Header */}
    //       <div className="flex flex-col items-start gap-4">
    //         <h2 className="text-2xl sm:text-3xl font-medium text-[#003b5c]">
    //           Discover Our Story
    //         </h2>
    //         <p className="text-sm sm:text-base font-normal text-[#17171b] text-left">
    //           Our aesthetic clinic specializes in advanced, non-surgical treatments designed to enhance your natural beauty and boost your confidence.
    //         </p>
    //       </div>

    //       {/* Key Points */}
    //       <div className="flex flex-col gap-4">
    //         <p className="text-sm sm:text-base text-[#17171b]">Highly Qualified Professionals</p>
    //         <p className="text-sm sm:text-base text-[#17171b]">Hygiene Standards</p>
    //         <p className="text-sm sm:text-base text-[#17171b]">Satisfied Clients</p>
    //         <p className="text-sm sm:text-base text-[#17171b]">Personalized Consultations</p>
    //       </div>

    //       {/* Discover More Button */}
    //       <div className="flex items-center gap-2 bg-[#102946] text-white px-4 py-2 rounded-full cursor-pointer mt-8">
    //         <span className="font-bold text-sm sm:text-base">Discover More</span>
    //         <div className="w-[16px] h-[16px] bg-[url(${image3})] bg-no-repeat bg-[length:100%_100%]" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Discovery;
