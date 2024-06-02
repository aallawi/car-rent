"use client";

import Why from "./Why";
import Convenience from "./Convenience";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";

export default function About() {
  return (
    <section className="flex items-center justify-center pt-[100px]" id="about">
      <div className="container mx-auto ">
        <Convenience />
        <Why />
      </div>
    </section>
  );
}
