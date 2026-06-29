/* ============================================================
   ESTADO DE LA IA 2026 — deck-masterclass condensado.
   Fuente: Observatorio "State of AI in AEC" (GEN+ / AECODE) +
   Stanford HAI AI Index 2026 · McKinsey State of AI 2025 ·
   Anthropic Economic Index · WEF Future of Jobs · Autodesk/RICS.
   Cifras marcadas verify: confírmalas antes de presentar.
   ============================================================ */
window.DB = window.DB || {};
window.DB.stats = window.DB.stats || {};
window.DB.slides = window.DB.slides || {};

/* ---- Nuevos packs de estadísticas (layout stats: big/lbl/src) ---- */
Object.assign(window.DB.stats, {
  estado2025: [
    { big:"88%", lbl:"de organizaciones usa IA en al menos una función", src:"McKinsey 2025", verify:true },
    { big:"~1/3", lbl:"logra escalar la IA; el resto sigue en piloto", src:"McKinsey 2025", verify:true },
    { big:"39%", lbl:"reporta impacto medible en EBIT atribuible a IA", src:"McKinsey 2025", verify:true },
    { big:"US$285,9 B", lbl:"inversión privada en IA (EE.UU.) en 2025", src:"Stanford AI Index 2026", verify:true }
  ],
  alcance: [
    { big:"1000 M", lbl:"usuarios mensuales de ChatGPT (may 2026): la app más rápida de la historia", src:"Reuters · Sensor Tower", verify:true },
    { big:"5 días", lbl:"tardó en llegar a su primer millón de usuarios", src:"Stanford 2026", verify:true },
    { big:"2 años", lbl:"en alcanzar al 40% de la población (la PC tardó 12)", src:"NBER · AI Index 2026", verify:true },
    { big:"52%", lbl:"de quienes la usan hoy son mujeres (antes 80% hombres): ya es de todos", src:"Stanford HAI 2026", verify:true }
  ],
  frontier: [
    { big:"44,7%", lbl:"en “Humanity's Last Exam” (de 3% a 44,7% en un año; experto humano ~90%)", src:"Nature 2026 · Scale/Epoch", verify:true },
    { big:"50 M líneas", lbl:"de código migró un modelo de frontera en 1 día (antes: +2 meses)", src:"Anthropic 2026", verify:true },
    { big:"~10×", lbl:"aceleró el diseño de fármacos; oro en olimpiadas de matemáticas y programación", src:"Anthropic · Google 2026", verify:true },
    { big:"+78 M", lbl:"empleos netos al 2030 (170 M nuevos − 92 M desplazados)", src:"WEF Future of Jobs 2025", verify:true }
  ],
  agentes: [
    { big:"20% → 77%", lbl:"tasa de éxito de los agentes en tareas reales, en solo un año", src:"Stanford HAI 2026", verify:true },
    { big:"51%", lbl:"de las empresas ya desplegó algún tipo de agente de IA", src:"Deloitte 2026", verify:true },
    { big:"~37×", lbl:"se multiplicará el mercado de agentes de IA en una década", src:"Grand View / Precedence", verify:true },
    { big:"76%", lbl:"menos tiempo: un agente planificó una tarea en 9 min vs 38 min de una persona", src:"2026", verify:true }
  ],
  aec2026: [
    { big:"84,8%", lbl:"de exposición a la IA en arquitectura e ingeniería: de los sectores más expuestos", src:"Anthropic Economic Index", verify:true },
    { big:"12%", lbl:"de la construcción usa IA de forma regular (45% no la usa)", src:"RICS 2025", verify:true },
    { big:"96%", lbl:"de la data que genera una obra nunca se usa", src:"FMI / Autodesk", verify:true },
    { big:"499 000", lbl:"trabajadores de construcción faltan solo en 2026 (EE.UU.)", src:"Fortune 2026", verify:true }
  ]
});

