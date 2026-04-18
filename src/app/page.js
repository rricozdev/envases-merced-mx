import ContextSection from "@/components/feature/home/ContextSection";
import InfoSection from "@/components/feature/home/InfoSection";
import OpinionSection from "@/components/feature/home/OpinionSection";
import { organizationSchema } from "@/components/schema/organizationSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import Button from "@/components/ui/Button";
import Hero from "@/components/ui/Hero";

const heroData = {
  title: (
    <>
      <span className="text-brand-accent-hover">
        El envase PET que tu producto necesita
      </span>
      , fabricados y entregados en todo México
    </>
  ),
  description:
    "Con 5 sucursales estratégicas y una amplia variedad de presentaciones, llevamos el envase exacto que necesitas, rápido y sin intermediarios",
  srcImg: {
    desktop: "/assets/bg_img/bg2.webp",
    mobile: "/assets/bg_img/bg-mobile.webp",
  },
  alt: "Imagen de envases de alta calidad para negocios",
};

export const metadata = {
  title: "Envases PET al Mayoreo en México | Botellas y Frascos | La Merced",
  description:
    "Distribuidor líder de envases PET al mayoreo en México. Botellas, frascos y tapas para alimentos, cosméticos y limpieza. 5 sucursales, stock inmediato y precios competitivos",
  keywords:
    "envases PET, botellas PET mayoreo, frascos PET, tapas PET, envases México, distribuidor envases, botellas plásticas, empaques PET, envases cosméticos, envases alimentos",
};

export default function Home() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema]} />
      <main className="flex flex-col items-center justify-center min-h-screen bg-bgligth-main dark:bg-bgdark-main">
        <Hero
          srcImg={heroData.srcImg}
          title={heroData.title}
          description={heroData.description}
          overlay={false}
          textPosition="left"
          type="primary"
          size="half"
          className="w-full py-20 bg-bgdark-hero"
          alt={heroData.alt}
          imgClassName="object-cover md:object-contain md:object-center w-full h-full"
        >
          <div
            className={
              "mt-4 sm:mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            }
          >
            <Button
              type="primary"
              variant="solid"
              size="lg"
              className="w-full sm:w-auto"
            >
              Solicitar cotización
            </Button>

            <Button
              className="w-full sm:w-auto text-white border-white hover:border-brand-primary hover:bg-brand-primary"
              type="secondary"
              variant="outline"
              size="lg"
            >
              Ver catalogo
            </Button>
          </div>
        </Hero>
        <ContextSection />
        <InfoSection />
        <OpinionSection />
      </main>
    </>
  );
}
