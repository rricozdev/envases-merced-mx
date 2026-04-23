import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onQuote }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.length === 0 ? (
        <div className="col-span-full flex items-center justify-center min-h-[300px]">
          <div className="text-center max-w-md px-6 py-10 rounded-2xl border border-dashed border-gray-300/70 dark:border-white/20 bg-gray-50 dark:bg-bgdark-secondary">
            <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
              No se encontraron productos que coincidan con los filtros
              aplicados.
            </p>
          </div>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard
            key={`${product.id}`}
            product={product}
            onQuote={onQuote}
          />
        ))
      )}
    </div>
  );
}
