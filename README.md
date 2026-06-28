# IA Interactiva · Sistema de ponencia (GEN+ / AECODE)

Sistema web **interactivo, navegable y didáctico** para dirigir una ponencia sobre
Inteligencia Artificial: presentación 16:9, dinámicas en vivo, bancos de mitos, casos,
herramientas y preguntas, temporizador, marcador por equipos y dos modos de sesión.

> No es una presentación estática: es un **panel de control para el ponente**.
> Hecho con HTML + CSS + JavaScript puro. **Sin build, sin dependencias.** Funciona
> abriendo `index.html` directamente o publicado en GitHub Pages.

---

## ⚡ Cómo usarlo (3 segundos)

- **Local:** doble clic en `index.html`. Listo (no necesita servidor).
- **Proyectar:** pulsa `F` (pantalla completa) y navega con `←` / `→`.
- **Online:** ver sección *Deploy en GitHub Pages*.

---

## 🎛️ Qué incluye

**Presentación (decks):**
- `Apertura` — slide de impacto, rompe-hielo, frase central, dinámica *¿IA o no IA?*.
- `Fundamentos de IA` — IA/ML/DL, generativa vs predictiva, LLM (analogía de cocina),
  tokens, contexto, prompt = brief, chatbot→asistente→agente, 6 componentes, analogías.
- `IA aplicada a AEC` — la paradoja del sector, brecha de adopción, 14 aplicaciones por
  área, flujo datos→validación, 3 casos de análisis, escalera de madurez.
- `Cierre y framework` — ideas fuerza, framework de 7 pasos, matriz impacto/facilidad,
  checklist de adopción y call to action.

**Bancos (filtrables, con *revelar respuesta* y *tarjeta al azar*):**
- `Mitos y realidades` — 32 mitos con realidad, explicación y ejemplo.
- `Casos prácticos` — 22 casos por dominio (personal, empresa, AEC, obra, BIM, etc.).
- `Herramientas IA` — 22 herramientas con qué hace / para qué / caso / riesgo / mejor uso.
- `Banco de preguntas` — 138 preguntas en 6 categorías (V/F, alternativas, abiertas,
  análisis de caso, elige herramienta, qué automatizar) y 3 niveles. **Exportable / imprimible.**
- `Productividad` — 10 áreas (antes vs. con IA), 5 ejercicios prácticos, 16 tips.

**Taller:**
- `Dinámicas grupales` — 11 dinámicas listas para ejecutar (objetivo, tiempo,
  instrucciones para ponente y audiencia, preguntas, respuesta esperada, criterio).
- `Gráficas y mapas` — multiplicador de productividad, adopción mundo vs construcción,
  chatbot/asistente/agente, generativa vs predictiva, flujo, matriz impacto/facilidad, escalera.

**Herramientas del ponente (siempre disponibles):**
- 🎲 **Tarjeta aleatoria** a pantalla completa (mito / caso / pregunta / ¿IA o no IA?), con *revelar* y *siguiente*.
- ◷ **Temporizador** configurable (1/3/5/10 min o personalizado, +1 min, cuenta regresiva con aviso y *overtime*).
- 🏆 **Marcador por equipos** (nombres editables, +/−, añadir equipos; se guarda en el navegador).
- ▦ **Índice** de slides/módulos · ◆ **Notas del ponente** (tecla `N`) · ☾ **Tema claro/oscuro** · ⤢ **Pantalla completa**.
- ◷ **Modos de sesión:** *Presentación rápida (20 min)* y *Taller completo (60–90 min)*.

---

## ⌨️ Atajos de teclado

| Tecla | Acción | Tecla | Acción |
|---|---|---|---|
| `←` / `→` | Slide anterior / siguiente | `R` | Tarjeta aleatoria |
| `Espacio` | Avanzar | `T` | Temporizador |
| `Inicio` / `Fin` | Primer / último slide | `P` | Marcador por equipos |
| `G` | Índice de slides | `F` | Pantalla completa |
| `N` | Notas del ponente | `D` | Tema claro/oscuro |
| `?` | Ayuda | `Esc` | Cerrar overlays |

Al final de un deck, `→` salta automáticamente al siguiente módulo (respeta el modo activo).

---

## 🗂️ Estructura de carpetas

```
ai-interactive-ponencia/
├── index.html              # Shell: carga fuentes, estilos, datos y motor
├── assets/
│   └── styles.css          # Design system (light + dark, tokens, componentes)
├── js/
│   └── app.js              # Motor: routing, slides, bancos, timer, marcador, etc.
├── data/                   # Contenido (estructura JSON editable, como globales)
│   ├── db.js               # Marca, frases, stats, analogías, glosario, módulos, modos
│   ├── mitos.js            # 32 mitos
│   ├── herramientas.js     # 22 herramientas
│   ├── casos.js            # 22 casos prácticos
│   ├── dinamicas.js        # 11 dinámicas + plantilla "diseña tu agente"
│   ├── productividad.js    # áreas, ejercicios, tips
│   ├── aec.js              # aplicaciones AEC, escalera, componentes, flujo, gen/pred
│   ├── preguntas.js        # 138 preguntas (6 categorías, 3 niveles)
│   └── slides.js           # Slides declarativos de los 4 decks
├── .github/workflows/
│   └── deploy.yml          # Publicación automática a GitHub Pages
├── .nojekyll               # Evita que Pages procese con Jekyll
└── README.md
```

