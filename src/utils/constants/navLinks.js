import { sucursalesData } from "./sucursales";
import { getRoute } from "@/utils/paths";

export const sucursales = sucursalesData.map(({ name, path }) => ({
  name,
  path,
}));

export const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: getRoute("/catalogo") },
  { name: "Sucursales", submenu: sucursales },
  { name: "Nosotros", href: getRoute("/sobre-nosotros") },
  { name: "Blog", href: getRoute("/blog") },
  { name: "Contacto", href: getRoute("/contacto") },
];
