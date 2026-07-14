import { ContentBtnHero } from "@/components/feature/home/ContentBtnHero";
import ContextSection from "@/components/feature/home/ContextSection";
import InfoSection from "@/components/feature/home/InfoSection";
import OpinionSection from "@/components/feature/home/OpinionSection";
import { organizationSchema } from "@/components/schema/organizationSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import AnimatedHero from "@/components/feature/home/AnimatedHero";

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
    "Somos tu proveedor de envases PET en México. Con 5 sucursales estratégicas y una amplia variedad de presentaciones, llevamos el envase exacto que necesitas, rápido y sin intermediarios",
  srcImg: {
    desktop: "/assets/bg_img/bg2.webp",
    mobile: "/assets/bg_img/bg-mobile.webp",
  },
  alt: "Imagen de envases de alta calidad para negocios",
};

export const metadata = {
  title: "Envases PET al Mayoreo en México | Botellas y Frascos | La Merced",
  description:
    "Proveedor de envases PET líder en México. Botellas, frascos y tapas al mayoreo para alimentos, cosméticos y limpieza. 5 sucursales, stock inmediato y precios competitivos en la industria del packaging.",
  keywords:
    "envases PET, botellas PET mayoreo, frascos PET, tapas PET, envases México, proveedor de envases PET, distribuidor envases, botellas plásticas, empaques PET, packaging industrial, envases cosméticos, envases alimentos, industria del packaging México",
};

export default function Home() {
  return (
    <>
      <SchemaMarkup schemas={[organizationSchema]} />
      <main id="main-content" className="flex flex-col items-center justify-center min-h-screen bg-bgligth-main dark:bg-bgdark-main">
        <AnimatedHero
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
            <ContentBtnHero />
          </div>
        </AnimatedHero>
        <ContextSection />
        <InfoSection />
        <OpinionSection />
      </main>
    </>
  );
}
