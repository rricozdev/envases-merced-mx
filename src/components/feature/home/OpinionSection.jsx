"use client";

import dynamic from "next/dynamic";
import Container from "@/components/ui/Container";
import ContentSection from "@/components/ui/ContentSection";

const OpinionCarousel = dynamic(() => import("./OpinionCarousel"), {
  ssr: false,
  loading: () => <div className="min-h-[280px]" aria-hidden="true" />,
});

const opinions = [
  {
    author: {
      name: "Martin Zavala.",
      position: "",
      avatar: "/assets/testimonials/martin.webp",
    },
    opinion:
      '"Excelente servicio y muy buena variedad. Siempre encuentro lo que necesito y la calidad es constante. Sin duda seguiré comprando con ellos."',
  },
  {
    author: {
      name: "María López",
      position: "",
      avatar: "/assets/testimonials/maria.webp",
    },
    opinion:
      '"Las entregas son rápidas y los precios bastante competitivos. Me ayudaron a reducir costos sin sacrificar la calidad de mis productos."',
  },
  {
    author: {
      name: "Elías Campillo.",
      position: "",
      avatar: "/assets/testimonials/elias.webp",
    },
    opinion:
      '"Comencé comprando al detal y a medida que crecí me ofrecieron mejores condiciones. Es un proveedor confiable para escalar mi negocio."',
  },
  {
    author: {
      name: "Daniela Ortega.",
      position: "",
      avatar: "/assets/testimonials/daniela.webp",
    },
    opinion:
      '"Destaco mucho la asesoría. No solo venden, también te orientan para elegir el envase ideal según tu producto. Eso marca la diferencia."',
  },
  {
    author: {
      name: "Ricardo Martinez",
      position: "",
      avatar: "/assets/testimonials/ricardo.webp",
    },
    opinion:
      '"Siempre cumplen con los tiempos de entrega y la calidad es consistente en cada pedido. Es un aliado clave para mantener mi operación estable."',
  },
];

export default function OpinionSection() {
  return (
    <Container>
      <ContentSection
        eyebrow="Clientes que ya confían en nosotros"
        title={
          <>
            ¿Por qué cada vez más{" "}
            <span className="text-brand-accent">negocios</span> nos eligen?
          </>
        }
        description="Calidad, precio y cumplimiento. Descubre por qué cada vez más negocios confían en nuestros envases."
      >
        <OpinionCarousel opinions={opinions} />
      </ContentSection>
    </Container>
  );
}
