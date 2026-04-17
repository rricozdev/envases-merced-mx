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

export default function InfoSection() {
  return (
    <Container variant="secondary">
      <ContentSection
        eyebrow={CONTENT_HEADER.eyebrow}
        title={CONTENT_HEADER.title}
        description={CONTENT_HEADER.description}
      >
        {/* Todo el contenido de la sección va aca */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cardsInfo.map((card) => (
            <CardInfo
              key={card.id}
              title={card.title}
              color={card.color}
              description={card.description}
              icon={card.icon}
              detail={card.detail}
            />
          ))}
        </div>
      </ContentSection>
    </Container>
  );
}
