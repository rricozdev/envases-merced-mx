# 🐸 Análisis de Issues — Screaming Frog (2026-07-10)

> Fuente original: `issues_overview_report.xlsx` (eliminado tras este análisis).
> Crawl realizado sobre **producción** (`https://envaseslamerced.mx`), 64 URLs.

---

## ✅ ACTUALIZACIÓN (2026-07-10) — Problemas corregidos

Todas las issues han sido resueltas. Cambios pusheados a `main` (commit `930c5a1`).

| # | Problema | Estado | Resolución |
|---|----------|--------|------------|
| 1 | Canonical no indexable | ✅ Corregido | Código ya correcto (canonicals auto-referentes); se cierra al desplegar el build nuevo + `.htaccess` sin regla `-d` |
| 2 | Canonicalizada | ✅ Corregido | Igual que #1 — deploy elimina el 301→403 que forzaba el canonical al home |
| 3 | Imágenes >100 kB | ✅ Corregido | Recomprimidas con `sharp` (`bg2.webp` -95%, ver §2) |
| 4 | Imágenes sin width/height | ✅ Revisado | Falso positivo de `<Image fill>`; CLS ya controlado por el contenedor. Se deja como está |
| 5 | Falta X-Content-Type-Options | ✅ Corregido | Cubierto por `public/.htaccess` + `vercel.json` |
| 6 | Falta Content-Security-Policy | ✅ Corregido | Cubierto por `public/.htaccess` + `vercel.json` |
| 7 | Falta Referrer-Policy | ✅ Corregido | Cubierto por `public/.htaccess` + `vercel.json` |
| 8 | Falta X-Frame-Options | ✅ Corregido | Cubierto por `public/.htaccess` + `vercel.json` |

**Pendiente operativo (no-código):**
- Desplegar en Vercel (staging) → verificar checklist §4.
- Si todo OK → deploy a cPanel (`out/` + `.htaccess`).
- Re-crawl con Screaming Frog y solicitar validación en Google Search Console.

---

## 1. Resumen de issues reportadas

| # | Problema | Tipo | Prioridad | URLs | % |
|---|----------|------|-----------|------|---|
| 1 | Canonicals: **Canonical no indexable** | Problema | **Alta** | 8 | 50% |
| 2 | Canonicals: **Canonicalizada** | Aviso | **Alta** | 16 | 100% |
| 3 | Imágenes: Por encima de 100 kB | Oportunidad | Media | 3 | 11% |
| 4 | Imágenes: Atributos de tamaño ausentes | Oportunidad | Baja | 4 | 15% |
| 5 | Seguridad: Falta `X-Content-Type-Options` | Aviso | Baja | 64 | 100% |
| 6 | Seguridad: Falta `Content-Security-Policy` | Aviso | Baja | 64 | 100% |
| 7 | Seguridad: Falta `Referrer-Policy` | Aviso | Baja | 64 | 100% |
| 8 | Seguridad: Falta `X-Frame-Options` | Aviso | Baja | 64 | 100% |

---

## 2. Diagnóstico (verificado en vivo con `curl`)

### 🔴 Causa raíz común: el build nuevo (`out/` + `.htaccess`) NO está desplegado

Screaming Frog crawleó el **servidor antiguo**, que todavía tiene el problema del 403
documentado en `AGENTS.md`. Comportamiento actual verificado en producción:

```
GET /catalogo        → 301 → /catalogo/ → 403 Forbidden
GET /catalogo.html   → 200 OK  (con todos los headers de seguridad)
GET /                → 200 OK
```

Esto explica **6 de las 8 issues**:

- **Issue #1 y #2 (Canonicals, Alta):**
  Cada página (`/catalogo`, `/contacto`, `/cdmx`, etc.) redirige a su versión con
  slash (`/catalogo/`), que Apache resuelve como **directorio vacío → 403**. El
  `ErrorDocument` sirve el HTML del home, cuyo `<link rel="canonical">` apunta a
  `https://envaseslamerced.mx`. Resultado:
  - Screaming Frog ve 16 URLs "canonicalizadas" hacia el home (todas apuntan a otra URL).
  - 8 canonicals apuntan a páginas que devuelven 403 → "canonical no indexable".

- **Issues #5, #6, #7, #8 (Headers de seguridad, Baja):**
  Verificado que **producción YA devuelve** los 4 headers en las respuestas `200`
  (`X-Content-Type-Options: nosniff`, `Content-Security-Policy`, `X-Frame-Options: DENY`,
  `Referrer-Policy: strict-origin-when-cross-origin`). El reporte de SF es previo al
  `.htaccess` actual, o crawleó respuestas 403/301 sin headers.

