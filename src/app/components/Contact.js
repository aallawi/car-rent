"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

export default function Contact() {
  return (
    <section className="pt-[100px]" id="contact">
      <div className="container mx-auto px-[20px]">
        <div className="flex flex-col items-center ">
          <div className="text-center ">
            <motion.h1
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="title font-[800] text-[4vw] leading-[5vw] mb-[30px]"
            >
              Download our App new and hit the road with ease
            </motion.h1>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia
            </motion.p>
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
              className="flex justify-center gap-[10px] mt-[30px]"
            >
              <button className="bg-gray-900 p-[10px] rounded-[6px]">
                <Image
                  src="/images/app-store.svg"
                  width={130}
                  height={35}
                  alt="app store"
                />
              </button>
              <button className="bg-gray-900 p-[10px] rounded-[6px]">
                <Image
                  src="/images/google-play.svg"
                  width={130}
                  height={35}
                  alt="google play"
                />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="flex items-end justify-center overflow-hidden px-[10px]"
          >
            <div className="relative w-[200px] h-[400px] Img-left">
              <Image
                src="/images/cta1.png"
                layout="fill"
                objectFit="cover"
                alt="Left Image"
              />
            </div>
            <div className="relative w-[200px] h-[400px] Img-center">
              <Image
                className="object-cover w-full h-full"
                src="/images/cta2.png"
                layout="fill"
                objectFit="cover"
                alt="Center Image"
              />
            </div>
            <div className="relative w-[200px] h-[400px] Img-right">
              <Image
                src="/images/cta3.png"
                layout="fill"
                objectFit="cover"
                alt="Right Image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
