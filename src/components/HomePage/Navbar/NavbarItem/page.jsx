import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRightLong } from "react-icons/fa6";

function NavbarItem({
  href,
  label,
  setNavbar,
  showArrow,
  hasDropdown,
  dropdownItems,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative pb-6 text-[18px] text-white py-2 md:px-6 text-left border-b-2 md:border-b-0 md:hover:bg-transparent hover:scale-x-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between w-full">
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
        {hasDropdown && <FaChevronDown className="ml-2" />}
        {showArrow && !hasDropdown && (
          <FaArrowRightLong className="ml-2 block md:hidden" />
        )}
      </div>
      {isHovered && hasDropdown && dropdownItems && (
        <ul className="absolute left-0 mt-2 bg-[#6b6d71] py-2 shadow-lg w-52">
          {dropdownItems.map((item, index) => (
            <li key={index} className="py-2 px-4 hover:bg-[#7f8184]">
              <Link href={item.href} onClick={() => setNavbar(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavbarItem;
                                                                  