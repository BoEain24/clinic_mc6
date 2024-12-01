import React from "react";
import "../../../../styles/index.css";
import SubScribe from "../../../../components/SubScribe";
import Discovery from "./components/Discovery";
import Popular from "./components/Popular";
import HeroSection from "../../../../components/HeroSection";
export default function Home() {
  const handleSubscription = (email) => {
    console.log(`User subscribed with email: ${email}`);
  };
  return (
    <div className="main-container w-full h-full bg-[#f9f9f9] relative overflow-hidden mx-auto my-0">
      <HeroSection />
      <Discovery />
      <Popular />
      <div className="w-full h-[501px] bg-[url(../assets/images/glow.png)] bg-cover bg-no-repeat relative z-[166] mt-0 mr-0 mb-0 ml-0">
        <div className="flex w-[415px] flex-col gap-[32px] items-start flex-nowrap relative z-[167] mt-[83px] mr-0 mb-0 ml-[128px]">
          <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[168]">
            <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[169]">
              <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[14px] font-normal leading-[20px] text-[#003b5c] relative text-left whitespace-nowrap z-[170]">
                Special discount
              </span>
              <span className="flex w-[415px] h-[80px] justify-start items-start self-stretch shrink-0 font-['Lora'] text-[36px] font-medium leading-[40px] text-[#003b5c] relative text-left z-[171]">
                30 % off Bridal Glow Package
              </span>
            </div>
            <div className="flex flex-col gap-[14px] items-start self-stretch shrink-0 flex-nowrap relative z-[172]">
              <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[173]">
                What’s included in the Bridal Glow Package:
              </span>
              <div className="flex pt-0 pr-[14px] pb-0 pl-[14px] flex-col gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[174]">
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[175]">
                  One Laser Skin Rejuvenation Session
                </span>
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[176]">
                  One Brightening Facial
                </span>
                <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-left whitespace-nowrap z-[177]">
                  10% off Dermal Fillers
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[170px] h-[45px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#102946] rounded-[4px] relative z-[178]">
            <span className="h-[20px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-bold leading-[20px] text-[#f9f9f9] relative text-left whitespace-nowrap z-[179]">
              BOOK NOW
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full pt-[64px] pr-0 pb-[64px] pl-0 flex-col gap-[10px] justify-center items-center flex-nowrap relative z-[56] mt-0 mr-0 mb-0 ml-0">
        <div className="flex flex-col gap-[28px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[57]">
          <div className="flex flex-col gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[58]">
            <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Lora'] text-[30px] font-medium leading-[36px] text-[#003b5c] relative text-center whitespace-nowrap z-[59]">
              Beauty Insights
            </span>
            <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-center whitespace-nowrap z-[60]">
              Stay informed with expert knowledge on beauty and self-care
              tailored just for you.
            </span>
          </div>
          <div className="flex gap-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[61]">
            <div className="flex w-[328px] h-[490px] flex-col items-start shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#e3e3e7] relative box-content z-[62]">
              <div className="h-[180px] self-stretch shrink-0 bg-[url(../assets/images/face2.png)] bg-cover bg-no-repeat rounded-tl-[8px] rounded-tr-[8px] rounded-br-none rounded-bl-none relative overflow-hidden z-[63]" />
              <div className="flex h-[310px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#f4f4f5] rounded-tl-none rounded-tr-none rounded-br-[8px] rounded-bl-[8px] relative z-[64]">
                <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[65]">
                  <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[66]">
                    <span className="h-[24px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-left whitespace-nowrap z-[67]">
                      May 13, 2023
                    </span>
                    <div className="flex flex-col gap-[14px] items-start self-stretch shrink-0 flex-nowrap relative z-[68]">
                      <span className="flex w-[288px] h-[56px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[20px] font-medium leading-[28px] text-[#003b5c] relative text-left z-[69]">
                        The Benefits of Non-Surgical Body Contouring
                      </span>
                      <span className="flex w-[288px] h-[96px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-left z-[70]">
                        Enhance your natural beauty with our premium dermal
                        fillers. Whether you want plumper lips, higher
                        cheekbones, or a refreshed look, our skilled ....
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[127px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[71]">
                    <span className="h-[20px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[20px] text-[#015775] relative text-left whitespace-nowrap z-[72]">
                      Keep Reading
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[73]">
                      <div className="w-[11.733px] h-[9.6px] bg-[url(../assets/images/forward_arrow.png)] bg-[length:100%_100%] bg-no-repeat relative z-[74] mt-[3.2px] mr-0 mb-0 ml-[2.134px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[328px] h-[490px] flex-col items-start shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#e3e3e7] relative box-content z-[75]">
              <div className="h-[180px] self-stretch shrink-0 bg-[url(../assets/images/face6.png)] bg-cover bg-no-repeat rounded-tl-[8px] rounded-tr-[8px] rounded-br-none rounded-bl-none relative overflow-hidden z-[76]" />
              <div className="flex h-[310px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#f4f4f5] rounded-tl-none rounded-tr-none rounded-br-[8px] rounded-bl-[8px] relative z-[77]">
                <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[78]">
                  <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
                    <span className="h-[24px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-left whitespace-nowrap z-[80]">
                      June 22, 2022
                    </span>
                    <div className="flex flex-col gap-[14px] items-start self-stretch shrink-0 flex-nowrap relative z-[81]">
                      <span className="flex w-[288px] h-[56px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[20px] font-medium leading-[28px] text-[#003b5c] relative text-left z-[82]">
                        5 Essentials to Ensure Best Results from HIFU
                      </span>
                      <span className="flex w-[288px] h-[72px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-left z-[83]">
                        HIFU treatments, with all the rage in recent years, have
                        become de rigueur for face lifting. For the
                        uninitiated,....
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[127px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[84]">
                    <span className="h-[20px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[20px] text-[#015775] relative text-left whitespace-nowrap z-[85]">
                      Keep Reading
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[86]">
                      <div className="w-[11.733px] h-[9.6px] bg-[url(../assets/images/forward_arrow.png)] bg-[length:100%_100%] bg-no-repeat relative z-[87] mt-[3.2px] mr-0 mb-0 ml-[2.134px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[328px] h-[490px] flex-col items-start shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#e3e3e7] relative box-content z-[88]">
              <div className="h-[180px] self-stretch shrink-0 bg-[url(../assets/images/sample.png)] bg-cover bg-no-repeat rounded-tl-[8px] rounded-tr-[8px] rounded-br-none rounded-bl-none relative overflow-hidden z-[89]" />
              <div className="flex h-[310px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#f4f4f5] rounded-tl-none rounded-tr-none rounded-br-[8px] rounded-bl-[8px] relative z-[90]">
                <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
                  <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[92]">
                    <span className="h-[24px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-left whitespace-nowrap z-[93]">
                      March 29, 2021
                    </span>
                    <div className="flex flex-col gap-[14px] items-start self-stretch shrink-0 flex-nowrap relative z-[94]">
                      <span className="flex w-[288px] h-[56px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[20px] font-medium leading-[28px] text-[#003b5c] relative text-left z-[95]">
                        How to Improve Dark Circles: A Comprehensive Guide
                      </span>
                      <span className="flex w-[288px] h-[96px] justify-start items-start self-stretch shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-left z-[96]">
                        Improving dark circles under the eyes requires a
                        combination of lifestyle changes, skincare, and possible
                        medical treatments. Here are some effective ....
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[127px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[97]">
                    <span className="h-[20px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[20px] text-[#015775] relative text-left whitespace-nowrap z-[98]">
                      Keep Reading
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[99]">
                      <div className="w-[11.733px] h-[9.6px] bg-[url(../assets/images/forward_arrow.png)] bg-[length:100%_100%] bg-no-repeat relative z-[100] mt-[3.2px] mr-0 mb-0 ml-[2.134px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[130px] h-[45px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#102946] rounded-[4px] relative z-[101]">
            <span className="h-[20px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-bold leading-[20px] text-[#f9f9f9] relative text-left whitespace-nowrap z-[102]">
              Read More
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full pt-0 pr-0 pb-[64px] pl-0 flex-col gap-[10px] justify-center items-center flex-nowrap relative z-[122] mt-0 mr-0 mb-0 ml-0">
        <div className="flex flex-col gap-[28px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[123]">
          <div className="flex flex-col gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[124]">
            <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Lora'] text-[30px] font-medium leading-[36px] text-[#003b5c] relative text-center whitespace-nowrap z-[125]">
              Why Clients Trust Us
            </span>
            <span className="flex w-[676px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-center whitespace-nowrap z-[126]">
              Building trust through exceptional service and natural-looking
              transformations
            </span>
          </div>
          <div className="flex w-[1024px] justify-between items-center shrink-0 flex-nowrap rounded-[8px] relative z-[127]">
            <div className="w-[415px] h-[372px] shrink-0 rounded-tl-[8px] rounded-tr-none rounded-br-none rounded-bl-[8px] relative overflow-hidden z-[128]">
              <div className="w-[415px] h-[372px] bg-[url(../assets/images/face.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[129]" />
            </div>
            <div className="flex w-[609px] pt-0 pr-[20px] pb-0 pl-[20px] flex-col gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f5] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none relative z-[130]">
              <div className="flex flex-col gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[131]">
                <div className="flex w-[122px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[132]">
                  <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[133]">
                    <div className="w-[16.057px] h-[15.306px] bg-[url(../assets/images/stars.png)] bg-[length:100%_100%] bg-no-repeat relative z-[134] mt-[0.58px] mr-0 mb-0 ml-[0.97px]" />
                  </div>
                  <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[135]">
                    <div className="w-[16.057px] h-[15.306px] bg-[url(../assets/images/stars.png)] bg-[length:100%_100%] bg-no-repeat relative z-[136] mt-[0.58px] mr-0 mb-0 ml-[0.97px]" />
                  </div>
                  <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[137]">
                    <div className="w-[16.057px] h-[15.306px] bg-[url(../assets/images/stars.png)] bg-[length:100%_100%] bg-no-repeat relative z-[138] mt-[0.58px] mr-0 mb-0 ml-[0.97px]" />
                  </div>
                  <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[139]">
                    <div className="w-[16.057px] h-[15.306px] bg-[url(../assets/images/stars.png)] bg-[length:100%_100%] bg-no-repeat relative z-[140] mt-[0.58px] mr-0 mb-0 ml-[0.97px]" />
                  </div>
                  <div className="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[141]">
                    <div className="w-[16.057px] h-[15.306px] bg-[url(../assets/images/stars1.png)] bg-[length:100%_100%] bg-no-repeat relative z-[142] mt-[0.58px] mr-0 mb-0 ml-[0.97px]" />
                  </div>
                </div>
                <span className="flex w-[569px] h-[120px] justify-center items-start self-stretch shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#52525b] relative text-center z-[143]">
                  "I recently visited Paradise Aesthetic Clinic for a HIFU
                  treatment and a chemical peel, and I couldn’t be happier with
                  the results! The HIFU tightened my skin beautifully, while the
                  chemical peel left my face glowing and refreshed. The staff
                  explained everything in detail, ensuring I was comfortable
                  throughout the process, I can’t wait to try their body
                  contouring treatments next!"
                </span>
                <div className="flex flex-col justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[144]">
                  <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[16px] font-medium leading-[24px] text-[#003b5c] relative text-center whitespace-nowrap z-[145]">
                    Panny Grace
                  </span>
                  <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Satoshi'] text-[14px] font-normal leading-[20px] text-[#52525b] relative text-center whitespace-nowrap z-[146]">
                    Beauty Blogger
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[40px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f9f9f9] rounded-full border-solid border border-[#e3e3e7] absolute top-[278px] left-[107px] z-[147]">
            <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[148]">
              <div className="w-[5.067px] h-[9.6px] bg-[url(../assets/images/backarrow.png)] bg-[length:100%_100%] bg-no-repeat relative z-[149] mt-[3.2px] mr-0 mb-0 ml-[4.533px]" />
            </div>
          </div>
          <div className="flex w-[40px] h-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f4f4f5] rounded-full border-solid border border-[#e3e3e7] absolute top-[278px] left-[1132px] z-[150]">
            <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[151]">
              <div className="w-[5.067px] h-[9.6px] bg-[url(../assets/images/home-page/forward_arrow_no_color.png)] bg-[length:100%_100%] bg-no-repeat relative z-[152] mt-[3.2px] mr-0 mb-0 ml-[6.4px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full pt-0 pr-0 pb-[64px] pl-0 flex-col gap-[10px] justify-center items-center flex-nowrap relative z-[153] mt-0 mr-0 mb-0 ml-0">
        <div className="flex w-[1024px] flex-col gap-[28px] justify-center items-center shrink-0 flex-nowrap relative z-[154]">
          <span className="h-[32px] self-stretch shrink-0 basis-auto font-['Lora'] text-[24px] font-medium leading-[32px] text-[#003b5c] relative text-center whitespace-nowrap z-[155]">
            follow@paradise
          </span>
          <div className="flex gap-[20px] items-center self-stretch shrink-0 flex-nowrap relative z-[156]">
            <div className="w-[241px] h-[232px] shrink-0 rounded-[8px] relative overflow-hidden z-[157]">
              <div className="w-[241px] h-[232px] bg-[url(../assets/images/follow6.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[158]" />
            </div>
            <div className="w-[241px] h-[232px] shrink-0 bg-[url(../assets/images/follow4.png)] bg-cover bg-no-repeat rounded-[8px] relative overflow-hidden z-[159]">
              <div className="w-[242px] h-[232px] bg-[url(../assets/images/follow1.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[160]" />
            </div>
            <div className="w-[241px] h-[232px] shrink-0 rounded-[8px] relative overflow-hidden z-[161]">
              <div className="w-[241px] h-[232px] bg-[url(../assets/images/face5.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[162]" />
            </div>
            <div className="w-[241px] h-[232px] shrink-0 rounded-[8px] relative overflow-hidden z-[163]">
              <div className="w-[241px] h-[232px] bg-[url(../assets/images/follow2.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[164]" />
            </div>
          </div>
        </div>
      </div>

      <SubScribe
        title="Subscribe to Our Newsletter"
        title2=" Contact us today to schedule your consultation or learn more about
              our treatments. Your transformation starts now!"
        email="Enter your email"
        subScribeUser={handleSubscription}
      />
    </div>
  );
}
