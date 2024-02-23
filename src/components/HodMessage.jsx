"use client";

import React, { useState, useEffect } from "react";
import { hodName, sampleText } from "../constants/contents";
import AOS from "aos";
import "aos/dist/aos.css";

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Stop interval when text is fully typed
      }
    }, speed);

    return () => clearInterval(typingInterval); // Cleanup function
  }, [index, text, speed]);

  return <span>{displayText}</span>;
};

const HodMessage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [typingStarted, setTypingStarted] = useState(false);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setTypingStarted(true);
    }, 2000); // Start typing after 2000 milliseconds (2 seconds)

    return () => clearTimeout(typingTimer); // Cleanup function
  }, []);

  return (
    <div className="bg-white w-full px-24 py-8 md:px-20 sm:px-16">
      <div className="flex justify-end mb-4" data-aos="fade-up">
        <h1 className="text-black sm:text-2xl lg:text-5xl md:text-4xl text-4xl font-bold font-bebasneue">
          . HOD MESSAGE
        </h1>
      </div>

      <div className="flex md:flex-row justify-center">
        <div
          className="md:mr-5 md:container md:flex md:items-center justify-center "
          data-aos="zoom-in"
          data-aos-delay="1000"
          style={{ flex: "1" }}
        >
          <div className="image-container">
            <img src="/hodImage.jpg" alt="Image of HOD" className="Hod-image" />

            <div className="image-text text-center place-content-center ">
              <p className="mt-2">{hodName}</p>
              <p className="text-gray-500 text-sm">HOD, CSE</p>
            </div>
          </div>
        </div>

        <div
          className="text-gray-500 md:ml-5 sample-text"
          data-aos="fade-up"
          data-aos-delay="1000"
          style={{ flex: "4" }}
        >
          <p>
            {typingStarted && <TypingEffect text={sampleText} speed={10} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HodMessage;
