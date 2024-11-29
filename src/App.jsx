import React from "react";
// import Header from "./layouts/Header"; // Your Header component import
// import Footer from "./layouts/Footer"; // Your Footer component import
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
// import Issues from "./pages/Issues/Issues";
// import Treatments from "./pages/Treatments/Treatments";
// import ContactUs from "./pages/ContactUs/ContactUs";
// import TermsConditions from "./pages/TermsConditions/TermsConditions";
// import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
// import Booking from "./pages/Booking/Booking";
// import navLinks from "./util/navLink.js"; // Centralized navigation links
// import BlogCotntainer from "./pages/Blog/BlogContainer.jsx";

// // Route Component Mapping
// const routeComponents = {
//   "/": <Home />,
//   "/aboutus": <AboutUs />,
//   "/blog": <Blog />,
//   "/issues": <Issues />,
//   "/treatments": <Treatments />,
//   "/contact": <ContactUs />,
//   "/termsconditions": <TermsConditions />,
//   "/privacypolicy": <PrivacyPolicy />,
//   "/booking": <Booking />,
// };

const App = () => {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     {/* Dynamically generate routes from navLinks */}
    //     {navLinks.map(({ href }) => (
    //       <Route key={href} path={href} element={routeComponents[href]} />
    //     ))}
    //     <Route path="/booking" element={<Booking />} />
    //     <Route path="/termsconditions" element={<TermsConditions />} />
    //     <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/blog" element={<Blog/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
