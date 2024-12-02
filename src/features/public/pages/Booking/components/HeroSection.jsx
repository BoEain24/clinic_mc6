import React from "react";
import Breadcrumb from "./Breadcrumb";
import backgroundImage from "../../../../../assets/images/hero-&-banner-img/banner.png";

const HeroSection = () => {
  return (
    <section>
      <div
        className="w-full h-[377px] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-white z-10 ">
          <h1 className="text-3xl pl-0.5">Booking</h1>
          <Breadcrumb currentPageTitle={"Booking"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
