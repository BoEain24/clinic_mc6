import React from "react";
import backgroundImage from "../../../../../assets/images/hero-&-banner-img/for-hero.jpg";
import Breadcrumb from "./Breadcrumb";

const HeroSection = () => {
  return (
    <section>
      <div
        className="w-full h-[377px] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white z-10 ">
          <h1 className="text-3xl pl-0.5">Issues</h1>
          <Breadcrumb currentPageTitle={"Issues"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
