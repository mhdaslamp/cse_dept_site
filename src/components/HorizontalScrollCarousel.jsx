"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-35%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          <Card
            card={{
              url: "/ImageScroll/image1.png",
              height: "650px",
              width: "550px",
              title: "Title 1",
              id: 1,
            }}
          />
          <Card
            card={{
              url: "/ImageScroll/image2.png",
              height: "650px",
              width: "650px",
              title: "Title 2",
              id: 2,
            }}
          />
          <Card
            card={{
              url: "/ImageScroll/image1.png",
              height: "650px",
              width: "550px",
              title: "Title 3",
              id: 3,
            }}
          />
          <Card
            card={{
              url: "/ImageScroll/image2.png",
              height: "650px",
              width: "650px",
              title: "Title 4",
              id: 4,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative overflow-hidden bg-neutral-200"
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
  );
};
