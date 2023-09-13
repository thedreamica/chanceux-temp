"use client";
import { useState } from "react";
import Menu from "./menu";
import CloseIcon from "./CloseIcon";

const Item = ({ link, text }: any) => {
  return (
    <div>
      <a className="text-base md:text-xl font-medium capitalize" href={link}>
        {text}
      </a>
    </div>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="bg-nav-bg backdrop-blur-md py-3 md:py-6 flex justify-end px-6 md:px-20 items-center">
      <nav
        className={`${
          showNav ? "block" : "hidden"
        } md:grid grid-cols-5 gap-10 w-fit items-center`}
      >
        <Item link="" text="home" />
        <Item link="" text="about" />
        <Item link="services" text="services" />
        <Item link="" text="testimonials" />
        <a href="/">
          <button className="text-base md:text-xl font-medium capitalize border-[#885FF5] border-2 py-2 px-5 rounded-3xl">
            contact us
          </button>
        </a>
      </nav>
      <button onClick={handleNav} className="block md:hidden">
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
