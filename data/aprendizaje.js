/* ============================================================
   RUTAS DE APRENDIZAJE (sesiones académicas) + deck Paradigmas.
   Estructura académica por sesión:
   Presentación · Motivación · Conceptos clave (cruzados) ·
   Proyecto y estrategia (4 pasos) · Convencional vs. Propuesto (valor) ·
   Cierre (Key Takeaway + ideas).
   ============================================================ */

window.DB.rutas = [
  { id:"r1", n:"01", titulo:"Fundamentos de IA", subtitulo:"Qué es, cómo funciona y por qué importa", nivel:"basico", dur:"25–35 min",
    presentacion:"Mapa mental de la IA: del paraguas (IA) a ML, deep learning y el porqué del salto actual.",
    motivacion:"La IA pasó de curiosidad a infraestructura. Quien la entiende decide mejor; quien no, queda atrás. Dato: arquitectura/ingeniería están entre los sectores más expuestos a IA del mundo.",
    conceptos:["ia","ml","dl","red-neuronal","transformer","ia-generativa","ia-predictiva"],
    estrategia:[
      "Ubica la IA: paraguas → ML → deep learning (círculos concéntricos).",
      "Distingue las dos familias: generativa (crea) vs. predictiva (estima).",
      "Entiende el motor: un LLM predice el siguiente token, no 'piensa'.",
      "Aplica el criterio: ¿qué tarea, con qué datos, con qué riesgo?"],
    convencional:"Creer que 'la IA piensa' y aceptar sus respuestas como verdad.",
    propuesto:"Entender que predice patrones probables → validar siempre lo crítico.",
    ventaja:"Criterio para usarla bien y desconfiar a tiempo (fluidez ≠ verdad).",
    takeaway:"La IA no piensa como humano: reconoce patrones. Tu criterio es la diferencia.",
    ideas:["Aprende el sistema, no la app de moda.","Una analogía por concepto fija el aprendizaje."] },

  { id:"r2", n:"02", titulo:"IA Generativa en el trabajo", subtitulo:"LLM, prompt, asistentes y validación", nivel:"basico", dur:"30–40 min",
    presentacion:"De ChatGPT como buscador a diseñar asistentes que producen.",
    motivacion:"El uso empresarial de IA generativa saltó de ~33% a ~72% en un año. La brecha real es usarla como chat vs. como sistema.",
    conceptos:["llm","prompt","prompt-engineering","system-instruction","custom-gpt","alucinacion","few-shot"],
    estrategia:[
      "Escribe el prompt como brief: rol, objetivo, contexto, criterios, formato.",
      "Da ejemplos (few-shot) del formato ideal.",
      "Fija el comportamiento con un system instruction reutilizable.",
      "Valida la salida: sin fuente, es borrador, no evidencia."],
    convencional:"Pedir 'hazme un informe' y copiar lo que salga.",
    propuesto:"Dirigir un asistente con rol/criterio/formato y validar el resultado.",
    ventaja:"Resultados consistentes y reutilizables; menos retrabajo.",
    takeaway:"No le hables como usuario; háblale como director de proyecto.",
    ideas:["Convierte tu mejor prompt en un Custom GPT por proceso.","Itera sobre la respuesta, no desde cero."] },

  { id:"r3", n:"03", titulo:"IA Predictiva y Computer Vision", subtitulo:"Estimar, clasificar y ver", nivel:"intermedio", dur:"25–35 min",
    presentacion:"La otra mitad de la IA: estimar valores y clasificar, incluida la visión por computadora.",
    motivacion:"En obra los datos vienen en texto, imágenes y sensores. La IA predictiva convierte eso en decisiones: costo, riesgo, calidad, seguridad.",
    conceptos:["ia-predictiva","clasificacion","regresion","computer-vision","cnn","accuracy"],
    estrategia:[
      "Define la pregunta: ¿valor (regresión) o categoría (clasificación)?",
      "Reúne datos representativos y etiquetados.",
      "Mide accuracy contra datos no vistos (no 'que se vea bien').",
      "Despliega con umbrales y validación humana de lo dudoso."],
    convencional:"Inspecciones y estimaciones manuales, lentas y variables.",
    propuesto:"Modelos que estiman costo temprano o detectan condiciones en fotos.",
    ventaja:"Decisiones más rápidas y objetivas; menos variabilidad.",
    takeaway:"Generativa crea; predictiva anticipa. Se complementan.",
    ideas:["AI-BrIM: estimación temprana de costos (~30% menos tiempo) — verificar dato.","VisionPro: EPP y fallas con visión."] },

  { id:"r4", n:"04", titulo:"IA Agéntica", subtitulo:"De prompts a sistemas que ejecutan", nivel:"intermedio", dur:"35–45 min",
    presentacion:"El salto de pregunta-respuesta a objetivo-ejecución-supervisión.",
    motivacion:"62% experimenta con agentes; solo 23% los escala. La diferencia es diseño: datos, herramientas, permisos y gobierno.",
    conceptos:["ia-agentica","agente","tool-use","rag","fine-tuning","memoria","orquestacion","hitl","mcp"],
    estrategia:[
      "Elige una tarea repetitiva, informacional y con datos.",
      "Conecta conocimiento con RAG (responde con fuente).",
      "Dale herramientas y memoria; define permisos.",
      "Pon human-in-the-loop en acciones externas e irreversibles."],
    convencional:"Chatbots aislados que solo responden.",
    propuesto:"Agentes que leen tus documentos (RAG) y ejecutan pasos con aprobación.",
    ventaja:"Reemplazan diez tareas del profesional, no al profesional.",
    takeaway:"Los agentes más útiles en obra no piensan más: leen mejor. Y eso es RAG.",
    ideas:["RAG = conocimiento; fine-tuning = comportamiento.","Más autonomía sin guardianes = más riesgo."] },

  { id:"r5", n:"05", titulo:"AI-first, AI-native y cultura", subtitulo:"Rediseñar el trabajo, no parchearlo", nivel:"avanzado", dur:"25–35 min",
    presentacion:"La mentalidad y la arquitectura que hacen permanente la ventaja con IA.",
    motivacion:"Las empresas líderes en IA son ~3.6x más propensas a rediseñar workflows por completo. No es usar IA a veces; es repensar cómo se trabaja.",
    conceptos:["ai-first","ai-native","mindset","copiloto","filosofia-colaborativa","ventaja-competitiva"],
    estrategia:[
      "Adopta AI-first: la IA es la primera opción al diseñar un proceso.",
      "Avanza a AI-native: datos y flujos diseñados con la IA en el núcleo.",
      "Cultiva la colaboración humano + máquina (roles claros).",
      "Invierte en procesos y datos 'listos para agentes'."],
    convencional:"Automatizar el proceso existente tal cual.",
    propuesto:"Rediseñar el proceso asumiendo que la IA está disponible.",
    ventaja:"Difícil de copiar: procesos y datos ordenados, no 'tener agentes'.",
    takeaway:"Tu ventaja no será tener agentes; será tener procesos listos para agentes.",
    ideas:["AI-first es la mentalidad; AI-native es la arquitectura.","Una tarea repetitiva por semana se vuelve asistente."] },

  { id:"r6", n:"06", titulo:"IA aplicada a AEC", subtitulo:"Del concepto al piloto con ROI", nivel:"intermedio", dur:"30–45 min",
    presentacion:"Aterrizaje sectorial: dónde aplicar IA primero en arquitectura, ingeniería y construcción.",
    motivacion:"El 96% de la data de una obra no se usa y un profesional pierde ~14 h/semana en buscar info y retrabajo. Esa brecha es la oportunidad.",
    conceptos:["aec","gestion-informacion","iso19650","rag","computer-vision","pilotos","valor"],
    estrategia:[
      "Mapea procesos informacionales repetitivos (actas, reportes, RFIs).",
      "Ordena y gobierna los datos antes de automatizar.",
      "Conecta un asistente RAG sobre BEP/normas/contratos.",
      "Corre un piloto medible (4 semanas) y decide escalar o parar."],
    convencional:"Reportes manuales, baja trazabilidad y conocimiento en cabezas.",
    propuesto:"Asistentes/agentes que leen, consolidan y reportan con fuente.",
    ventaja:"Horas recuperadas, decisiones a tiempo y conocimiento consultable.",
    takeaway:"Si tu proceso está mal diseñado, la IA lo hará más rápido… pero más mal. Ordena primero.",
    ideas:["Empieza por un quick win, no por lo más vistoso.","Escala evidencia, no entusiasmo."] }
];

