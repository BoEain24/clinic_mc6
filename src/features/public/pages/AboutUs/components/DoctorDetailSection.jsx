import React from "react";
import ValidLink from "../../../../../ui/ValidLink";
import { BsArrowLeft } from "react-icons/bs";
import useOurDoctor from "../../../../../store/UseOurDoctors";

const DoctorDetailSection = () => {
  const doctorSlug = "dr-sophia-lin";

  const { doctors } = useOurDoctor();
  console.log(doctorSlug);

  const currentDoctor = doctors.find((doctor) => doctor.slug == doctorSlug);

  console.log(currentDoctor);

  console.log(currentDoctor.images.mainImg);

  return (
    <section className="py-16">
      <div className="grid grid-cols-2">
        <div className="col-span-1 h-[453px] relative">
          <img className="rounded-lg" src="../../../../../../src/assets/images/about-us/aesthetic clinic Asian doctor(female) photo example.jpg" alt="" />
        </div>
        <div className=" col-span-1 px-[40px] py-[20px]">
          <div className="">
            <h1 className="text-4xl mb-4">{currentDoctor.names.fullName}</h1>
            {currentDoctor.isFounder && (
              <p className="text-2xl mb-1">Founder & Medical Director</p>
            )}
            <p className="text-xl">{currentDoctor.degree}</p>
            <div className="mt-9">
              <button className="flex w-[170px] h-[45px]  justify-center items-center  bg-[#102946] rounded-[4px] gap-3">
                <span className="text-[16px] font-bold text-white">
                  Book Consultation
                </span>
              </button>
            </div>
          </div>
          <div className="mt-20">
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
          <div className="mt-14">
            <h3 className="text-2xl">About {currentDoctor.names.shortName}</h3>
            <div>
              <p className="text-base mt-6">{currentDoctor.about.firstPara}</p>
              <p className="text-base mt-4">{currentDoctor.about.secondPara}</p>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-2xl">Area of Specialty</h3>
            <div>
              <p className="text-base mt-6">{currentDoctor.areaOfSpecialty}</p>
            </div>
          </div>
          <div className="mt-14 bg-red-500 h-[520px]">
            <img  className="h-{250px} " src={currentDoctor.images.firstImg} alt="" />
            <img src="" alt="" />
          </div>
          <div className="mt-14">
            <h3 className="text-xl">Follow {currentDoctor.names.shortName} and to know update news !</h3>
            <div className="mt-4 flex gap-6">
              <img className="w-[28px] h-[32px]" src="../../../../../../src/assets/images/about-us/square-instagram-brands-solid.svg" alt="" />
              <img className="w-[28px] h-[32px]" src="../../../../../../src/assets/images/about-us/facebook-brands-solid.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailSection;
