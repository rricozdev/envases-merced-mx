"use client";

/**
 * LazyGTM
 *
 * Carga Google Tag Manager fuera de la ruta crítica:
 * - Espera a la primera interacción del usuario (pointer/scroll/tecla)
 * - Fallback: se carga tras 5s si no hay interacción
 *
 * Los eventos previos a la carga se encolan en window.dataLayer,
 * por lo que no se pierden mediciones.
 */

import { useEffect } from "react";

const GTM_ID = "GTM-W4JS5W3L";

export default function LazyGTM() {
  useEffect(() => {
    if (window.__gtmLoaded) return;

    const loadGTM = () => {
      if (window.__gtmLoaded) return;
      window.__gtmLoaded = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);

      events.forEach((e) => window.removeEventListener(e, loadGTM));
      clearTimeout(timeoutId);
    };

    const events = ["pointerdown", "scroll", "keydown", "touchstart"];
    events.forEach((e) =>
      window.addEventListener(e, loadGTM, { once: true, passive: true }),
    );

    const timeoutId = setTimeout(loadGTM, 5000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, loadGTM));
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
