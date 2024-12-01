import React from "react";
import Breadcrumb from "./Breadcrumb";
import backgroundImage from "../image/image (2).png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-96 relative">
      <img
        src={backgroundImage}
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
      <div className=" flex flex-col items-center justify-center gap-1">
        <h3 className=" text-zinc-50 text-3xl font-medium">
          Privacy Policy
        </h3>
        <Breadcrumb currentPageTitle={"Privacy Policy"} />
      </div>
    </section>
  );
};

export default HeroSection;
