"use client";
import Image from "next/image";
import { MdSwipeRightAlt } from "react-icons/md";

const Reasons = [
  "We have a safe payment system",
  "We are trusted by all",
  "We have the best drivers in the world",
  "A large collection of cars available",
];

export default function App() {
  return (
    <section className="py-[100px]" id="why">
      <div className="container mx-auto px-[20px]">
        <div className=" flex flex-col gap-[25px] xl:flex-row xl:items-center">
          <div className="flex-1 ">
            <Image src="/images/why2.png" width={1000} height={200} />
          </div>
          <div className="flex-1 ">
            <h1 className="pb-[30px] font-[800] text-[28px] title">
              We Are The Best In The Business.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec fringilla diam
              ultrices lacus etiam. Scelerisque in est quis interdum. Elit odio
              massa donec risus congue eu vitae. Mauris morbi commodo mi
              parturient condimentum quam porttitor.
            </p>
            <div className="mt-[40px]">
              {Reasons.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-[8px]">
                    <MdSwipeRightAlt size={40} color="red" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
