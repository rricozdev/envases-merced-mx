"use client";

import { useUI } from "@/components/providers/UIProvider";
import Button from "@/components/ui/Button";
import { OVERLAYS } from "@/utils/constants/overlays";
import { X } from "lucide-react";

export default function CartHeader() {
  const { close } = useUI();

  return (
    <header className="flex items-start justify-between gap-4 p-4 border-b">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-primary">
          Carrito de Cotización
        </h2>
        <p className="mt-2 text-sm text-text-light-body max-w-md font-secondary">
          Revise los productos seleccionados antes de solicitar su cotización.
        </p>
      </div>

      <Button
        type="secondary"
        variant="outline"
        size="sm"
        iconOnly
        className=" shrink-0 dark:text-txtdark-primary text-txtligth-primary dark:border-txtdark-primary  dark:hover:bg-txtdark-primary  dark:hover:text-txtligth-primary"
        icon={<X size={20} />}
        onClick={() => close(OVERLAYS.CART)}
      />
    </header>
  );
}
