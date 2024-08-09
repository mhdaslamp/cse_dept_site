import React from "react";
import Navbar from "@/app/HomePage/Navbar/Navbar";
import Footer from "@/components/Footer";
import AcadamicsIntro from "@/app/academics/posandpeo/AcadamicsIntro";
import AcadamicsPrograms from "@/app/academics/prgmsandsyllabus/AcadamicsPrograms";
import AcadamicsLabs from "@/app/academics/labs/AcadamicsLabs";
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
      <AcadamicsCoursesBtech />
      <AcadamicsCoursesMtech />
      <AcadamicsLabs />
      {/* <Footer /> */}
    </div>
  );
};

export default Acadamics;
