/* =====================================================================
   DB — espacio de nombres global de contenido.
   Todo el contenido vive en archivos data/*.js (estructura JSON editable).
   Se cargan por <script> para que funcione SIN servidor (abrir index.html
   directamente) y también en GitHub Pages.
   ===================================================================== */
window.DB = window.DB || {};

/* Marca / créditos -------------------------------------------------- */
window.DB.brand = {
  title: "Manual de IA",
  subtitle: "Aprendizaje avanzado · AECODE",
  author: "Alejandro Palpan",
  url: "aecode.ai · genplusdesign.com"
};

/* Frases centrales (rotan en apertura / cierre) --------------------- */
window.DB.frases = [
  { t: "La IA no reemplaza tu criterio. Amplifica la calidad de tus instrucciones.", a: "Idea central" },
  { t: "Un agente no reemplaza a un ingeniero; reemplaza diez tareas del ingeniero.", a: "Alejandro Palpan" },
  { t: "Si tu proceso está mal diseñado, la IA lo hará más rápido… pero más mal.", a: "Alejandro Palpan" },
  { t: "Los agentes más útiles hoy no son los que piensan más, sino los que leen mejor. Y eso es RAG.", a: "Alejandro Palpan" },
  { t: "Tu ventaja competitiva no será tener agentes. Será tener procesos listos para agentes.", a: "Alejandro Palpan" },
  { t: "La brecha real no es entre quien usa IA y quien no. Es entre quien la usa como chat y quien la convierte en sistema de producción.", a: "GEN+" },
  { t: "Fluidez no es verdad. Que suene seguro no significa que tenga razón.", a: "Principio de validación" }
];

/* Estadísticas para gráficas (con fuente; marcar 'verify' si aplica) - */
window.DB.stats = {
  productividad: [
    { l: "IA como buscador", v: 8,  note: "Pregunta-respuesta puntual" },
    { l: "IA como asistente", v: 45, note: "Rol + contexto + formato" },
    { l: "IA como agente", v: 100, note: "Ejecuta flujos multi-paso" }
  ],
  adopcion: [
    { l: "Organizaciones (global)", v: 88, src: "McKinsey State of AI 2025", verify: true },
    { l: "Usan IA generativa (empresa)", v: 72, src: "McKinsey 2025", verify: true },
    { l: "Experimenta con agentes", v: 62, src: "McKinsey 2025", verify: true },
    { l: "Escala agentes a producción", v: 23, src: "McKinsey 2025", verify: true },
    { l: "Construcción usa IA regularmente", v: 12, src: "RICS 2025", verify: true }
  ],
  hook: [
    { big: "92%", lbl: "de proyectos de construcción termina con sobrecostos (prom. +28%)", src: "Project Control Academy / Grattan 2025", verify: true },
    { big: "96%", lbl: "de la data que genera una obra nunca se usa", src: "FMI / Autodesk 2025", verify: true },
    { big: "84,8%", lbl: "de exposición a la IA en arquitectura e ingeniería", src: "Anthropic Economic Index 2025", verify: true },
    { big: "12%", lbl: "del sector construcción usa IA de forma regular", src: "RICS 2025", verify: true }
  ]
};

