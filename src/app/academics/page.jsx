import React from "react";
import AcadamicsIntro from "../../components/AcadamicsIntro";
import AcadamicsPrograms from "../../components/AcadamicsPrograms";
import Labs from "../../components/AcadamicsLabs";
import AcadamicsCoursesMtech from "@/components/AcadamicsCoursesMtech";
import AcadamicsCoursesBtech from "@/components/AcadamicsCoursesBtech";
import AcadamicsSidebar from "@/components/AcadamicsSidebar";

const Acadamics = () => {
  return (
    <div className="">
      <AcadamicsIntro />
      <AcadamicsPrograms />
      <AcadamicsCoursesBtech />
      <AcadamicsCoursesMtech />
      <Labs />
    </div>
  );
};

export default Acadamics;
