"use client";

import CardOpinion from "@/components/ui/CardOpinion";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const opinions = [
  {
    author: {
      name: "Martin Zavala.",
      position: "",
      avatar: "/assets/testimonials/martin.webp",
    },
    opinion:
      '"El servicio, variedad y calidad que tienen es muy bueno, sin duda seguiré comprándoles. ¡Recomendados!"',
  },
  {
    author: {
      name: "María López",
      position: "",
      avatar: "/assets/testimonials/maria.webp",
    },
    opinion:
      '"Entregan rápido y tienen buenas paqueterías con precios accesibles. La calidad de los envases es excelente. Muy recomendados."',
  },
  {
    author: {
      name: "Elías Campillo.",
      position: "",
      avatar: "/assets/testimonials/elias.webp",
    },
    opinion:
      '"Empecé comprándoles menudeo y ahora que he crecido me dieron precios especiales y ya puedo revender. Excelente atención y calidad."',
  },
  {
    author: {
      name: "Daniela Ortega.",
      position: "",
      avatar: "/assets/testimonials/daniela.webp",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
  {
    author: {
      name: "Ricardo Martinez",
      position: "",
      avatar: "/assets/testimonials/ricardo.webp",
    },
    opinion:
      '"La calidad de los envases es excepcional y el servicio al cliente es de primera. Siempre entregan a tiempo y nos ayudan a encontrar la solución perfecta para nuestros productos."',
  },
];

export default function OpinionSection() {
  return (
    <Container>
      <ContentSection
        eyebrow="Testimonios"
        title="¿Qué opinan nuestros clientes?"
        description=""
      >
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
      </ContentSection>
    </Container>
  );
}
