"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const all_hours = ["10:00 AM", "12:00 AM", "15:00 PM", "18:00 PM"];

export default function HoursSelection() {
  const [hours, setHours] = useState("10:00 AM");

  return (
    <Menu as="div" className="flex w-full xl:flex-row">
      <div className="relative flex-1 ">
        <Menu.Button className="flex flex-col w-full h-full dropdown-btn justify-center items-center xl:items-start xl:pl-[30px]">
          <div className=" flex flex-col xl:flex-row items-center xl:gap-x-[8px] gap-y-[8px] xl:gap-y-0">
            <FaClock className=" text-accent" />
            <div className=" text-[15px] uppercase font-[700]">
              Select Hours
            </div>
          </div>
          <div className=" flex items-center justify-center gap-x-[10px]">
            <div className="font-medium text-[12px] text-secondary xl:ml-[25px]">
              {hours}
            </div>
            <FaArrowRightLong className=" text-accent text-[12px]" />
            <div className="font-medium text-[12px] text-secondary">
              {hours}
            </div>
          </div>
        </Menu.Button>
        <Menu.Items
          className="dropdown-menu shadow-lg absolute top-[-280px] xl:top-[80px] left-1/2 xl:left-0 z-10 
        transform -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-[#004a79] max-w-[330px] py-[10px] rounded-[10px]"
        >
          {all_hours.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer py-[10px] xl:pl-[25px] hover:bg-gray-50 transition-all duration-300 font-semibold hover:pl-[40px] text-[12px] uppercase"
                onClick={() => setHours(item)}
              >
                {item}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}
