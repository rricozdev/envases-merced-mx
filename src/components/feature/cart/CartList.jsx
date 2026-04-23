"use client";

import { useCart } from "@/components/providers/CartProvider";
import CartItem from "./CartItem";

export default function CartList() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex-1 p-4 text-sm text-gray-500">
        No hay productos en la cotización
      </div>
    );
  }

  return (
    <ul className="flex-1 overflow-y-auto p-4 space-y-4 divide-y" role="list">
      {cart.map((item) => (
        <CartItem key={`${item.id}-${item.quantity}`} item={item} />
      ))}
    </ul>
  );
}
