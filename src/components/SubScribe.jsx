import React, { useState } from "react";

const SubScribe = ({ title, title2, email = "", subScribeUser }) => {
  const [userEmail, setUserEmail] = useState(email);

  const handleSubscribeClick = () => {
    if (subScribeUser) {
      subScribeUser(userEmail);
    }
  };

  return (
    <div className="flex w-full pt-[44px] pr-0 pb-[44px] pl-0 flex-col gap-[10px] justify-center items-center flex-nowrap relative z-[241] mt-0 mr-0 mb-0 ml-0 bg-gray-200 text-gray-700">
      <div className="w-full-[290px] shrink-0 absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden z-[242]">
        <div className="w-full h-[102.42%] bg-[url(../assets/images/bgWhite.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[243]" />
      </div>
      <div className="flex w-[627px] flex-col gap-[48px] justify-center items-center shrink-0 flex-nowrap relative z-[244]">
        <div className="flex flex-col gap-[20px] items-center self-stretch shrink-0 flex-nowrap relative z-[245]">
          <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Lora'] text-[30px] font-medium leading-[36px] text-[#003b5c] relative text-center whitespace-nowrap z-[246]">
            {title}
          </span>
          <span className="flex w-[627px] h-[48px] justify-center items-start self-stretch shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[24px] text-[#17171b] relative text-center z-[247]">
            {title2}
          </span>
        </div>
        <div className="flex w-[618px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[248]">
          {/* Email Input */}
          <div className="flex w-[480px] h-[50px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] items-center shrink-0 flex-nowrap bg-[#f4f4f5] rounded-[4px] border-solid border border-[#f4f4f5] relative overflow-hidden z-[249]">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent text-[#17171b] font-['Satoshi'] text-[16px] leading-[20px] outline-none"
            />
          </div>

          {/* Subscribe Button */}
          <button
            onClick={handleSubscribeClick}
            className="flex w-[130px] h-[50px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#102946] rounded-[4px] relative z-[251] hover:bg-[#0c1f35] transition"
          >
            <span className="h-[20px] shrink-0 basis-auto font-['Satoshi'] text-[16px] font-bold leading-[20px] text-[#f9f9f9] relative text-left whitespace-nowrap z-[252]">
              Subscribe
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubScribe;
