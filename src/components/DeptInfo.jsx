"use client"
import { DeptConstants } from '@/constants/DeptConstants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DeptInfo = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showDivs, setShowDivs] = useState(false);
    const [baseFontSize, setBaseFontSize] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
        setBaseFontSize(window.innerWidth >= 640 ? 34 : 25);
      }
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);
    useEffect(() => {
      if (scrollY > 900) {
        setShowDivs(true);
      } else {
        setShowDivs(false);
      }
    }, [scrollY]);

    let fontSize = baseFontSize + Math.max(0, 80 - scrollY * 0.1);
    let paddingVal = Math.max(0, 100 - scrollY * 0.1);
    if (baseFontSize === 25 && fontSize > 50) {
      fontSize = 50;
    }


    return (
      <div className="bg-white w-full px-12 md:px-20 py-8 ">
        <span className={`${showDivs ? "hidden" : ""}`}>
          <h1 className="font-bold" style={{ fontSize: `${fontSize}px` }}>
            {DeptConstants.title}
          </h1>
        </span>
        <div className="w-full flex justify-between">
          <div className="flex flex-col sm:w-6/12">
            <h1
              className={`font-bold ${showDivs ? "" : "hidden"}`}
              style={{ fontSize: `${fontSize}px` }}
            >
              {DeptConstants.title}
            </h1>
            <p
              className="text-gray-500"
              style={{ paddingTop: showDivs ? "" : `${paddingVal * 2}px` }}
            >
              <span className="py-4 text-lg">{DeptConstants.desc}</span>
              <button className="bg-black text-white p-2 mt-4 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Read More {">"}
              </button>
            </p>
          </div>
          <div className="w-5/12 hidden sm:flex justify-center items-center">
            <span style={{ paddingTop: showDivs ? "" : `${paddingVal * 2}px` }}>
              <Image
                src="/Computer.png"
                width={480}
                height={280}
                alt="computer"
              />
            </span>
          </div>
        </div>
      </div>
    );
};

export default DeptInfo;
