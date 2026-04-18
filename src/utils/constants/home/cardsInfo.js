// TODO: Agregar los íconos correspondientes a cada valor en el array de objetos

import { Boxes, DollarSign, Factory, Package, Truck } from "lucide-react";

const cardsInfo = [
  {
    id: 1,
    size: "sm",
    color: "primary",
    title: "Amplia variedad",
    description:
      "Amplia variedad de modelos de envases PET listos para entrega inmediata. Sin esperas, sin sustituciones.",
    detail: "✔ Stock disponible hoy",
    icon: Package,
  },
  {
    id: 2,
    size: "sm",
    color: "primary",
    title: "Fabricación propia",
    description:
      "Somos fabricantes directos. Cada envase pasa por control de calidad riguroso antes de llegar a ti.",
    detail: "✔ Sin intermediarios",
    icon: Factory,
  },
  {
    id: 5,
    size: "sm",
    color: "accent",
    title: "Precios Competitivos",
    description:
      "Nuestros precios hablan solos, compruébalo tú mismo con una cotización sin compromiso.",
    detail: "✔ Transparente y competitivo",
    icon: DollarSign,
  },
  {
    id: 3,
    size: "sm",
    color: "primary",
    title: "Distribución nacional",
    description:
      "5 sucursales estratégicas en todo México para entregarte rápido y sin complicaciones.",
    detail: "✔ Cobertura nacional",
    icon: Truck,
  },
  {
    id: 4,
    size: "sm",
    color: "primary",
    title: "Para cada industria",
    description:
      "Agua, limpieza, cosméticos, farmacéuticos, alimentos, hotelería y más.",
    detail: "✔ +8 industrias atendidas",
    icon: Boxes,
  },
];

export default cardsInfo;
