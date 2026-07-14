# 📐 Project Guidelines — Envases La Merced Frontend

## 1. Propósito

Este documento define las **reglas obligatorias** para el desarrollo del proyecto.  
El objetivo es garantizar:

- Consistencia técnica
- Escalabilidad
- Mantenibilidad
- Buen SEO
- Accesibilidad (WCAG + navegación agéntica)

Cualquier implementación debe respetar estas pautas.

---

## 2. Stack Oficial

- Next.js (App Router)
- React (JSX)
- Tailwind CSS
- Framer Motion
- Tabler Icons
- React Hook Form + Zod

❌ No se permite introducir nuevas librerías sin validación previa.

---

## 3. Arquitectura de Estilos (Obligatorio)

Todo el sistema visual se controla desde:

```bash
/src/app/globals.css
```

---

## 4. Accesibilidad (Obligatorio)

Auditoría de Accessibility Tree / navegación agéntica aplicada en la rama
`fix/a11y-agentic-navigation`. Estas reglas son obligatorias para todo código nuevo:

### 4.1 Nombres accesibles

- **Todo botón de solo icono debe recibir `ariaLabel`** al usar
  `src/components/ui/Button.jsx`. No existe fallback genérico: un icon-only sin
  `ariaLabel` emite `console.warn` en dev y queda sin nombre en el árbol.
- `Button` acepta y reenvía: `ariaLabel`, `aria-label`, `aria-expanded`,
  `aria-controls`, `aria-haspopup`.
- Enlaces que solo contienen SVG/iconos deben llevar `aria-label`.
- Todo `input`, `textarea` y `select` debe tener `<label>` asociado o `aria-label`.
- Los `<iframe>` (mapas, embeds) deben tener `title`.

### 4.2 SVG e iconos

- SVG decorativos: `aria-hidden="true" focusable="false"` (aplica también a
  iconos de lucide/tabler dentro de botones ya etiquetados).
- SVG informativos: `title` + nombre accesible.

### 4.3 Componentes con estado abierto/cerrado

- Toggles de menús, acordeones y paneles: `aria-expanded` + `aria-controls`
  (ver `Header.jsx`, `CategoryFilter.jsx`, `CartFooter.jsx`, `ChatbotWidget.jsx`).
- Drawers/modales: `role="dialog"` + `aria-modal` + `aria-label`, y `inert`
  cuando están cerrados pero permanecen en el DOM (ver `CartDrawer.jsx`).
- Menús flotantes: `role="menu"` / `role="menuitem"` (ver menú WhatsApp del chatbot).
- Nada de interacciones solo-hover: todo submenú debe poder abrirse con teclado
  (patrón implementado en el submenú "Sucursales" del Header).

### 4.4 Formularios

- Errores de validación: `aria-invalid` + `aria-describedby` en el campo y
  `role="alert"` en el mensaje (ya implementado en `ui/form/Input.jsx` y
  `ui/form/Textarea.jsx`; usar siempre estos componentes).
- Notificaciones/avisos dinámicos: `role="alert"` o `aria-live`.

### 4.5 Estructura

- Un solo `<h1>` por página; sin saltos de jerarquía de headings.
- Cada página envuelve su contenido en `<main id="main-content">`
  (requerido por el skip link global definido en `src/app/layout.js`).
- `<nav>` múltiples deben diferenciarse con `aria-label`.
- Breadcrumbs: `<nav aria-label="Breadcrumb"><ol>` con `next/link`
  (nunca `<a>` para rutas internas) y `aria-current="page"` en el último ítem.
- Inputs de búsqueda: `type="search"`.
- Prohibido `<div onClick>` / `<span onClick>`: usar `<button>` o `<Link>`.

### 4.6 Verificación

Antes de commitear cambios de UI ejecutar:

```bash
npm run lint
npm run build
```

Deuda conocida (pre-existente, no bloquear por esto): errores
`react-hooks/set-state-in-effect` en `CartProvider.jsx`, `ThemeProvider.jsx`
y warning en `UIProvider.jsx`.
