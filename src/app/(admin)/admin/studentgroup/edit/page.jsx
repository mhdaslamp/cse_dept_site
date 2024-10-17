import AccreditionList from "@/components/admin/accredition/AccreditionList";
import FacultyForm from "@/components/admin/faculty/FacultyForm";
import StudentGroupForm from "@/components/admin/studentgroup/StudentGroupForm";
import React from "react";

const EditAccreditionPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-20 px-20">
        <StudentGroupForm />
      </div>
      <div className="py-20 px-10">
        <AccreditionList />
      </div>
    </div>
  );
};

export default EditAccreditionPage;
