import React from "react";
import backgroundImage from "../../../../../assets/images/for-hero.jpg";
import Breadcrumb from "./Breadcrumb";

const AboutUsHeroSection = () => {
  return (
    <section>
      <div
        className="w-full h-[377px] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white z-10 ">
          <h1 className="text-3xl pl-0.5">AboutUs</h1>
          <Breadcrumb currentPageTitle={"AboutUS"} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
