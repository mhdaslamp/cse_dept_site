// app/activity/student_gp/page.jsx
"use client";
import React, { useState } from "react";
import { data } from "./content";
import Image from "next/image";
import ColoredSection from "../../../../components/ColoredSection";

export default function Page() {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <ColoredSection color="BLACK">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="bg-[#e9e8e9]">
          <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex justify-start items-end pb-4 sm:pb-6 md:pb-8">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black mb-3 sm:mb-4 md:mb-5 mr-2 sm:mr-3"></span>
            <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold">
              Student groups
            </h1>
          </div>
        </div>
        {data.map((item, index) => (
          <HoverableItem
            key={index}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}

        {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
      </div>
    </ColoredSection>
  );
}

function HoverableItem({ item, onClick }) {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 pt-10 sm:pt-15 md:pt-20 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="bg-slate-500 relative w-full md:w-1/5">
        <Image
          src={item.img}
          alt={item.head}
          width={800}
          height={400}
          className={`w-full h-auto ${
            isHover ? "" : "grayscale"
          } transition-all duration-300`}
        />
      </div>
      <div className="w-full md:w-3/5">
        <div className="flex mb-3 sm:mb-4 md:mb-5 justify-start flex-row items-end">
          <span
            className={`dot w-1 h-1 bg-black mb-1 sm:mb-2 ${
              isHover ? "block" : "hidden"
            } transition-opacity duration-400`}
          ></span>
          <h1
            className={`text-xl sm:text-2xl ${
              isHover ? "translate-x-2 sm:translate-x-3" : ""
            } transition-transform duration-300`}
          >
            {item.head}
          </h1>
        </div>
        <p
          className={`${
            isHover ? "text-[#dc856e]" : "text-[#000000]"
          } transition-colors duration-300 text-base sm:text-lg md:text-[20px] text-justify`}
        >
          {item.content}
        </p>
        <button
          className={`p-2 ${
            isHover ? "bg-[#dc856e]" : "bg-[#696969]"
          } text-center border hover:border-[#dc856e] hover:bg-[#ffffff] hover:text-[#dc856e] mt-4 sm:mt-6 md:mt-8 text-white transition-all duration-300`}
        >
          {item.btn}
        </button>
      </div>
    </div>
  );
}

function Modal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-300 w-full max-w-[700px] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:space-x-10 relative">
        <button
          className="absolute top-2 right-2 bg-white text-black px-2 py-1 hover:text-gray-800"
          onClick={onClose}
        >
          Close
        </button>
        <div className="w-full md:w-2/5 mb-4 md:mb-0 flex flex-col justify-between">
          <div>
            <Image
              src={item.img}
              alt={item.head}
              width={400}
              height={200}
              className="w-full h-auto object-cover mb-4"
            />
            <h1 className="text-xl sm:text-2xl font-bold mb-4">{item.head}</h1>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <p className="text-base sm:text-lg text-gray-700 mb-2 text-justify">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}
