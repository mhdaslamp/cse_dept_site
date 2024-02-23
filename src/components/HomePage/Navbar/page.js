"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavbarItem({ href, label, setNavbar }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex relative pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="dot w-2 h-2 absolute top-5 left-0  bg-white rounded"></div>
      )}
      <Link href={href} onClick={() => setNavbar(false)}>
        {label}
      </Link>
    </li>
  );
}

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="border border-gray-400 bg-slate-400 bg-opacity-30 mt-8 rounded max-w-screen-xl mx-auto font-bold fixed top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex gap-4">
              {/* LOGO */}
              <Image
                src="/logo.png"
                alt="Logo image"
                width={80}
                height={60}
                className=" w-24 h-18"
              />
              <p
                className={`text-sm text-left mt-4 text-white  ${
                  navbar ? "hidden md:block" : "block"
                }`}
              >
                COMPUTER SCIENCE <br /> AND ENGINEERING
              </p>
            </div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleNavbar}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto lg:gap-8 items-center justify-center md:flex mt-5 ">
              <NavbarItem href="#about" label="HOME" setNavbar={setNavbar} />
              <NavbarItem href="#blog" label="ABOUT" setNavbar={setNavbar} />
              <NavbarItem
                href="#contact"
                label="NOTIFICATION"
                setNavbar={setNavbar}
              />
              <NavbarItem
                href="#projects"
                label="DEPT CLUB"
                setNavbar={setNavbar}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <li className="flex relative pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:bg-transparent">
                <div className="dot w-3 hidden absolute top-2 left-0 h-3 bg-white rounded"></div>
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  HOME
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                  ABOUT
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  NOTIFICATION
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  DEPT CLUB
                </Link>
              </li> */
}
