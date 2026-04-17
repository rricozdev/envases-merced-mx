// Probando Tailwind CSS en Next.js 13 con la nueva estructura de carpetas

import InfoSection from "@/components/feature/home/InfoSection";
import { organizationSchema } from "@/components/schema/organizationSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";

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
        <InfoSection />
      </main>
    </>
  );
}
