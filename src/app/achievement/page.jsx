import Acheivers from "./acheivers/page";
import React from "react";
import ColoredSection from "../../components/ColoredSection";
import AcheiversHorizontalScrollCarousel from "./acheiversHorizontalScroll/page";

const page = () => {
  return (
    <ColoredSection className="pt-16" color="BLACK">
      <Acheivers />
      <AcheiversHorizontalScrollCarousel />
    </ColoredSection>
  );
};

export default page;
