# Índice de Documentación

Punto de entrada único a toda la documentación del proyecto.
Actualiza este índice al agregar, modificar o versionar documentos.

---

## Documentos

| Documento | Versión | Última actualización | Descripción |
|---|---|---|---|
| [Arquitectura](./architecture.md) | — | — | Stack, rutas, componentes, estilos, git flow |
| [Reglas del proyecto](./rules.md) | — | — | Reglas obligatorias de desarrollo |
| [.htaccess](./htaccess.md) | — | — | Configuración Apache para build estático |
| [Auditoría SEO + AEO](./seo-aeo-audit.md) | v1 | 2026-06-21 | Diagnóstico de visibilidad en motores de IA |

> 📄 **Última auditoría SEO/AEO:** [v1 — 2026-06-21](./seo-aeo-audit.md)

---

## Convención de versionado

Los documentos sujetos a actualizaciones periódicas (como la auditoría SEO/AEO)
usan un bloque de versiones al inicio del archivo. Cada actualización agrega
una fila a la tabla con el nuevo número de versión, fecha y resumen de cambios.

### Cómo actualizar un documento versionado

1. Incrementa el número de versión (`v1` → `v2`, etc.)
2. Agrega una fila a la tabla de versiones con fecha y resumen
3. Actualiza el contenido del documento
4. Actualiza la tabla de este índice (versión y fecha)

---

## Convención de nombres

```
tema-detalle.md          → kebab-case, descriptivo
```

- Sin prefijos de versión en el nombre del archivo
- La versión se declara **dentro** del contenido
- El índice (`INDEX.md`) es la fuente de verdad del estado actual
