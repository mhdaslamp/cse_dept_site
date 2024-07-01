"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="border border-gray-400 bg-slate-400 bg-opacity-30 lg:mt-8 max-w-screen-2xl mx-auto font-bold fixed top-0 left-0 right-0 z-10 h-20">
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8 h-20">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block mb-8 h-20">
            <div className="flex gap-4">
              {/* LOGO */}
              <Image
                src="/logo.png"
                alt="Logo image"
                width={80}
                height={60}
                className="w-24 h-14"
              />
              <p
                className={`text-sm text-left text-white mt-4 ${
                  navbar ? "hidden md:block" : "block"
                }`}
              >
                COMPUTER SCIENCE <br /> AND ENGINEERING
              </p>
            </div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={toggleNavbar}
              >
                {navbar ? (
                  <div className="p-2 text-white bg-black w-16 h-10 flex justify-center text-center">
                    <h1 className="text-[16px]">CLOSE</h1>
                  </div>
                ) : (
                  <div className="p-2 text-black bg-white w-16 h-10 flex justify-center text-center">
                    <h1 className="text-[16px]">MENU</h1>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mb-2 h-96 md:h-auto ">
          <div
            className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 h-96 md:h-auto ${
              navbar ? "p-12 md:p-0 block" : "hidden md:block"
            }`}
          >
            <ul className="md:h-auto gap-2 items-center justify-center md:flex lg:mt-5 ">
              <NavbarItem
                href="#about"
                label="HOME"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#blog"
                label="ABOUT US"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#contact"
                label="ACADEMICS"
                setNavbar={setNavbar}
                showArrow={navbar}
                hasDropdown={true} // Indicates this item has a dropdown
              />
              <NavbarItem
                href="#projects"
                label="PEOPLE"
                setNavbar={setNavbar}
                showArrow={navbar}
                hasDropdown={true} // Indicates this item has a dropdown
              />
              <NavbarItem
                href="#projects"
                label="ACTIVITIES"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#projects"
                label="PLACEMENTS"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#projects"
                label="CONTACT US"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
