import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6";

function NavbarItem({ href, label, setNavbar, showArrow, hasDropdown }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex justify-between items-center relative pb-6 text-[18px] text-white py-2 md:px-6 text-left border-b-2 md:border-b-0 md:hover:bg-transparent hover:scale-x-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center w-full">
        {isHovered && (
          <div className="dot w-2 h-2 absolute top-5 left-0 lg:bg-white rounded"></div>
        )}
        <Link
          href={href}
          onClick={() => setNavbar(false)}
          className="flex-grow"
        >
          {label}
        </Link>
        {hasDropdown && <FaChevronDown className="ml-2 " />}
      </div>
      {showArrow && !hasDropdown && (
        <FaArrowRightLong className="ml-2 block md:hidden" />
      )}
    </li>
  );
}

export default NavbarItem;
