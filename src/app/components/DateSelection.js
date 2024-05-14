"use client";

import { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <Menu as="div" className="flex w-full xl:flex-row">
      <div className="relative flex-1 ">
        <Menu.Button className="flex flex-col w-full h-full dropdown-btn justify-center items-center xl:items-start xl:pl-[30px]">
          <div className=" flex flex-col xl:flex-row items-center xl:gap-x-[8px] gap-y-[8px] xl:gap-y-0">
            <FaCalendarAlt className=" text-accent" />
            <div className=" text-[15px] uppercase font-[700]">Select Date</div>
          </div>
          <div className=" flex items-center uppercase font-medium text-[12px] text-secondary gap-x-[12px] xl:ml-[25px]">
            <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
            <FaArrowRightLong className=" text-accent text-[12px]" />
            {date[0].endDate ? (
              <div>{format(date[0].endDate, "dd/MM/yyy")}</div>
            ) : (
              <div>{format(date[0].startDate, "dd/MM/yyy")}</div>
            )}
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute top-[-355px] xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden">
          <DateRange
            onChange={(item) => setDate([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#ed1d24"]}
            minDate={addDays(new Date(), 0)}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
}
