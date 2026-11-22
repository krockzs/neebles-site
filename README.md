# Entropia Games F21 — localización completa ES/EN

Basado exclusivamente en el inventario real entregado por el servidor:
`ENTROPIA_GAMES_SITIO_COMPLETO_20261108_160223.zip`.

## Qué cambia

- Portada: **Mis proyectos** (ES) / **My projects** (EN).
- Portada, página NEEBLES OS, visión general, BUILD, OS, CUSTOM / Esbirro y Boss: documentación traducida a inglés conservando párrafos, diagramas, arsenal, lore, ejemplos de código y enlaces originales.
- Filosofía: traducción completa en ambos idiomas; «Gratuidad con gratuidad» se presenta en inglés como «Free software built with free software. For everyone».
- Páginas de Boss, Secrets, Connect y Proxy: traducción del texto público, incluyendo todas las capturas explicadas, notas técnicas, funciones, controles, arquitectura, restricciones y avisos de trabajo pendiente.
- DB: preservada su implementación bilingüe y su estado **En desarrollo / In development**.
- Traducción de enlaces, botones, pies, encabezados, subtítulos, contenido oculto al cambiar de pestaña, metadescripciones y textos alternativos.
- Conserva todas las imágenes y capturas existentes; el texto **dentro** de las capturas originales pertenece a la interfaz de esas aplicaciones, no al contenido HTML del sitio, y permanece inalterado.

## Implementación

- `src/content-en.js`: traducción del documento técnico completo por índice de bloque; la estructura y ejemplos de código no se alteran.
- `src/i18n/pages-en.js`: diccionario exhaustivo de las cuatro páginas de módulos cuya edición original está en español. La traducción se aplica a nodos de texto de la página y preserva el contenido de código y enlaces.
- `src/i18n/es.js`, `src/i18n/en.js`: textos de navegación, catálogo, botones y portada.
- `src/philosophy.js` y `src/db-page.js`: contenido existente en ambos idiomas.
- `src/main.js`: selecciona toda la documentación y los textos según ES/EN, actualiza metadatos y mantiene el idioma tras la navegación.

## Instalación — un solo comando

Colocar `entropia-neebles-f21.zip` en `~/Downloads` en el server:

```bash
cd ~/Downloads && unzip -oq entropia-neebles-f21.zip -d entropia-neebles-f21 && bash entropia-neebles-f21/instalar.sh
```

El instalador compila primero en un staging usando el `node_modules` ya instalado en `/var/www/entropiagames` (sin internet), respalda la versión actual, copia los fuentes y coloca el compilado en `dist`. Dispone de restauración en caso de fallo durante el despliegue. No modifica Nginx, Cloudflared, el servicio backend Rust ni los servicios NEEBLES.

## Validación

- Se comprueban longitud y correspondencia de los bloques traducidos con los bloques españoles.
- Se revisan las traducciones de nodos visibles en las cuatro páginas de módulos y sus secciones técnicas.
- Se ejecuta `node --check` sobre todos los JS, `bash -n` en el instalador, y prueba de integridad del ZIP.
- `npm run build` **se ejecuta en el server**, con la versión de Vite instalada allí. El entorno de creación del ZIP no contiene Vite y no debe presentarse como compilación local certificada.
