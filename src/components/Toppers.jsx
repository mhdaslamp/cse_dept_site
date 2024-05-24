"use client";

import React, { useEffect } from "react";
import studentsData from "../constants/contents";
import AOS from "aos";
import "aos/dist/aos.css";

function StudentCard({ , batch, cgpa, image, index }) {
  return (
    <div
      className="student-card text-center flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={`${(index + 1) * 600}`} // Apply a delay based on the index of each card
    >
      <img src={image} alt={name} className="w-full" />
      <div className="student-details bg-white w-full">
        <p>{name}</p>
        <p className="text-gray-500 text-sm">{batch} Batch</p>
        <p className="text-gray-500 text-sm">CGPA {cgpa}</p>
      </div>
    </div>
  );
}

const Toppers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white w-full px-24 mx-auto">
      <div
        className="backgroundColorClass bg-[#e9e9e8] py-6"
        data-aos="fade-up"
      >
        <div className="flex justify-start mb-4 pl-2">
          <h1 className="text-black sm:text-2xl lg:text-5xl md:text-4xl text-4xl font-bold font-bebasneue">
            . TOPPERS
          </h1>
        </div>

        <div className="justify-center mx-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm:gap-5 px-[20px] ">
          {studentsData.map((student, index) => (
            <StudentCard key={index} {...student} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toppers;
