import Container from "@/components/ui/Container";
import ImageTextSection from "@/components/ui/ImageTextSection";

const data = [
  {
    id: "problem",
    eyebrow: "EL PROBLEMA",
    title: (
      <>
        Quedarte sin envases PET en el peor momento{" "}
        <span className="text-brand-accent">
          detiene tu operación y tus ventas
        </span>
      </>
    ),
    description:
      "Falta de stock, precios inestables y poca asesoría técnica son más comunes de lo que deberían. Cada retraso impacta directamente tu producción, tus entregas y la confianza de tus clientes.",
    imageSrc: "/assets/section_img/imagen_problema.webp",
    imageAlt:
      "Problemas de desabasto y retrasos en envases PET que afectan la operación de empresas",
    imagePosition: "left",
  },
  {
    id: "solution",
    eyebrow: "LA SOLUCIÓN",
    title: (
      <>
        Envases PET disponibles cuando los necesitas{" "}
        <span className="text-brand-accent">
          con respaldo técnico y precios competitivos
        </span>
      </>
    ),
    description:
      "Fabricación propia y centros de distribución estratégicos para garantizar disponibilidad real. Te asesoramos para elegir el envase ideal, optimizando costos y eliminando intermediarios innecesarios.",
    imageSrc: "/assets/section_img/imagen_solution.webp",
    imageAlt:
      "Proveedor confiable de envases PET con stock disponible y distribución eficiente",
    imagePosition: "right",
  },
];

export default function ContextSection() {
  return (
    <>
      {data.map((section) => (
        <Container key={section.id}>
          <ImageTextSection
            key={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            imagePosition={section.imagePosition}
          />
        </Container>
      ))}
    </>
  );
}
