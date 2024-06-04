"use client";
import { Link } from "react-scroll";
import { HiArrowUpCircle } from "react-icons/hi2";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const HandelScroll = () => {
      if (window.scrollY > 1500) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", HandelScroll);
    return () => {
      window.removeEventListener("scroll", HandelScroll);
    };
  });

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed z-10 flex items-center justify-center w-12 h-12 cursor-pointer right-5 xl:right-10 bottom-10`}
    >
      <HiArrowUpCircle size={60} />
    </Link>
  );
}
