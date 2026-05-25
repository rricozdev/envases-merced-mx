import NotFoundView from "@/components/feature/shared/NotFoundView";

/**
 * Next.js Not Found entry point
 *
 * - Solo delega render
 * - Mantenemos arquitectura limpia
 */

export default function NotFound() {
  return <NotFoundView />;
}
