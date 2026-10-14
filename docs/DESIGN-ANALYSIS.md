# Análisis de diseño — María Paula Muentes · «Mapa Musa» (portafolio de moda)

Fuente: `PORTAFOLIO.pdf` — 21 láminas apaisadas 2:1 (doble página de cuaderno de espiral), 191 imágenes embebidas, 9 fuentes.

## Concepto visual
Cuaderno de bocetos: papel blanco, espiral metálico central, collage de fotos, polaroids, recortes («stickers») y bloques de color por proyecto. Portada en papel acuarela `#e6ebee` con stickers ilustrados (@guambritaff).

## Mapa de secciones (orden del PDF)
| Sección | Láminas | Acento |
|---|---|---|
| Portada | 1 | `#9facc8` |
| Índice | 2 | `#9facc8` |
| Umiña (moodboard + concepto) | 3–4 | `#015b4f` |
| Valdivia | 5 | `#2ca8b3` |
| Trabajo de titulación · Nua Novias | 6–11 | `#37312d` |
| Saraguro · ropa infantil | 12 | `#d83d6a` / `#901d4a` |
| Patronaje + Biomimesis | 13 | `#9d993d` |
| Sastrería | 14 | `#901d4a` |
| Ballet (ropa deportiva) | 15–16 | `#9d905d` |
| Bordado Luneville + Corsetería en cuero | 17 | `#d19b9a` / `#703d25` |
| Manipulación textil y tecnologías | 18 | `#e9c78b` |
| Moldería especializada | 19 | `#94898f` |
| Compañía de teatro | 20 | `#a24a6d` |
| Vatex | 21 | `#67777d` |

## Tipografía
| PDF | Uso | Sustituto web |
|---|---|---|
| CatchyMager | Títulos | Bodoni Moda (MISSING FONT) |
| Cinzel Decorative | «Concepto», portada de titulación | Cinzel Decorative |
| Lora / Open Sans | Índice, cuerpo | Lora / Open Sans |
| TT Chocolates | Texto de tesis | Open Sans (MISSING FONT) |
| DO-Script | «fragmentada» | Caveat (MISSING FONT) |

## Decisiones técnicas
- Cada lámina = `.stage`. ≥80em: posicionamiento absoluto en % (coordenadas del PDF) con `container-type` y `cqw`; <80em: flujo en columnas (mobile-first).
- Espiral: tira vertical (escritorio) y horizontal (móvil), generadas desde la imagen del cuaderno del PDF.
- Recortes automáticos: lo que el PDF recortaba fuera de página se recorta al exportar la imagen.
- Rutas de imagen solo en `config/assets.js`; imágenes en WebP.

## ASSUMPTIONS / AMBIGUOUS
- Contraste: paneles olivo (`#7f7b27`), ballet (`#7d7248`), bordado (`#a05d66`), moldería (`#766b72`) oscurecidos para texto blanco AA; panel dorado de tecnologías con texto `#3c3333`. `#9facc8` se conserva en portada (decorativo) y se añade `--color-primary-strong` para texto pequeño.
- Erratas normalizadas: «Serendilvia e es» → «Serendilvia es»; «TEXTILESY» → «textiles y»; índice: «and» → «y». El «02» duplicado del índice se mantiene.
- Omitidos (vectoriales/máscaras no recuperables): espirales azules de Valdivia, flores de línea de biomimesis, imágenes dentro de los marcos de teatro, flecha «siguiente» de la lámina 6.
- Lámina 18: recortes de telas por segmentación automática (quedan rastros grises); marco del bastidor + foto circular en CSS.
- «sintaxis» (lámina 7/8) recreada con letras CSS estilo recorte de revista.
- Navegación superior añadida (no existe en el PDF).
- Imágenes de láminas 3 y 12 recortadas manualmente al área visible del PDF.
- Fuentes de Google Fonts no verificables en el sandbox.
