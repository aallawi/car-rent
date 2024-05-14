"use client";
import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive
          ? " bg-green-400 rounded-none xl:h-[80px]"
          : " bg-red-400 rounded-[20px] py-[24px] xl:pr-[16px xl:h-[100px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className=" xl:h-full flex items-center px-[25px] xl:px-0">
        {/* <h4>Rent the car</h4> */}
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
      </div>
    </div>
  );
}
