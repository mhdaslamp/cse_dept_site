import React from "react";
import AcadamicsIntro from "@/components/AcadamicsIntro";
import AcadamicsPrograms from "@/components/AcadamicsPrograms";
import AcadamicsLabs from "@/components/AcadamicsLabs";
import AcadamicsCourses from "@/components/AcadamicsCourses";
// import AcadamicsSidebar from "@/components/AcadamicsSidebar";

const Acadamics = () => {
  return (
    <div className="">
      <AcadamicsIntro />
      <AcadamicsPrograms />
      <AcadamicsCourses />
      <AcadamicsLabs />
    </div>
  );
};

export default Acadamics;
