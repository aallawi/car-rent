"use client";
import Image from "next/image";

import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import Search from "./Search";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-gray-200" id="home">
      <div className="xl:container mx-auto h-full pt-[100px] xl:pt-[50px] flex justify-between items-center flex-col xl:flex-row">
        <div className="bg-[#ff5f00] pl-[25px] text-white xl:text-black xl:bg-transparent w-full py-8 text-center xl:text-left xl:max-w-[600px]">
          <h1 className="title text-[3vw] font-[800] pb-[20px]">
            RENT FIRST CLASS.
          </h1>
          <h1 className="title text-[3vw] font-[800]">PAY ECONOMY.</h1>
          <p className="title text-[0.2vw] font-[600] pt-[30px] text-white xl:text-black">
            Premium car rental at affordable rates. Worldwide.
          </p>
        </div>
        <div className="container flex items-center justify-center flex-1 order-first w-full xl:order-1">
          <Image src="/images/test2.png" width={900} height={400} />
        </div>
      </div>
      {searchActive ? (
        <div className=" fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className=" mt-[-50px] w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
}

// <section className="hero h-screen xl:h-[90vh]" id="home">
// <div className=" container mx-auto h-full xl:pt-[40px] text-[30px] flex justify-center items-center flex-col">
//   <div className="bg-white bg-opacity-70 mt-[80px] px-[20px] py-[40px] text-black text-center border-[2px] border-black">
//     <h1 className="font-bold pb-[10px]">RENT FIRST CLASS.</h1>
//     <h1 className="font-bold">PAY ECONOMY.</h1>
//     <p className="text-[24px] pt-[30px] text-black">
//       Premium car rental at affordable rates. Worldwide.
//     </p>
//   </div>
// </div>
// {searchActive ? (
//   <div className=" fixed top-[80px] z-10 w-full max-w-[1920px]">
//     <Search />
//   </div>
// ) : (
//   <div className=" mt-[-50px] w-full max-w-[1300px] mx-auto">
//     <Search />
//   </div>
// )}
// </section>
