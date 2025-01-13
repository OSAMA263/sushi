"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState } from "react";
import MainBtn from "./MainBtn";
import slider1 from "../../public/slider-1.jpg";
import slider2 from "../../public/slider-2.jpg";
import slider3 from "../../public/slider-3.jpg";
import slider4 from "../../public/slider-4.jpg";
import slider5 from "../../public/slider-5.jpg";
import tw from "tailwind-styled-components";

const data = [
  {
    title: "Chirashi Bowl",
    des: "Our signature dish, the Chirashi Bowl, is a vibrant medley of fresh sashimi, seasonal toppings, and perfectly seasoned sushi rice. A true celebration of Japanese craftsmanship, it’s as beautiful as it is delicious.",
    img: slider1,
  },
  {
    title: "Wagyu Delight",
    des: "Indulge in the rich flavors of our Wagyu Dish, featuring melt-in-your-mouth premium Wagyu beef, seared to perfection and paired with seasonal sides. A luxurious taste of Japan’s finest, crafted for an unforgettable dining experience.",
    img: slider2,
  },
  {
    title: "Nigiri Assortment",
    des: "Delight in our Nigiri Assortment, showcasing hand-pressed sushi rice topped with the finest cuts of fresh seafood. A timeless favorite, crafted with precision and care.",
    img: slider3,
  },
  {
    title: "Signature Sushi Roll",
    des: "Experience our Signature Sushi Roll, a perfect blend of fresh ingredients, expertly rolled with precision and creativity. Bursting with flavor and crafted to delight, it’s a must-try for sushi lovers.",
    img: slider4,
  },
  {
    title: "Torched Sushi Selection",
    des: "Discover the bold flavors of our Torched Sushi, where fresh ingredients meet the heat of the flame, creating a tantalizing balance of smoky aroma and delicate textures.",
    img: slider5,
  },
];

const swiperTextProps = {
  slidesPerView: 1,
  effect: "fade",
  allowTouchMove: false,
  speed: 1000,
  loop: true,
  autoplay: { disableOnInteraction: false, delay: 2500 },
  modules: [EffectFade, Autoplay],
};

export default function Slider() {
  const [index, setIndex] = useState(0);

  const swiperImageProps = {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: 1000,
    spaceBetween: 0,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    loop: true,
    onTransitionStart: (e) => setIndex(e.realIndex),
    modules: [Autoplay],
  };

  return (
    <Wrapper>
      {/* BG TEXT */}
      <h1 className="absolute translate-x-1/2 right-1/2 -top-[10%] -z-10 text-opacity-20 text-Gray xl:text-[11rem] md:text-[6rem] text-4xl w-max">
        Our Signature
      </h1>
      {/* SWIPER TEXT */}
      <div className="space-y-8">
        <Swiper {...swiperTextProps}>
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
        <MainBtn aria-label="view all menus" href="/menu" bg="black">
          View menu
        </MainBtn>
      </div>
      {/* SWIPER IMAGES */}
      <div className="lg:col-span-2">
        <Swiper {...swiperImageProps}>
          {data.map(({ img, title }, i) => (
            <SwiperSlide key={i}>
              <div className="lg:h-[420px] h-[300px]">
                <Image
                  className={`${
                    i !== index ? "scale-90 opacity-20" : "scale-100"
                  } rounded-md h-full w-full`}
                  alt={title + i}
                  src={img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
}

const Wrapper = tw.div`
lg:grid
grid-cols-3
xl:gap-x-20
relative
max-lg:flex
flex-col-reverse
gap-y-10
`;
