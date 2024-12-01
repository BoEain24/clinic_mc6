import React from "react";
import IssuesDetailHeroSection from "./components/IssuesDetailHeroSection";
import Container from "../../../../components/Container";
import SubScribe from "../../../../components/SubScribe";
import IssuesDetailCardList from "./components/IssuesDetailCardList";

const IssuesDetailPage = () => {
  const handleSubscription = (email) => {
    console.log(`User subscribed with email: ${email}`);
  };
  return (
    <main className="min-h-screen flex flex-col">
      <Container>
        <IssuesDetailHeroSection />
        <IssuesDetailCardList />
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

export default IssuesDetailPage;
