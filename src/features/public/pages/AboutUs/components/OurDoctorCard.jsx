import React from "react";
import buttonicon from "../../../../../assets/images/home-page/background3.png";
import { Link } from "react-router-dom";
import ValidLink from "../../../../../ui/ValidLink";

const OurDoctorCard = ({ doctor }) => {

  console.log(doctor.images.mainImg);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 pb-16">
        <div className="col-span-1 h-[453px]">
          <img
            src={doctor.images.mainImg}
            alt=""
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="col-span-1 h-full">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-5">
              <div className="">
                <h1 className="text-3xl mb-4">{doctor.names.fullName}</h1>
                {doctor.isFounder && (
                  <p className="text-base mb-1">Founder & Medical Director</p>
                )}
                <p className="text-base">{doctor.degree}</p>
              </div>
              <div className="space-y-8 text-base">
                <p>{doctor.description}</p>
                <p>{doctor.specialties}</p>
                <div className="">
                  <ValidLink type="button" href={`/doctor-detail/${doctor.slug}`} className="flex w-[170px] h-[45px]  justify-center items-center  bg-[#102946] rounded-[4px] gap-3">
                    <span className="text-[16px] font-bold text-white">
                      Discover More
                    </span>
                    <img className="size-2" src={buttonicon} alt="" />
                  </ValidLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctorCard;
