"use client";

import { motion } from "framer-motion";
import CardInfo from "@/components/ui/CardInfo";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";
import cardsInfo from "@/utils/constants/home/cardsInfo";

const CONTENT_HEADER = {
  eyebrow: "¿Por qué elegirnos?",
  title: (
    <>
      Todo lo que tu negocio necesita en envases PET,
      <span className="text-brand-accent"> en un solo proveedor</span>
    </>
  ),
  description:
    "Fabricación propia, distribución nacional y asesoría técnica especializada, para que nunca tengas que buscar en otro lado.",
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay: i * 0.08,
    },
  }),
};

export default function InfoSection() {
  return (
    <Container variant="secondary">
      <ContentSection
        eyebrow={CONTENT_HEADER.eyebrow}
        title={CONTENT_HEADER.title}
        description={CONTENT_HEADER.description}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardsInfo.map((card, i) => (
            <motion.div key={card.id} custom={i} variants={cardVariants}>
              <CardInfo
                title={card.title}
                color={card.color}
                description={card.description}
                icon={card.icon}
                detail={card.detail}
              />
            </motion.div>
          ))}
        </motion.div>
      </ContentSection>
    </Container>
  );
}
