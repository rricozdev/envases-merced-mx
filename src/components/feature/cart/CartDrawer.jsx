"use client";

import { useUI } from "@/components/providers/UIProvider";
import { OVERLAYS } from "@/utils/constants/overlays";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartList from "./CartList";

export default function CartDrawer() {
  const { isOpen } = useUI();
  const open = isOpen(OVERLAYS.CART);

  return (
    <aside
      className={`
      fixed top-0 right-0 z-50
      h-dvh w-full sm:w-96
      bg-bgligth-main dark:bg-bgdark-tertiary
      shadow-2xl
      flex flex-col
      transition-transform duration-300 ease-in-out
      ${open ? "translate-x-0" : "translate-x-full"}
      `}
      aria-hidden={!open}
    >
      <CartHeader className="shrink-0" />
      <CartList />
      <CartFooter className="shrink-0" />
    </aside>
  );
}
