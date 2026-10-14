// main.js — punto de entrada. Hidrata imágenes desde config/assets.js e inicia navegación y animaciones.
import { assets } from "../config/assets.js";
import { initNavigation } from "./navigation.js";
import { initAnimations } from "./animations.js";

// <html data-base="./"> en la raíz, "../" en pages/*.html
const base = document.documentElement.dataset.base || "./";
const lookup = (key) => key.split(".").reduce((o, k) => (o == null ? o : o[k]), assets);

document.querySelectorAll("[data-asset]").forEach((el) => {
  const path = lookup(el.dataset.asset);
  if (typeof path !== "string") { console.warn(`[assets] clave no encontrada: ${el.dataset.asset}`); return; }
  const url = base === "./" ? path : path.replace(/^\.\//, base);
  if (el.getAttribute("src") !== url) el.setAttribute("src", url);
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

initNavigation();
initAnimations();
