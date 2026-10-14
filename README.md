# María Paula Muentes — Mapa Musa

Sitio estático (HTML + CSS + JavaScript nativo, sin frameworks) reconstruido a partir de un PDF de diseño. Mobile-first, accesible, con scroll reveals y navegación que se oculta al bajar y reaparece al subir. Se despliega solo en **GitHub Pages** con **GitHub Actions**.

## Estructura

```
index.html                 # página (secciones del diseño)
assets/images|icons|fonts  # imágenes, iconos y fuentes propias
config/assets.js           # ÚNICA fuente de rutas de imágenes
css/variables.css          # design tokens (colores, tipografía, spacing…)
css/reset.css  base.css  components.css  responsive.css  motion.css
js/main.js  navigation.js  animations.js
scripts/sync-assets.mjs    # alinea los src del HTML con config/assets.js
docs/DESIGN-ANALYSIS.md    # análisis del PDF y decisiones
.github/workflows/deploy.yml
```

## Ejecutar en local

Los módulos ES no funcionan con doble clic (`file://`). Usa un servidor local:

```bash
python3 -m http.server 8000      # o: npx serve .
# abre http://localhost:8000
```

## Imágenes

Las imágenes vienen del PDF, optimizadas en `assets/images/<sección>/*.webp`. Para cambiar una, reemplaza el archivo (o su ruta en `config/assets.js`). Detalles, sustituciones de fuente y supuestos: `docs/DESIGN-ANALYSIS.md`.

## Despliegue

Sube la carpeta a un repo de GitHub, activa **Settings → Pages → Source: GitHub Actions** y haz push a `main`; `.github/workflows/deploy.yml` publica el sitio.
