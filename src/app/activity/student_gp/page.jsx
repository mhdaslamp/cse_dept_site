"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [hover, setHover] = useState(false);

  return (
    <div className="">
      <div className="bg-[#e9e8e9] ">
        <div className="container mx-auto w-full h-[350px] flex justify-start items-end pb-8">
          <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
          <h1 className="uppercase text-[48px] font-bold">Student group</h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-row space-x-10 pt-20">
        <div className="bg-slate-500">
          <Image
            src={hover ? "/activity2.png" : "/activity1.png"} // Conditional src based on hover state
            alt="History of the department"
            width={1000} // Desired width
            height={500} // Desired height
            className=""
            onMouseEnter={() => setHover(true)} // Set hover state to true
            onMouseLeave={() => setHover(false)} // Set hover state to false
          />
        </div>
        <div>
          <div className="flex items-center mt-2 relative">
            <span className="dot w-1 h-1 bg-black absolute top-5 left-0"></span>
            <h1 className="mb-5 text-2xl pl-4">IEEE CS</h1>{" "}
            {/* Added padding-left to provide space for the dot */}
          </div>

          <div className="hover:text-[#dc856e]">
            <p className="text-[20px]">
              The IEEE Computer Society (IEEE CS), founded in 1946, is a
              prominent organization within the Institute of Electrical and
              Electronics Engineers (IEEE). With over 60,000 members worldwide,
              it is dedicated to advancing the theory, practice, and application
              of computer and information processing technology. Headquartered
              in Washington, D.C., the society's mission is to be the leading
              provider of technical information, community services, and
              personalized services to the world's computing professionals.
            </p>
            <button className="p-2 text-center bg-[#696969] hover:bg-[#ffffff] hover:text-[#dc856e] border hover:border-[#dc856e] mt-5 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
