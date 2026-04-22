import Hero from "@/components/ui/Hero";
import ImageTextSection from "@/components/ui/ImageTextSection";
import ContentSection from "@/components/ui/ContentSection";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import ValueCard from "./ValueCard";

import cardValues from "@/utils/constants/about/cardValues";
import { BRANCH_PHONES } from "@/utils/constants/branchPhones";
import { openWhatsApp } from "@/feature/chat/whatsappAction";

export default function AboutView({ data }) {
  const { hero, quienesSomos, queHacemos, presencia, mision, vision } = data;

  return (
    <Container>
      {/* HERO */}
      <Hero
        className="mb-16 sm:mb-20"
        srcImg={hero.images}
        title={hero.title}
        description={hero.description}
        type="secondary"
        showButton={false}
        overlay
        textPosition="center"
        size="full"
      />

      {/* QUIÉNES SOMOS */}
      <div className="mb-16 sm:mb-20 px-4 sm:px-6 lg:px-0">
        <ImageTextSection
          imageSrc={quienesSomos.srcImg}
          imageAlt={quienesSomos.altImg}
          title={quienesSomos.title}
          description={quienesSomos.description}
          imagePosition="left"
        />
      </div>

      {/* QUÉ HACEMOS + PRESENCIA */}
      <div className="bg-[var(--color-bgligth-secondary)] py-8 sm:py-10 rounded-2xl px-4 sm:px-6 lg:px-8 mb-0">
        <ContentSection className="mb-6">
          <div className="flex flex-col gap-10 sm:gap-12">
            <SectionHeader
              title={queHacemos.title}
              description={queHacemos.subtitle}
            />

            {/* QUÉ HACEMOS + PRESENCIA GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QUÉ HACEMOS */}
              <div className="flex flex-col gap-5 p-5 sm:p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-sm backdrop-blur-sm w-full">
                <h4 className="text-lg font-semibold">{queHacemos.title}</h4>
                <p className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)] leading-relaxed">
                  {queHacemos.description}
                </p>
                <ul className="list-none space-y-3">
                  {queHacemos.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[var(--color-brand-accent)] mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRESENCIA */}
              <div className="flex flex-col gap-5 p-5 sm:p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-sm backdrop-blur-sm w-full">
                <h4 className="text-lg font-semibold">{presencia.title}</h4>
                <p className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)] leading-relaxed">
                  {presencia.description}
                </p>
                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {presencia.cities.map((city, index) => (
                    <li
                      key={index}
                      className="text-sm truncate text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)]"
                      title={city}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
                <p className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)]">
                  {presencia.footer}
                </p>
              </div>
            </div>

            {/* MISIÓN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center w-full max-w-5xl mx-auto">
              <div className="flex flex-col gap-4 order-last md:order-first">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {mision.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)] leading-relaxed">
                  {mision.description}
                </p>
              </div>
              <div
                className="w-full aspect-video sm:aspect-4/3 bg-cover bg-center rounded-xl order-first md:order-last"
                style={{ backgroundImage: `url('${mision.srcImg}')` }}
              />
            </div>

            {/* VISIÓN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center w-full max-w-5xl mx-auto">
              <div
                className="w-full aspect-video sm:aspect-4/3 bg-cover bg-center rounded-xl order-first md:order-first"
                style={{ backgroundImage: `url('${vision.srcImg}')` }}
              />
              <div className="flex flex-col gap-4 order-last md:order-last">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {vision.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-txtligth-secondary)] dark:text-[var(--color-txtdark-secondary)] leading-relaxed">
                  {vision.description}
                </p>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>

      {/* VALORES */}
      <div className="px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
        <SectionHeader
          title="Nuestros Valores Fundamentales"
          description="Estos principios guían cada una de nuestras decisiones y acciones, asegurando que siempre actuemos con integridad y en el mejor interés de nuestros clientes."
          className="mb-10 sm:mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {cardValues.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="¿Listo para encontrar el envase perfecto para tu negocio?"
        description="Contáctanos hoy mismo y descubre cómo podemos ayudarte a impulsar tu negocio con nuestras soluciones en envases PET."
      />
    </Container>
  );
}
