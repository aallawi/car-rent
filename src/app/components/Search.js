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
        searchActive && "py-[24px]"
      } bg-cyan-400 hidden xl:h-[100px] rounded-[20px] xl:max-w-[1300px] xl:mx-auto xl:block w-full relative shadow-lg`}
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
