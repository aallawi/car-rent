"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const all_hours = ["10:00 AM", "12:00 AM", "03:00 PM", "06:00 PM", "09:00 PM"];

export default function HoursSelection() {
  const [hours, setHours] = useState("10:00 AM");
  const [open, setOpen] = useState(false);

  const handleSelectHours = (item) => {
    setHours(item);
    setOpen(false);
  };

  return (
    <Menu
      as="div"
      className="flex w-full xl:flex-row"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="relative flex-1">
        <Menu.Button
          className="flex flex-col w-full h-full dropdown-btn justify-center items-center xl:items-start xl:pl-[30px]"
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-[8px] gap-y-[8px] xl:gap-y-0">
            <FaClock className="text-secondary" />
            <div className="text-[15px] uppercase font-[700]">Select Hours</div>
          </div>
          <div className="flex items-center justify-center gap-x-[10px]">
            <div className="font-medium text-[12px] text-primary xl:ml-[25px]">
              {hours}
            </div>
            <FaArrowRightLong className="text-[12px]" />
            <div className="font-medium text-[12px] text-primary">{hours}</div>
          </div>
        </Menu.Button>
        {open && (
          <Menu.Items
            className="dropdown-menu shadow-lg absolute top-[-250px] xl:top-[90px] left-1/2 xl:left-0 z-10 
            transform -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-gray-50 max-w-[330px] py-[10px] rounded-[10px]"
          >
            {all_hours.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    onClick={() => handleSelectHours(item)}
                    className={`cursor-pointer flex items-center gap-4 py-[10px] pl-[25px] ${
                      active ? "bg-cyan-400 pl-[40px]" : ""
                    } hover:bg-cyan-400 transition-all duration-300 font-semibold hover:pl-[40px] text-[12px] uppercase`}
                  >
                    <span>{item}</span>
                    <FaArrowRightLong className="text-[12px]" />
                    <span>{item}</span>
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        )}
      </div>
    </Menu>
  );
}
