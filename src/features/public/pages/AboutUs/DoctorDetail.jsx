import React from "react";
import Container from "./components/Container";
import { useParams } from "react-router-dom";
import useOurDoctor from "../../../../store/UseOurDoctors";

const DoctorDetail = () => {
  const { doctorSlug } = useParams();

  const { doctors } = useOurDoctor();
  console.log(doctorSlug);

  const currentDoctor = doctors.find(
    (doctor) => doctor.slug == doctorSlug
  );

  console.log(currentDoctor);


  return (
    <Container>
      <h1>hello my world</h1>
    </Container>
  );
};

export default DoctorDetail;
