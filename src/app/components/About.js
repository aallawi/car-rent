"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  MdOutlineDirectionsCar,
  MdOutlineHomeWork,
  MdOutlineBuildCircle,
} from "react-icons/md";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="flex items-center justify-center bg-gray-200"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div className="flex-1 mb-[30px] xl:mb-0">
            <Image
              src="/images/about.jpg"
              width={750}
              height={420}
              alt="Inside the car"
            />
          </div>
          <div className="flex items-center flex-1 xl:justify-center">
            <div className="xl:max-w-[500px]">
              <h2 className="h2">Car services simplified.</h2>
              <p className=" text-[14px] mb-[40px] max-w-[500px]">
                Rent, choose, and repair with ease. Our convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </p>
              <div className="flex items-center mb-[30px] gap-x-8">
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-[50px] text-accent" />
                  <div className="text-[30px] font-black">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineHomeWork className="text-[50px] text-accent" />
                  <div className="text-[30px] font-black">
                    {inView ? (
                      <CountUp start={0} end={11} duration={3} delay={1} />
                    ) : null}{" "}
                  </div>
                  <div className="text-[13px] font-semibold text-secondary">
                    Rental <br /> Outlets
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-[50px] text-accent" />
                  <div className="text-[30px] font-black">
                    {inView ? (
                      <CountUp start={0} end={23} duration={3} delay={1} />
                    ) : null}
                  </div>
                  <div className="text-[13px] font-semibold text-secondary">
                    Repair <br /> Opints
                  </div>
                </div>
              </div>
              <button className="btn bg-accent btn-lg my-[30px] rounded-none max-w-[350px]">
                See all cars
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <h1>
//   <CountUp end={100} duration={1} />
// </h1>
// <div ref={ref}>
//   {inView ? "Element is in view" : "Element is not in view"}
// </div>