/* ---- Nuevos packs de barras (layout bars: l/v) ---- */
Object.assign(window.DB.stats, {
  adopcionFunnel: [
    { l:"Usa IA (alguna función)", v:88, verify:true },
    { l:"Experimenta con agentes", v:62, verify:true },
    { l:"Tiene pilotos formales", v:40, verify:true },
    { l:"Escala agentes a producción", v:23, verify:true },
    { l:"IA en el núcleo del negocio", v:10, verify:true }
  ],
  adopcionVelocidad: [
    { l:"Computadora personal", v:12 },
    { l:"Internet", v:4 },
    { l:"Smartphone", v:3.5 },
    { l:"IA generativa", v:2 }
  ],
  hleBars: [
    { l:"IA · inicio 2025", v:3, verify:true },
    { l:"IA · inicio 2026", v:37, verify:true },
    { l:"IA · junio 2026", v:44.7, verify:true },
    { l:"Experto humano", v:90, verify:true }
  ],
  popUsage: [
    { l:"ChatGPT (OpenAI)", v:54.7, verify:true },
    { l:"Gemini (Google)", v:27.4, verify:true },
    { l:"Claude (Anthropic)", v:8.2, verify:true },
    { l:"Copilot / otros", v:6.1, verify:true },
    { l:"Perplexity", v:3.6, verify:true }
  ],
  aecGapBars: [
    { l:"Potencial de IA (exposición)", v:84.8, verify:true },
    { l:"Uso real · oficina técnica", v:25, verify:true },
    { l:"Uso real · obra física", v:1, verify:true }
  ]
});

