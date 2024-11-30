import React from "react";
import Header from "./layouts/Header.jsx"; // Your Header component import
import Footer from "./layouts/Footer.jsx"; // Your Footer component import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/public/pages/Home/Home.jsx";
import AboutUs from "./features/public/pages/AboutUs/AboutUs.jsx";
import Blog from "./features/public/pages/Blog/Blog.jsx";
import BlogDetail2 from "./features/public/pages/Blog/BlogDetail2.jsx";
import Issues from "./features/public/pages/Issues/Issues.jsx";
import Treatments from "./features/public/pages/Treatments/Treatments.jsx";
import ContactUs from "./features/public/pages/ContactUs/ContactUs.jsx";
import TermsConditions from "./features/public/pages/TermsConditions/TermsConditions.jsx";
import PrivacyPolicy from "./features/public/pages/PrivacyPolicy/PrivacyPolicy.jsx";
import Booking from "./features/public/pages/Booking/Booking.jsx";
import navLinks from "./util/navLink.js"; // Centralized navigation links

// Route Component Mapping
const routeComponents = {
  "/": <Home />,
  "/aboutus": <AboutUs />,
  "/blog": <Blog />,
  "/issues": <Issues />,
  "/treatments": <Treatments />,
  "/contact": <ContactUs />,
  "/termsconditions": <TermsConditions />,
  "/privacypolicy": <PrivacyPolicy />,
  "/booking": <Booking />,
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Dynamically generate routes from navLinks */}
        {navLinks.map(({ href }) => (
          <Route key={href} path={href} element={routeComponents[href]} />
        ))}
        <Route path="/booking" element={<Booking />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/blog/:id" element={<BlogDetail2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
