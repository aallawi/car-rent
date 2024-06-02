"use client";
import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import Image from "next/image";
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import { SearchContext } from "../context/searchContext";
import SearchMobile from "./SearchMobile";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      // search
      if (window.scrollY > 570) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <header
      className={`fixed w-full max-w-[1920px] mx-auto z-20 transition-all shadow-md duration-300 
      ${header ? " bg-white py-2" : " bg-transparent py-2"}`}
    >
      <div className="flex flex-col items-center mx-auto xl:container xl:flex-row xl:justify-between">
        {/* logo */}
        <div className="flex items-center justify-between w-full px-4 xl:w-auto">
          <Link
            to="home"
            // smooth={isTabletOrMobile}
            // spy={true}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Image
              src="/images/car_logo.png"
              width={70}
              height={50}
              alt="Car Rental"
              priority
            />
            <span className="logo">Car Rent</span>
          </Link>
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? <RiCloseLargeLine /> : <RiMenu3Fill />}
          </div>
        </div>

        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col items-center w-full bg-white gap-y-6 overflow-hidden font-[700] text-center uppercase text-sm transition-all duration-150
           xl:flex-row xl:font-medium xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 xl:text-left xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="bg-pink-300 cursor-pointer xl:hidden"
            to="/"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            See All Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Testimonial
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={isTabletOrMobile}
            spy={true}
          >
            Contact
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
