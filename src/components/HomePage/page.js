import React from "react";
import { IoIosNotifications } from "react-icons/io";
// import Styles from "globals.css";
import Navbar from "../HomePage/Navbar/page";

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className={`absolute w-full z-10`}>
        <Navbar />
      </div>
      <div className="content absolute bottom-0 left-0 w-full p-12 text-white">
        <h1 className="text-4xl font-bold">COMPUTER SCIENCE AND ENGINEERING</h1>
        <p className="font-bold">
          GOVERNMENT ENGINEERING COLLEGE, SREEKRISHNAPURAM, PALAKKAD
        </p>
      </div>
      <a>
        <IoIosNotifications
          className="bottom-48 absolute mt-48 right-1 box-content px-3 py-2 border-2 border-black bg-white rounded-lg"
          size={30}
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
