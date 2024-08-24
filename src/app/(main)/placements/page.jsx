import React from "react";
import PlacementIntro from "@/components/PlacementIntro";
import PlacementRecruiters from "@/components/PlacementRecruiters";
import PlacmentStatus from "@/components/PlacmentStatus";
import PlacementGraph from "@/components/PlacementGraph";

const Placement = () => {
  return (
    <>
      <PlacementIntro />
      <PlacementRecruiters />
      <PlacmentStatus />
      <PlacementGraph />
    </>
  );
};

export default Placement;
