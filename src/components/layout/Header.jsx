"use client";

import { navLinks } from "@/utils/constants/navLinks.js";
import { OVERLAYS } from "@/utils/constants/overlays.js";
import { ChevronDown, Menu, Moon, ShoppingCart, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "../providers/CartProvider";
import { useTheme } from "../providers/ThemeProvider";
import { useUI } from "../providers/UIProvider";
import Button from "../ui/Button";

const useActiveRoute = () => {
  const pathname = usePathname();

  const isActive = (path) => path && pathname === path;
  const isSubActive = (subPath) =>
    pathname.startsWith(`/sucursales/${subPath}`);

  return { pathname, isActive, isSubActive };
};

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { toggle } = useUI();
  const { cart } = useCart();

  const { pathname, isActive, isSubActive } = useActiveRoute();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = useMemo(() => cart.length, [cart]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-light-border dark:border-dark-border bg-bgligth-main/80 dark:bg-bgdark-main/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group font-primary">
            <Image
              src={isDark ? "/logo_dark_mode.webp" : "/logo_light_mode.webp"}
              alt="Envases La Merced"
              width={110}
              height={40}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-lg font-bold hidden sm:block">
              <span className="text-txtligth-primary dark:text-txtdark-primary">
                Envases
              </span>{" "}
              <span className="text-brand-accent">La Merced</span>
            </span>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {link.submenu ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-base font-primary font-semibold transition ${
                          pathname.startsWith("/sucursales")
                            ? "text-brand-accent-hover"
                            : "hover:text-brand-accent-hover text-brand-primary dark:text-txtdark-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className="transition-transform group-hover:rotate-180"
                        />
                      </button>

                      <ul className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg bg-white dark:bg-bgdark-main border border-light-border dark:border-dark-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        {link.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/sucursales/${item.path}`}
                              className={`block px-4 py-3 text-sm font-primary font-semibold transition ${
                                isSubActive(item.path)
                                  ? "text-brand-accent"
                                  : "hover:bg-bgligth-secondary dark:hover:bg-bgdark-secondary"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-base font-primary font-semibold transition ${
                        isActive(link.href)
                          ? "text-brand-accent-hover"
                          : "hover:text-brand-accent-hover text-brand-primary dark:text-txtdark-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 relative z-50">
            {/* THEME */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              icon={
                isDark ? (
                  <Sun
                    size={25}
                    className="text-txtdark-secondary hover:text-txtdark-primary"
                  />
                ) : (
                  <Moon
                    size={25}
                    className="text-brand-primary hover:text-brand-accent-hover"
                  />
                )
              }
              className="transition-transform hover:scale-110"
            />

            {/* CART */}
            <div className="relative">
              <Button
                onClick={() => toggle(OVERLAYS.CART)}
                variant="ghost"
                size="sm"
                icon={
                  <ShoppingCart
                    size={25}
                    className="text-brand-primary dark:text-txtdark-secondary"
                  />
                }
              />
              {cartCount > 0 && (
                <span className="absolute -top-1 left-5 h-5 min-w-5 px-1.5 flex items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white animate-bounce">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </div>

            {/* MOBILE BUTTON */}
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="sm"
              icon={
                mobileMenuOpen ? (
                  <X
                    size={20}
                    strokeWidth={2.5}
                    className="text-brand-primary dark:text-txtdark-secondary"
                  />
                ) : (
                  <Menu
                    size={20}
                    strokeWidth={2.5}
                    className="text-brand-primary dark:text-txtdark-secondary"
                  />
                )
              }
              className="lg:hidden transition-transform hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* OVERLAY - Solo debe cubrir el área debajo del header y permitir clics fuera del menú */}
      {mobileMenuOpen && (
        <div
          className="fixed top-20 inset-x-0 bottom-0 z-40 lg:hidden pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full z-50 transition-[opacity,transform] duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-bgligth-main dark:bg-bgdark-main border-t border-light-border dark:border-dark-border shadow-lg">
          <nav className="max-w-7xl mx-auto">
            <ul className="flex flex-col gap-2 p-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.submenu ? (
                    <details className="group">
                      <summary className="flex justify-between py-2 px-3 rounded-lg cursor-pointer hover:bg-brand-accent/10 transition-colors select-none">
                        {link.name}
                        <ChevronDown className="group-open:rotate-180 transition" />
                      </summary>

                      <ul className="mt-2 ml-3 border-l border-light-border dark:border-dark-border pl-3">
                        {link.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/sucursales/${item.path}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 px-2 rounded-md text-sm hover:bg-brand-accent/10 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg hover:bg-brand-accent/10 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
