"use client";
import Image from "next/image";
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
      className={`md:flex lg:mt-8 max-w-screen-2xl mx-auto font-bold fixed top-0 left-0 right-0 z-10 h-20 `}
    >
      <div className="flex items-center justify-between py-3 px-4 md:px-8 h-20  mx-auto ">
        <div className="flex gap-4 items-center">
          <Image
            src={navbar ? "/logo(black).png" : "/logo.png"}
            alt="Logo image"
            width={80}
            height={60}
            className={`w-24 h-14 mb-3`}
          />
          <p
            className={`text-sm text-left text-white mt-2 ${
              navbar ? "hidden md:block" : "block"
            }`}
          >
            COMPUTER SCIENCE <br /> AND ENGINEERING
          </p>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none"
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
      <div
        className={`flex-1 h-screen bg-white p-2 px-8 text-black 
          ${navbar ? "p-5 block" : "hidden"} 
          md:bg-transparent md:block md:p-0 md:h-auto md:pb-0 md:mt-0`}
      >
        <ul className="items md:h-20 md:pl-28 gap-2 items-center justify-center md:flex lg:pt-6 md:text-white text-black ">
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
            href="/academics"
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
          <h2>@2024 CSE ASSOCIATION</h2>
          <div className="flex justify-between">
            <div>
              <h2>
                DESIGN AND POWERED BY{" "}
                <span className="underline font-semibold">CSE STUDENTS</span>
              </h2>
            </div>
            <div className="flex ml-20 gap-1">
              <AiFillInstagram className="w-6 h-5 hover:scale-95" />
              <FaLinkedin className="w-4 h-5 hover:scale-95" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
