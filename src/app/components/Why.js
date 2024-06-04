"use client";
import Image from "next/image";
import { MdSwipeRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const Reasons = [
  "We have a safe payment system",
  "We are trusted by all",
  "We have the best drivers in the world",
  "A large collection of cars available",
];

export default function App() {
  return (
    <div className="pt-[100px]">
      <div className="container mx-auto px-[20px]">
        <div className=" flex flex-col gap-[25px] xl:flex-row xl:items-center">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 "
          >
            <Image src="/images/why.png" width={1000} height={200} />
          </motion.div>
          <div className="flex-1 ">
            <motion.h1
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="pb-[30px] font-[800] text-[28px] title"
            >
              We Are The Best In The Business.
            </motion.h1>
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur. Donec fringilla diam
              ultrices lacus etiam. Scelerisque in est quis interdum. Elit odio
              massa donec risus congue eu vitae. Mauris morbi commodo mi
              parturient condimentum quam porttitor.
            </motion.p>
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="mt-[40px]"
            >
              {Reasons.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-[8px]">
                    <MdSwipeRightAlt size={40} color="bg-primary" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
