import NotFoundView from "@/components/feature/shared/NotFoundView";

export const metadata = {
  title: "Página no encontrada | Envases La Merced",
  robots: "noindex",
  alternates: {
    canonical: "https://envaseslamerced.mx/404",
  },
};

export default function NotFound() {
  return <NotFoundView />;
}
