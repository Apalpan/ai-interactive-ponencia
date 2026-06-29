/* ============================================================
   ARSENAL DE PROMPTS — meta-prompts para aprender y trabajar
   cualquier tema con IA al extremo. Fuente: AECODE · IA Academy.
   Técnicas: Feynman, active recall, primeros principios, socrático.
   { id, titulo, cat, que, cuando, prompt }. Usa {tema} como marcador.
   ============================================================ */
window.DB = window.DB || {};

window.DB.promptCats = ["Productividad", "Aprender", "Profundizar", "Practicar", "Pensar crítico", "Aplicar"];

window.DB.learningPrompts = [
  { id:"feynman", titulo:"Técnica Feynman", cat:"Aprender",
    que:"Te explica un tema en lenguaje simple y luego te hace explicarlo para detectar lagunas.",
    cuando:"Cuando empiezas un tema nuevo y quieres entenderlo de verdad, no memorizarlo.",
    prompt:`Quiero dominar "{tema}" con la técnica Feynman.
1) Explícamelo como si tuviera 12 años, con una analogía cotidiana.
2) Luego pídeme que te lo explique a ti con mis palabras.
3) Detecta exactamente dónde mi explicación falla o se queda corta.
4) Corrige solo esas lagunas con un ejemplo concreto.
Repite el ciclo hasta que mi explicación sea sólida.` },

  { id:"cinco-niveles", titulo:"Explícamelo en 5 niveles", cat:"Aprender",
    que:"Explica el mismo concepto para niño, estudiante, profesional, gerente y experto.",
    cuando:"Para ver el tema desde varias profundidades y poder enseñarlo a cualquiera.",
    prompt:`Explícame "{tema}" en 5 niveles, cada uno en 3-4 frases:
1) a un niño, 2) a un estudiante, 3) a un profesional del área, 4) a un gerente que decide presupuesto, 5) a un experto técnico.
Al final, dame la única idea que NO debo olvidar de este tema.` },

  { id:"interrogame", titulo:"Interrógame (active recall)", cat:"Practicar",
    que:"Te examina con preguntas progresivas y corrige al instante.",
    cuando:"Para fijar memoria: recordar cuesta esfuerzo y por eso enseña.",
    prompt:`Actúa como tutor exigente de "{tema}". Hazme 1 pregunta a la vez, de menor a mayor dificultad.
Espera mi respuesta, califícala (correcta/parcial/incorrecta), corrígeme con una explicación breve y un ejemplo, y recién entonces pasa a la siguiente.
No me des las respuestas por adelantado. Después de 8 preguntas, dime mis 3 puntos más débiles.` },

  { id:"lagunas", titulo:"Detecta mis lagunas", cat:"Aprender",
    que:"Mapea lo que NO sabes que no sabes sobre un tema.",
    cuando:"Cuando ya sabes algo del tema y quieres encontrar tus puntos ciegos.",
    prompt:`Soy intermedio en "{tema}". Hazme un diagnóstico: lístame los 10 subtemas o conceptos que alguien que domina "{tema}" debería conocer.
Para cada uno, hazme una micro-pregunta. Según mis respuestas, dime qué 3 lagunas debo cerrar primero y en qué orden estudiarlas.` },

  { id:"primeros-principios", titulo:"Primeros principios", cat:"Profundizar",
    que:"Descompone el tema hasta sus verdades básicas y reconstruye desde cero.",
    cuando:"Para entender el porqué profundo, no solo el cómo.",
    prompt:`Analiza "{tema}" desde primeros principios.
1) ¿Cuáles son las verdades fundamentales e innegables de las que parte?
2) ¿Qué problema resuelve y por qué los enfoques anteriores fallaban?
3) Reconstruye el concepto desde esas bases, sin analogías superficiales.
4) Termina con una pregunta que ponga a prueba si entendí el fondo.` },

  { id:"analogias", titulo:"Dame 3 analogías", cat:"Profundizar",
    que:"Crea analogías de distintos dominios y aclara dónde fallan.",
    cuando:"Cuando un concepto abstracto no te termina de “hacer clic”.",
    prompt:`Dame 3 analogías distintas (de la vida diaria, de otra ciencia y de los negocios) para entender "{tema}".
Para cada analogía explica en qué se parece y, muy importante, en qué NO se parece (dónde la analogía se rompe), para no crearme una idea equivocada.` },

  { id:"socratico", titulo:"Debate socrático", cat:"Pensar crítico",
    que:"Te guía con preguntas en vez de darte respuestas, para que razones tú.",
    cuando:"Para desarrollar criterio propio y no depender de respuestas hechas.",
    prompt:`Sé mi interlocutor socrático sobre "{tema}". No me des respuestas directas: guíame solo con preguntas, una a la vez, que me obliguen a razonar y a justificar lo que digo.
Cuando detectes una contradicción o un supuesto no examinado en mi razonamiento, señálalo con otra pregunta.` },

  { id:"abogado-diablo", titulo:"Abogado del diablo", cat:"Pensar crítico",
    que:"Cuestiona una idea/decisión para encontrar sus puntos débiles.",
    cuando:"Antes de adoptar una herramienta, modelo o decisión basada en IA.",
    prompt:`Voy a afirmar algo sobre "{tema}" y quiero que hagas de abogado del diablo riguroso (no troll).
Mi postura: [escribe aquí tu idea o decisión].
Dame los 3 argumentos más fuertes en contra, los riesgos que estoy ignorando, en qué casos mi idea NO aplica, y qué evidencia me haría cambiar de opinión.` },

  { id:"sesgos", titulo:"Caza-sesgos y límites", cat:"Pensar crítico",
    que:"Revela supuestos, sesgos y límites éticos/técnicos de un enfoque de IA.",
    cuando:"Al evaluar un sistema de IA antes de confiar en sus salidas.",
    prompt:`Sobre un sistema de IA para "{tema}": ¿qué sesgos podría tener (datos, etiquetado, contexto)?, ¿en qué situaciones fallaría peligrosamente?, ¿qué decisiones NO debería tomar solo?, ¿qué controles (human-in-the-loop, guardrails) pondrías?
Sé concreto y prioriza por impacto.` },

  { id:"genera-ejercicios", titulo:"Genera mi mini-examen", cat:"Practicar",
    que:"Crea 5 preguntas con explicación, trampa común y dato clave.",
    cuando:"Para autoevaluarte tras estudiar un tema.",
    prompt:`Crea un mini-examen de 5 preguntas de opción múltiple sobre "{tema}", de dificultad creciente.
Para cada una: 4 alternativas, la respuesta correcta, una explicación breve, el error o trampa más común, y un dato clave para recordarla.
No me muestres las respuestas hasta que yo conteste las 5.` },

  { id:"mapa-mental", titulo:"Mapa mental + ruta", cat:"Aprender",
    que:"Estructura el tema en un esquema jerárquico y una ruta de estudio.",
    cuando:"Al inicio, para tener el panorama completo antes de profundizar.",
    prompt:`Dame un mapa mental en texto (jerárquico, con viñetas) de "{tema}": ramas principales, sub-conceptos y cómo se conectan.
Luego propón una ruta de estudio de 5 pasos, de lo fundamental a lo avanzado, indicando qué dominar en cada paso antes de seguir.` },

  { id:"aplicar-trabajo", titulo:"Aplícalo a mi trabajo", cat:"Aplicar",
    que:"Convierte la teoría en un caso de uso accionable para tu contexto.",
    cuando:"Cuando entiendes el concepto y quieres convertirlo en valor real.",
    prompt:`Trabajo en [tu rol/sector, ej. construcción/AEC con GEN+]. Tengo este proceso: [describe el proceso].
Aplica "{tema}" a mi caso: ¿qué problema concreto resolvería?, ¿qué datos necesito?, ¿qué herramienta usaría?, ¿cómo mediría el ROI?, y ¿cuál sería un primer experimento pequeño y de bajo riesgo para validarlo esta semana?` },

  /* ---- Estructura de un buen prompt (para construir los tuyos) ---- */
  { id:"brief-director", titulo:"Brief de director de proyecto", cat:"Aplicar",
    que:"Plantilla maestra: rol · objetivo · contexto · criterios · formato.",
    cuando:"Para CUALQUIER tarea seria: convierte un pedido vago en un brief de trabajo.",
    prompt:`Actúa como [ROL experto, ej. planner de obra senior].
Objetivo: [qué resultado exacto quiero].
Contexto: [datos, restricciones, audiencia, lo que ya intenté].
Criterios de calidad: [qué hace buena la respuesta; qué evitar].
Formato de salida: [tabla / HTML / lista / longitud].
Si te falta un dato clave, pregúntamelo antes de responder.` },

  { id:"cadena-pensamiento", titulo:"Piensa paso a paso", cat:"Profundizar",
    que:"Fuerza razonamiento explícito antes de la respuesta final.",
    cuando:"En problemas con lógica, cálculo o varios pasos donde el modelo se apura.",
    prompt:`Resuelve "{tema}" paso a paso. Primero razona en voz alta cada paso y los supuestos que haces.
Luego revisa tu propio razonamiento buscando errores. Solo al final entrega la respuesta concluyente, marcada como "RESPUESTA:".` },

  { id:"rag-fuentes", titulo:"Responde solo con mis fuentes", cat:"Aplicar",
    que:"Obliga a responder desde documentos dados y a citar, no a inventar.",
    cuando:"Cuando trabajas con normas, contratos, BEP o data propia (estilo RAG).",
    prompt:`Te doy estos documentos: [pega o adjunta]. Responde "{tema}" usando ÚNICAMENTE esa información.
Cita la parte exacta en la que te basas. Si la respuesta no está en los documentos, dilo explícitamente: "No está en las fuentes". No completes con conocimiento general.` },
  { id:"prod-correo", titulo:"Correo profesional en 30 s", cat:"Productividad", que:"Redacta correos claros con el tono justo.", cuando:"Para responder rápido sin perder profesionalismo.", prompt:"Actúa como asistente de comunicación profesional. Escribe un correo {formal/cordial} para {destinatario} sobre: {tema/objetivo}. Contexto: {pega lo relevante}. Que sea claro, breve, con asunto, una acción concreta y cierre cortés. Dame 2 versiones (una más directa)." },
  { id:"prod-resumen", titulo:"Resumen ejecutivo de un documento", cat:"Productividad", que:"Convierte un texto largo en lo esencial accionable.", cuando:"Antes de leer algo extenso o para reportar arriba.", prompt:"Resume el siguiente documento para un directivo ocupado: 1) TL;DR en 3 líneas, 2) 5 puntos clave, 3) riesgos/decisiones pendientes, 4) acción recomendada. Marca lo no confirmado como [verificar].\n\nDOCUMENTO:\n{pega el texto}" },
  { id:"prod-acta", titulo:"Acta de reunión desde notas", cat:"Productividad", que:"Genera acta con acuerdos y responsables.", cuando:"Justo después de una reunión, desde notas o transcripción.", prompt:"Convierte estas notas en un acta: asistentes, temas, decisiones, acuerdos (con responsable y fecha) y próximos pasos. Sé fiel: no agregues acuerdos que no se mencionaron.\n\nNOTAS:\n{pega notas/transcripción}" },
  { id:"prod-informe", titulo:"Informe técnico estructurado", cat:"Productividad", que:"Arma la estructura y el borrador de un informe.", cuando:"Para entregables técnicos o reportes a cliente/comité.", prompt:"Actúa como ingeniero redactor. Crea un informe técnico sobre {tema} con: resumen ejecutivo, contexto, metodología, hallazgos (con datos), análisis, conclusiones y recomendaciones. Tono técnico y claro. Pídeme los datos que falten antes de redactar." },
  { id:"prod-correo-dificil", titulo:"Responder un correo difícil", cat:"Productividad", que:"Maneja el tono en situaciones sensibles.", cuando:"Reclamos, retrasos o negociaciones por escrito.", prompt:"Necesito responder este correo {tenso/de reclamo}. Objetivo: {lo que quiero lograr}. Redacta una respuesta firme pero diplomática, que reconozca el punto del otro, deje claros los hechos y proponga una salida. Dame 2 tonos: conciliador y firme.\n\nCORREO:\n{pega el correo}" },
  { id:"prod-presentacion", titulo:"Notas → presentación", cat:"Productividad", que:"Estructura una presentación clara.", cuando:"Para preparar una exposición o pitch rápido.", prompt:"Convierte estas ideas en el guion de una presentación de {n} slides: título, 1 idea por slide, bullets clave y una frase de cierre. Sugiere una imagen/diagrama por slide. Audiencia: {quién}. Objetivo: {qué deben recordar}.\n\nIDEAS:\n{pega}" },
  { id:"prod-analisis-datos", titulo:"Análisis de datos (con pasos)", cat:"Productividad", que:"Analiza una tabla y muestra el cómo.", cuando:"Cuando tienes un Excel/CSV y quieres conclusiones.", prompt:"Analiza estos datos {pega tabla o describe columnas}. Muestra los pasos y supuestos del cálculo (no solo el resultado). Entrega: hallazgos clave, tendencias, valores atípicos y 3 recomendaciones. Si algo no se puede saber con estos datos, dilo." },
  { id:"prod-semana", titulo:"Plan y priorización de la semana", cat:"Productividad", que:"Ordena tu carga con criterio.", cuando:"Lunes por la mañana o cuando te sientas saturado.", prompt:"Estas son mis tareas y plazos: {lista}. Ayúdame a priorizar con impacto vs. esfuerzo, agrúpalas por día, marca lo delegable y dime las 3 que de verdad mueven la aguja. Propón un bloque de foco diario." },
  { id:"prod-checklist", titulo:"Procedimiento → checklist", cat:"Productividad", que:"Vuelve un proceso en una lista verificable.", cuando:"Para estandarizar y no olvidar pasos.", prompt:"Convierte este procedimiento en un checklist claro y ordenado, con puntos de verificación y responsables donde aplique. Marca los pasos críticos. \n\nPROCEDIMIENTO:\n{pega}" },
  { id:"prod-decision", titulo:"Matriz de decisión", cat:"Productividad", que:"Compara opciones con criterios.", cuando:"Cuando dudas entre alternativas.", prompt:"Ayúdame a decidir entre estas opciones: {A, B, C}. Define 4-6 criterios relevantes para {mi objetivo}, arma una tabla comparativa, puntúa cada opción y dame una recomendación justificada y sus riesgos." },
  { id:"prod-propuesta", titulo:"Propuesta comercial / cotización", cat:"Productividad", que:"Redacta una propuesta persuasiva y clara.", cuando:"Para vender un servicio o proyecto.", prompt:"Actúa como consultor comercial AEC. Redacta una propuesta para {cliente} que resuelve {dolor}. Incluye: entendimiento del problema, propuesta de valor, alcance, entregables, cronograma, inversión {referencial} y próximos pasos. Tono profesional y orientado a resultados." },
  { id:"prod-linkedin", titulo:"Post de LinkedIn técnico", cat:"Productividad", que:"Genera contenido de autoridad.", cuando:"Para construir marca profesional.", prompt:"Escribe un post de LinkedIn sobre {tema} para un público {AEC/técnico}. Estructura: hook potente, cuerpo con un dato + un insight, y un CTA. Tono experto y cercano, sin clichés. Sugiere 3 hashtags y una imagen conceptual." },
  { id:"prod-tono", titulo:"Traducir y adaptar tono", cat:"Productividad", que:"Reescribe para otra audiencia o idioma.", cuando:"Cuando el mismo mensaje va a públicos distintos.", prompt:"Reescribe este texto para {audiencia/idioma} con tono {formal/cercano}. Mantén el significado, ajusta la complejidad y los ejemplos. Dame la versión final y una nota de qué cambiaste y por qué.\n\nTEXTO:\n{pega}" },
  { id:"prod-reunion", titulo:"Preparar una reunión", cat:"Productividad", que:"Llega con agenda y preguntas listas.", cuando:"Antes de una reunión importante.", prompt:"Voy a reunirme con {quién} para {objetivo}. Prepárame: agenda con tiempos, 5 preguntas clave para hacer, posibles objeciones y cómo responderlas, y los 3 resultados que debería lograr. Contexto: {pega}." },
  { id:"prod-rfi", titulo:"Redactar un RFI/requerimiento claro", cat:"Productividad", que:"Comunica un requerimiento sin ambigüedad.", cuando:"Para consultas técnicas o solicitudes formales.", prompt:"Redacta un {RFI/requerimiento} claro sobre: {tema}. Incluye: antecedente, consulta/solicitud puntual, referencia (plano/norma/cláusula), impacto si no se resuelve y plazo requerido. Tono profesional y trazable." },
  { id:"prod-brainstorm", titulo:"Brainstorm estructurado (SCAMPER)", cat:"Productividad", que:"Genera ideas con método.", cuando:"Cuando necesitas opciones, no una sola idea.", prompt:"Hagamos brainstorming sobre {reto/objetivo} con el método SCAMPER (Sustituir, Combinar, Adaptar, Modificar, Otros usos, Eliminar, Reordenar). Da 2 ideas por cada letra, marca las 3 más prometedoras y un primer experimento barato para validarlas." },
  { id:"prod-simplificar", titulo:"Simplificar texto técnico", cat:"Productividad", que:"Explica para un cliente no técnico.", cuando:"Para comunicar a clientes o dirección.", prompt:"Reescribe este texto técnico para que lo entienda {un cliente sin formación técnica}, sin perder lo esencial. Usa analogías simples y evita jerga. Añade un '¿por qué te importa?' al final.\n\nTEXTO:\n{pega}" },
  { id:"prod-entrevista", titulo:"Preguntas para un experto", cat:"Productividad", que:"Aprovecha al máximo a quien sabe.", cuando:"Antes de entrevistar a un experto o cliente.", prompt:"Voy a entrevistar a {experto/rol} sobre {tema} para {objetivo}. Dame 10 preguntas de menor a mayor profundidad, 3 preguntas de seguimiento y 2 que revelen lo que normalmente no se dice. Evita preguntas de sí/no." },
  { id:"prod-auditar", titulo:"Auditar mi propio texto", cat:"Productividad", que:"Mejora claridad antes de enviar.", cuando:"Antes de mandar algo importante.", prompt:"Revisa este texto como editor exigente: señala ambigüedades, frases largas, errores y partes poco accionables. Dame la versión mejorada y una lista de los 3 cambios de mayor impacto.\n\nTEXTO:\n{pega}" },
  { id:"prod-sop", titulo:"Crear un SOP/playbook", cat:"Productividad", que:"Documenta lo que haces para delegar.", cuando:"Cuando una tarea ya la repites y quieres delegarla.", prompt:"Ayúdame a convertir esta tarea que hago en un SOP (procedimiento estándar) para delegar: objetivo, cuándo se hace, pasos numerados, herramientas, criterios de calidad y errores a evitar. Pregúntame lo que falte.\n\nTAREA:\n{describe lo que haces}" }
];
