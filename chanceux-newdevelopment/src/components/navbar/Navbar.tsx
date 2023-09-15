"use client";
import { useState } from "react";
import Menu from "./menu";
import CloseIcon from "./CloseIcon";

const Item = ({ link, text, isActive }: any) => {
  const [activeCol, setActiveCol] = useState(isActive);

  const handleCol = () => {
    setActiveCol(true);
  };
  return (
    <a
      onClick={handleCol}
      className={`text-base md:text-xl font-medium capitalize text-${
        activeCol ? "custom_orange" : "white"
      }`}
      href={link}
    >
      {text}
    </a>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="bg-nav-bg backdrop-blur-md py-3 md:py-5 flex justify-end px-0 md:px-20 items-center fixed w-screen z-10">
      <nav
        className={`${
          showNav ? "grid" : "hidden"
        } md:grid md:grid-cols-5 gap-10 md:w-fit items-center absolute md:relative -bottom-96 md:-bottom-0 grid-cols-1 place-items-center bg-black md:bg-transparent w-screen py-11 md:py-0`}
      >
        <Item link="" text="home" isActive={true} />
        <Item link="" text="about" />
        <Item link="services" text="services" />
        <Item link="" text="testimonials" />
        <a href="/">
          <button className="text-white text-base md:text-xl font-medium capitalize border-[#885FF5] border-2 py-2 px-5 rounded-3xl">
            contact us
          </button>
        </a>
      </nav>
      <button onClick={handleNav} className="block md:hidden mr-4">
        {showNav ? (
          <CloseIcon className="w-10 h-10" />
        ) : (
          <Menu className="w-10 h-10" />
        )}
      </button>
    </header>
  );
};

export default Navbar;
