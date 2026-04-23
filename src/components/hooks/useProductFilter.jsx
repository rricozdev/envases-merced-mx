import { useCallback, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 12;

export function useProductFilters(products = []) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    categorias: [],
    colores: [],
    etiquetas: [],
    roscas: [],
    search: "",
  });

  // Resetear página cuando filtros cambien
  const handleFilterChange = useCallback((type, value) => {
    setCurrentPage(1);
    setFilters((prev) => {
      const current = prev[type];

      if (Array.isArray(current)) {
        return {
          ...prev,
          [type]: current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value],
        };
      }

      return { ...prev, [type]: value };
    });
  }, []);

  const handleClearAll = useCallback(() => {
    setCurrentPage(1);
    setFilters({
      categorias: [],
      colores: [],
      etiquetas: [],
      roscas: [],
      search: "",
    });
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        filters.categorias.length &&
        !filters.categorias.some((c) => product.categorias.includes(c))
      )
        return false;

      if (filters.colores.length && !filters.colores.includes(product.color))
        return false;

      if (
        filters.roscas.length &&
        !filters.roscas.includes(product.rosca.diametro)
      )
        return false;

      if (
        filters.etiquetas.length &&
        !filters.etiquetas.some((e) => product.etiquetas.includes(e))
      )
        return false;

      if (filters.search) {
        const search = filters.search.toLowerCase().trim();
        if (
          !`${product.nombre.toLowerCase()} ${product.volumen}`.includes(search)
        )
          return false;
      }

      return true;
    });
  }, [filters, products]);

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    if (filteredProducts.length === 0) return [];
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return {
    currentPage,
    setCurrentPage,
    filters,
    handleFilterChange,
    handleClearAll,
    filteredProducts,
    paginatedProducts,
    totalPages,
    ITEMS_PER_PAGE,
  };
}
