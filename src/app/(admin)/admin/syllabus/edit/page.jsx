import AccreditionList from "@/components/admin/accredition/AccreditionList";
import SyllabusForm from "@/components/admin/syllabus/SyllabusForm";
import React from "react";

const EditAccreditionPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-20 px-20">
        <SyllabusForm />
      </div>
      <div className="py-20 px-10">
        <AccreditionList />
      </div>
    </div>
  );
};

export default EditAccreditionPage;
