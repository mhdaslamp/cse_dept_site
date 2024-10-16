"use client";

import SubmitButton from "./SubmitButton";

const ListItem = ({ title, type, remark }) => {
  return (
    <li className="bg-[#E9E9E8] p-4">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium text-[#696969]">{title}</p>
        <div className="flex gap-2.5">
          {/* TODO:EDIT OPTION */}
          {/* <SubmitButton label="EDIT" /> */}
          {type === "request-status" && <SubmitButton label="APPROVED" />}
          {type === "saved" ||
            (type === "request-status" && <SubmitButton label="VIEW" />)}

          {type !== "request-status" && <SubmitButton label="DELETE" />}
        </div>
      </div>
      {remark && (
        <div className="flex text-[#696969] text-lg">
          <span className="block shrink-0">REMARK : &nbsp;</span>
          <span className="block flex-1">{remark}</span>
        </div>
      )}
    </li>
  );
};

export default ListItem;
