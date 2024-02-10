import React from "react";
import { hodName, sampleText } from "../constants/contents";

const HodMessage = () => {
  return (
    <div className="bg-white w-full px-24 py-8 md:px-20 sm:px-16">
      <div className="flex justify-end mb-4">
        <h1 className="text-black sm:text-2xl lg:text-5xl md:text-4xl text-4xl font-bold font-bebasneue">
          . HOD MESSAGE
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:mr-5 md:container md:flex md:items-center justify-center">
          <div className="image-container">
            <img src="/hodImage.jpg" alt="Image of HOD" className="Hod-image" />
            <div className="image-text text-center place-content-center">
              <p className="mt-2">{hodName}</p>
              <p className="text-gray-500 text-sm">HOD, CSE</p>
            </div>
          </div>
        </div>

        <div className="text-gray-500 md:ml-5 sample-text">
          <p>{sampleText}</p>
        </div>
      </div>
    </div>
  );
};

export default HodMessage;
