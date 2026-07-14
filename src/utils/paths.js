/**
 * Utilidad de rutas con soporte condicional para extensión .html.
 *
 * En desarrollo (npm run dev): rutas limpias sin .html
 * En producción (npm run build): rutas con .html (canónicas para static export)
 */
const IS_DEV = process.env.NODE_ENV === "development";
const BASE_URL = "https://envaseslamerced.mx";

export const getRoute = (path) => {
  if (path === "/") return "/";
  return IS_DEV ? path : `${path}.html`;
};

export const getFullUrl = (path) => {
  if (path === "/") return `${BASE_URL}/`;
  return IS_DEV ? `${BASE_URL}${path}` : `${BASE_URL}${path}.html`;
};
