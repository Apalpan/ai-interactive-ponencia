# Manual de IA · Aprendizaje avanzado (AECODE)

Sistema web **interactivo de aprendizaje avanzado de Inteligencia Artificial**: una
**biblioteca de conceptos cruzados**, **rutas académicas**, presentación 16:9, dinámicas
en vivo, bancos de mitos/casos/herramientas/preguntas, temporizador y marcador por
equipos. Pensado para **entender cada concepto y cómo se cruza con los demás**.

> Sirve como manual de estudio **y** como panel para dirigir una ponencia/clase.
> HTML + CSS + JavaScript puro. **Sin build, sin dependencias.** Funciona abriendo
> `index.html` directamente o publicado en GitHub Pages. Estética **AECODE** (dark-first,
> navy + violeta/índigo + verde, Manrope, glass + glow), con logos reales de marca.

**🔗 En vivo:** https://apalpan.github.io/ai-interactive-ponencia/

---

## ⚡ Cómo usarlo

- **Estudiar:** abre y entra a **Biblioteca de conceptos**. Toca un concepto → lee
  qué es / cómo funciona / analogía / dato clave / tip / ejemplo AEC → salta a sus
  **conceptos relacionados**.
- **Buscar rápido:** `⌘K` / `Ctrl K` abre el **command palette** (busca conceptos,
  secciones y acciones; ↑↓ + Enter).
- **Presentar/dar clase:** pulsa `F` (pantalla completa) y navega con `←` / `→`.
- **Local:** doble clic en `index.html` (no necesita servidor).

---

## 🧠 Qué incluye

**Aprende (núcleo del manual):**
- `Biblioteca de conceptos` — **70 conceptos** cruzados entre sí (cada uno enlaza a sus
  relacionados): fundamentos, datos, **IA generativa / predictiva / agéntica**,
  **AI-first / AI-native**, producción & gobierno (MLOps, evals, ética), negocio y AEC.
  Cada ficha: qué es · cómo funciona · analogía · dato clave · tip/truco · ejemplo en AEC.
- `Rutas de aprendizaje` — **6 sesiones con estructura académica**: Presentación ·
  Motivación · Conceptos clave (enlazados) · Proyecto y estrategia (4 pasos) ·
  Convencional vs. Propuesto (valor) · Key Takeaway + ideas.
- `Mapa de conceptos` — el territorio completo por categoría, todo navegable.
- `Tips & recursos` — 50 tips · 30 trucos de prompt · 20 errores comunes · 20 anécdotas
  didácticas · analogías clave. Con 🎲 recurso al azar.

**Presentación (decks 16:9):**
- `Apertura` · `Fundamentos de IA` · **`Paradigmas de IA`** (Generativa/Predictiva/Agéntica
  + AI-first/AI-native, con las frases ancla de RAG y fine-tuning) · `IA aplicada a AEC` ·
  `Cierre y framework`.

**Bancos (filtrables, con *revelar* y *tarjeta al azar*):**
- `Mitos y realidades` (32) · `Casos prácticos` (**42**, 18 categorías, con info disponible,
  métrica de éxito, primer paso y variante simple/avanzada) · `Herramientas IA` (**31**,
  con qué hace / para qué / mejor uso / caso productividad / caso AEC / límite / riesgo /
  alternativa / fuente) · `Banco de preguntas` (138, 6 cat × 3 niveles, **exportable**) ·
  `Productividad` (10 áreas + 5 ejercicios).

**Taller:** `Dinámicas grupales` (11) · `Gráficas y mapas` (**15 visualizaciones**
didácticas: IA/ML/DL, tokens & embeddings, RAG vs fine-tuning, impacto/facilidad,
riesgo/autonomía, mapa de herramientas por tarea, roadmap, flujos obra/BIM/CV…).

**Herramientas del ponente:** ⌘K command palette · 🎲 tarjeta aleatoria a pantalla
completa (mito/caso/pregunta/herramienta/concepto/recurso) · ◷ temporizador ·
🏆 marcador por equipos · 🎤 **modo facilitador** (abre timer+marcador y notas) ·
◆ notas (`N`) · ☾ tema claro/oscuro · ⤢ pantalla completa · ◷ modos (rápida / taller / curso).

---

## ⌨️ Atajos

