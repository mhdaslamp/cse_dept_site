"use client";

import React, { useEffect } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../HomePage/Navbar/page";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative h-screen overflow-hidden ">
      <div className={`absolute w-full z-10`} data-aos="fade-down">
        <Navbar />
      </div>
      <div
        className="flex gap-2 content absolute bottom-0 left-0 w-full p-12 text-white"
        data-aos="fade-right"
      >
        <div className="w-3 h-3 mt-3 bg-white"></div>
        <div>
          <h1 className="text-4xl font-bold">
            COMPUTER SCIENCE AND ENGINEERING
          </h1>
          <p className="font-bold">
            GOVERNMENT ENGINEERING COLLEGE, SREEKRISHNAPURAM, PALAKKAD
          </p>
        </div>
      </div>
      <a>
        <MdOutlineNotifications
          className="bottom-48 absolute mt-48 right-0 box-content px-3 py-2 w-12 rounded-sm"
          style={{
            backgroundColor: "rgba(136, 103, 80, 0.8)",
            color: "#FFFFFF",
          }}
          size={26} // Adjust the size as needed
          data-aos="fade-left"
        />
      </a>

      <div className="overflow-hidden relative min-w-screen h-screen">
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
