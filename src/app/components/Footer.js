"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { IoCallSharp, IoMailOpenSharp } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white">
      <div className="container mx-auto pb-[20px]">
        <div className="flex justify-between gap-6 pt-[50px] text-[16px] flex-wrap">
          <div className="flex-1">
            <div>
              <Link
                to="home"
                className="flex flex-col justify-center cursor-pointer"
              >
                <Image
                  src="/images/car_logo.png"
                  width={70}
                  height={50}
                  alt="Car Rental"
                  priority
                />
                <span className="font-logo text-[18px] font-[800]">
                  Car Rent
                </span>
              </Link>
            </div>
            <p className="my-[30px] text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <IoCallSharp color="#667085" /> <p>+201026469007</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMailOpenSharp color="#667085" /> <p>RentCar@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-[600] text-[18px] mb-6 cursor-pointer">
              Company
            </h4>
            <p className="mb-3 cursor-pointer">New York</p>
            <p className="mb-3 cursor-pointer">Careers</p>
            <p className="mb-3 cursor-pointer">Mobile</p>
            <p className="mb-3 cursor-pointer">Blog</p>
            <p className="mb-3 cursor-pointer">How we work</p>
          </div>
          <div className="flex-1">
            <h4 className="font-[600] text-[18px] mb-6">Work Hours</h4>
            <div className="flex gap-2 mb-3">
              <p>Mon-Fri:</p> <span>9:00AM - 9:00PM</span>
            </div>
            <div className="flex gap-2 mb-3">
              <p>Sat:</p> 9:00AM - 7:00PM
            </div>
            <div className="flex gap-2 mb-3">
              <p>Sun:</p> Closed
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-[600] text-[18px] mb-6">Newsletter</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center gap-1 mt-6 h-[40px]">
              <input
                className="flex-1 h-full p-2 border rounded-none outline-none border-primary"
                type="text"
                placeholder="Your Email"
              />
              <button className="h-full px-2 btn rounded-none bg-secondary max-w-[150px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="p-4 text-center text-[14px] border-t border-solid">
        Copyright © Allawi {currentYear}. Allright reserved.
      </p>
    </div>
  );
}
