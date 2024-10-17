import AccreditionList from "@/components/admin/accredition/AccreditionList";
import AdvisoryBoardForm from "@/components/admin/advisorbound/AdvisorBoundForm";
import React from "react";

const EditAccreditionPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-20 px-20">
        <AdvisoryBoardForm />
      </div>
      <div className="py-20 px-10">
        <AccreditionList />
      </div>
    </div>
  );
};

export default EditAccreditionPage;
