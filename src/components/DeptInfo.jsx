"use client";
import { DeptConstants } from "@/constants/DeptConstants";
import Image from "next/image";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import ColoredSection from "./ColoredSection";
import { useEffect, useRef, useState } from "react";

const DeptInfo = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(1024);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  function changeWidth() {
    setWidth(containerRef.current?.getBoundingClientRect().width ?? 1024);
  }

  useEffect(() => {
    changeWidth();
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const ANIMATION_START = 0.1;
  const ANIMATION_END = 0.5;
  const SCALEFACTOR = 512;

  const scaleBy = width / SCALEFACTOR;

  const scale = useTransform(
    scrollYProgress,
    [ANIMATION_START, ANIMATION_END],
    [Math.max(1, scaleBy), 1]
  );
  const y = useTransform(
    scrollYProgress,
    [ANIMATION_START, ANIMATION_END],
    [-300, 0]
  );

  return (
    <ColoredSection color="BLACK">
      <div className="bg-white w-full px-12 md:px-20 py-16 nav-md:py-8 nav-md:min-h-[200vh]" id="dept">
        <div
          ref={containerRef}
          className="nav-md:min-h-screen nav-md:mt-[100vh]"
        >
          <div className="w-full grid grid-cols-1 nav-md:grid-cols-[auto_40%] relative gap-12">
            <div className="">
              <motion.h1
                style={{
                  scale: scale,
                  y: y,
                }}
                className={`font-medium text-4xl origin-left absolute leading-[1.1em] hidden nav-md:block`}
              >
                The Department of Computer <br /> Science and Engineering
              </motion.h1>
              <h1
                className={`font-medium text-xl sm:text-2xl md:text-3xl leading-[1.1em] block nav-md:hidden`}
              >
                The Department of Computer <br /> Science and Engineering
              </h1>
              <p
                className="text-gray-400  sm:text-2xl md:text-3xl nav-md:pt-28 pt-4 text-xl nav-md:text-3xl"
                // style={{ paddingTop: showDivs ? "" : `${paddingVal * 2}px` }}
              >
                {DeptConstants.desc}
              </p>
              <button className="bg-black text-white p-2 mt-4 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Read More {">"}
              </button>
            </div>
            <div className="hidden nav-md:flex justify-center items-center">
              <Image
                className="w-full"
                src="/computer.png"
                width={480}
                height={280}
                alt="computer"
              />
            </div>
          </div>
        </div>
      </div>
    </ColoredSection>
  );
};

export default DeptInfo;
