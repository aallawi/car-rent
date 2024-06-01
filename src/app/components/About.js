"use client";

import Why from "./Why";
import Convenience from "./Convenience";

export default function About() {
  return (
    <section className="flex items-center justify-center" id="about">
      <div className="container mx-auto ">
        <Convenience />
        <Why />
      </div>
    </section>
  );
}
