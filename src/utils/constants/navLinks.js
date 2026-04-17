import { sucursalesData } from "./sucursales";

export const sucursales = sucursalesData.map(({ name, path }) => ({
  name,
  path,
}));

export const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/catalogo" },
  { name: "Sucursales", submenu: sucursales },
  { name: "Nosotros", href: "/sobre-nosotros" },
  { name: "Contacto", href: "/contacto" },
];
