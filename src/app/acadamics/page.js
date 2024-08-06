import React from "react";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Footer from "@/components/Footer";
import AcadamicsIntro from "@/components/AcadamicsIntro";
import AcadamicsPrograms from "@/components/AcadamicsPrograms";
import AcadamicsLabs from "@/components/AcadamicsLabs";
import AcadamicsCoursesMtech from "@/components/AcadamicsCoursesMtech";
import AcadamicsCoursesBtech from "@/components/AcadamicsCoursesBtech";
import AcadamicsSidebar from "@/components/AcadamicsSidebar";


const Acadamics = () => {
  return (
    <div className="">
      <Navbar />
      <AcadamicsSidebar />
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
