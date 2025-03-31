"use client";
import React from "react";
// import Logo from "";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  // current nav bar state
  const [navBarState, setNavBarState] = useState(false);

  // some className are to long
  const unorderedListStyling =
    "z-50 absolute py-8 w-full rounded-lg text-white flex flex-col items-center gap-12 left-1/2 -translate-x-1/2 top-16 bg-secBg md:bg-mainBg md:text-black md:flex-row md:relative md:py-0 md:top-0 md:left-0 md:-translate-x-0 md:gap-8 md:w-fit";

  const listItems = "font-semibold cursor-pointer hover:text-[#5335D9]";

  //   Toggle the nav bar
  const handleToggleNav = () => {
    setNavBarState(!navBarState);
  };

  return (
    <nav className="w-full h-fit relative flex flex-row items-center justify-between">
      {/* Logo */}
      <h1 className="text-mainText font-bold pr-10">
        Reading <br />
        Timetable
      </h1>
      {/* Links */}
      <ul
        className={`${
          navBarState ? "" : "hidden md:flex"
        } ${unorderedListStyling}`}
      >
        <li className={listItems}>Features</li>
        <li className={listItems}>How to use?</li>
        <li className={listItems}>Pricing</li>
        <li className="font-semibold hover:text-[#5335D9] cursor-pointer md:hidden">
          Sign in
        </li>
      </ul>
      {/* Call to Action */}
      <div className="flex flex-row gap-5 items-center justify-end">
        <p className="font-semibold hover:text-[#5335D9] cursor-pointer hidden md:block">
          Sign in
        </p>
        <button className="w-28 h-10 rounded-full bg-secBg text-white hover:bg-transparent hover:border-2 hover:border-[#5335D9] hover:text-[#5335D9] text-sm font-semibold">
          Get Started
        </button>
        {/* Nav Bar */}
        <button onClick={handleToggleNav} className="block md:hidden">
          Nav
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
