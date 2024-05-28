"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const all_Loactions = [
  "Cairo Airport",
  "Cairo Sheikh Zayed",
  "Luxor Airport",
  "North Coast Marina Gate 5",
  "Sharm El Sheikh Airport",
  "Shatebi, Alexandria",
  "Hurghada, Red Sea",
];

export default function LocationSelection() {
  const [loaction, setLoaction] = useState("Select Loaction");

  return (
    <Menu as="div" className="flex w-full xl:flex-row">
      <div className="relative flex-1 ">
        <Menu.Button className="flex flex-col w-full h-full dropdown-btn justify-center items-center xl:items-start xl:pl-[30px]">
          <div className=" w-full h-[4rem] xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className=" flex flex-col xl:flex-row items-center xl:gap-x-[8px] gap-y-[8px] xl:gap-y-0">
                <FaMapMarkerAlt className=" text-accent" />
                <div className=" text-[15px] uppercase font-[700]">
                  Select Loaction
                </div>
              </div>
              <div className=" uppercase font-medium text-[12px] text-secondary text-center xl:ml-[25px] xl:text-left">
                {loaction}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items
          className="dropdown-menu shadow-lg absolute top-[-320px] xl:top-[90px] left-1/2 xl:left-0 z-10 
        transform -translate-x-1/2 xl:-translate-x-0 text-sm xl:text-left w-full bg-gray-50 max-w-[330px] py-[10px] rounded-[10px]"
        >
          {all_Loactions.map((item, index) => {
            return (
              <div
                onClick={() => setLoaction(item)}
                key={index}
                className=" cursor-pointer py-[10px] xl:pl-[25px] hover:bg-cyan-400 transition-all duration-300 font-semibold hover:pl-[40px] text-[12px] uppercase"
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
