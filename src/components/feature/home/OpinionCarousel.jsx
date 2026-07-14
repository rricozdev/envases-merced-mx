"use client";

import CardOpinion from "@/components/ui/CardOpinion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function OpinionCarousel({ opinions }) {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      modules={[Autoplay]}
      speed={2000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
      }}
    >
      {opinions.map(({ opinion, author }, index) => (
        <SwiperSlide key={index}>
          <CardOpinion
            opinion={opinion}
            avatar={author.avatar}
            name={author.name}
            position={author.position}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
