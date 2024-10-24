"use client";

import React from "react";
import ListItem from "../ListItem";
import { deleteStudent } from "@/actions/student.action";

const StudentList = ({ studentList }) => {
  return (
    <div className="space-y-1">
      <h2 className="text-right text-3xl font-medium">STUDENT LIST</h2>
      <ul className="space-y-1">
        {studentList.map((item) => (
          <ListItem
            key={item._id}
            title={item.name}
            handleDelete={async () => {
              await deleteStudent(item._id);
            }}
          />
        ))}
        {studentList.length === 0 && (
          <p className="text-center text-red-500">No Data</p>
        )}
      </ul>
    </div>
  );
};

export default StudentList;
