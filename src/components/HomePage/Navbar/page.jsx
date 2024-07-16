"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavbarItem from "./NavbarItem/page";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

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
      style={
        navbar
          ? { background: "white" }
          : {
              background: "rgba(255, 255, 255, 0.10)",
              backdropFilter: "blur(30px)",
            }
      }
      className={`lg:mt-8 max-w-screen-2xl mx-auto font-bold fixed top-0 left-0 right-0 z-10 h-20`}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-8 h-20">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block mb-8 h-20">
            <div className="flex gap-4">
              {/* LOGOs*/}
              {!navbar ? (
                <Image
                  src="/logo.png"
                  alt="Logo image"
                  width={80}
                  height={60}
                  className={`w-24 h-14 ${
                    navbar ? "hidden md:block" : "block"
                  }`}
                />
              ) : (
                <Image
                  src="/logo(black).png"
                  alt="Logo image"
                  width={80}
                  height={60}
                  className={`w-24 h-14 md:hidden 
                  }`}
                />
              )}

              <p
                className={`text-sm text-left text-white mt-4 ${
                  navbar ? "hidden md:block" : "block"
                }`}
              >
                COMPUTER SCIENCE <br /> AND ENGINEERING
              </p>
            </div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden mt-2">
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

        <div
          className={`flex-1 h-screen bg-white text-black 
              ${navbar ? "p-5 block" : "hidden"} 
              md:bg-transparent md:block md:p-0 md:h-auto md:pb-0 md:mt-0`}
        >
          <ul className="md:h-auto gap-2 items-center relative justify-center md:flex lg:mt-5 md:text-white text-black">
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
          <div className="mt-72 md:hidden absolute">
            <h2>@2024 CSE ASSOSIATION</h2>
            <div className="flex justify-between">
              <div>
                <h2 className="">
                  DESIGN AND POWERED BY{" "}
                  <span className="underline font-semibold">CSE STUDENTS</span>
                </h2>
              </div>
              <div className="flex ml-16 gap-1">
                <p className="hover:scale-95">
                  <AiFillInstagram className="w-6 h-5 hover:scale-95" />
                </p>
                <p className="hover:scale-95">
                  <FaLinkedin className="w-4 h-5 hover:scale-95" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
