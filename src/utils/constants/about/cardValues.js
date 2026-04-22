/**
 * 🧩 CARD VALUES
 *
 * Lista de valores institucionales de la empresa.
 *
 * 🔹 Cada objeto representa un valor
 * 🔹 El campo `icon` recibe un componente de icono (NO string)
 *
 * ⚠️ Importante:
 * - Los iconos deben ser componentes válidos (Tabler en este caso)
 * - Se renderizan dinámicamente en ValueCard como <Icon />
 */

import {
  IconAward,
  IconBulb,
  IconHeartHandshake,
  IconHeadset,
} from "@tabler/icons-react";

const cardValues = [
  {
    icon: IconAward, // 🎯 Calidad
    title: "Calidad",
    description:
      "Compromiso con los más altos estándares en cada producto que fabricamos.",
  },
  {
    icon: IconBulb, // 💡 Innovación
    title: "Innovación",
    description:
      "Búsqueda constante de nuevas tecnologías y procesos para mejorar nuestras soluciones.",
  },
  {
    icon: IconHeartHandshake, // 🤝 Compromiso
    title: "Compromiso",
    description:
      "Dedicación total a los plazos, la calidad y el éxito de nuestros clientes.",
  },
  {
    icon: IconHeadset, // 🎧 Servicio
    title: "Servicio",
    description:
      "Atención personalizada y soporte excepcional para garantizar la satisfacción del cliente.",
  },
];

export default cardValues;
