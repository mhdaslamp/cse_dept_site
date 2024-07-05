"use client";

import React, { useEffect } from "react";
import studentsData from "../../constants/contents";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import "./Toppers.css";
import AOS from "aos";
import "aos/dist/aos.css";

function StudentCard({ name, batch, sem, cgpa, image, index }) {
  return (
    <div
      className="w-auto h-auto"
      data-aos="fade-up"
      data-aos-delay={`${(index + 1) * 600}`}
    >
      <div className="student-card h-[200px] sm:h-[300px] md:h-[300px] lg:h-[300px]">
        <div className="student-card-inner text-center w-full items-center mt-8 md:mt-0 flex flex-row sm:flex-col md:flex-col xl:flex-col">
          <img
            src={image}
            alt={name}
            className="w-[140px] h-[180px] sm:h-[200px] md:h-[200px] lg:h-[200px] sm:w-full md:w-full lg:w-full"
          />
          <div className="student-details bg-white w-[200px] sm:w-full md:w-full lg:w-full h-[180px] sm:h-auto md:h-auto lg:h-auto flex flex-col sm:block justify-end sm:justify-center relative md:justify-center lg:justify-center items-center">
            <div className="absolute top-2 right-1 sm:hidden md:hidden lg:hidden w-[80px] h-[27px] grid grid-cols-2 ">
              <p className=" w-full flex p-1 justify-center items-center text-black hover:bg-[#9E9E9E] hover:text-white transition-all ">
                <HiArrowLeft size={22} />
              </p>
              <p className=" w-full flex p-1 justify-center items-center text-black hover:bg-[#9E9E9E] hover:text-white transition-all ">
                <HiArrowRight size={22} />
              </p>
            </div>
            <p className="text-black text-base font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{batch} Batch</p>
            <p className="text-gray-500 text-sm">CGPA {cgpa}</p>
            <p className="text-white font-semibold text-sm w-full bg-[#DD846E] py-[4px] mt-8 sm:mt-0 md:mt-0 lg:mt-0">
              {sem} TOPPER
            </p>
          </div>
        </div>
        <div className="w-auto h-auto hidden sm:block md:block xl:block">
          <div className="arrow-buttons h-[27px] bg-white flex flex-1 items-center justify-center">
            <p className=" w-full flex py-1 justify-center items-center text-black hover:bg-[#9E9E9E] hover:text-white transition-all ">
              <HiArrowLeft size={22} />
            </p>
            <p className=" w-full flex py-1 justify-center items-center text-black hover:bg-[#9E9E9E] hover:text-white transition-all ">
              <HiArrowRight size={22} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Toppers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mx-auto bg-white w-full px-6 py-8 md:px-20 xl:px-24 sm:px-10">
      <div
        className="backgroundColorClass bg-[#e9e9e8] py-8 sm:pb-10 md:pb-10 xl:py-6 lg:py-6 h-auto"
        data-aos="fade-up"
      >
        <div className="flex justify-start mb-4 pl-5">
          <h1 className="text-black lg:text-5xl text-4xl font-bold font-bebasneue">
            . TOPPERS
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 gap-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm:gap-5 px-[10px] sm:px-[15px] md:px-[20px] lg:px-[20px] justify-items-center">
          {studentsData.map((student, index) => (
            <StudentCard key={index} {...student} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toppers;
