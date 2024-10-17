import AdminNavbar from "@/components/admin/AdminNavbar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <AdminNavbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
