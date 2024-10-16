import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({ label, className, ...props }) => {
  return (
    <div className="w-full space-y-2">
      <h3 className="font-medium capitalize text-2xl">{label}</h3>
      <input
        className={twMerge(
          "w-full py-6 px-5 bg-[#E9E9E8] placeholder:[#696969] placeholder:uppercase",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
