"use client";

import { useCart } from "@/components/providers/CartProvider";
import { Trash } from "lucide-react";
import { useState } from "react";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const [qty, setQty] = useState(String(item.quantity));

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setQty("");
      return;
    }
    if (!/^\d+$/.test(value)) return;

    setQty(value);
  };

  const handleBlur = () => {
    const numericValue = Number(qty);

    if (!numericValue || numericValue < 1) {
      setQty(String(item.quantity));
      return;
    }
    updateQuantity(item.id, numericValue);
  };

  const handleIncrement = () => {
    const newQty = Number(qty) + 1;
    setQty(String(newQty));
    updateQuantity(item.id, newQty);
  };

  const handleDecrement = () => {
    const newQty = Math.max(1, Number(qty) - 1);
    setQty(String(newQty));
    updateQuantity(item.id, newQty);
  };

  return (
    <li className="group relative flex gap-4 p-4 transition-all duration-300">
      {/* Imagen con efecto hover */}
      <div className="relative h-20 w-20 shrink-0 p-3 overflow-hidden rounded-xl bg-white dark:to-gray-900 shadow-sm">
        <img
          src={item.img.src}
          alt={item.img.alt}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {/* Nombre + eliminar */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2 ">
              {item.nombre} {item.volumen && `- ${item.volumen}${item.unidad}`}
            </h3>
            <p>
              {item.piezasPorPaquete && `${item.piezasPorPaquete} PZS/PAQ `}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className=" cursor-pointer shrink-0 p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-200 -mt-1"
            aria-label="Eliminar producto"
          >
            <Trash size={20} />
          </button>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {item.smDescription}
        </p>

        {/* Cantidad con controles mejorados */}
        <div className="flex items-center gap-3 mt-auto">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Cantidad
          </span>

          <div className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={handleDecrement}
              className="cursor-pointer px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={Number(qty) <= 1}
              aria-label="Disminuir cantidad"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>

            <input
              id={`qty-${item.id}`}
              type="text"
              inputMode="numeric"
              value={qty}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-12 text-center text-sm font-medium text-gray-900 dark:text-white bg-transparent border-x border-gray-200 dark:border-gray-700 focus:outline-none focus:bg-blue-50 dark:focus:bg-blue-900/20 transition-colors"
            />

            <button
              onClick={handleIncrement}
              className=" cursor-pointer px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Aumentar cantidad"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
