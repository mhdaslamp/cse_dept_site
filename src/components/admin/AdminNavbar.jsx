"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="px-10 bg-black min-h-50 w-full">
      <div className="flex justify-between items-center">
        <div className="flex">
          <NavLink
            label="EDIT"
            link="/admin/edit/accredition"
            active={pathname.includes("/edit/")}
          />
          <NavLink
            label="SAVED"
            link="/admin/saved/"
            active={pathname === "/admin/saved"}
          />
          <NavLink
            label="REQUEST STATUS"
            link="/admin/request-status"
            active={pathname === "/admin/request-status"}
          />
        </div>
        <div className="flex gap-2.5 h-full items-center">
          <NavButton label="SUBMIT ALL" />
          <NavButton label="LOGOUT" />
          <p className="text-white text-right">
            hod
            <br />
            @gecskp.ac.in
          </p>
        </div>
      </div>
      <div className="flex">
        <NavLink
          label="Accredition"
          link="/admin/edit/accredition"
          active={true}
        />
        <NavLink label="Toppers" link="/admin/edit/toppers" active={false} />
        <NavLink label="Faculty" link="/admin/edit/faculty" active={false} />
        <NavLink label="Faculty" link="/admin/edit/faculty" active={false} />
      </div>
    </nav>
  );
};

function NavLink({ link, active, label }) {
  return (
    <Link
      className={twMerge(
        "text-white p-6 border-r border-b border-t border-white first-of-type:border-l h-fit",
        active && "text-black bg-white border-black border-b-1"
      )}
      href={link}
    >
      {label}
    </Link>
  );
}

function NavButton({ label, onClick }) {
  return (
    <button className="text-black px-6 py-4 h-fit bg-white" onClick={onClick}>
      {label}
    </button>
  );
}

export default AdminNavbar;
