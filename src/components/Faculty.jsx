"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
// import { useMediaQuery } from "react-responsive";

const Faculty = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="bg-neutral-800">
      {isMobile ? <VerticalScroll /> : <HorizontalScroll />}
    </div>
  );
};
export default Faculty;

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#161616]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 h-screen w-auto p-8">
          <Card
            card={{
              url: "/ImageScroll/gec.png",
              height: "670px",
              width: "800px",
              title: "Title 1",
              id: 1,
            }}
            position="top-0 right-0"
          />
          <Card
            card={{
              url: "/ImageScroll/image2.png",
              height: "650px",
              width: "650px",
              title: "Title 2",
              id: 2,
            }}
            position="bottom-0 right-0"
          />
          <Card
            card={{
              url: "/ImageScroll/image1.png",
              height: "650px",
              width: "550px",
              title: "Title 3",
              id: 3,
            }}
            position="top-0 right-0"
          />
          <Card
            card={{
              url: "/ImageScroll/image2.png",
              height: "650px",
              width: "650px",
              title: "Title 4",
              id: 4,
            }}
            position="bottom-0 right-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

const VerticalScroll = () => {
  return (
    <section className="relative h-full bg-neutral-900">
      <div className="flex flex-col h-auto w-screen items-center overflow-hidden ">
        <motion.div>
          <Card
            card={{
              url: "/ImageScroll/image1.png",
              height: "390px",
              width: "310px",
              title: "Title 1",
              id: 1,
            }}
            position="top-[50%] right-10 -translate-y-1/2 "
          />
          <Card
            card={{
              url: "/ImageScroll/image2.png",
              height: "350px",
              width: "310px",
              title: "Title 2",
              id: 2,
            }}
            position="top-[50%] left-10 -translate-y-1/2 "
          />
          <Card
            card={{
              url: "/ImageScroll/image1.png",
              height: "390px",
              width: "310px",
              title: "Title 3",
              id: 3,
            }}
            position="top-[50%] right-10 -translate-y-1/2 "
          />
          <Card
            card={{
              url: "/ImageScroll/image2.png",
              height: "350px",
              width: "310px",
              title: "Title 4",
              id: 4,
            }}
            position="top-[50%] left-10 -translate-y-1/2 "
          />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, position }) => {
  return (
    <div className="main-card w-[400px] h-[500px] md:w-[800px] xl:w-[800px] md:h-auto xl:h-auto relative">
      <div
        key={card.id}
        className={`group absolute overflow-hidden bg-neutral-200 ${position} border-2`}
        style={{ height: card.height, width: card.width }}
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 ease-in-out group-hover:scale-100"
        ></div>
      </div>
    </div>
  );
};
