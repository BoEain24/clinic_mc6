import React from "react";
import OurDoctorCard from "./OurDoctorCard";
import useOurDoctor from "../../../../../store/UseOurDoctors";

const OurDoctorsSection = () => {
  const { doctors } = useOurDoctor();

  return (
    <section>
      <div className="">
        <p className="text-4xl text-center mb-16">Our Doctors</p>

        {doctors.map((doctor) => (
          <OurDoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default OurDoctorsSection;
