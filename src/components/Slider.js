"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useState } from "react";
import MainBtn from "./MainBtn";

const data = [
  {
    title: "Chirashi Bowl",
    des: "Our signature dish, the Chirashi Bowl, is a vibrant medley of fresh sashimi, seasonal toppings, and perfectly seasoned sushi rice. A true celebration of Japanese craftsmanship, it’s as beautiful as it is delicious.",
    img: "/slider-1.jpg",
  },
  {
    title: "Wagyu Delight",
    des: "Indulge in the rich flavors of our Wagyu Dish, featuring melt-in-your-mouth premium Wagyu beef, seared to perfection and paired with seasonal sides. A luxurious taste of Japan’s finest, crafted for an unforgettable dining experience.",
    img: "/slider-2.jpg",
  },
  {
    title: "Nigiri Assortment",
    des: "Delight in our Nigiri Assortment, showcasing hand-pressed sushi rice topped with the finest cuts of fresh seafood. A timeless favorite, crafted with precision and care.",
    img: "/slider-3.jpg",
  },
  {
    title: "Signature Sushi Roll",
    des: "Experience our Signature Sushi Roll, a perfect blend of fresh ingredients, expertly rolled with precision and creativity. Bursting with flavor and crafted to delight, it’s a must-try for sushi lovers.",
    img: "/slider-4.jpg",
  },
  {
    title: "Torched Sushi Selection",
    des: "Discover the bold flavors of our Torched Sushi, where fresh ingredients meet the heat of the flame, creating a tantalizing balance of smoky aroma and delicate textures.",
    img: "/slider-5.jpg",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="grid grid-cols-3 gap-x-20 relative">
      {/* BG TEXT */}
      <h1 className="absolute translate-x-1/2 right-1/2 -top-1/2 -z-10 text-opacity-20 text-Gray text-[11rem] w-max">
        Our Signature
      </h1>
      {/* SWIPER TEXT */}
      <div className="space-y-8">
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          allowTouchMove={false}
          speed={1000}
          loop
          autoplay={{ disableOnInteraction: false, delay: 2500 }}
          modules={[EffectFade, Autoplay]}
        >
          {data.map(({ title, des }, i) => (
            <SwiperSlide
              key={title}
              className={`${
                i !== index ? "!opacity-0" : "!opacity-100"
              } space-y-10`}
            >
              <h1 className="text-3xl">{title}</h1>
              <p className="text-Gray">{des}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* PAGINATION */}
        <div className="flex items-center gap-x-2">
          {data.map((_, i) => (
            <span
              key={i}
              className={`${
                i === index ? "bg-black" : "bg-Gray"
              } rounded-full p-1 transition-all`}
            ></span>
          ))}
        </div>
        <MainBtn bg="black">View menu</MainBtn>
      </div>
      {/* SWIPER IMAGES */}
      <div className="col-span-2">
        <Swiper
          slidesPerView={3}
          allowTouchMove={false}
          spaceBetween={100}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          onTransitionStart={(e) => setIndex(e.realIndex)}
          modules={[Pagination, Autoplay]}
        >
          {data.map(({ img }, i) => (
            <SwiperSlide key={i}>
              <div className="w-[320px]">
                <Image
                  className={`${
                    i !== index ? "scale-90 opacity-20" : "scale-100"
                  } rounded-md h-full w-full`}
                  width={600}
                  height={400}
                  alt={img}
                  src={img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
