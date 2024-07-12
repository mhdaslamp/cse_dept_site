import React from "react";
import Navbar from "@/components/HomePage/Navbar/page";
import Footer from "@/components/Footer";
import AcadamicsIntro from "@/components/AcadamicsIntro";
import AcadamicsPrograms from "@/components/AcadamicsPrograms";
import AcadamicsLabs from "@/components/AcadamicsLabs";
import AcadamicsCoursesMtech from "@/components/AcadamicsCoursesMtech";
import AcadamicsCoursesBtech from "@/components/AcadamicsCoursesBtech";

const Acadamics = () => {
  return (
    <div className="">
      <Navbar />
      <AcadamicsIntro />
      <AcadamicsPrograms />
      <AcadamicsCoursesBtech/>
      <AcadamicsCoursesMtech/>
      <AcadamicsLabs />
      <Footer />
    </div>
  );
};

export default Acadamics;
