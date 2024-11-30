import React from "react";
import AestheicTeam from "../../../../../assets/images/about-us/aesthetic Clinic team photo.jpg";
const WelcometoSection = () => {
  return (
    <section className="grid grid-cols-2 gap-5 py-16">
      <div className="col-span-1 h-full">
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col gap-5">
            <div className="">
              <p className="text-sm mb-2">Welcome to</p>
              <h1 className="text-3xl">Paradise Aesthetic Clinic</h1>
            </div>
            <div className="space-y-8 text-base">
              <p>
                Founded in 2020 by Dr. Sophia Lin, Paradise Aesthetic Clinic was
                born out of a vision to combine science, artistry, and
                personalized care in the world of beauty and wellness.
              </p>
              <p>
                To be a leader in aesthetic care, combining innovation,
                expertise, and a personalized approach to make beauty an
                accessible, uplifting experience for all.
              </p>
              <p>
                Since our founding, we have been dedicated to providing not just
                treatments, but experiences that inspire confidence and
                celebrate individuality. Let us guide you on your journey to
                timeless beauty and self-assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 h-[453px]">
        <img src={AestheicTeam} alt="" className="w-full h-full rounded-lg" />
      </div>
    </section>
  );
};

export default WelcometoSection;
