import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto lg:mx-24 px-4 my-12">
      <div className="flex flex-wrap space-y-6 md:space-y-0 md:space-x-3">
        <div className="w-full md:w-1/3 ">
          <h1 className="uppercase text-4xl font-bold">Contact Us</h1>
          <div className="flex mt-6 space-x-2">
            <FaLocationDot className="w-6 h-7 text-gray-600 mt-1" />
            <div>
              <h2 className="mb-2">Our Address</h2>
              <p>
                Government Engineering College Sreekrishnapuram, Kerala, 678633
              </p>
            </div>
          </div>
          <div className="flex mt-6 space-x-2">
            <MdOutlineEmail className="w-6 h-7 text-gray-600 mt-1" />
            <div>
              <h2 className="mb-2">Email Us</h2>
              <p>csehod@gecskp.ac.in</p>
              <p>sabitha@gecskp.ac.in</p>
            </div>
          </div>
          <div className="flex mt-6 space-x-2">
            <IoCallOutline className="w-6 h-7 text-gray-600 mt-1" />
            <div>
              <h2 className="mb-2">Call Us</h2>
              <p>+91 4662260565</p>
              <p>+91 9497686588</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[350px] h-[350px] bg-[#a6e2df]"></div>
        <div className="w-full md:w-[350px] h-[350px] bg-[#ded5ec]"></div>
      </div>
    </div>
  );
}
