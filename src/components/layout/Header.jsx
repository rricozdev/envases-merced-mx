"use client";

import { navLinks } from "@/utils/constants/navLinks.js";
import { OVERLAYS } from "@/utils/constants/overlays.js";
import { ChevronDown, Menu, Moon, ShoppingCart, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { useUI } from "../providers/UIProvider";
import { useCart } from "../providers/CartProvider";
import { useTheme } from "../providers/ThemeProvider";

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

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-light-border dark:border-dark-border bg-bgligth-main/80 dark:bg-bgdark-main/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group font-primary">
            <Image
              src={isDark ? "/logo_dark_mode.webp" : "/logo_light_mode.webp"}
              alt="Envases La Merced"
              width={110}
              height={40}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-xl font-bold hidden sm:block">
              <span className="text-txtligth-primary dark:text-txtdark-primary">
                Envases
              </span>{" "}
              <span className="text-brand-accent">La Merced</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {link.submenu ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-base font-medium transition-colors ${
                          pathname.startsWith("/sucursales")
                            ? "text-brand-accent"
                            : "hover:text-brand-accent"
                        }`}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className="transition-transform group-hover:rotate-180"
                        />
                      </button>

                      {/* DROPDOWN */}
                      <ul className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg bg-white dark:bg-bgdark-main border border-light-border dark:border-dark-border opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        {link.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/sucursales/${item.path}`}
                              className={`block px-4 py-3 text-sm transition ${
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
                      className={`text-base font-medium transition ${
                        isActive(link.href)
                          ? "text-brand-accent"
                          : "hover:text-brand-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* THEME */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              aria-label="Cambiar tema"
              className="transition-transform hover:scale-110"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            {/* CART */}
            <div className="relative">
              <Button
                onClick={() => toggle(OVERLAYS.CART)}
                variant="ghost"
                size="sm"
                aria-label={`Carrito, ${cartCount} productos`}
                className="transition-transform hover:scale-110"
              >
                <ShoppingCart size={18} />
              </Button>

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
              className="lg:hidden transition-transform hover:scale-110"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-light-border dark:border-dark-border mt-2">
            <ul className="flex flex-col gap-3 p-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.submenu ? (
                    <details>
                      <summary className="cursor-pointer flex justify-between items-center py-2">
                        {link.name}
                        <ChevronDown size={16} />
                      </summary>
                      <ul className="ml-4 mt-2 flex flex-col gap-2">
                        {link.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/sucursales/${item.path}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1"
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
                      className="block py-2"
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
