"use client";
import { useContext, useRef } from "react";
import { SearchContext } from "../context/searchContext";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  const divRef = useRef(null);
  const handleDivClick = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={divRef}
      onClick={handleDivClick}
      className={`${
        searchActive && "py-[24px]"
      } bg-cyan-400 hidden xl:h-[80px] rounded-[20px] xl:max-w-[1300px] xl:mx-auto xl:block w-full relative shadow-lg`}
    >
      <div className=" xl:h-full flex items-center px-[25px] xl:px-0">
        {/* <h4>Rent the car</h4> */}
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
        <button className="btn bg-primary hover:bg-primary-hover h-[50px] max-w-[200px] mr-[20px]">
          Show Cars
        </button>
      </div>
    </div>
  );
}