/* ---------------- Deck: Paradigmas (se fusiona en DB.slides) ---------------- */
window.DB.slides = window.DB.slides || {};
window.DB.slides.paradigmas = [
  { layout:"title", eyebrow:"Módulo · Paradigmas de IA",
    h1:["Generativa, predictiva y ", {grad:"agéntica"}],
    lead:"Tres formas de IA que conviene no confundir — y dos mentalidades (AI-first / AI-native) que definen quién gana con ellas.",
    chips:["Generativa: crea","Predictiva: estima","Agéntica: ejecuta","AI-first","AI-native"],
    notes:"Encuadre del módulo. La mayoría solo conoce la generativa (ChatGPT). Hoy ampliamos el mapa." },

  { layout:"genpred", eyebrow:"Las dos familias base", h2:"IA generativa vs. IA predictiva",
    notes:"Generativa CREA contenido; predictiva ESTIMA un valor/clase. En AEC: redactar un informe vs. predecir un costo." },

  { layout:"cards", eyebrow:"El tercer paradigma", h2:"IA agéntica: del objetivo a la ejecución",
    lead:"Cuando la IA deja de solo responder y empieza a hacer: planifica, usa herramientas y actúa bajo supervisión.",
    cards:[
      { kicker:"Antes", h3:"Pregunta → respuesta", p:"El modelo conversa. Tú ejecutas cada paso." },
      { kicker:"Ahora", h3:"Objetivo → ejecución → supervisión", p:"El agente planifica, usa herramientas y entrega; tú apruebas lo crítico." },
      { kicker:"Componentes", h3:"Cerebro + RAG + herramientas + memoria + gobierno", p:"Un pequeño sistema operativo de trabajo." }
    ],
    notes:"Conecta con los 6 componentes (Fundamentos) y la escalera de madurez." },

  { layout:"quote", block:"Paradigmas",
    quote:["Los agentes más útiles en obra hoy no son los que piensan más, sino los que ", {grad:"leen mejor"}, ". Y eso es RAG."],
    src:"Alejandro Palpan",
    notes:"Frase ancla de RAG. RAG = recuperar tus documentos y responder con fuente, en lugar de inventar." },

  { layout:"quote", block:"Paradigmas",
    quote:["El fine-tuning crea agentes que ", {grad:"piensan como tu empresa"}, ". Pero necesitas volumen de datos."],
    src:"Alejandro Palpan",
    notes:"RAG aporta conocimiento (con fuente); fine-tuning aporta comportamiento/estilo y exige datos." },

  { layout:"compareLR", eyebrow:"Mentalidad vs. arquitectura", h2:"AI-first ≠ AI-native",
    left:{ t:"AI-first (mentalidad)", d:"Ante cada tarea preguntas '¿cómo lo haría con IA?' antes de hacerlo a mano. Es un hábito de diseño." },
    right:{ t:"AI-native (arquitectura)", d:"El producto/proceso nace con la IA en el núcleo: datos y flujos diseñados para que la IA sea el motor, no un parche." },
    foot:"Las empresas líderes en IA son ~3.6x más propensas a rediseñar sus workflows por completo. <strong>Verificar dato antes de presentar.</strong>",
    notes:"AI-first es la puerta de entrada; AI-native es lo que hace permanente la ventaja." },

  { layout:"ladder", eyebrow:"Hacia dónde escala", h2:"De chatbot a hub agentivo",
    notes:"Nadie empieza en el nivel 5. Subir un peldaño con evidencia > saltar al final." },

  { layout:"quote", block:"Paradigmas",
    quote:["No automatices el proceso viejo. ", {grad:"Rediseña el trabajo"}, " asumiendo que la IA está disponible."],
    src:"Cambio de mindset — cierre del módulo",
    notes:"Puente al cierre/framework. La tecnología cambia el proceso, no solo lo acelera." }
];
