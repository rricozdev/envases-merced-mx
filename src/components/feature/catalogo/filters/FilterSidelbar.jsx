"use client";

import Button from "@/components/ui/Button";
import {
  CategoriaProducto,
  CodigoRosca,
  ColorProducto,
  EtiquetaProducto,
} from "@/utils/constants/products/listProducts";
import { motion } from "framer-motion";
import CategoryFilter from "./CategoryFilter";
import SearchFilter from "./SearchFilter";

const FILTER_GROUPS = [
  {
    id: "categorias",
    title: "Categorías",
    options: Object.values(CategoriaProducto),
  },
  {
    id: "colores",
    title: "Colores",
    options: Object.values(ColorProducto),
  },
  {
    id: "roscas",
    title: "Rosca",
    options: Object.values(CodigoRosca),
  },
  {
    id: "etiquetas",
    title: "Etiquetas",
    options: Object.values(EtiquetaProducto),
  },
];

export default function FilterSidebar({ filters, onFilterChange, onClearAll }) {
  return (
    <aside
      className="w-full lg:w-1/4"
      role="complementary"
      aria-label="Filtros de búsqueda"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sticky top-24 space-y-8"
      >
        {/* Header con título y botón limpiar */}
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Filtros</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={onClearAll}
            aria-label="Limpiar todos los filtros"
            className="max-w-28"
          >
            Limpiar
          </Button>
        </header>

        {/* Búsqueda */}
        <SearchFilter
          search={filters.search}
          onSearchChange={(value) => onFilterChange("search", value)}
        />

        {/* Filtros dinámicos */}
        {FILTER_GROUPS.map((group) => (
          <CategoryFilter
            key={group.id}
            title={group.title}
            options={group.options}
            selected={filters[group.id]}
            onToggle={(value) => onFilterChange(group.id, value)}
            aria-label={`Filtrar por ${group.title.toLowerCase()}`}
          />
        ))}
      </motion.div>
    </aside>
  );
}
