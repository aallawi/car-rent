"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  MdOutlineDirectionsCar,
  MdOutlineHomeWork,
  MdOutlineBuildCircle,
} from "react-icons/md";

export default function Convenience() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="flex flex-col xl:flex-row xl:justify-between">
      <div className="flex items-center justify-center flex-1 text-center xl:text-left">
        <div className="xl:max-w-[500px]">
          <h2 className="mb-[30px] text-[25px] font-[800]">
            Car services simplified.
          </h2>
          <p className=" text-[14px] mb-[40px] max-w-[500px]">
            Rent, choose, and repair with ease. Our convenient locations,
            diverse car types, and reliable repair points ensure a seamless car
            experience.
          </p>
          <div className="flex items-center xl:justify-start justify-center mb-[30px] gap-x-8">
            <div className="flex flex-col items-center w-[100px]">
              <MdOutlineDirectionsCar className="text-[50px] text-primary" />
              <div className="text-[30px] font-black">
                {inView ? (
                  <CountUp start={0} end={50} duration={3} delay={1} />
                ) : null}
                +
              </div>
              <div className="text-[13px] font-semibold text-primary">
                car <br /> types
              </div>
            </div>
            <div className="flex flex-col items-center w-[100px]">
              <MdOutlineHomeWork className="text-[50px] text-primary" />
              <div className="text-[30px] font-black">
                {inView ? (
                  <CountUp start={0} end={11} duration={3} delay={1} />
                ) : null}{" "}
              </div>
              <div className="text-[13px] font-semibold text-primary">
                Rental <br /> Outlets
              </div>
            </div>
            <div className="flex flex-col items-center w-[100px]">
              <MdOutlineBuildCircle className="text-[50px] text-primary" />
              <div className="text-[30px] font-black">
                {inView ? (
                  <CountUp start={0} end={23} duration={3} delay={1} />
                ) : null}
              </div>
              <div className="text-[13px] font-semibold text-primary">
                Repair <br /> Opints
              </div>
            </div>
          </div>
          <button className="btn bg-primary hover:bg-primary-hover text-[18px] btn-xl my-[30px] mx-auto xl:ml-[15px] rounded-none max-w-[350px] h-[60px]">
            See all cars
          </button>
        </div>
      </div>
      <div className="order-[-1] xl:order-1 flex-1 flex justify-center mb-[30px] xl:mb-0">
        <Image
          src="/images/about.jpg"
          width={750}
          height={420}
          alt="Inside the car"
        />
      </div>
    </div>
  );
}
