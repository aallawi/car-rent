"use client";

import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="font-medium xl:hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-[15px]">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />
          <div className=" flex items-center px-[25px]">
            <button className=" btn btn-sm btn-accent w-[165px] mx-auto">
              {/* <button className=" w-[165px] mx-auto"> */}
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
