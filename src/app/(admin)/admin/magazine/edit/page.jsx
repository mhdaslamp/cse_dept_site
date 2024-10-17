import AccreditionList from "@/components/admin/accredition/AccreditionList";
import GalleryForm from "@/components/admin/gallery/GalleryForm";
import MagazineForm from "@/components/admin/magazine/MagazineForm";
import React from "react";

const EditAccreditionPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-20 px-20">
        <MagazineForm />
      </div>
      <div className="py-20 px-10">
        <AccreditionList />
      </div>
    </div>
  );
};

export default EditAccreditionPage;
