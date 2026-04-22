import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";
import CTASection from "@/components/ui/CTASection";
import Hero from "@/components/ui/Hero";
import ImageTextSection from "@/components/ui/ImageTextSection";
import ValueCard from "./ValueCard";

import cardValues from "@/utils/constants/about/cardValues";
import { Check, MapPin } from "lucide-react";

export default function AboutView({ data }) {
  const { hero, quienesSomos, queHacemos, presencia, mision, vision } = data;

  return (
    <>
      <Hero
        srcImg={hero.images}
        title={hero.title}
        description={hero.description}
        type="secondary"
        showButton={false}
        overlay
        textPosition="center"
        size="full"
      />
      <Container>
        <ImageTextSection
          imageSrc={quienesSomos.srcImg}
          imageAlt={quienesSomos.altImg}
          title={quienesSomos.title}
          description={quienesSomos.description}
          imagePosition="left"
        />
      </Container>

      <Container>
        <ContentSection
          title={queHacemos.title}
          description={queHacemos.subtitle}
        >
          <div className="flex flex-col gap-12 sm:gap-16 bg-bgligth-secondary dark:bg-bgdark-secondary p-6 sm:p-8 rounded-2xl">
            {/* GRID PRINCIPAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QUÉ HACEMOS */}
              <div className="group flex flex-col gap-5 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {queHacemos.title}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {queHacemos.description}
                </p>

                <ul className="space-y-3">
                  {queHacemos.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1 shrink-0">
                        <Check size={18} />
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRESENCIA */}
              <div className="group flex flex-col gap-5 p-6 bg-white/70 dark:bg-gray-900/60      border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors">
                  {presencia.title}
                </h4>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {presencia.description}
                </p>

                <ul className="grid grid-cols-2 gap-2 sm:gap-3">
                  {presencia.cities.map((city, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-300
              truncate hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      title={city}
                    >
                      <MapPin className="w-4 h-4 shrink-0 text-primary" />
                      <span className="truncate">{city}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
                  {presencia.footer}
                </p>
              </div>
            </div>

            {/* MISIÓN */}

            <ImageTextSection
              title={mision.title}
              description={mision.description}
              imagePosition="rigth"
              imageSrc={mision.srcImg}
              imageAlt="Imagen de misión envases la merced"
            />
            <ImageTextSection
              title={vision.title}
              description={vision.description}
              imageSrc={vision.srcImg}
              imageAlt="Imagen de Visión envases la merced"
            />
          </div>
        </ContentSection>
      </Container>

      <Container>
        {/* VALORES */}
        <ContentSection
          title="Nuestros Valores Fundamentales"
          description="Estos principios guían cada una de nuestras decisiones y acciones, asegurando que siempre actuemos con integridad y en el mejor interés de nuestros clientes."
        >
          <div className="px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {cardValues.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>
        </ContentSection>

        {/* CTA */}
      </Container>

      <Container>
        <CTASection
          title="¿Listo para encontrar el envase perfecto para tu negocio?"
          description="Contáctanos hoy mismo y descubre cómo podemos ayudarte a impulsar tu negocio con nuestras soluciones en envases PET."
        />
      </Container>
    </>
  );
}
