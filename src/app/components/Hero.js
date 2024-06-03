"use client";
import Image from "next/image";

import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import Search from "./Search";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

export default function HeroImage() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="hero xl:h-[90vh]" id="home">
      <div className="xl:container mx-auto h-full pt-[100px] xl:pt-[50px] flex justify-between items-center flex-col xl:flex-row">
        <div className="bg-[#ff5f00] text-white xl:bg-transparent w-full py-8 text-center xl:text-left xl:max-w-[600px]">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="title text-[8vw] xl:text-[4vw] font-[800] pb-[20px]"
          >
            RENT FIRST CLASS.
            <br />
            PAY ECONOMY.
          </motion.h1>
          <motion.h6
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="title text-[1vw] font-[600] pt-[30px]"
          >
            Premium car rental at affordable rates. Worldwide.
          </motion.h6>
        </div>
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
          className="container flex items-center justify-center flex-1 order-first w-full xl:order-1"
        >
          <Image src="/images/heroImage.png" width={900} height={400} />
        </motion.div>
      </div>
      {searchActive ? (
        <div className=" fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className=" mt-[-50px] w-full max-w-[1300px] mx-auto"
        >
          <Search />
        </motion.div>
      )}
    </section>
  );
}