/* ====================== DECK: ESTADO DE LA IA 2026 ====================== */
window.DB.slides["estado-ia"] = [
  { layout:"title", eyebrow:"Estado de la IA · Edición 2026",
    h1:["Dónde está hoy la IA, ", {grad:"con datos y no con humo"}],
    lead:"Un recorrido por las cifras verificadas de 2026: adopción, capacidades, dinero y la brecha del sector AEC. Síntesis del observatorio “State of AI in AEC” (GEN+ / AECODE).",
    chips:["Adopción","Capacidades","Dinero & poder","Agentes","AEC","Empleo"],
    notes:"Encuadre: esto no es opinión, es el estado del arte con fuente. Pedir confirmar las cifras ⚠ el día del evento." },

  { layout:"stats", eyebrow:"El estado base", h2:"En 2026 la IA ya es infraestructura de trabajo",
    statsKey:"estado2025",
    notes:"88% la usa, pero solo ~1/3 la escala: el valor no está en probar, está en escalar con evidencia." },

  { layout:"bars", eyebrow:"El embudo de adopción", h2:"Muchos prueban, pocos escalan: el valle de la muerte", barsKey:"adopcionFunnel", suffix:"%",
    note:"De 88% que la usa a 10% que la tiene en el núcleo. La brecha entre piloto y producción es donde se gana o se pierde.",
    notes:"Funnel McKinsey. El salto difícil es del piloto (40%) a producción (23%) y al núcleo (10%)." },

  { layout:"quote", block:"Estado",
    quote:["La brecha real no es entre humanos e IA. Es entre quien la usa como ", {grad:"chat"}, " y quien la convierte en ", {grad:"sistema de trabajo"}, "."],
    src:"Tesis del observatorio · GEN+ / AECODE",
    notes:"Frase ancla del deck. Repetir. Todo lo demás la sostiene." },

  { layout:"bars", eyebrow:"Velocidad sin precedentes", h2:"La IA se adoptó más rápido que cualquier tecnología", barsKey:"adopcionVelocidad", suffix:" años",
    note:"Años en alcanzar al 40% de la población. Lo que a la PC le tomó 12 años, la IA generativa lo logró en 2.",
    notes:"Comparar: PC 12, internet 4, smartphone 3.5, GenAI 2. Es una autopista donde había trocha." },

  { layout:"stats", eyebrow:"Mil millones de personas", h2:"Alcance récord: ya es de todos",
    statsKey:"alcance",
    notes:"1000 M usuarios, 5 días al primer millón, y hoy 52% mujeres: dejó de ser nicho técnico." },

  { layout:"bars", eyebrow:"Capacidad que sube y precio que baja", h2:"Le pusieron el examen más difícil del mundo (HLE)", barsKey:"hleBars", suffix:"%",
    note:"“Humanity's Last Exam”: 2.500 preguntas nivel doctorado. La IA pasó de 3% a 44,7% en un año; el experto humano ronda 90%.",
    notes:"3.000 expertos diseñaron el examen para que la IA no pudiera. En 18 meses ya saca casi la mitad." },

  { layout:"stats", eyebrow:"La frontera se mueve ahora", h2:"Lo que la IA de frontera ya logró este año",
    statsKey:"frontier",
    notes:"Migró 50M líneas en 1 día, aceleró fármacos ~10×, oro en olimpiadas. No es promesa: es resultado." },

  { layout:"bars", eyebrow:"Quién usa qué", h2:"La IA generativa más usada por la población", barsKey:"popUsage", suffix:"%",
    note:"Cuota de tráfico web de chatbots (jun 2026). ChatGPT lidera, pero Gemini y Claude ganan terreno rápido.",
    notes:"No te cases con una marca: gana quien elige la herramienta correcta para cada tarea." },

  { layout:"cards", eyebrow:"La batalla de los modelos", h2:"No hay una “mejor IA”: depende de la tarea",
    lead:"Posicionamiento cualitativo por familia (síntesis de leaderboards 2025–2026). Cada una lidera ejes distintos.",
    cards:[
      { kicker:"GPT · OpenAI", h3:"Razonamiento y multimodal", p:"Fuerte en razonamiento general, visión y ecosistema; el más usado por la población." },
      { kicker:"Claude · Anthropic", h3:"Código y contexto largo", p:"Líder en programación y trabajo sobre documentos extensos; foco en seguridad." },
      { kicker:"Gemini · Google", h3:"Contexto y multimodal", p:"Ventana de contexto enorme e integración nativa con multimodalidad y Workspace." }
    ],
    notes:"La frontera la disputan 3 familias. El criterio no es la marca, es para qué tarea." },

  { layout:"stats", eyebrow:"Lo que viene", h2:"Los agentes que actúan solos",
    statsKey:"agentes",
    notes:"Hoy le pides algo y responde; el agente lo HACE: cotiza, compara, decide y ejecuta — bajo supervisión." },

  { layout:"stats", eyebrow:"El sector AEC", h2:"La paradoja: máxima exposición, mínimo uso",
    statsKey:"aec2026",
    notes:"84,8% de exposición vs 12% de uso regular. El sector que más data genera y menos la usa." },

  { layout:"bars", eyebrow:"La oportunidad medida", h2:"Potencial probado vs. uso real en AEC", barsKey:"aecGapBars", suffix:"%",
    note:"La distancia entre 84,8% de potencial y 25%/1% de uso real ES la oportunidad del sector.",
    notes:"Oficina técnica avanza (25%), la obra física casi nada (1%). Ahí está el salto." },

  { layout:"cards", eyebrow:"Ya no es teoría", h2:"Cuatro cosas que la IA logró este año",
    cards:[
      { num:"1", h3:"Oro en matemáticas y código", p:"Medalla de oro en la Olimpiada Internacional de Matemáticas y en el mundial de programación ICPC (2025)." },
      { num:"2", h3:"Diseña medicinas reales", p:"Fármacos diseñados por IA entraron a ensayos clínicos en humanos (2026)." },
      { num:"3", h3:"Predice desastres raros", p:"Anticipa eventos climáticos extremos de 1-en-1.000 años junto a modelos de física." },
      { num:"4", h3:"Hipótesis científicas nuevas", p:"En pruebas a ciegas, los científicos prefirieron las hipótesis del modelo ~80% de las veces." }
    ],
    notes:"Cerrar capacidades con hechos concretos 2025–2026. Fuente: Google Research, Nature, Anthropic." },

  { layout:"cards", eyebrow:"Qué hacer con esto", h2:"Cuatro movimientos según quién seas",
    cards:[
      { kicker:"Empresas", h3:"Un piloto de 30 días", p:"Elige UN proceso con dolor medible. Mide tiempo, costo y calidad. Escala por evidencia." },
      { kicker:"Gobierno", h3:"Datos + formación", p:"Mandato de datos (BIM), formación subsidiada a pymes y compra pública como motor." },
      { kicker:"Academia", h3:"IA aplicada y verificable", p:"IA en la malla de arquitectura e ingeniería; el título solo ya no basta." },
      { kicker:"Profesionales", h3:"Prompting + workflow", p:"Domina un caso real de tu rol y construye skills verificables. Sube un nivel de madurez." }
    ],
    notes:"Aterrizaje accionable por actor. Cada quien sale con un primer movimiento." },

  { layout:"quote", block:"Cierre",
    quote:["El sector AEC es el rezagado ", {grad:"con más por ganar"}, ". La brecha es la oportunidad."],
    src:"State of AI in AEC · GEN+ / AECODE 2026",
    notes:"Cierre. Conectar con la idea de subir un peldaño de madurez con evidencia, no entusiasmo." }
];
