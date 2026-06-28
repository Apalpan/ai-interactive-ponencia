/* Slides declarativos por deck. El engine (app.js) los renderiza por 'layout'.
   Layouts: title | quote | cards | split | process | stats | bars | ladder |
            compare3 | compareLR | applications | flow | framework | matrix | analogias | genpred
   'notes' = guion del ponente (tecla N). */
window.DB.slides = {

/* =========================== APERTURA =========================== */
apertura: [
  { layout:"title", eyebrow:"Ponencia · Inteligencia Artificial",
    h1:["De usar IA como buscador a ", {grad:"dirigir sistemas de trabajo"}],
    lead:"Una sesión clara, memorable y participativa para entender la IA y convertirla en productividad real — en tu trabajo, tu empresa y tu sector.",
    chips:["Interactiva","Dinámicas en vivo","Casos reales","AEC · negocio · educación"],
    notes:"Bienvenida. Promesa: salir con criterio para usar IA como sistema, no como chat. Pedir energía: esto es participativo." },

  { layout:"stats", eyebrow:"El punto de partida", h2:"La mayor brecha — y la mayor oportunidad",
    statsKey:"hook",
    notes:"Hook con datos. Marca: cifras 'verificar antes de presentar' tienen fuente; confírmalas el día del evento. La oportunidad no es la tecnología, es la brecha." },

  { layout:"quote", block:"Apertura",
    quote:["La IA no reemplaza tu criterio. ", {grad:"Amplifica la calidad de tus instrucciones."}],
    src:"Idea central de la ponencia",
    notes:"Frase ancla. Repetir 2 veces. Todo lo demás cuelga de aquí." },

  { layout:"cards", eyebrow:"Rompe el hielo", h2:"Antes de empezar, una pregunta honesta",
    cards:[
      { num:"1", h3:"¿Quién usó IA esta semana?", p:"A mano alzada o en el chat. ¿Para qué exactamente?" },
      { num:"2", h3:"¿Te ayudó o solo respondió bonito?", p:"La diferencia entre usarla y aprovecharla." },
      { num:"3", h3:"¿Chat o sistema?", p:"¿La usas como buscador o como un sistema con datos y flujos?" }
    ],
    notes:"Dinámica de activación. Recoger 3-4 respuestas del público. Conectar con la idea de 'sistema'." },

  { layout:"cards", eyebrow:"Dinámica · ¿IA o no IA?", h2:"Calentamiento: ¿esto es IA?",
    lead:"Vota en cada caso. La frontera entre IA y una simple regla automatizada es el primer criterio que necesitamos.",
    cards:[
      { kicker:"IA", h3:"Netflix te recomienda", p:"Aprende de datos de millones de usuarios." },
      { kicker:"No IA", h3:"Una macro de Excel", p:"Repite pasos fijos; no aprende ni interpreta." },
      { kicker:"Frontera", h3:"El GPS y el tráfico", p:"La ruta es algoritmo clásico; predecir el tráfico sí es IA." }
    ],
    notes:"Usa el botón 'Lanzar dinámica' en el módulo Apertura para sacar casos al azar a pantalla completa. IA = aprende/genera; regla = pasos fijos." },

  { layout:"bars", eyebrow:"El gran salto", h2:"De buscador a asistente a agente",
    barsKey:"productividad", suffix:"",
    note:"Mismo usuario, distinto nivel de aprovechamiento. El salto no es la app: es cómo la usas.",
    notes:"Explicar la escalera de valor. La mayoría está en 'buscador'. La meta de hoy: subir un peldaño." },

  { layout:"process", eyebrow:"Lo que veremos", h2:"El recorrido de hoy", steps:[
      { s:"01", h4:"Fundamentos", p:"Qué es IA y cómo funciona, sin humo." },
      { s:"02", h4:"Mitos", p:"Derribar ideas falsas frecuentes." },
      { s:"03", h4:"Productividad", p:"Tareas reales que delegar hoy." },
      { s:"04", h4:"AEC y casos", p:"Aplicaciones por área y análisis." },
      { s:"05", h4:"Framework", p:"Cómo empezar esta semana." }
    ],
    notes:"Mapa de la sesión. En modo taller, aquí entran las dinámicas y bancos. En modo rápido, saltamos a fundamentos → AEC → cierre." }
],

/* =========================== FUNDAMENTOS =========================== */
fundamentos: [
  { layout:"title", eyebrow:"Módulo 1", h1:["Fundamentos de IA, ", {grad:"sin humo"}],
    lead:"Cinco ideas que te dan criterio para usar la IA bien — y para desconfiar a tiempo.",
    chips:["IA / ML / DL","Generativa vs predictiva","LLM, tokens, contexto","Prompt","Chatbot → agente"],
    notes:"Objetivo: criterio, no tecnicismos. Cada concepto con una analogía." },

  { layout:"split", eyebrow:"¿Qué es IA?", h2:"Sistemas que hacen tareas que requerían inteligencia humana",
    lead:"Percibir, razonar, decidir, generar. Hoy no 'piensa' como un humano: reconoce y reproduce patrones aprendidos de enormes cantidades de datos.",
    callout:"Que suene seguro no significa que tenga razón. <strong>Fluidez no es verdad.</strong>",
    notes:"Desmitificar 'la IA piensa'. Es estadística sobre datos a gran escala." },

  { layout:"cards", eyebrow:"Taxonomía", h2:"IA ⊃ Machine Learning ⊃ Deep Learning",
    cards:[
      { kicker:"IA", h3:"Inteligencia Artificial", p:"El paraguas: cualquier sistema que ejecuta tareas 'inteligentes'." },
      { kicker:"ML", h3:"Machine Learning", p:"Aprende patrones de datos en vez de seguir reglas escritas a mano." },
      { kicker:"DL", h3:"Deep Learning", p:"ML con redes neuronales profundas. Potencia visión, voz y lenguaje." }
    ],
    notes:"Son círculos concéntricos, no cosas distintas. DL está dentro de ML, que está dentro de IA." },

  { layout:"genpred", eyebrow:"Dos familias", h2:"IA generativa vs. IA predictiva",
    notes:"Generativa crea; predictiva estima. En AEC: generar un informe vs. predecir el costo de un puente." },

  { layout:"cards", eyebrow:"Cómo funciona un LLM", h2:"La cocina del modelo",
    lead:"Un LLM no consulta una base de datos: predice la siguiente palabra. Cinco piezas para entenderlo:",
    cards:[
      { kicker:"Tokens", h3:"Ingredientes cortados", p:"Fragmentos de texto que procesa. Afectan costo y contexto." },
      { kicker:"Embeddings", h3:"Despensa semántica", p:"Ubican ideas parecidas cerca. Habilitan búsqueda por significado." },
      { kicker:"Atención", h3:"El cocinero mira", p:"Decide qué partes del contexto importan para esta respuesta." },
      { kicker:"Parámetros", h3:"Hábitos aprendidos", p:"El conocimiento tras 'cocinar' millones de recetas." },
      { kicker:"Inferencia", h3:"Cocinar hoy", p:"Generar la respuesta con esos hábitos." },
      { kicker:"Por eso…", h3:"Alucina", p:"Completa con lo probable aunque no tenga el dato. Valida." }
    ],
    notes:"Analogía de cocina (de la guía GEN+). El punto clave: predice, no consulta. De ahí las alucinaciones." },

  { layout:"compareLR", eyebrow:"Contexto", h2:"La ventana de contexto es el escritorio de la IA",
    left:{ t:"Escritorio pequeño / desordenado", d:"Pocos datos o todo revuelto: respuestas pobres y confusas." },
    right:{ t:"Escritorio enfocado", d:"Lo justo y ordenado: planos, contrato, objetivo y formato. La IA rinde." },
    foot:"Regla: la <strong>calidad</strong> del contexto importa más que la cantidad.",
    notes:"Error típico: pegar 80 páginas sin foco. Mejor 1 página clara." },

  { layout:"compareLR", eyebrow:"Prompt = brief de trabajo", h2:"No le hables como usuario. Háblale como director de proyecto.",
    left:{ t:"Prompt débil", d:"\"Hazme un dashboard de obra.\"" },
    right:{ t:"Prompt fuerte", d:"\"Actúa como planner de obra. Crea un dashboard con avance vs. real, curva S, costos, alertas, riesgos y recomendaciones. Formato HTML.\"" },
    foot:"Rol · objetivo · contexto · criterios · formato de salida.",
    notes:"Ideal para lanzar la dinámica 'Prompt Battle'. La estructura cambia el resultado, no la redacción bonita." },

  { layout:"compare3", eyebrow:"Concepto central", h2:"Chatbot responde · Asistente produce · Agente ejecuta",
    notes:"El salto de valor. Chatbot = preguntas; asistente = produce con criterio; agente = ejecuta pasos con herramientas y permisos." },

  { layout:"cards", eyebrow:"Anatomía", h2:"Los 6 componentes de un agente (en términos de empresa)",
    dataRef:"componentes",
    notes:"Metáfora empresarial: modelo=talento, RAG=documentación, herramientas=manos, memoria=CRM, evals=QA, gobernanza=comité de riesgos. Sin esas capas, impresiona; con ellas, produce valor." },

  { layout:"analogias", eyebrow:"Para recordar", h2:"Cinco analogías que se quedan",
    notes:"Cierre del módulo. Pide al público que repita una analogía con sus palabras (dinámica 'explica con analogía')." }
],

/* =========================== AEC =========================== */
"aec-intro": [
  { layout:"title", eyebrow:"Módulo · Sector AEC", h1:["IA aplicada a ", {grad:"arquitectura, ingeniería y construcción"}],
    lead:"El sector más grande del mundo, atrapado en su inercia — y por eso, con la mayor oportunidad de salto.",
    chips:["Obra","BIM","Costos","Seguridad","Calidad","Documental","Computer Vision"],
    notes:"Conectar con la audiencia AEC. La IA no levanta muros: trabaja la capa informacional." },

  { layout:"stats", eyebrow:"La paradoja del AEC", h2:"El sector que más data genera y menos la usa",
    statsKey:"hook",
    notes:"Repaso del hook con lente sectorial. 96% de data sin usar = el combustible está, falta el motor." },

  { layout:"bars", eyebrow:"La brecha sectorial", h2:"Todos adoptan IA… la construcción va detrás",
    barsKey:"adopcion", suffix:"%",
    note:"Verificar cifras antes de presentar (fuentes 2025). La brecha es la oportunidad de saltar de último a primero.",
    notes:"Construcción 12% vs 88% global. El que ordene sus datos y elija bien el caso, salta." },

  { layout:"applications", eyebrow:"Dónde aplicar", h2:"IA por área del sector AEC",
    notes:"Recorrer rápido. Preguntar al público en qué área les duele más hoy. Marcar la de costos como caso con dato a verificar (AI-BrIM ~30%)." },

  { layout:"flow", eyebrow:"Cómo se usa bien", h2:"Datos → modelo → output → validación humana → valor",
    notes:"El humano no desaparece: valida y aprueba. La IA produce el borrador; el profesional pone el criterio." },

  { layout:"cards", eyebrow:"Pon a prueba el criterio", h2:"Tres casos para analizar en vivo",
    cards:[
      { num:"1", h3:"Obra con 12% de retraso", p:"Reportes manuales y baja trazabilidad. ¿Dónde aplicas IA primero?" },
      { num:"2", h3:"300 observaciones BIM repetidas", p:"¿Qué agente crearías para dejar de repetir?" },
      { num:"3", h3:"Licencias, datos dispersos, baja adopción", p:"¿Cuál es el primer piloto con ROI?" }
    ],
    notes:"Abrir el banco de Casos (botón caso aleatorio) o discutir estos tres. Respuestas guía en el módulo Casos." },

  { layout:"ladder", eyebrow:"Hacia dónde va", h2:"La escalera: de chatbot a hub agentivo",
    notes:"Nadie empieza en el nivel 5. El valor está en subir un peldaño con evidencia, no en saltar al final." }
],

/* =========================== CIERRE =========================== */
cierre: [
  { layout:"title", eyebrow:"Cierre", h1:["No necesitas más apps. Necesitas ", {grad:"un sistema y un primer paso"}],
    lead:"Lo que te llevas: criterio para delegar, validar y diseñar flujos. La herramienta cambiará; el criterio queda.",
    notes:"Recoger energía final. Pasar a ideas fuerza y framework accionable." },

  { layout:"cards", eyebrow:"Ideas fuerza", h2:"Seis cosas para no olvidar",
    cards:[
      { num:"1", h3:"Sistema > modelo", p:"La ventaja es el sistema: datos, contexto, permisos y gobierno." },
      { num:"2", h3:"Fluidez ≠ verdad", p:"Valida siempre lo crítico; sin fuente, es borrador." },
      { num:"3", h3:"Tareas, no personas", p:"Un agente reemplaza diez tareas, no al profesional." },
      { num:"4", h3:"Procesos listos para agentes", p:"Tu ventaja: procesos ordenados y documentados." },
      { num:"5", h3:"Demo ≠ valor", p:"Una demo prueba posibilidad; un piloto prueba valor." },
      { num:"6", h3:"Humano + máquina", p:"Solo humano se estanca; solo máquina, sin criterio. Juntos, escalan." }
    ],
    notes:"Leer cada una con un ejemplo. Estas son las frases que se citan después." },

  { layout:"framework", eyebrow:"Cómo empezar", h2:"Framework simple de 7 pasos",
    steps:[
      { n:"1", t:"Detecta", d:"Una tarea repetitiva e informacional." },
      { n:"2", t:"Ordena", d:"La información y los datos que necesita." },
      { n:"3", t:"Diseña", d:"El prompt/asistente: rol, contexto, formato." },
      { n:"4", t:"Prueba", d:"La herramienta adecuada a la tarea." },
      { n:"5", t:"Mide", d:"El ahorro real (horas, errores)." },
      { n:"6", t:"Automatiza", d:"El flujo, con aprobación humana." },
      { n:"7", t:"Escala", d:"Solo lo que probó valor." }
    ],
    notes:"El mapa accionable. Pedir que cada quien elija su tarea del paso 1 ahora mismo." },

  { layout:"matrix", eyebrow:"Prioriza", h2:"Empieza por los quick wins",
    notes:"Matriz impacto vs. facilidad. Primer piloto = alto impacto + baja dificultad. Evita el 'piloto eterno'." },

  { layout:"cards", eyebrow:"Checklist de adopción", h2:"Antes de escalar, marca estos",
    cards:[
      { kicker:"Caso", h3:"Repetitivo y medible", p:"Informacional, con datos disponibles." },
      { kicker:"Métrica", h3:"Antes vs. después", p:"Horas, errores, satisfacción." },
      { kicker:"Datos", h3:"Ordenados y con permiso", p:"Sin gobierno de datos, no escales." },
      { kicker:"Humano", h3:"In-the-loop", p:"Aprobación en pasos críticos." },
      { kicker:"Dueño", h3:"Responsable y plazo", p:"Alguien decide escalar o parar." },
      { kicker:"Riesgo", h3:"Confidencialidad", p:"Plan y configuración adecuados." }
    ],
    notes:"Checklist práctico. Es el filtro entre entusiasmo y valor." },

  { layout:"quote", block:"Cierre",
    quote:["Esta semana: convierte ", {grad:"una"}, " tarea repetitiva en un asistente de IA."],
    src:"Tu call to action — empieza por una sola tarea",
    notes:"CTA final. Pedir compromiso público: una persona dice su tarea en voz alta. Cerrar con agradecimiento y QR/contacto." }
]
};
