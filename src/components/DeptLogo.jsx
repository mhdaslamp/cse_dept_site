'use client';

import { DeptConstants } from "@/constants/DeptConstants";
import Image from "next/image";
import { useEffect, useState } from "react";

const DeptLogo = () => {
    const [capPosition, setCapPosition] = useState({ left: 0, top: 0 });
    const [show, setShow] = useState(false)
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


    return (
        <div className='flex flex-col h-screen px-12 md:px-20 py-8 justify-center items-center'>

            {show && (
                <div className="absolute" style={{ top: capPosition.top, left: capPosition.left }}>
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
        </div>
    )
}

export default DeptLogo