---

## ✏️ Editar el contenido

Todo el contenido vive en `data/*.js` con estructura JSON. Para cambiar/añadir:

- **Un mito:** edita `data/mitos.js` → añade un objeto `{ id, cat, mito, realidad, exp, ej }`.
- **Una pregunta:** edita `data/preguntas.js`. Tipos:
  - V/F: `{ cat:"vf", correct:true|false, ... }`
  - Alternativas / herramienta / automatizar: `{ opts:[...], correct:<índice> }`
  - Abierta / caso: `{ esperada:"..." }`
- **Una herramienta / caso / dinámica:** archivos homónimos.
- **Un slide:** edita `data/slides.js` (layouts: `title, quote, cards, split, process, stats,
  bars, ladder, compare3, compareLR, applications, flow, framework, matrix, analogias, genpred`).
  Cada slide admite `notes` (guion del ponente).

No hace falta recompilar nada: guarda y recarga el navegador.

> **Cifras y datos temporales:** los datos con fuente externa muestran un sello
> **⚠ verificar**. Confírmalos (o actualízalos) antes de presentar. No se inventaron
> estadísticas: las cifras provienen de la base de conocimiento del vault y están marcadas.

---

## 💻 Correr localmente

**Opción A — sin nada:** abre `index.html` con doble clic. Funciona tal cual.

**Opción B — con un servidor estático** (recomendado para imitar Pages):

```bash
# Python 3
python -m http.server 8000
#  → abre http://localhost:8000

# o con Node
npx serve .
```

No hay paso de *build*: es un sitio estático puro.

---

## 🏗️ Build

No requiere build. Lo que ves en el repo es lo que se publica.
(Si en el futuro quisieras un único archivo, basta con *inline* de CSS/JS/datos en `index.html`.)

---

## 🚀 Deploy en GitHub Pages

### Automático (recomendado) — incluido en `.github/workflows/deploy.yml`

1. Crea un repositorio y sube esta carpeta como raíz del repo:
   ```bash
   git init
   git add .
   git commit -m "IA Interactiva — sistema de ponencia"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repo>.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` publica el sitio. La URL será:
   `https://<usuario>.github.io/<repo>/`

### Manual (alternativa)

**Settings → Pages → Source: Deploy from a branch → `main` / root**. Igual de válido para un sitio estático.

> Si publicas en un **subdirectorio** (`/<repo>/`), no necesitas cambiar nada: todas las
> rutas del proyecto son **relativas**.

---

## 🧩 Contenido del vault utilizado

Sintetizado y reorganizado (no copiado literal) desde `AP_Knowledge_OS`:

- `05_KNOWLEDGE/` → fundamentos, LLM (analogía de cocina), stack de herramientas,
  RAG/fine-tuning, agentes, casos de uso reales, glosario.
- `05_KNOWLEDGE/GENplus-40-Estadisticas-AEC-IA-Presentacion.md` → cifras del *hook* y
  de adopción (todas marcadas **⚠ verificar**).
- `03_PROYECTOS/AI-Construction-Summit/` (Reto IA, Sesión 2) → estructura de sesión,
  conceptos y lenguaje visual (verde/azul/violeta, Plus Jakarta Sans).
- `07_AP SYNC/.../AP_Ponencias.md` → frases ancla de Alejandro y casos AEC (AI-BrIM,
  VisionPro, computer vision).
- Casos AEC/obra/BIM y herramientas alineados a GEN+, AECODE, VisionPro, THESIA.

---

## 🔧 Qué quedó como contenido editable

- Todos los bancos y slides (`data/*.js`).
- Equipos del marcador, modos de sesión y textos del cierre/CTA.
- Las cifras marcadas **⚠ verificar** (actualizar con la fuente vigente el día del evento).

---

## 🗺️ Próximas mejoras recomendadas

- Foto/QR reales para el cierre (contacto, comunidad, Summit).
- Modo Kahoot en vivo (votación por código) para las preguntas.
- Exportar el marcador y un acta de sesión (PDF) al cerrar.
- Cargar el banco de preguntas desde un Google Sheet para edición no técnica.
- Persistir el progreso de la sesión y un “resumen final” automático.

---

Hecho para **Alejandro Palpan** · GEN+ / AECODE · `genplusdesign.com` · `aecode.ai`
