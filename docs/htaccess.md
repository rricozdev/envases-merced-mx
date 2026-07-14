# .htaccess — Servidor Apache

Next.js genera un build estático en `out/`. Los headers de seguridad deben aplicarse desde el servidor web. Si usas Apache, crea un `.htaccess` en la raíz del dominio con este contenido:

```apache
# Content-Security-Policy
<IfModule mod_headers.c>
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://www.googletagmanager.com https://www.google.com;"

  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "DENY"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  Header always set Cross-Origin-Opener-Policy "same-origin-allow-popups"
</IfModule>

# Rewrite: servir archivos .html como URLs canónicas
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirigir directorios a versión sin trailing slash
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^(.+)/$ $1 [R=301,L]

  # Si es un archivo real (.html, .js, etc) — servir directo
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^ - [L]

  # Página principal
  RewriteRule ^$ index.html [L]

  # Para compatibilidad: URLs limpias → serve .html internamente
  RewriteCond %{DOCUMENT_ROOT}/$1.html -f
  RewriteRule ^(.+)$ $1.html [L]

  # 404 para rutas inexistentes
  RewriteRule ^.*$ 404.html [L]
</IfModule>
```

> **Rutas canónicas con `.html`**: todas las rutas internas del proyecto usan `.html` como extensión canónica (ej. `/catalogo.html`, `/blog.html`). Esta estrategia evita que Apache devuelva 403 cuando existen directorios en el servidor con el mismo nombre de la ruta.
