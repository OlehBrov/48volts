"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const swiperElements = [
  {
    name: "solar_01",
    img: "/solar1.jpg",
    alt: "solar panel",
  },
  {
    name: "solar_02",
    img: "/solar.jpeg",
    alt: "solar panel",
  },
  {
    name: "batteries_01",
    img: "/batteries.jpeg",
    alt: "batteries",
  },
  {
    name: "batteryset_01",
    img: "/batteryset.jpeg",
    alt: "batteries",
  },
  {
    name: "batteryset_02",
    img: "/LiFePO4_batteries.png",
    alt: "batteries",
  },
];

const SwiperElem = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 -z-1 w-full h-screen">
      <Swiper
        //   spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        {swiperElements.map((el) => (
          <SwiperSlide key={el.name} className="h-full object-cover">
            <img src={el.img} alt={el.alt} className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </div>
  );
};

export default SwiperElem;
