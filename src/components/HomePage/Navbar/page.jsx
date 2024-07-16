"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavbarItem from "./NavbarItem/page";

const peopleDropdownItems = [
  { label: "Teaching Staffs", href: "#teaching-staffs" },
  { label: "Technical Staffs", href: "#technical-staffs" },
  { label: "Association Member", href: "#association-member" },
  { label: "Students", href: "#students" },
  { label: "Alumni", href: "#alumni" },
];

const academicsDropdownItems = [
  { label: "PO, PsO and PEO", href: "#po-pso-peo" },
  { label: "Programmes and Syllabi", href: "#programmes-syllabi" },
  { label: "Courses", href: "#courses" },
  { label: "Labs", href: "#labs" },
  { label: "Library", href: "#library" },
];

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      style={{
        background: "rgba(255, 255, 255, 0.10)",
        backdropFilter: "blur(30px)",
      }}
      className="bg-slate-400 bg-opacity-10 lg:mt-8 max-w-screen-2xl mx-auto font-bold fixed top-0 left-0 right-0 z-10 h-20"
    >
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
            className={`flex-1 justify-self-center h-[100px]
     md:bg-none
    ${navbar ? "p-12 block" : "hidden"} 
    md:block md:p-0 md:h-auto md:pb-0 md:mt-0`}
          >
            <ul className="md:h-auto gap-2 items-center justify-center md:flex lg:mt-5 ">
              <NavbarItem
                href="/"
                label="HOME"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#about"
                label="ABOUT US"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="/acadamics"
                label="ACADEMICS"
                setNavbar={setNavbar}
                showArrow={navbar}
                hasDropdown={true}
                dropdownItems={academicsDropdownItems}
              />
              <NavbarItem
                href="#people"
                label="PEOPLE"
                setNavbar={setNavbar}
                showArrow={navbar}
                hasDropdown={true}
                dropdownItems={peopleDropdownItems}
              />
              <NavbarItem
                href="#activities"
                label="ACTIVITIES"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#placements"
                label="PLACEMENTS"
                setNavbar={setNavbar}
                showArrow={navbar}
              />
              <NavbarItem
                href="#contact"
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
