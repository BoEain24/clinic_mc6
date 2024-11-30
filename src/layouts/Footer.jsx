import React from "react";
import logo from "../assets/images/logo2.png";
import facebookIcon from "../assets/images/facebook.png";
import twitterIcon from "../assets/images/twitter.png";
import instagramIcon from "../assets/images/instagram.png";
import linkeInIcon from "../assets/images/linkedin.png";
import addressIcon from "../assets/images/location.png";
import emailIcon from "../assets/images/email.png";
import phoneIcon from "../assets/images/phone.png";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-gray-200 text-gray-700">
      {/* Top Section */}
      <div className="w-full max-w-screen-xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Logo and Social Media */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-52 h-auto mb-50" />
          <div className="flex gap-3">
            {[
              {
                src: facebookIcon,
                alt: "Facebook",
                link: "https://web.facebook.com/",
              },
              {
                src: twitterIcon,
                alt: "Twitter",
                link: "https://x.com/i/flow/login/",
              },
              {
                src: instagramIcon,
                alt: "Instagram",
                link: "https://www.instagram.com/",
              },
              {
                src: linkeInIcon,
                alt: "LinkedIn",
                link: "https://www.linkedin.com/",
              },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-md hover:bg-gray-400"
              >
                <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: "Quick Links",
            linkName: ["About Us", "Issues", "Blog"],
            links: ["/aboutus", "/issues", "/blog"],
          },
          {
            title: "Support",
            linkName: ["Booking", "Terms & Conditions", "Privacy Policy"],
            links: ["/booking", "/termsconditions", "/privacypolicy"],
          },
        ].map((section, index) => (
          <div key={index} className="flex-1">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.linkName.map((linksTitle, i) => (
                <li key={i}>
                  <a
                    href={section.links[i]}
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    {linksTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src={addressIcon} alt="Address Icon" className="w-4 h-4" />
              No-305, Pyay Road, Diamond Condo, Yangon
            </li>
            <li className="flex items-center gap-2">
              <img src={emailIcon} alt="Email Icon" className="w-4 h-4" />
              paradise2020@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <img src={phoneIcon} alt="Phone Icon" className="w-4 h-4" />
              +95966448752
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-gray-800 text-white text-center py-3">
        <span className="text-sm">
          Paradise Aesthetic Clinic © 2024 All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
