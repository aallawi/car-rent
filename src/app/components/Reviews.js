"use client";
import Image from "next/image";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const clientReviews = [
  {
    name: "Mostafa Emad",
    image: "/images/user1.png",
    position: "Software Engineer",
    review:
      "Excellent service! The car was in great condition and the rental process was smooth and easy. I highly recommend this company for anyone looking to rent a car.",
  },
  {
    name: "Mohamed El-Sharawy",
    image: "/images/user2.png",
    position: "Marketing Manager",
    review:
      "I had a wonderful experience renting a car here. The staff was very friendly and helpful, and the prices were very reasonable. Will definitely use their service again.",
  },
  {
    name: "Shafik Omar",
    image: "/images/user3.png",
    position: "Sales Executive",
    review:
      "Great customer service and a wide range of cars to choose from. The booking process was quick and hassle-free. Highly recommended!",
  },
  {
    name: "Maha Hassan",
    image: "/images/user4.png",
    position: "Graphic Designer",
    review:
      "I was impressed with the quality of the vehicles and the professionalism of the staff. The rental rates were affordable and the service exceeded my expectations.",
  },
  {
    name: "Ali Badawy",
    image: "/images/user5.png",
    position: "Project Manager",
    review:
      "The car rental experience was fantastic. The car was clean and well-maintained, and the staff made sure everything was taken care of. Highly recommend this company.",
  },
  {
    name: "Tamer Abdallah",
    image: "/images/user6.png",
    position: "HR Specialist",
    review:
      "Renting a car from this company was a breeze. The staff was efficient and the car was ready on time. I appreciated the excellent customer service.",
  },
  {
    name: "Asel Nasef",
    image: "/images/user7.png",
    position: "Financial Analyst",
    review:
      "The best car rental experience I've ever had. The process was quick, the car was in perfect condition, and the staff was very accommodating. Will rent again.",
  },
  {
    name: "Sara Wagih",
    image: "/images/user8.png",
    position: "Content Writer",
    review:
      "I had a seamless experience with this car rental service. The prices were competitive and the customer support was excellent. Highly recommended for all your rental needs.",
  },
  {
    name: "Mona Moshet",
    image: "/images/user9.png",
    position: "Operations Manager",
    review:
      "From start to finish, the car rental process was flawless. The staff was knowledgeable and the car met all my expectations. Great value for money.",
  },
  {
    name: "Hany Ramzy",
    image: "/images/user10.png",
    position: "Consultant",
    review:
      "I highly recommend this car rental company. The service was top-notch, the car was in excellent condition, and the rental rates were very affordable.",
  },
];

export default function App() {
  return (
    <section className="py-[60px]" id="reviews">
      <div className="container mx-auto px-[20px]">
        <h1 className="text-[25px] text-accent font-[800] text-center mb-[10px]">
          Clients Reviews
        </h1>
        <h1 className=" text-secondary text-[20px] mb-[20px] text-center">
          Our Clients Say About Us
        </h1>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="bg-white mySwiper rounded-tl-[80px] rounded-br-[80px]"
        >
          {clientReviews.map((review, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" flex justify-center items-center text-center py-[40px] px-[40px] rounded-tl-[20px]"
              >
                <div className="">
                  <div className="w-[100px] h-[100px] flex justify-center items-center mx-auto mb-[30px] border border-white rounded-full shadow-lg relative">
                    <Image
                      className="rounded-full"
                      src={review.image}
                      width={80}
                      height={80}
                      alt={review.name}
                    />
                    <div className="absolute inset-0 rounded-full border-[3px] z-[-1] bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"></div>
                  </div>
                  <h1 className=" title text-[25px] font-[700]">
                    {review.name}
                  </h1>
                  <span className=" text-[18px] text-secondary">
                    {review.position}
                  </span>
                  <div className="flex max-w-[1000px] mx-auto gap-[12px] mt-[25px] mb-[60px]">
                    <span>
                      <FaQuoteLeft />
                    </span>
                    <span>{review.review}</span>
                    <span className="flex items-end">
                      <FaQuoteRight />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
