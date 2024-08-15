// app/activity/magazine/Modal.jsx
"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Modal = ({ images, isOpen, onClose, startIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded-md">
        <AiOutlineClose
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          onClick={onClose}
        />
        <div className="flex items-center">
          <AiOutlineLeft
            className="text-3xl cursor-pointer"
            onClick={handlePrevious}
          />
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-96 h-96 object-cover mx-4"
          />
          <AiOutlineRight
            className="text-3xl cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
