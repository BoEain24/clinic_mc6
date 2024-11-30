import React from "react";
import HeroSection from "./components/HeroSection";
import IssuesGroupSection from "./components/IssuesGroupSection";
import Container from "./components/Container";
import SubScribe from "../../components/SubScribe";

const Issues = () => {
  const handleSubscription = (email) => {
    console.log(`User subscribed with email: ${email}`);
  };
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <Container>
      <IssuesGroupSection />
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

export default Issues;
