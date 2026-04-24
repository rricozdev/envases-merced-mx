"use client";

import { useCart } from "@/components/providers/CartProvider";
import Button from "@/components/ui/Button";
import { messageWhasapSchemaCartProduct } from "@/feature/chat/messageWhasapSchema";
import { openWhatsApp } from "@/feature/chat/whatsappAction";
import { sucursalesData } from "@/utils/constants/sucursales";
import { useState } from "react";

export default function CartFooter() {
  const { cart, clearCart } = useCart();
  const [isOpen, setOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleClickSolicitarCotizacion = () => {
    if (cart.length === 0) {
      setShowWarning(true);
      setOpen(false);
      setTimeout(() => setShowWarning(false), 2500);
      return;
    }
    setOpen(!isOpen);
  };

  return (
    <footer className="border-t p-4 bg-bgligth-main dark:bg-bgdark-tertiary relative">
      {/* Notificación */}
      {showWarning && (
        <div className="absolute bottom-full w-64 mb-3 right-4 bg-yellow-500 text-white text-xs px-4 py-2 rounded-lg shadow-lg">
          Agrega productos al carrito para solicitar una cotización
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-gray-500 dark:text-txtdark-brand-primary/90">
          {cart.length} producto{cart.length !== 1 && "s"}
        </span>

        <div className="flex gap-2 relative">
          <Button
            size="sm"
            type="secondary"
            variant="outline"
            onClick={() => {
              clearCart();
              setOpen(false);
              setShowWarning(false);
            }}
          >
            Limpiar
          </Button>

          <Button
            size="sm"
            variant="solid"
            onClick={handleClickSolicitarCotizacion}
          >
            {isOpen ? "Cerrar Sucursales" : "Pedir Cotización"}
          </Button>

          {/* Sucursales */}
          {isOpen && (
            <div className="absolute w-50 h-60 top-[-250px] right-2 bg-bgligth-secondary dark:bg-bgdark-main flex flex-col gap-2 p-4 rounded shadow-inner">
              <h3 className="text-xs text-txtligth-primary dark:text-txtdark-primary">
                Seleccione la sucursal de su interés.
              </h3>

              {sucursalesData.map(({ name, whatsapp }, i) => (
                <Button
                  key={i}
                  size="sm"
                  type="secondary"
                  fullWidth
                  onClick={() =>
                    openWhatsApp({
                      phone: whatsapp,
                      message: messageWhasapSchemaCartProduct(cart),
                    })
                  }
                >
                  {name}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
