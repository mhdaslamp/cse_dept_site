import React from "react";
import studentsData from "../constants/contents";

function StudentCard({ name, batch, cgpa, image }) {
  return (
    <div className="student-card text-center flex flex-col items-center">
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
  return (
    <div className="bg-white w-full px-24  mx-auto">
      <div className="bg-[#e9e9e8] py-6">
        <div className="flex justify-start mb-4 pl-2">
          <h1 className="text-black sm:text-2xl lg:text-5xl md:text-4xl text-4xl font-bold font-bebasneue">
            . TOPPERS
          </h1>
        </div>

        <div className="justify-center mx-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm:gap-5 px-[20px] ">
          {studentsData.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toppers;
