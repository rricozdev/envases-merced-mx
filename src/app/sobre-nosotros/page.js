import AboutView from "@/components/feature/about/AboutView";
import { aboutData } from "@/utils/constants/about/aboutData";

export const metadata = {
  title: "Quiénes Somos — Distribuidor de Envases PET | Envases La Merced",
  description:
    "Conoce a Envases La Merced, distribuidor mayorista de envases PET...",
  alternates: {
    canonical: "https://envaseslamerced.mx/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return <AboutView data={aboutData} />;
}