| Tecla | Acción | Tecla | Acción |
|---|---|---|---|
| `⌘K` / `Ctrl K` | Buscar concepto / ir a | `R` | Tarjeta aleatoria |
| `←` / `→` | Slide anterior / siguiente | `T` | Temporizador |
| `Espacio` | Avanzar | `S` / `P` | Marcador por equipos |
| `Inicio` / `Fin` | Primer / último slide | `M` | Mostrar/ocultar menú |
| `G` | Índice de slides | `F` | Pantalla completa |
| `N` | Notas del ponente | `D` | Tema claro/oscuro |
| `R` | Tarjeta aleatoria | `H` / `?` | Ayuda · `Esc` cerrar |

---

## 🗂️ Estructura

```
ai-interactive-ponencia/
├── index.html
├── assets/
│   ├── styles.css           # Design system AECODE (dark-first, glass, glow, mesh)
│   └── brand/               # Logos AECODE reales (isotipo + wordmark dark/light)
├── js/app.js                # Motor: routing, biblioteca, ⌘K, decks, bancos, timer…
├── data/                    # Contenido editable (estructura JSON como globales)
│   ├── db.js                # Marca, módulos, modos, stats, analogías, glosario
│   ├── conceptos.js         # 70 conceptos cruzados (rel:[ids]) + categorías
│   ├── aprendizaje.js       # 6 rutas académicas + deck "Paradigmas"
│   ├── slides.js            # Slides de los decks (apertura/fundamentos/aec/cierre)
│   ├── recursos.js          # 50 tips + 30 prompt-patterns + 20 errores + 20 anécdotas
│   ├── mitos.js herramientas.js casos.js preguntas.js
│   ├── dinamicas.js productividad.js aec.js
├── .github/workflows/deploy.yml   # Publicación automática a GitHub Pages
├── .nojekyll
└── README.md
```

---

## ✏️ Editar contenido

Todo vive en `data/*.js` (estructura JSON). Sin recompilar: guarda y recarga.

- **Concepto:** `data/conceptos.js` → `{ id, term, cat, nivel, que, como, analogia,
  dato, tip, ejemplo, rel:[ids] }`. El campo `rel` crea los enlaces cruzados (los ids
  deben existir; el validador lo comprueba). `datoVerify:true` muestra el sello ⚠.
- **Ruta de aprendizaje:** `data/aprendizaje.js` → `window.DB.rutas`. `conceptos:[ids]`
  enlaza a la biblioteca.
- **Slide:** `data/slides.js` / deck `paradigmas` en `aprendizaje.js`
  (layouts: title, quote, cards, split, process, stats, bars, ladder, compare3,
  compareLR, applications, flow, framework, matrix, analogias, genpred; cada uno admite `notes`).
- **Mitos / casos / herramientas / preguntas / dinámicas:** archivos homónimos.

> **Datos temporales:** las cifras con fuente externa muestran **⚠ verificar**.
> Confírmalas antes de presentar. No se inventaron estadísticas.

---

## 💻 Local · Build · Deploy

```bash
# Local: abre index.html (doble clic) — o un server estático:
python -m http.server 8000     # → http://localhost:8000
```
**Build:** no requiere (sitio estático puro).

**Deploy (ya configurado):** cada `git push` a `main` ejecuta `.github/workflows/deploy.yml`
y publica en `https://apalpan.github.io/ai-interactive-ponencia/`. En GitHub:
*Settings → Pages → Source: GitHub Actions*. Rutas relativas → funciona en subcarpeta.

---

## 🧩 Contenido del vault utilizado

Sintetizado (no copiado) de `AP_Knowledge_OS`:
- `05_KNOWLEDGE/` → fundamentos, LLM, RAG/fine-tuning, agentes, casos, glosario, stack.
- `07_AP SYNC/.../AP_Ponencias.md` → frases ancla (RAG, fine-tuning, agentes), conceptos
  (corpus, tokens, CNN, GPT, custom GPT, vector storage…), estructura académica de sesión.
- `GENplus-40-Estadisticas-AEC-IA-Presentacion.md` → cifras (todas marcadas ⚠ verificar).
- **Marca AECODE:** `02_EMPRESAS/AECODE/.../brand/DESIGN.md` (tokens oficiales) + logos.

## 🔧 Editable / próximas mejoras
- Foto/QR reales en el cierre · modo Kahoot en vivo · exportar acta + marcador en PDF ·
  cargar conceptos/preguntas desde Google Sheet · grafo visual interactivo de conceptos.

---

Hecho para **Alejandro Palpan** · AECODE / GEN+ · `aecode.ai` · `genplusdesign.com`
