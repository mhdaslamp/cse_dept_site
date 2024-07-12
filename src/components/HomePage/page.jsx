"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar/page";

function Home() {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="flex gap-2 content absolute bottom-0 left-0 w-full p-8 lg:p-12 text-white"
        data-aos="fade-right"
      >
        <div className="lg:w-3 lg:h-3 w-2 h-2 mt-3 bg-white"></div>
        <div>
          <h1 className="lg:text-4xl font-bold text-[20px]">
            COMPUTER SCIENCE AND ENGINEERING
          </h1>
          <p className="font-bold lg:text-[18px] text-[10px]">
            GOVERNMENT ENGINEERING COLLEGE, SREEKRISHNAPURAM, PALAKKAD
          </p>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="bottom-48 absolute mt-48 right-0 box-content px-3 py-2 w-12 rounded-sm bg-slate-400 bg-opacity-40 cursor-pointer"
        data-aos="fade-left"
      >
        <MdOutlineNotifications
          style={{
            color: "#FFFFFF",
          }}
          size={26} // Adjust the size as needed
        />
      </div>
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