/* Analogías didácticas ---------------------------------------------- */
window.DB.analogias = [
  { c: "LLM", t: "Un copiloto que predice la siguiente palabra", d: "No 'piensa' como humano: calcula la continuación más probable según el contexto. Por eso puede sonar seguro aunque se equivoque." },
  { c: "Prompt", t: "Un brief de trabajo", d: "Le hablas como director de proyecto, no como usuario: rol, objetivo, contexto, criterios y formato de salida." },
  { c: "Tokens", t: "Ingredientes cortados", d: "Unidades de texto que el modelo procesa. Afectan costo, velocidad y cuánta información cabe en la ventana." },
  { c: "Embeddings", t: "Una despensa semántica", d: "Ubican ideas parecidas cerca unas de otras. Permiten búsqueda por significado, no por palabra exacta." },
  { c: "Ventana de contexto", t: "El escritorio de trabajo", d: "Lo que la IA puede tener a la vista a la vez. Si está desordenado, se confunde: calidad del contexto > cantidad." },
  { c: "RAG", t: "Un asistente que consulta la biblioteca antes de responder", d: "Recupera tus documentos (normas, BEP, contratos) y responde con fuente, en vez de inventar de memoria." },
  { c: "Agente IA", t: "Un practicante digital con herramientas y checklist", d: "Recibe un objetivo, planifica pasos, usa herramientas y entrega, bajo supervisión y permisos." },
  { c: "Automatización", t: "Una línea de ensamblaje de tareas digitales", d: "Conecta disparador → pasos → resultado. Minimiza la intervención manual repetitiva." },
  { c: "Fine-tuning", t: "Entrenar a un empleado en el estilo de la casa", d: "Ajusta formato/tono/tarea muy específica. Necesita volumen de datos; no arregla un mal prompt." },
  { c: "Alucinación", t: "Un alumno que responde con seguridad sin saber", d: "El modelo completa con lo más probable aunque no tenga el dato. Por eso se valida y se conecta a fuentes." }
];

/* Dinámica de apertura: ¿IA o no IA? -------------------------------- */
window.DB.iaOno = [
  { t: "Netflix te recomienda qué ver esta noche", ia: true,  e: "Sistema de recomendación: ML sobre tu historial y el de millones." },
  { t: "Una calculadora suma 2 + 2", ia: false, e: "Lógica programada fija, sin aprendizaje ni datos." },
  { t: "Tu correo filtra spam automáticamente", ia: true,  e: "Clasificador entrenado con millones de ejemplos de correo." },
  { t: "Un semáforo cambia cada 30 segundos por temporizador", ia: false, e: "Regla de tiempo fija. Sería IA si optimizara según el tráfico en vivo." },
  { t: "ChatGPT te redacta un correo", ia: true,  e: "LLM generativo: predice texto coherente token a token." },
  { t: "Excel ordena una columna de la A a la Z", ia: false, e: "Algoritmo de ordenamiento determinista, no aprende." },
  { t: "Tu celular te desbloquea con la cara", ia: true,  e: "Visión por computadora + reconocimiento facial entrenado." },
  { t: "El GPS calcula la ruta más corta", ia: false, e: "Frontera gris: el cálculo de ruta es un algoritmo clásico; pero predecir el tráfico SÍ es IA." },
  { t: "Un detector de grietas analiza fotos de un puente", ia: true, e: "Visión por computadora (CNN). Caso real AEC: VisionPro / AI-BrIM." },
  { t: "Una macro de Excel repite pasos que grabaste", ia: false, e: "Automatización por reglas grabadas, sin modelo ni datos de entrenamiento." }
];

/* Glosario express (subset; el completo vive en el vault) ------------ */
window.DB.glosario = [
  { t: "IA", d: "Sistemas que ejecutan tareas que requerían inteligencia humana: percibir, razonar, decidir, generar." },
  { t: "Machine Learning", d: "IA que aprende patrones de datos en vez de seguir reglas escritas a mano." },
  { t: "Deep Learning", d: "ML con redes neuronales profundas; potencia visión, voz y lenguaje." },
  { t: "LLM", d: "Modelo de lenguaje grande. Predice texto; base de ChatGPT, Claude, Gemini." },
  { t: "IA Generativa", d: "Crea contenido nuevo: texto, imagen, código, audio, video." },
  { t: "IA Predictiva", d: "Estima un valor o clase a partir de datos: costo, riesgo, demanda, falla." },
  { t: "Prompt", d: "La instrucción que le das al modelo. Tu brief de trabajo." },
  { t: "Token", d: "Fragmento de texto que procesa el modelo; unidad de costo y contexto." },
  { t: "Embedding", d: "Representación numérica del significado; habilita búsqueda semántica." },
  { t: "Ventana de contexto", d: "Cuánta información puede 'tener a la vista' el modelo a la vez." },
  { t: "RAG", d: "Recuperar tus documentos y responder con fuente, en lugar de memoria." },
  { t: "Fine-tuning", d: "Reentrenar un modelo para una tarea/estilo muy específico." },
  { t: "Agente", d: "IA con objetivo, herramientas, memoria y permisos que ejecuta pasos." },
  { t: "MCP", d: "Protocolo que conecta modelos con herramientas y datos de forma estándar." },
  { t: "Alucinación", d: "Respuesta plausible pero falsa. Se mitiga con fuentes y validación." },
  { t: "Multimodal", d: "Procesa varios tipos de entrada: texto, imagen, audio, video." },
  { t: "Benchmark", d: "Examen estandarizado para comparar modelos. No es verdad absoluta." },
  { t: "Human-in-the-loop", d: "Persona que aprueba/valida pasos críticos del sistema IA." }
];

