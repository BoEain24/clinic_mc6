import React from "react";
// import Breadcrumb from "./Breadcrumb";
import Breadcrumb from "../../AboutUs/components/Breadcrumb";
// import backgroundImage from "../image/image (2).png";
import backgroundImage from "../../../../../assets/images/hero-&-banner-img/for-hero.jpg";

const HeroSection = () => {
  return (
    <section>
      <div
        className="w-full h-[377px] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white z-10 ">
          <h1 className="text-3xl pl-0.5 font-custom">Terms & Conditions</h1>
          <Breadcrumb currentPageTitle={"Terms & Conditions"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
