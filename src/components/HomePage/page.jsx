"use client";

import React, { useEffect } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar/page";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative h-screen overflow-hidden">
      <div className={`absolute w-full z-10`} data-aos="fade-down">
        <Navbar />
      </div>
      <div
        className="flex gap-2 content absolute bottom-0 left-0 w-full p-8 lg:p-12 text-white"
        data-aos="fade-right"
      >
        <div className="lg:w-3 lg:h-3 w-2 h-2 mt-3 bg-white"></div>
        <div className="">
          <h1 className="lg:text-4xl font-bold text-[20px]">
            COMPUTER SCIENCE AND ENGINEERING
          </h1>
          <p className="font-bold lg:text-[18px] text-[10px]">
            GOVERNMENT ENGINEERING COLLEGE, SREEKRISHNAPURAM, PALAKKAD
          </p>
        </div>
      </div>
      <a>
        <MdOutlineNotifications
          className="bottom-48 absolute mt-48 right-0 box-content px-3 py-2 w-12 rounded-sm"
          style={{
            backgroundColor: "transparent",
            color: "#FFFFFF",
          }}
          size={26} // Adjust the size as needed
          data-aos="fade-left"
        />
      </a>

      <div className="overflow-hidden relative w-full h-screen">
        <video
          src="bg.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 z-[-1]"
        />
      </div>
    </div>
  );
}

export default Home;
