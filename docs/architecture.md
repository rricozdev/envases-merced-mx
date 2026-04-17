# Arquitectura

## Visión General

Este proyecto está construido con **Next.js (App Router)**, **React (JSX)** y **Tailwind CSS**, con el objetivo de ser escalable, optimizado para SEO y fácil de mantener.

La arquitectura está diseñada para soportar **páginas por sucursal (ciudad)** como rutas independientes e indexables.

---

## Stack Principal

- Next.js (App Router)
- React (JSX)
- Tailwind CSS
- Framer Motion (animaciones)
- Tabler Icons (íconos)
- React Hook Form + Zod (formularios y validación)

---

## Estrategia de Rutas

Se utiliza el sistema de rutas basado en archivos con segmentos dinámicos:

```bash id="arch_es_2"
/app/[ciudad]/page.jsx
```

### Concepto

Cada ciudad se trata como una entidad independiente:

- /cdmx
- /puebla
- /queretaro

Cada ruta:

- Tiene metadata propia (SEO)
- Renderiza contenido estructurado
- Es indexable por buscadores
- Se alimenta desde una fuente central de datos

---

## Capa de Datos

Toda la información de sucursales se maneja desde una estructura centralizada:

- /utils/constants/sucursales.js

### Concepto

- Fuente única de verdad
- Cada objeto representa una sucursal
- Se reutiliza para generar páginas dinámicamente

Esto evita duplicación y mantiene consistencia en el sistema.

---

## Estrategia de Renderizado

El proyecto utiliza renderizado híbrido:

- **SSG (Static Site Generation)** para páginas de ciudades
- **SSR (Server Side Rendering)** cuando se requiera lógica dinámica

### Objetivo

- Mejor performance
- Mejor SEO
- HTML consistente y predecible

---

## Arquitectura de Componentes

Estructura:

```bash id="arch_es_3"
/components
  /UI
  /feature
```

### Reglas

- Componentes UI: reutilizables y genéricos
- Componentes feature: específicos del negocio
- No incluir lógica de negocio dentro de UI

---

## Sistema de Estilos

Todos los estilos se basan en **design tokens definidos en `globals.css`**.

### Categorías de tokens

- Brand
- Neutrales
- Semánticos
- Backgrounds
- Textos
- Bordes
- Botones
- Links
- Acentos

### Regla

- Prohibido usar colores hardcodeados
- Todo debe usar tokens o utilidades de Tailwind

---

## Manejo de Imágenes

- Todas las imágenes deben estar en `/public/images`
- Formato recomendado: `.webp`
- Acceso mediante rutas absolutas

### Objetivo

- Mejor rendimiento
- Optimización para web
- Estructura predecible de assets

---

## Estado de la Aplicación

- Manejo de estado local con hooks de React
- No se requiere librería global en esta fase

---

## Estrategia SEO

- Metadata dinámica por ruta
- URLs limpias por ciudad
- Implementación de JSON-LD
- Estructura orientada a SEO local

---

## Flujo Git

```bash id="arch_es_4"
main      → producción
develop   → integración
feature/* → nuevas funcionalidades
fix/*     → correcciones
```

### Reglas

- Prohibido hacer commits directos a `main`
- Todo cambio debe pasar por Pull Request
- `develop` es la rama activa de desarrollo

---

## Principio del Sistema

> El sistema prioriza escalabilidad, claridad SEO y reutilización de componentes por encima de soluciones rápidas o improvisadas.
