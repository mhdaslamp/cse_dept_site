import { getStudents } from "@/actions/student.action";
import AccreditionList from "@/components/admin/accredition/AccreditionList";
import StudentForm from "@/components/admin/student/StudentForm";
import StudentList from "@/components/admin/student/StudentLIst";
import React from "react";

const EditAccreditionPage =async () => {
  const student = await getStudents();
  return (
    <div className="grid grid-cols-2">
      <div className="py-20 px-20">
        <StudentForm />
      </div>
      <div className="py-20 px-10">
        <StudentList studentList={student} />
      </div>
    </div>
  );
};

export default EditAccreditionPage;
