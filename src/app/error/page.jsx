"use client";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

export default function page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen text-center md:text-left bg-black text-white">
      <div className="flex flex-col items-center scale-100 ease-in-out duration-300 hover:scale-110">
        <h1 className="text-5xl font-bold">404 ERROR</h1>
        <p className="text-gray-400 text-base font-light mt-4">
          This is not the page you're looking for
        </p>
        <div className="flex justify-center md:justify-start mt-6">
          <a
            href="/"
            className="text-lg text-gray-400 font-light hover:underline mr-5"
          >
            GO TO
          </a>

          <a
            href="/"
            className="text-lg font-medium hover:underline text-center inline-flex items-center"
          >
            HOME
            <span className="inline-flex items-center justify-center ml-2">
              <FaAngleRight />
            </span>
          </a>
        </div>
      </div>
      <div className="divider w-[2px] h-[100px] bg-white mx-20"></div>
      <div className="image-container mt-8 md:mt-0 md:ml-5 cursor-pointer ">
        <Image
          src="/errorComputer.png"
          alt="Computer Image"
          width={280}
          height={180}
          className="object-contain scale-100 ease-in-out duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}
