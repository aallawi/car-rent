"use client";
import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, Element, Events, scrollSpy } from "react-scroll";
import Image from "next/image";
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import { SearchContext } from "../context/searchContext";
import SearchMobile from "./SearchMobile";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  // const isTabletOrMobile = useMediaQuery({
  //   query: "(min-width: 1300px)",
  // });

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

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <header
      className={`fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 
      ${header ? " bg-white py-2" : " bg-transparent py-2 shadow-md"}`}
    >
      <div className="flex flex-col items-center mx-auto xl:container xl:flex-row xl:justify-between">
        {/* logo */}
        <div className="flex items-center justify-between w-full px-4 xl:w-auto">
          <Link
            to="home"
            // smooth={true}
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
            <span className="font-logo text-[18px] font-[800]">Car Rent</span>
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
            nav ? "max-h-max py-2 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col items-center w-full bg-white gap-y-6 overflow-hidden font-[700] text-center uppercase text-sm transition-all duration-150
           xl:flex-row xl:font-medium xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 xl:text-left xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer font-[700]"
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer font-[700]"
            to="cars"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-100}
            onClick={() => setNav(!nav)}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer font-[700]"
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-60}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
          <Link
            className="cursor-pointer font-[700]"
            to="testimonial"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Testimonial
          </Link>
          <Link
            className="cursor-pointer font-[700]"
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            onClick={() => setNav(!nav)}
          >
            Contact
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
