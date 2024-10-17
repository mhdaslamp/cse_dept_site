import { redirect } from "next/navigation";
import React from "react";

const AdminPage = async () => {
  return redirect("/admin/edit/accredition");
};

export default AdminPage;
