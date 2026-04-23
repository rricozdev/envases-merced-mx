import Button from "@/components/ui/Button";
import { EtiquetaProducto } from "@/utils/constants/products/listProducts";
import { CirclePlus } from "lucide-react";

export default function ProductCard({ product, onQuote }) {
  const etiquetaStyles = {
    [EtiquetaProducto.STOCK]: "bg-emerald-800/90 text-white",
    [EtiquetaProducto.PEDIDO]: "bg-amber-700/90 text-white",
    [EtiquetaProducto.MULTICOLOR]:
      "bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-white",
    [EtiquetaProducto.PERSONALIZADO]:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white",
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white dark:bg-bgdark-secondary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Imagen */}
      <div className="relative h-52 bg-slate-50 flex items-center justify-center ">
        <img
          src={product.img.src ?? "/images/placeholder-product.webp"}
          alt={`${product.nombre} ${product.volumen}ml ${product.color}`}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Etiquetas (ya NO sobre la imagen) */}
      {product.etiquetas?.length > 0 && (
        <div className="flex flex-wrap gap-2 px-5 pt-3">
          {product.etiquetas.map((etiqueta) => (
            <span
              key={etiqueta}
              className={`
                inline-flex items-center
                text-[11px] uppercase tracking-wide font-semibold
                px-3 py-1 rounded-full
                ${etiquetaStyles[etiqueta]}
              `}
            >
              {etiqueta}
            </span>
          ))}
        </div>
      )}

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        {/* Título */}
        <h3 className="text-base font-semibold text-text-light dark:text-text-dark leading-snug mb-2">
          {product.nombre}
          {product.volumen && (
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {" "}
              · {product.volumen} {product.unidad}
            </span>
          )}
        </h3>

        {/* Meta info */}
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <p>
            <span className="font-medium">Color:</span> {product.color}
          </p>
          <p>
            <span className="font-medium">Rosca:</span> {product.rosca.diametro}{" "}
            mm
            {product.rosca.estandar && ` / ${product.rosca.estandar}`}
          </p>
          {product.piezasPorPaquete && (
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              {product.piezasPorPaquete} PZS / PAQ
            </p>
          )}
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.categorias.map((cat) => (
            <span
              key={cat}
              className="text-[11px] px-3 py-1 rounded-full bg-gray-100 dark:bg-bgdark-main text-gray-600 dark:text-gray-400"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Acción */}
        <div className="mt-auto">
          <Button
            icon={<CirclePlus size={20} />}
            size="sm"
            type="secondary"
            onClick={() => onQuote(product)}
            className="w-full"
            aria-label={`Cotizar ${product.nombre} ${product.volumen} ml`}
          >
            Añadir a Cotización
          </Button>
        </div>
      </div>
    </article>
  );
}
