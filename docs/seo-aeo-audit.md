# Auditoría SEO + AEO — Envases La Merced

> **Marca:** Envases La Merced
> **Industria:** Envases PET / Packaging industrial en México
> **Alcance:** Repositorio local (sin backlinks ni señales externas)

---

## Versiones

| Versión | Fecha | Cambios |
|---|---|---|
| v1 | 2026-06-21 | Auditoría inicial completa |

---

## Resumen Ejecutivo

| Dimensión | Resultado |
|---|---|
| Co-ocurrencia semántica | Media |
| Estructura de entidad (Entity SEO) | Parcial |
| Contenido de autoridad interno | Insuficiente |
| SEO técnico interno | Parcial |
| **Riesgo para reconocimiento en IA** | **Alto** |

---

## 1. Co-ocurrencia Semántica

Evalúa si los términos clave del negocio aparecen juntos de forma consistente en
todo el sitio para que los modelos de IA asocien la marca con su industria.

| Término | Frecuencia en `src/` | Evaluación |
|---|---|---|
| `envases PET` | 61 ocurrencias | Alta |
| `México` / `Mexico` | 27 ocurrencias | Alta |
| `proveedor` | 3 ocurrencias | Baja |
| `industria packaging` | 0 ocurrencias | Inexistente |

**Resultado: Media**

**Evidencia:**
- `proveedor` solo en `src/components/feature/home/ContextSection.jsx:38`,
  `OpinionSection.jsx:38`, `InfoSection.jsx:14`
- `packaging`: cero apariciones en todo el código fuente
- `industria packaging`: cero apariciones en todo el código fuente
- `envases PET` bien distribuido en titles, descriptions, H1, H2, schema,
  contenido visible y alt texts

---

## 2. Estructura de Entidad (Entity SEO)

Revisa si el sitio representa la empresa como una entidad clara y completa.

**Resultado: Parcial**

### Lo que existe
- Página `/sobre-nosotros` con misión, visión, valores, presencia en 5 ciudades
- JSON-LD `Organization` en homepage, about y catálogo
- JSON-LD `LocalBusiness` + `WholesaleStore` por sucursal
- `FAQPage` con 6 preguntas/respuestas
- `sameAs` con 3 URLs de Facebook

**Archivos de schema:**
- `src/components/schema/organizationSchema.js`
- `src/components/schema/branchesSchema.js`
- `src/components/schema/breadcrumbSchema.js`
- `src/components/schema/catalogoSchema.js`
- `src/components/schema/contactSchema.js` (validación Zod, no JSON-LD)

### Lo que falta
- Sin `foundingDate`, `numberOfEmployees`, `areaServed` en Organization
- Sin `@id` ni referencias entre schemas (no hay grafo de entidad)
- Sin dirección (`PostalAddress`) a nivel organización, solo por sucursal
- Sin schema `WebSite` con `searchAction`
- Sin definición explícita de industria objetivo en texto visible

---

## 3. Contenido de Autoridad Interno

Detecta si el sitio tiene contenido especializado que los motores de IA usan
para establecer autoridad temática.

| Tipo de contenido | Existe |
|---|---|
| Blog / artículos | No |
| Guías técnicas | No |
| Casos de uso | No |
| Contenido explicativo del sector | No |
| Tutoriales | No |

**Resultado: Insuficiente**

El sitio solo tiene contenido institucional y de producto. Sin una biblioteca
de contenido técnico sobre envases PET, los modelos de IA no tienen suficiente
texto especializado para citar a Envases La Merced como referencia de autoridad.

---

## 4. SEO Técnico Interno

| Aspecto | Estado | Evidencia |
|---|---|---|
| Titles + Meta Description | Correcto | Todas las páginas (`layout.js`, `page.js`) |
| H1 único por página | Correcto | 1 H1 por página verificada |
| H2 semánticos | Correcto | Múltiples secciones en home, about, catálogo |
| HTML semántico | Correcto | `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` |
| Schema.org JSON-LD | Correcto | 5 schemas implementados |
| Canonical URL | Correcto | Todas las páginas |
| Open Graph + Twitter Cards | Correcto | Todas las páginas |
| Sitemap.xml | Parcial | Generado con `next-sitemap`; contiene referencia circular |
| robots.txt | Parcial | Solo en build output (`out/`), no en `public/` |
| Breadcrumb schema | Parcial | Solo en `/sobre-nosotros` |
| Google Search Console | Correcto | Meta tag + archivo de verificación |
| Google Tag Manager | Correcto | GTM-W4JS5W3L |
| Locale | Correcto | `es-MX` |
| Images | Parcial | Algunas usan `<img>` en lugar de `next/image` sin dimensiones |

**Resultado: Parcial**

**Problemas concretos:**
- Sitemap index se incluye a sí mismo como entrada (referencia circular)
- `robots.txt` no accesible en servidor de desarrollo
- Breadcrumb schema solo en about
- `ImageTextSection.jsx` usa `<img>` nativo sin width/height

---

## Nivel de Riesgo para Reconocimiento en IA

## 🔴 Alto

**Razones:**
1. Sin contenido de autoridad (blog/artículos), los motores de IA no pueden
   asociar la marca con conocimiento especializado del sector
2. Co-ocurrencia semántica débil en términos clave: "proveedor" y "packaging"
3. Sin diferenciación por contenido: las respuestas de IA serán genéricas
   sobre envases PET sin citar a Envases La Merced

---

## 5 Acciones Prioritarias

### 1. Crear sección de contenido técnico (blog / knowledge base)
- Implementar `/blog/` con artículos como *"Tipos de envases PET para industria
  alimenticia en México"*, *"¿Cómo elegir proveedor de envases PET?"*
- Usar archivos `.mdx` para facilitar creación editorial sin tocar código

### 2. Reforzar co-ocurrencia semántica
- Agregar "proveedor de envases PET" en al menos 10 ubicaciones clave
  (hero, CTAs, descripciones de producto, filtros, chatbots)
- Incorporar "industria del packaging en México" en home y about
- Agregar "packaging" en textos visibles y keywords de catálogo

### 3. Enriquecer Entity SEO con grafo completo
- Agregar `foundingDate`, `numberOfEmployees`, `areaServed` (México),
  `industry` al schema `Organization`
- Implementar `@id` y referencias cruzadas entre schemas
- Agregar schema `WebSite` con `SearchAction` para búsqueda en catálogo
- Agregar `PostalAddress` a nivel organización

### 4. Implementar breadcrumb schema en todo el sitio
- Agregar `BreadcrumbList` en catálogo, contacto y páginas de ciudad
- Actualmente solo existe en `/sobre-nosotros`

### 5. Corregir hallazgos técnicos
- Eliminar referencia circular en sitemap
- Mover `robots.txt` a `public/` para entorno de desarrollo
- Migrar `<img>` a `<Image>` de Next.js en `ImageTextSection.jsx`
- Agregar `width` / `height` en todas las imágenes