/* Registro de módulos (orden de navegación) ------------------------- */
window.DB.modules = [
  { id: "biblioteca",    label: "Biblioteca de conceptos", ico: "❖", group: "Aprende", kind: "library" },
  { id: "rutas",         label: "Rutas de aprendizaje", ico: "◷", group: "Aprende", kind: "rutas" },
  { id: "prompts",       label: "Arsenal de prompts",  ico: "⌨", group: "Aprende", kind: "prompts" },
  { id: "mapa",          label: "Mapa de conceptos",   ico: "⊞", group: "Aprende", kind: "map" },
  { id: "recursos",      label: "Tips & recursos",     ico: "✦", group: "Aprende", kind: "recursos" },
  { id: "glosario100",   label: "100 conceptos startup", ico: "◫", group: "Startup & negocio", kind: "glosario100" },
  { id: "apertura",      label: "Apertura",            ico: "▶", group: "Presentación", kind: "deck" },
  { id: "fundamentos",   label: "Fundamentos de IA",   ico: "◆", group: "Presentación", kind: "deck" },
  { id: "paradigmas",    label: "Paradigmas de IA",    ico: "◎", group: "Presentación", kind: "deck" },
  { id: "estado-ia",     label: "Estado de la IA 2026",ico: "◉", group: "Presentación", kind: "deck" },
  { id: "aec-intro",     label: "IA aplicada a AEC",   ico: "⌂", group: "Presentación", kind: "deck" },
  { id: "cierre",        label: "Cierre y framework",  ico: "✦", group: "Presentación", kind: "deck" },
  { id: "mitos",         label: "Mitos y realidades",  ico: "⚡", group: "Bancos", kind: "bank" },
  { id: "casos",         label: "Casos prácticos",     ico: "▤", group: "Bancos", kind: "bank" },
  { id: "herramientas",  label: "Herramientas IA",     ico: "✚", group: "Bancos", kind: "bank" },
  { id: "papers",        label: "Investigación IA+AEC",ico: "▣", group: "Bancos", kind: "papers" },
  { id: "preguntas",     label: "Banco de preguntas",  ico: "?", group: "Bancos", kind: "bank" },
  { id: "productividad", label: "Productividad",       ico: "↑", group: "Bancos", kind: "bank" },
  { id: "dinamicas",     label: "Dinámicas grupales",  ico: "◎", group: "Taller", kind: "bank" },
  { id: "graficas",      label: "Gráficas y mapas",    ico: "▦", group: "Taller", kind: "bank" }
];

/* Recorridos (modos de sesión) -------------------------------------- */
window.DB.tracks = {
  rapida: { label: "Presentación rápida · 20 min",
    steps: ["apertura","fundamentos","paradigmas","estado-ia","aec-intro","cierre"],
    note: "Apertura → fundamentos → paradigmas → estado 2026 → AEC → framework y CTA." },
  taller: { label: "Taller completo · 60–90 min",
    steps: ["apertura","fundamentos","paradigmas","estado-ia","mitos","prompts","productividad","aec-intro","papers","herramientas","dinamicas","casos","preguntas","cierre"],
    note: "Recorrido completo con estado de la IA, prompts, dinámicas, investigación y bancos. Usa el temporizador y el marcador." },
  curso: { label: "Curso · manual de aprendizaje",
    steps: ["biblioteca","rutas","prompts","fundamentos","paradigmas","estado-ia","aec-intro","glosario100","papers","mapa"],
    note: "Recorrido de estudio: conceptos + prompts + rutas + estado 2026 + 100 conceptos startup + investigación." }
};
