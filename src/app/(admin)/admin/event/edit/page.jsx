import AccreditionList from "@/components/admin/accredition/AccreditionList";
import EventForm from "@/components/admin/event/EventForm";
import FacultyForm from "@/components/admin/faculty/FacultyForm";
import React from "react";

const EditAccreditionPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-20 px-20">
        <EventForm />
      </div>
      <div className="py-20 px-10">
        <AccreditionList />
      </div>
    </div>
  );
};

export default EditAccreditionPage;
