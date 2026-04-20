import { notFound } from "next/navigation";
import { sucursalesData } from "@/utils/constants/sucursales";
import SucursalView from "@/components/feature/sucursal/SucursalView";
import { branchesSchema } from "@/components/schema/branchesSchema";
import SchemaMarkup from "@/components/share/SchemaMarkup";

/**
 * 🔎 GENERATE METADATA (SEO DINÁMICO)
 *
 * Este método se ejecuta en el servidor por cada ruta dinámica (/cdmx, /puebla, etc).
 * Su objetivo es construir el <head> de la página:
 * - title
 * - description
 * - canonical
 *
 * ⚠️ En Next 16, params es async → requiere await
 */
export async function generateMetadata({ params }) {
  const { ciudad } = await params;

  // Busca la sucursal correspondiente según el slug de la URL
  const sucursal = sucursalesData.find((s) => s.path === ciudad);

  // Si no existe, devuelve metadata vacía (evita errores)
  if (!sucursal) {
    return {};
  }

  // Retorna metadata SEO específica por ciudad
  return {
    title: sucursal.seo.title,
    description: sucursal.seo.description,
    alternates: {
      // Canonical limpio → clave para SEO
      canonical: `https://envaseslamerced.mx/${sucursal.path}`,
    },
  };
}

/**
 * ⚡ GENERATE STATIC PARAMS (SSG)
 *
 * Define qué rutas dinámicas deben generarse en build time.
 * Next usa esto para:
 * - Pre-renderizar HTML estático
 * - Mejorar performance
 * - Mejorar SEO (Google recibe HTML listo)
 *
 * Resultado:
 * /cdmx
 * /puebla
 * /veracruz
 * etc.
 */
export async function generateStaticParams() {
  return sucursalesData.map((s) => ({
    ciudad: s.path,
  }));
}

/**
 * 🧩 PAGE (SERVER COMPONENT)
 *
 * Este es el entry point de cada ruta dinámica:
 * /cdmx
 * /puebla
 *
 * Responsabilidades:
 * - Resolver la sucursal
 * - Validar existencia
 * - Pasar datos al componente UI (SucursalView)
 */
export default async function CiudadPage({ params }) {
  const { ciudad } = await params;

  // Busca la sucursal correspondiente
  const sucursal = sucursalesData.find((s) => s.path === ciudad);

  // Si no existe → Next lanza página 404 automáticamente
  if (!sucursal) {
    notFound();
  }

  // Renderiza la vista (componente cliente)
  return (
    <>
      <SchemaMarkup schemas={[branchesSchema(sucursal)]} />
      <SucursalView sucursal={sucursal} />
    </>
  );
}
