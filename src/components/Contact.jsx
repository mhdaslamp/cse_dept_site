import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

import React from "react";

export default function Contact() {
  return (
    <div className="container mx-32">
      <div>
        <h1 className="uppercase text-3xl">Contact Us</h1>
        <div className="flex">  
          <div>
            <FaLocationDot />
          </div>
          <div>
            <h2>Our Address</h2>
            <p>Government Engineering College Sreekrishnapuram,Kerala,678633</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <MdOutlineEmail />
          </div>
          <div>
            <p>csehod@gecskp.ac.in</p>
            <p>sabitha@gecskp.ac.in</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <IoCallOutline />
          </div>
          <div>
            <p>91+ 4662260565</p>
            <p>91+ 9497686588</p>
          </div>
          <p>Government Engineering College Sreekrishnapuram,Kerala,678633</p>
        </div>
      </div>
      <div className="bg-yellow-400 w-96 h-80"></div>
      <div className="bg-red-400 w-96 h-80"></div>
    </div>
  );
}
