import React from "react";
import ValidLink from "../../../../../ui/ValidLink";
import { BsArrowLeft } from "react-icons/bs";
import useOurDoctor from "../../../../../store/UseOurDoctors";
import { useLocation } from "react-router-dom";

const DoctorDetailSection = () => {
  const location = useLocation();
  console.log(location);
  const doctorSlug = location.pathname.split("doctor-detail/")[1];

  const { doctors } = useOurDoctor();
  // console.log(doctorSlug);

  const currentDoctor = doctors.find((doctor) => doctor.slug == doctorSlug);

  // console.log(currentDoctor);

  // console.log(currentDoctor.images.mainImg);

  return (
    <section className="xl:py-16 lg:py-16 md:py-16 sm:py-8 ">
     
        <div className="border-1 bg-zinc-100 rounded-full size-8 mt-4 mb-4 block sm:hidden">
        <ValidLink className="" href={"/aboutus"}>
          <button className="px-2 py-2">
            <BsArrowLeft />
          </button>
          </ValidLink>
        </div>
      
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="col-span-1 xl:h-[453px] lg:h-[453px] md:h-[453px] sm:h-[300px] xl:mb-0 lg:mb-0 md:mb-0 sm:mb-8 md:sticky top-10 block">
          <img
            className="rounded-lg"
            src={currentDoctor.images.mainImg}
            alt=""
          />
        </div>
        <div className=" col-span-1 xl:px-[40px] lg:px-[40px] md:px-[40px] sm:px-[0px] py-[20px]">
          <div className="">
            <h1 className="text-4xl mb-4">{currentDoctor.names.fullName}</h1>
            {currentDoctor.isFounder && (
              <p className="text-2xl mb-1">Founder & Medical Director</p>
            )}
            <p className="text-xl">{currentDoctor.degree}</p>
            <div className="mt-9 md:block hidden mb-20">
              <button className="flex w-[170px] h-[45px]  justify-center items-center  bg-[#102946] rounded-[4px] gap-3">
                <span className="text-[16px] font-bold text-white">
                  Book Consultation
                </span>
              </button>
            </div>
          </div>
          <div className="mb-14">
            <h3 className="text-2xl">Background</h3>
            <div>
              <p className="text-base mt-6">
                {currentDoctor.background.firstPara}
              </p>
              <p className="text-base mt-4">
                {currentDoctor.background.secondPara}
              </p>
            </div>
          </div>
          <div className=" mb-14">
            <h3 className="text-2xl">About {currentDoctor.names.shortName}</h3>
            <div>
              <p className="text-base mt-6">{currentDoctor.about.firstPara}</p>
              <p className="text-base mt-4">{currentDoctor.about.secondPara}</p>
            </div>
          </div>
          <div className=" mb-14">
            <h3 className="text-2xl">Area of Specialty</h3>
            <div>
              <p className="text-base mt-6">{currentDoctor.areaOfSpecialty}</p>
            </div>
          </div>
          <div className="md:mb-20 mb-28 h-[520px]">
            <img
              className="h-{250px} rounded-lg md:mb-4 mb-5"
              src={currentDoctor.images.firstImg}
              alt=""
            />
            <img
              className="h-{250px} rounded-lg"
              src={currentDoctor.images.secondImg}
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-xl">
              Follow {currentDoctor.names.shortName} and to know update news !
            </h3>
            <div className="mt-4 flex gap-6">
              <img
                className="w-[28px] h-[32px]"
                src="../../../../../../src/assets/images/about-us/square-instagram-brands-solid.svg"
                alt=""
              />
              <img
                className="w-[28px] h-[32px]"
                src="../../../../../../src/assets/images/about-us/facebook-brands-solid.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailSection;
