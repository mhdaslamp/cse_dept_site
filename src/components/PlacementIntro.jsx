import Image from "next/image";
import React from "react";
import placementLogo from "../../public/placement-cell-logo.svg";

const PlacementIntro = () => {
  return (
    <section className="bg-white w-full px-6 py-32 ">
      <div className="px-20 pt-24">
        <div className=" grid grid-cols-[25%_75%] ">
          <div className="">
            <div className="">
              <Image
                className=""
                src={placementLogo}
                alt="Background"
              />
            </div>
          </div>

          <div className="">
            <h1 className="flex justify-end mb-4 text-black text-[56px] lg:text-5xl font-normal font-bebasneue lead">
              . Training & Placement
            </h1>
            <div className="">
              <p className="font-normal text-gray-500 font-montserrat text-[24px]/[44.4px] leading-10 ">
                Lorem ipsum dolor sit amet consectetur. Turpis consequat nec et
                suscipit in urna rhoncus. Ut amet ut arcu in ornare urna
                blandit. Sollicitudin sit est a odio. Eros vulputate etiam
                euismod risus augue feugiat in quis. Est molestie tristique
                feugiat faucibus tortor.Tortor nibh nunc congue consequat.
                Eleifend mauris magna egestas ultrices porta adipiscing turpis
                nunc praesent. Tortor phasellus diam arcu a massa. Cras lacus
                nec tellus nulla consectetur rhoncus tristique pellentesque
                montes. Dictumst sit vel faucibus egestas. Vehicula consectetur
                nisl in nulla venenatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementIntro;
