"use client";

import { DeptConstants } from "@/constants/DeptConstants";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ColoredSection from "./ColoredSection";

const DeptLogo = () => {
  const [capPosition, setCapPosition] = useState({ left: 0, top: 0 });
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (window) {
      setScroll(window.innerWidth >= 640 ? 1200 : 1800);
    }
    const handleScroll = () => {
      if (window.scrollY > scroll) {
        setShow(true);
        const cseImage = document.querySelector(".cse-image");
        const capImage = document.querySelector(".cap-image");
        if (cseImage && capImage) {
          const cse = cseImage.getBoundingClientRect();
          const cseImageTop = cse.top + window.scrollY - 100;
          if (window.scrollY + 200 < cseImageTop) {
            setCapPosition({
              left: cse.left - 50,
              top: 200 + window.scrollY,
            });
          }
        }
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const firsttext = useRef(null);
  const secondtext = useRef(null);
  const thirdtext = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      requestAnimationFrame(animation);
    } else {
      cancelAnimationFrame(animation);
      xPercent = 0;
      gsap.set([firsttext.current, secondtext.current, thirdtext.current], {
        xPercent: 0,
      });
    }
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    // gsap.set(firsttext.current, { xPercent: xPercent });
    // gsap.set(secondtext.current, { xPercent: xPercent });
    // gsap.set(thirdtext.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <ColoredSection color="BLACK">
      <div className="flex flex-col h-screen px-12 md:px-20 py-8 justify-center items-center">
        {show && (
          <div
            className="absolute"
            style={{ top: capPosition.top, left: capPosition.left }}
          >
            <Image
              src="/cap.png"
              width={200}
              height={200}
              alt="Cap Image"
              className="cap-image"
            />
          </div>
        )}
        <div className="flex justify-center align-items-center">
          <Image
            src="/cse.png"
            width={480}
            height={280}
            alt="cse Image"
            className="cse-image"
          />
        </div>
        <div className="flex sm:flex-row flex-col w-full justify-around pt-8">
          <div className="sm:w-5/12 w-full">
            <Image
              src="/Vision.png"
              width={400}
              height={400}
              alt="vision"
              className="w-full"
            />
            <p className="text-gray-500 text-xl w-10/12">
              {DeptConstants.vision}
            </p>
          </div>
          <div className="flex justify-end sm:w-5/12 w-full ">
            <div className="flex flex-col items-end">
              <Image
                src="/Mission.png"
                width={400}
                height={400}
                alt="mission"
                className="w-full"
              />
              <p className="text-gray-500 text-xl w-10/12">
                {DeptConstants.mission}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex relative whitespace-nowrap overflow-hidden lg:w-[1300px] hidden">
          <div
            className="flex items-center min-w-max  h-[100px] lg:justify-normal justify-center  "
            ref={firsttext}
          >
            <p className="inline-block text-[56px] mx-10 text-[#9E9E9E] font-extrabold font-bebasneue">
              NATIONAL BOARD OF ACCREDITATION ACCREDITED
            </p>
            <img
              src="./nba.svg"
              alt="Description"
              className="inline-block border-x-4 border-[#9E9E9E] px-10 text-[#9E9E9E] border-solid min-w-max"
            />
          </div>

          <div
            className="lg:flex items-center min-w-max h-[100px] hidden"
            ref={secondtext}
          >
            <p className="inline-block text-[56px] mx-10 text-[#9E9E9E] font-bebasneue">
              NATIONAL BOARD OF ACCREDITATION ACCREDITED
            </p>
            <img
              src="./nba.svg"
              alt="Description"
              className="inline-block border-x-4 border-[#9E9E9E] px-10 text-[#9E9E9E] border-solid  min-w-max"
            />
          </div>

          <div
            className="lg:flex items-center min-w-max h-[100px] hidden"
            ref={thirdtext}
          >
            <p className="inline-block text-[56px] mx-10 text-[#9E9E9E] font-bebasneue">
              NATIONAL BOARD OF ACCREDITATION ACCREDITED
            </p>
            <img
              src="./nba.svg"
              alt="Description"
              className="inline-block border-x-4 border-[#9E9E9E] px-10 border-solid  min-w-max"
            />
          </div>
        </div>

        <div className="lg:hidden flex items-center whitespace-nowrap gap-2 h-[100px]  max-w-screen">
          <p className=" text-[24px] text-[#9E9E9E] font-extrabold font-bebasneue">
            NATIONAL BOARD OF ACCREDITATION ACCREDITED
          </p>
          <div className="border-x-4 border-[#9E9E9E] border-solid px-2">
            <img
              src="./nba.svg"
              alt="Description"
              className="  text-[#9E9E9E] min-w-[33px] min-h-[33px]"
            />
          </div>
        </div>
      </div>
    </ColoredSection>
  );
};

export default DeptLogo;
