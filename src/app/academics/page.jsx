import React from "react";
import AcadamicsIntro from "@/app/academics/posandpeo/AcadamicsIntro";
import AcadamicsPrograms from "@/app/academics/prgmsandsyllabus/AcadamicsPrograms";
import Labs from "@/app/academics/labs/AcadamicsLabs";
import AcadamicsCoursesMtech from "@/components/AcadamicsCoursesMtech";
import AcadamicsCoursesBtech from "@/components/AcadamicsCoursesBtech";
import AcadamicsSidebar from "@/components/AcadamicsSidebar";

const Acadamics = () => {
  return (
    <div className="">
      <AcadamicsIntro />
      <AcadamicsPrograms />
      {/* <AcadamicsCoursesBtech />
      <AcadamicsCoursesMtech />
      <Labs /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Acadamics;
