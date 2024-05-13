"use client";

import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import Search from "./Search";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className=" h-screen xl:h-[90vh] bg-slate-700" id="home">
      <div className=" container mx-auto h-full xl:pt-[40px]">Hero</div>
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
