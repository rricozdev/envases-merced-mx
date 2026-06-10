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

# Rewrite: servir archivos estáticos desde out/
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /$1.html [L]
</IfModule>
```

> **Nota:** Los headers estaban originalmente en `next.config.mjs` pero no funcionan con `output: "export"`. Se migraron a `.htaccess` que es donde Apache los aplica correctamente.
