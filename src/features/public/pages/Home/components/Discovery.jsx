import React from "react";
import image1 from "../../../../../assets/images/home-page/background1.png"; // Import image directly
import image2 from "../../../../../assets/images/home-page/background2.png"; // Import second image
import image3 from "../../../../../assets/images/home-page/background3.png";

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
              <div className="flex pt-0 pr-4 pb-0 pl-4 flex-col gap-2 justify-center items-start z-9">
                <ul className="list-disc pl-5 space-y-2">
                  {[
                    "Highly Qualified Professionals",
                    "Hygiene Standards",
                    "Satisfied Clients",
                    "Personalized Consultations",
                  ].map((text, index) => (
                    <li
                      key={index}
                      className="font-['Satoshi'] text-[16px] text-[#17171b]"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
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
  );
};

export default Discovery;