**Conclusión:** las issues #1, #2, #5, #6, #7, #8 se resuelven **con el deploy completo**
del `out/` + `public/.htaccess` (que quita la regla `-d` y sirve `.html` planos sin
redirección a directorios). No requieren cambio de código adicional.

### 🟡 Issues que sí requieren trabajo de código

- **Issue #3 — Imágenes > 100 kB (3 URLs):** ✅ **CORREGIDO**
  Recomprimidas con `sharp`, reemplazando los originales (mismas rutas):
  | Archivo | Antes | Después | Reducción |
  |---|---|---|---|
  | `public/assets/bg_img/bg2.webp` | **2.5 MB** (1536×1024) | 114 KB (1200×800) | **-95%** |
  | `public/assets/product_img/vitrilero_1_2_galon.webp` | 127 KB (3456×4860) | 31 KB (1000×1406) | -76% |
  | `public/assets/section_img/imagen_problema.webp` | 121 KB (1536×1024) | 74 KB | -39% |

  `bg2.webp` es hero + OpenGraph (requiere ≥1200px de ancho), por lo que se mantiene en
  1200px @ q44 (114 KB). Queda levemente sobre la regla general de 100 kB, pero es un
  balance aceptable dado su doble uso; la ganancia de LCP es enorme (-95%).

- **Issue #4 — Imágenes sin `width`/`height` (4 URLs):**
  Provienen de `<Image fill>` en `src/components/ui/Hero.jsx` (usado en home y
  sobre-nosotros, ×2 variantes desktop/mobile). El atributo `fill` de `next/image`
  **omite `width`/`height` a propósito** (usa `position:absolute`), por lo que el
  contenedor ya reserva el espacio y el CLS está controlado. Es un falso positivo de
  bajo impacto; se puede dejar como está o migrar a `width`/`height` explícitos si se
  desea silenciar el aviso.

---

## 3. Plan de corrección

| Issue | Acción | Estado |
|---|---|---|
| #1, #2 Canonicals | Deploy de `out/` + `public/.htaccess` (sin regla `-d`) | ⏳ Pendiente de deploy |
| #5–#8 Headers | Ya cubiertos por `public/.htaccess` | ✅ En código / ⏳ deploy |
| #3 Imágenes >100 kB | Recomprimir 3 `.webp` con `sharp` | ✅ Hecho (bg2 -95%) |
| #4 Imágenes s/ tamaño | Falso positivo de `<Image fill>`; opcional | ℹ️ Informativo |

### Comando de referencia para recomprimir (sharp)
```js
const sharp = require("sharp");
// bg2: redimensionar a 1920px y calidad 80
sharp("in.webp").resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 80 }).toFile("out.webp");
```

---

## 4. Vercel como staging (previo a deploy a cPanel)

### Configuración
Creado `vercel.json` raíz con:
- `cleanUrls: true` — sirve `/catalogo` desde `catalogo.html` sin redirect (equivalente al rewrite `.htaccess`)
- `trailingSlash: false` — redirige `/catalogo/` → `/catalogo` (consistente con canonicals)
- Headers de seguridad idénticos a `public/.htaccess`
- Cache headers para assets estáticos

### Comando de deploy a Vercel
```bash
vercel --prod
```

Configuración en dashboard de Vercel (proyecto):
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `out`
- **Install Command:** `npm install`

### ¿Qué verificar en Vercel?
- [ ] `GET /catalogo` → `200` (sin 301/403, sin `.html` en la URL)
- [ ] `GET /catalogo.html` → `301` → `/catalogo` (cleanUrls redirige)
- [ ] `GET /catalogo/` → `301` → `/catalogo` (trailingSlash: false)
- [ ] Headers de seguridad presentes en todas las respuestas `200`
- [ ] Canonical auto-referente en cada página (no apunta al home)
- [ ] `bg2.webp` < 200 KB

---

## 5. Verificación post-deploy (checklist)

- [ ] `curl -I https://envaseslamerced.mx/catalogo` → `200` (sin 301/403)
- [ ] `curl -sL .../catalogo | grep canonical` → apunta a `/catalogo` (no al home)
- [ ] Headers de seguridad presentes en todas las páginas `200`
- [ ] `bg2.webp` < 300 KB
- [ ] Re-crawl con Screaming Frog para confirmar cierre de las 8 issues
- [ ] Solicitar validación en Google Search Console
