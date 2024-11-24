import React from "react";
import ValidLink from "../components/ValidLink";
import navLinks from "../util/navLink.js";

const Header = () => {
  return (
    <header className="flex w-full flex-col justify-center items-center bg-[#f9f9f9] shadow-[0_0_4px_0_rgba(0,0,0,0.1)] z-[253]">
      <div className="flex h-[80px] px-4 md:px-[128px] justify-between items-center w-full max-w-[1280px]">
        {/* Logo */}
        <div
          className="w-[130px] h-[65px] bg-[url(../assets/images/logo2.png)] bg-cover bg-no-repeat"
          alt="Logo"
        />

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-[24px] items-center">
          {navLinks
            .filter((link) => !link.isButton) // Exclude button links
            .map((link) => (
              <ValidLink key={link.href} href={link.href}>
                {link.label}
              </ValidLink>
            ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-[20px]">
          {/* Search Button */}
          <button className="w-[18px] h-[18px] relative">
            <div className="w-[14.5px] h-[14.5px] bg-[url(../assets/images/search.png)] bg-[length:100%_100%] bg-no-repeat" />
          </button>

          {/* Booking Button */}
          <a
            href="/booking"
            className="flex items-center px-[12px] py-[8px] bg-[#102946] rounded-[4px] text-[#f9f9f9] font-bold text-[16px] leading-[24px] hover:bg-[#0c1f35] transition"
          >
            Booking
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="flex md:hidden flex-wrap justify-center items-center gap-4 p-4">
        {navLinks.map((link) => (
          <ValidLink key={link.href} href={link.href}>
            {link.label}
          </ValidLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
