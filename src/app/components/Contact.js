"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-[100px]" id="contact">
      <div className="container mx-auto px-[20px]">
        <div className="flex flex-col items-center ">
          <div className="text-center ">
            <h1 className="title font-[800] text-[4vw] leading-[5vw] mb-[30px]">
              Download our App new and hit the road with ease
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia
            </p>
          </div>
          <div className="flex items-end justify-center overflow-hidden px-[10px]">
            <div className="relative w-[200px] h-[400px] left">
              <Image
                src="/images/cta1.png"
                layout="fill"
                objectFit="cover"
                alt="Left Image"
              />
            </div>
            <div className="relative w-[200px] h-[400px] center">
              <Image
                className="object-cover w-full h-full"
                src="/images/cta2.png"
                layout="fill"
                objectFit="cover"
                alt="Center Image"
              />
            </div>
            <div className="relative w-[200px] h-[400px] right">
              <Image
                src="/images/cta3.png"
                layout="fill"
                objectFit="cover"
                alt="Right Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
