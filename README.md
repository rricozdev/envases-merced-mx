# Envases La Merced — Frontend

## Stack Base

- **Next.js (App Router)** → Renderizado híbrido (SSR / SSG) optimizado para SEO
- **React (JSX)** → UI basada en componentes
- **Tailwind CSS** → Sistema de estilos utility-first
- **Framer Motion** → Animaciones
- **Tabler Icons** → Iconografía ligera
- **React Hook Form + Zod** → Manejo y validación de formularios
- **React Toastify** → Notificaciones
- **Swiper** → Carruseles

---

## Arquitectura de Estilos

El archivo global (`globals.css`) será la fuente central del sistema de diseño. Recuerden `First Responsive`.

### Estructura de Design Tokens

Se deben definir tokens base organizados por categorías:

- **Base Tokens**
- **Brand**
- **Neutrals**
- **Semantic Tokens**

Y sus aplicaciones:

- **Backgrounds**
- **Text**
- **Borders**
- **Buttons**
- **Links**
- **Accents**

> Objetivo: mantener consistencia visual, escalabilidad y facilitar cambios globales.

---

## Manejo de Imágenes

Ubicación:

```bash
/public/images
```

### Regla

- Todas las imágenes deben ir dentro de `public/images`
- Usar nombres claros y estructurados
- Preferir formato **.webp** optimizado

### Nota técnica

Sí, es **buena práctica** en Next.js:

- `public/` permite acceso directo
- Compatible con `next/image`
- Mejora performance si se optimiza correctamente

---

## Convención de Componentes

### Uso de funciones declaradas (obligatorio)

Todos los componentes deben definirse utilizando **function declarations**.

✔ Correcto:

```jsx
export default function Home() {
  return <div>...</div>;
}
```

❌ Incorrecto:

```jsx
const Home = () => {
  return <div>...</div>;
};
```

### Motivo

- Mejor legibilidad
- Hoisting disponible
- Consistencia en todo el proyecto
- Facilita debugging

---

Cualquier componente que no cumpla esta regla debe ser refactorizado.

---

## Git Flow

### Ramas

- `main` → Producción
- `develop` → Integración de desarrollo
- `feature/*` → Nuevas funcionalidades
- `fix/*` → Correcciones

---

### Reglas

#### ❌ Prohibido

- Hacer push directo a `main`

#### ✔ Flujo correcto

1. Crear rama desde `develop`:

```bash
git checkout develop
git pull
git checkout -b feature/nombre-feature
```

2. Para fixes:

```bash
git checkout -b fix/nombre-fix
```

3. Subir cambios:

```bash
git push origin feature/nombre-feature
```

4. Crear Pull Request → hacia `develop`

---

## Convenciones

- Código reutilizable en `components/`
- Lógica desacoplada en `utils/`
- Evitar duplicación de estilos (usar tokens)
- Mantener consistencia en naming

---

## Objetivo del Proyecto

- Escalable
- SEO-friendly
- Mantenible
- Performance-first
