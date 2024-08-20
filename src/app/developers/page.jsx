import ColoredSection from "@/components/ColoredSection";
import React from "react";
import Image from "next/image";

export default function Developers() {
  const data = [
    {
      img: "/teams.png",
      name: "Muhammad Ali",
      position: "UI-UX Designer",
    },
    {
      img: "/teams.png",
      name: "Muhammad Hashiq",
      position: "Full-Stack Developer",
    },
    {
      img: "/teams.png",
      name: "Viswajith vp",
      position: "Full-Stack Developer",
    },
    {
      img: "/teams.png",
      name: "Jerald Joyson",
      position: "Full-Stack Developer",
    },
    {
      img: "/teams.png",
      name: "Bimal Devasia",
      position: "Full-Stack Developer",
    },
    {
      img: "/teams.png",
      name: "Mohammad Nishan",
      position: "Full-Stack Developer",
    },
  ];

  return (
    <ColoredSection>
      <div id="teams" className=" bg-[#0a0a0a] h-screen text-white px-40 pt-20">
        <h1 className="pt-8 text-[100px] font-semibold">Meet our team</h1>
        <div className="flex gap-5">
          {data.map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt="developers"
                width={300}
                height={500}
                className="rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-4xl font-semibold">{item.name}</h3>
                <div className="flex gap-2 mt-1">
                  <div className="relative mt-2 w-4 h-4 bg-[#d9d9d9] rounded-lg " />
                  <h2 className="text-2xl font-semibold ">{item.position}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ColoredSection>
  );
}
