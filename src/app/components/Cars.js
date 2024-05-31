"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import "swiper/css";
import Brands from "./Brands";

const All_cars = [
  {
    type: "Luxury",
    name: "Mercedes-Benz S-Class",
    price: 1200,
    stars: 4.9,
    image: "/images/Mercedes-Benz-S-Class.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "4000 HP" },
      { icon: "icons/wheel.svg", text: "AWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Electric",
    name: "Tesla Model 3",
    price: 700,
    stars: 4.8,
    image: "/images/TeslaModel-3.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Electric" },
      { icon: "icons/engine.svg", text: "258 HP" },
      { icon: "icons/wheel.svg", text: "AWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },

  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 250,
    stars: 5,
    image: "/images/ToyotaCorolla.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "1200 HP" },
      { icon: "icons/wheel.svg", text: "FWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 290,
    stars: 3.5,
    image: "/images/FordFocus.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Manual" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "1600 HP" },
      { icon: "icons/wheel.svg", text: "FWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 350,
    stars: 4.2,
    image: "/images/HondaCR-V.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "2000 HP" },
      { icon: "icons/wheel.svg", text: "AWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Camry",
    price: 350,
    stars: 4.5,
    image: "/images/ToyotaCamry.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "2500 HP" },
      { icon: "icons/wheel.svg", text: "FWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Pickup",
    name: "Ford F-150",
    price: 650,
    stars: 4.7,
    image: "/images/FordF-150.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "5 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "5000 HP" },
      { icon: "icons/wheel.svg", text: "4WD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Coupe",
    name: "BMW 4 Series",
    price: 550,
    stars: 4.8,
    image: "/images/BMW-4-Series.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "4 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "3000 HP" },
      { icon: "icons/wheel.svg", text: "RWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 600,
    stars: 4.6,
    image: "/images/MazdaMX-5.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Manual" },
      { icon: "icons/seat.svg", text: "2 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "2000 HP" },
      { icon: "icons/wheel.svg", text: "RWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
  {
    type: "Minivan",
    name: "Chrysler Pacifica",
    price: 500,
    stars: 4.3,
    image: "/images/ChryslerPacifica.png",
    info: [
      { icon: "icons/gearshift.svg", text: "Auto" },
      { icon: "icons/seat.svg", text: "7 Seats" },
      { icon: "icons/gas.svg", text: "Gas" },
      { icon: "icons/engine.svg", text: "3600 HP" },
      { icon: "icons/wheel.svg", text: "FWD" },
      { icon: "icons/gps.svg", text: "GPS" },
    ],
  },
];

export default function Cars() {
  return (
    <section
      className="bg-gray-200 pt-[50px] xl:pt-[120px] pb-[60px]"
      id="cars"
    >
      <div className="container mx-auto px-[20px]">
        <Brands />
        <h1 className=" mb-[30px] text-[25px] font-[800]">Our Collection</h1>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 32 },
            1260: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {All_cars.map((car, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="group max-w-[385px] mx-auto sm:mx-0 bg-white p-[12px] select-none cursor-grab">
                  {/* car image */}
                  <div className="grid place-items-center w-full h-[290px]">
                    <Image
                      src={car.image}
                      width={380}
                      height={284}
                      alt="Car Rental"
                    />
                  </div>
                  <div className="border border-gray-300 border-dashed">
                    {/* price */}
                    <div className="group-hover:bg-blue-800 transition-all duration-300 mt-[-40px] bg-gray-200 mx-auto text-center w-[200px] p-[10px] border border-black group-hover:border-blue-800">
                      <div className=" text-[16px] text-accent font-[600]">
                        ${car.price} / DAY
                      </div>
                      <div className="flex items-center justify-center">
                        <ReactStars
                          count={5}
                          value={car.stars}
                          edit={false}
                          size={24}
                          isHalf={true}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    {/* car name */}
                    <div className="text-center py-[10px] my-[15px] uppercase">
                      <div className="">
                        <div className="text-[20px] font-[700]">{car.name}</div>
                        <div className="text-[14px] text-secondary">
                          {car.type}
                        </div>
                      </div>
                    </div>
                    {/* car info */}
                    <div className="flex flex-wrap w-full ">
                      {car.info.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center pl-[15px] py-[8px] gap-[8px] w-1/2 border border-gray-300 border-dashed"
                          >
                            <Image
                              src={item.icon}
                              width={24}
                              height={24}
                              alt=""
                            />
                            <div className="text-[5px] text-secondary">
                              {item.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* car button */}
                  <div>
                    <button className="btn bg-accent btn-lg mt-[30px] rounded-none">
                      Rent Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-[40px] w-[212px] mx-auto border-[3px] border-solid border-red-600">
        <button className="w-[200px] btn btn-lg bg-accent m-[3px] rounded-none">
          See More
        </button>
      </div>
    </section>
  );
}
