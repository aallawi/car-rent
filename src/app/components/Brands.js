import Image from "next/image";

export default function Brands() {
  return (
    <div className="grid grid-cols-3 gap-[25px] place-items-center lg:mx-[20px] mb-[40px] mt-[30px] xl:mt-[0] lg:flex lg:flex-wrap lg:gap-x-[25px] lg:justify-between">
      <div>
        <Image src="icons/brands/audi.svg" width={85} height={85} alt="icon" />
      </div>
      <div>
        <Image src="icons/brands/bmw.svg" width={85} height={85} alt="icon" />
      </div>
      <div>
        <Image src="icons/brands/ford.svg" width={85} height={85} alt="icon" />
      </div>
      <div>
        <Image src="icons/brands/mazda.svg" width={85} height={85} alt="icon" />
      </div>
      <div>
        <Image
          src="icons/brands/mercedes.svg"
          width={85}
          height={85}
          alt="icon"
        />
      </div>
      <div>
        <Image src="icons/brands/skoda.svg" width={85} height={85} alt="icon" />
      </div>
    </div>
  );
}
