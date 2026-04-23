"use client";

import CatalogoBreadcrumbs from "@/components/feature/catalogo/CatalogoBreadcrumbs";
import CatalogoEmpty from "@/components/feature/catalogo/CatalogoEmpty";
import CatalogoHeader from "@/components/feature/catalogo/CatalogoHeader";
import FilterSidebar from "@/components/feature/catalogo/filters/FilterSidelbar";
import ProductGrid from "@/components/feature/catalogo/ProductGrid";
import { useProductFilters } from "@/components/hooks/useProductFilter";
import { useCart } from "@/components/providers/CartProvider";
import SchemaMarkup from "@/components/share/SchemaMarkup";
import Pagination from "@/components/ui/Pajination";
import { CatalogoProductos } from "@/utils/constants/products/listProducts";
import { useEffect } from "react";

export default function CatalogoPage() {
  const { addToCart } = useCart();
  const {
    currentPage,
    setCurrentPage,
    filters,
    handleFilterChange,
    handleClearAll,
    filteredProducts,
    paginatedProducts,
    totalPages,
    ITEMS_PER_PAGE,
  } = useProductFilters(CatalogoProductos.productos);

  // Scroll suave al cambiar página
  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <>
      <main className="bg-bgligth-main dark:bg-bgdark-main">
        {/* SECCIÓN: HEADER */}
        <CatalogoHeader productsCount={filteredProducts.length} />

        {/* SECCIÓN: FILTROS Y PRODUCTOS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumbs */}
            <CatalogoBreadcrumbs categories={filters.categorias} />

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar de Filtros */}
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAll}
              />

              {/* Área principal: Productos */}
              <div className="w-full lg:w-3/4">
                {filteredProducts.length === 0 ? (
                  <CatalogoEmpty />
                ) : (
                  <>
                    {/* Información del resultado */}
                    <div className="mb-6 text-sm text-txtligth-secondary dark:text-txtdark-secondary">
                      Mostrando{" "}
                      <strong>
                        {(currentPage - 1) * ITEMS_PER_PAGE + 1}-
                        {Math.min(
                          currentPage * ITEMS_PER_PAGE,
                          filteredProducts.length,
                        )}
                      </strong>{" "}
                      de <strong>{filteredProducts.length}</strong> productos
                    </div>

                    {/* Grid de Productos */}
                    <ProductGrid
                      products={paginatedProducts}
                      onQuote={addToCart}
                      role="region"
                      aria-label="Lista de productos del catálogo"
                    />

                    {/* Paginación */}
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        aria-label="Paginación de productos"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
