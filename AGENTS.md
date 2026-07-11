# 📐 Project Guidelines — Envases La Merced Frontend

## 1. Propósito

Este documento define las **reglas obligatorias** para el desarrollo del proyecto.  
El objetivo es garantizar:

- Consistencia técnica
- Escalabilidad
- Mantenibilidad
- Buen SEO

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

## 📋 Memoria de Contexto — SEO

### Fuentes
- `docs/https___envaseslamerced.mx_-Coverage-2026-07-04.xlsx` — Reporte de Google Search Console (Jul 2026)
- `docs/seo-aeo-audit.md` — Auditoría SEO + AEO v1 (2026-06-21)

### Problemas críticos de Search Console (pendientes)
| Problema | Páginas | Validación |
|---|---|---|
| Soft 404 | 2 | No iniciada |
| Error 403 | 1 | No iniciada |
| Descubierta sin indexar | 6 | No iniciada |

### Estrategia prioritaria (5 acciones) — COMPLETADA 2026-07-04

### Acción #1 — Blog implementado ✅
- Ruta: `/blog` (listado) + `/blog/[slug]` (6 artículos)
- 6 artículos: *Tipos de envases PET*, *Cómo elegir proveedor*, *PET vs otros materiales*, *PET para cosméticos*, *Sustentabilidad y reciclaje*, *Normatividad en México*
- Stack: `.jsx` (React puro) + `content.jsx` por artículo
- Schema: `BlogPosting` + `BreadcrumbList` + `WebSite` en cada artículo
- Diseño: Framer Motion, gradientes, barra de progreso, TOC sticky, compartir redes
- Navegación: "Blog" en header y footer

### Acción #2 — Co-ocurrencia semántica ✅
- `"proveedor de envases PET"`: 17 archivos (antes 3)
- `"industria del packaging"`: 15 archivos (antes 0)
- `"packaging"` fuera del blog: 12 archivos (antes 0)
- Aplicado en: home hero, context, about, catálogo, contacto, 5 sucursales, footer, chatbot, schema, metadata

### Acción #3 — Entity SEO ✅
- `organizationSchema`: `@id`, `foundingDate` (2021), `numberOfEmployees`, `areaServed` (MX), `PostalAddress`, `knowsAbout` (5 entidades)
- `webSiteSchema`: `@id`, `SearchAction` en catálogo, `publisher` → `#organization`
- `branchesSchema`: `@id` por sucursal, `parentOrganization` → `#organization`
- `blogSchema`: `publisher` por `@id`, `isPartOf` → `#website`
- Grafo de entidad conectado vía `@id`

### Acción #4 — Breadcrumb schema ✅
- Nuevos: `/catalogo`, `/contacto`, `/cdmx`, `/puebla`, `/veracruz`, `/neza`, `/queretaro`
- Ya existían: `/sobre-nosotros`, `/blog/*` (9 páginas)
- Cobertura: 100% de páginas indexables

### Acción #5 — Correcciones técnicas ✅
- Sitemap: referencia circular ya corregida (`additionalSitemaps` comentado)
- robots.txt: creado en `public/` con link al sitemap
- `<img>` → `<Image>`: 4 componentes migrados (ImageTextSection, CardOpinion, ProductCard, CartItem)
- `.htaccess` corregido y diagnosticado via `docs/logs del servidor.odt`

### Diagnóstico del servidor (logs)
- **Error 403 masivo**: todas las páginas fallan con `AH01276: Cannot serve directory`
- **Causa**: el servidor tiene directorios viejos (`/catalogo/`, `/contacto/`, `/cdmx/`, etc.) de un sitio anterior. Apache los encuentra como directorios, pero no tienen `index.html` → 403 Forbidden
- **Raíz en `.htaccess`**: la regla `RewriteCond %{REQUEST_FILENAME} -d` atrapaba esos directorios vacíos antes de que el rewrite a `.html` pudiera actuar

### Fix del `.htaccess` (aplicar con deploy)
```diff
- RewriteCond %{REQUEST_FILENAME} -f [OR]
- RewriteCond %{REQUEST_FILENAME} -d
+ RewriteCond %{REQUEST_FILENAME} -f
```
- Solo sirve archivos reales. Todo lo demás → busca `.html` o devuelve `404.html` real
- **IMPORTANTE**: el `.htaccess` nuevo solo funciona junto con los archivos del build (`out/*.html` planos). NO desplegar solo el `.htaccess` sin el build, o el sitio se rompe
- El `.htaccess` actual en servidor (el original que funciona) está documentado más abajo

### ⚠️ `.htaccess` actual en producción (funcionando)
```apache
Options -MultiViews
<IfModule mod_headers.c>
  Header always set Content-Security-Policy "..."
  ...
</IfModule>
<IfModule mod_rewrite.c>
  RewriteEngine On / RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^$ index.html [L]
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]
  RewriteRule ^ index.html [L]
</IfModule>
```

### `.htaccess` nuevo (para desplegar con el build)
Archivo: `public/.htaccess` → se copia a `out/.htaccess` en el build
Cambios vs el actual: sin `-d`, catch-all a `404.html`, `ErrorDocument 404`, cache headers

### Estado actual
- 5/5 acciones de código completadas
- 18 páginas estáticas generadas (antes 11)
- 6 artículos de blog con ~8,000 palabras de contenido original
- **Pendiente**: hacer deploy completo (`out/` + `.htaccess` nuevo) para que los fixes de 403/Soft 404 surtan efecto
- **Pendiente**: solicitar validación en GSC tras deploy para los 3 problemas críticos
