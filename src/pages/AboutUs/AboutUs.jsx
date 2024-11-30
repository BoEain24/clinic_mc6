import React from "react";
import SubScribe from "../../components/SubScribe";
import AboutUsHeroSection from "./components/AboutUsHeroSection";
import Container from "../AboutUs/components/Container";
import WelcometoSection from "./components/WelcometoSection";
import OurDoctorsSection from "./components/OurDoctorsSection";

const AboutUs = () => {
  const handleSubscription = (email) => {
    console.log(`User subscribed with email: ${email}`);
  };
  return (
    <main className="min-h-screen flex flex-col">
      <AboutUsHeroSection />
      <Container>
       <WelcometoSection/>
       <OurDoctorsSection/>
      </Container>

      <SubScribe
        title="Subscribe to Our Newsletter"
        title2=" Contact us today to schedule your consultation or learn more about
              our treatments. Your transformation starts now!"
        email="Enter your email"
        subScribeUser={handleSubscription}
      />
    </main>
  );
};

export default AboutUs;
