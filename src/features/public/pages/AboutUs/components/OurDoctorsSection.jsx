import React from "react";
import AestheicTeam from "../../../../../assets/images/about-us/aesthetic Clinic team photo.jpg";
import buttonicon from "../../../../../assets/images/home-page/background3.png";
import OurDoctor1 from "../../../../../assets/images/about-us/aesthetic clinic Asian doctor(female) photo example.jpg";
import OurDoctorCard from "./OurDoctorCard";
import ourDotors from "../data.jsx/ourDoctors";

const OurDoctorsSection = () => {
  return (
    <section>
      <div className="">
        <p className="text-4xl text-center mb-16">Our Doctors</p>

        {ourDotors.map((doctor) => (
          <OurDoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default OurDoctorsSection;
