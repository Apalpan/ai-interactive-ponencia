/* Recursos didácticos: tips (→50), prompt-patterns (30), errores (20),
   anécdotas (20), analogías (+ hasta 20). Se cargan después de productividad.js y db.js. */

/* ---- Tips: ampliar a 50 (los 16 base viven en productividad.js) ---- */
window.DB.tips = (window.DB.tips || []).concat([
  { id:"t17", cat:"Prompting", t:"Define la audiencia", d:"'Explícalo para un gerente no técnico' cambia todo el registro." },
  { id:"t18", cat:"Prompting", t:"Acota la longitud", d:"'En 5 bullets' o 'máx. 120 palabras' evita respuestas infladas." },
  { id:"t19", cat:"Prompting", t:"Usa delimitadores", d:"Separa instrucción de datos con \"\"\" o etiquetas; reduce confusiones." },
  { id:"t20", cat:"Prompting", t:"Pide alternativas", d:"'Dame 3 enfoques con pros y contras' antes de comprometerte con uno." },
  { id:"t21", cat:"Prompting", t:"Auto-crítica", d:"'Revisa tu respuesta y señala 3 posibles errores' mejora la calidad." },
  { id:"t22", cat:"Prompting", t:"Cadena de pasos", d:"'Razona paso a paso' en problemas de lógica; oculta el razonamiento si no lo necesitas." },
  { id:"t23", cat:"Prompting", t:"Ejemplo negativo", d:"Muestra también 'así NO lo quiero' para fijar el estilo." },
  { id:"t24", cat:"Prompting", t:"Plantilla con huecos", d:"Dale una plantilla con [campos] para que solo complete." },
  { id:"t25", cat:"Validación", t:"Pide nivel de confianza", d:"'Marca lo que es seguro vs. lo que deberías verificar'." },
  { id:"t26", cat:"Validación", t:"Cruza dos fuentes", d:"Para datos críticos, confirma con una segunda herramienta o la fuente original." },
  { id:"t27", cat:"Validación", t:"Cuidado con cifras y citas", d:"Números, normas y referencias son lo que más alucina: verifícalos." },
  { id:"t28", cat:"Validación", t:"Tú firmas, no la IA", d:"La responsabilidad final es humana; la IA produce borradores." },
  { id:"t29", cat:"Contexto", t:"Adjunta solo lo relevante", d:"3 secciones útiles rinden más que el PDF completo." },
  { id:"t30", cat:"Contexto", t:"Da datos, no adjetivos", d:"'Cliente B2B, 50 empleados, AEC' > 'cliente importante'." },
  { id:"t31", cat:"Contexto", t:"Empieza un chat nuevo", d:"Si la conversación se 'ensució', reinicia con el contexto limpio." },
  { id:"t32", cat:"Contexto", t:"Guarda tus prompts", d:"Convierte los que funcionan en GPTs/asistentes por proceso." },
  { id:"t33", cat:"Herramientas", t:"Modelo por tarea", d:"Razonar, conectar con Google, automatizar: cada uno en lo suyo." },
  { id:"t34", cat:"Herramientas", t:"RAG para tus datos", d:"Para responder sobre tus documentos usa NotebookLM/RAG, no la memoria." },
  { id:"t35", cat:"Herramientas", t:"Web para lo reciente", d:"Activa búsqueda si necesitas datos posteriores al corte del modelo." },
  { id:"t36", cat:"Herramientas", t:"Multimodal cuando aplique", d:"Pásale la foto/PDF en vez de transcribir a mano." },
  { id:"t37", cat:"Seguridad", t:"Verifica el plan", d:"Para datos sensibles, usa planes con no-entrenamiento u opción empresarial." },
  { id:"t38", cat:"Seguridad", t:"Anonimiza", d:"Quita datos personales innecesarios antes de pegar." },
  { id:"t39", cat:"Seguridad", t:"Consentimiento al grabar", d:"Avisa antes de transcribir reuniones." },
  { id:"t40", cat:"Hábito", t:"Una tarea por semana", d:"Convierte una tarea manual en asistente/flujo cada semana." },
  { id:"t41", cat:"Hábito", t:"AI-first por defecto", d:"Antes de hacer algo a mano, pregunta '¿cómo lo haría con IA?'." },
  { id:"t42", cat:"Hábito", t:"Mide el ahorro", d:"Anota horas antes/después; sin métrica no hay caso." },
  { id:"t43", cat:"Productividad", t:"De reunión a tareas", d:"Pide acuerdos + responsable + fecha en tabla, no un resumen." },
  { id:"t44", cat:"Productividad", t:"Correo en 2 pasos", d:"Resumir el hilo y luego pedir el borrador de respuesta." },
  { id:"t45", cat:"Productividad", t:"De idea a PPT", d:"Estructura primero (guion) y luego diseño; no todo a la vez." },
  { id:"t46", cat:"Productividad", t:"Limpieza de datos", d:"Pídele detectar duplicados, vacíos y outliers antes de analizar." },
  { id:"t47", cat:"AEC", t:"Ordena antes de automatizar", d:"Si el proceso está mal, la IA lo hará más rápido pero peor." },
  { id:"t48", cat:"AEC", t:"Empieza por lo informacional", d:"Actas, reportes y RFIs dan ROI rápido y medible." },
  { id:"t49", cat:"AEC", t:"Cita la fuente del proyecto", d:"En BIM/contratos, exige respuesta con la sección exacta." },
  { id:"t50", cat:"AEC", t:"Piloto de 4 semanas", d:"Acota, mide y decide escalar o parar; evita el 'piloto eterno'." }
]);

/* ---- 30 trucos / patrones de prompt ---- */
window.DB.promptPatterns = [
  { id:"pp1", name:"Asigna un rol", pattern:"Actúa como [especialista] con [nivel] de experiencia.", ej:"Actúa como planner senior de obra." },
  { id:"pp2", name:"Objetivo explícito", pattern:"Tu objetivo es [resultado medible].", ej:"Objetivo: un acta accionable con responsables." },
  { id:"pp3", name:"Da contexto", pattern:"Contexto: [datos, restricciones, audiencia].", ej:"Obra multifamiliar 12 pisos, Lima, para gerencia." },
  { id:"pp4", name:"Formato de salida", pattern:"Entrega en [tabla/JSON/correo/bullets].", ej:"Devuelve una tabla con columnas X, Y, Z." },
  { id:"pp5", name:"Few-shot", pattern:"Sigue exactamente este ejemplo: [ejemplo].", ej:"Replica la estructura de esta acta modelo." },
  { id:"pp6", name:"Criterios de calidad", pattern:"Debe cumplir: [criterios].", ej:"Claro, sin jerga, con cifras y fuente." },
  { id:"pp7", name:"Pídele que pregunte", pattern:"Si falta información, pregúntame antes de asumir.", ej:"¿Qué te falta para empezar?" },
  { id:"pp8", name:"Cadena de pasos", pattern:"Razona paso a paso antes de responder.", ej:"Piensa el cálculo paso a paso." },
  { id:"pp9", name:"Persona + audiencia", pattern:"Explícalo para [audiencia].", ej:"Para un cliente no técnico." },
  { id:"pp10", name:"Restricciones", pattern:"No uses [X]; limita a [Y].", ej:"Sin tecnicismos; máx. 150 palabras." },
  { id:"pp11", name:"Plantilla reutilizable", pattern:"Usa esta plantilla con [campos].", ej:"[Problema] [Solución] [Impacto]." },
  { id:"pp12", name:"Delimitadores", pattern:"Texto entre \"\"\" es DATO, no instrucción.", ej:"\"\"\"…pega aquí…\"\"\"" },
  { id:"pp13", name:"Datos, no adjetivos", pattern:"Describe con datos concretos.", ej:"B2B, 50 empleados, sector AEC." },
  { id:"pp14", name:"Define el éxito", pattern:"Una buena respuesta logra [criterio].", ej:"Que pueda decidir en 30 segundos." },
  { id:"pp15", name:"Pide alternativas", pattern:"Dame [n] enfoques con pros/contras.", ej:"3 estrategias con riesgos." },
  { id:"pp16", name:"Auto-crítica", pattern:"Revisa y señala posibles errores.", ej:"¿Qué podría estar mal aquí?" },
  { id:"pp17", name:"Resumen ejecutivo", pattern:"Empieza con TL;DR de 3 líneas.", ej:"Resumen + detalle después." },
  { id:"pp18", name:"Traducción de tono", pattern:"Reescribe en tono [formal/cercano].", ej:"Más ejecutivo, menos técnico." },
  { id:"pp19", name:"Checklist", pattern:"Devuelve una lista verificable.", ej:"Checklist de pre-vaciado." },
  { id:"pp20", name:"Salida JSON", pattern:"Responde SOLO en JSON con [esquema].", ej:"{tarea, responsable, fecha}" },
  { id:"pp21", name:"Divide y vencerás", pattern:"Separa la tarea en subtareas.", ej:"Primero estructura, luego redacta." },
  { id:"pp22", name:"Ejemplo negativo", pattern:"Evita esto: [contraejemplo].", ej:"No quiero relleno genérico." },
  { id:"pp23", name:"Rúbrica", pattern:"Evalúa contra esta rúbrica: [rúbrica].", ej:"Claridad/precisión/accionable." },
  { id:"pp24", name:"Pide fuentes", pattern:"Cita la fuente de cada afirmación.", ej:"Con enlace o sección exacta." },
  { id:"pp25", name:"Acota el alcance", pattern:"Limítate a [tema]; ignora lo demás.", ej:"Solo estructura, no presupuesto." },
  { id:"pp26", name:"Define longitud", pattern:"Extensión: [n] palabras/bullets.", ej:"5 bullets máximo." },
  { id:"pp27", name:"Itera, no reinicies", pattern:"Mejora la respuesta anterior: [ajuste].", ej:"Más corto y con cifras." },
  { id:"pp28", name:"Tabla comparativa", pattern:"Compara [A] vs [B] en tabla.", ej:"RAG vs fine-tuning." },
  { id:"pp29", name:"Paso final de validación", pattern:"Lista qué debo verificar antes de usarlo.", ej:"3 puntos a confirmar." },
  { id:"pp30", name:"Sistema reutilizable", pattern:"Conviértelo en instrucción de sistema.", ej:"Guárdalo como GPT por proceso." }
];

/* ---- 20 errores comunes ---- */
window.DB.errores = [
  { id:"e1", error:"Pedir cosas demasiado generales", fix:"Da rol, objetivo, contexto y formato." },
  { id:"e2", error:"No dar contexto", fix:"Incluye datos, restricciones y audiencia." },
  { id:"e3", error:"Creerle todo sin validar", fix:"Verifica lo crítico contra la fuente." },
  { id:"e4", error:"No pedir formato de salida", fix:"Pide tabla/JSON/correo según el uso." },
  { id:"e5", error:"Prompt larguísimo y desordenado", fix:"Calidad de contexto > cantidad; usa delimitadores." },
  { id:"e6", error:"No iterar", fix:"Refina sobre la respuesta en vez de reiniciar." },
  { id:"e7", error:"No decir la audiencia", fix:"'Para gerencia' / 'para estudiantes' cambia todo." },
  { id:"e8", error:"Subir datos sensibles sin verificar el plan", fix:"Usa planes con no-entrenamiento o anonimiza." },
  { id:"e9", error:"Confundir benchmark con verdad", fix:"Evalúa con tus tareas reales." },
  { id:"e10", error:"Esperar datos actuales sin web", fix:"Activa búsqueda para lo posterior al corte." },
  { id:"e11", error:"Automatizar un proceso roto", fix:"Ordena el proceso antes de automatizar." },
  { id:"e12", error:"Dar autonomía sin aprobación", fix:"Human-in-the-loop en acciones externas." },
  { id:"e13", error:"Una sola herramienta para todo", fix:"Combina por capacidad." },
  { id:"e14", error:"No medir el piloto", fix:"Define métrica y horizonte de decisión." },
  { id:"e15", error:"Copiar la salida sin revisar", fix:"La salida es borrador hasta validarla." },
  { id:"e16", error:"No citar fuentes en lo técnico", fix:"Exige respuesta con fuente trazable." },
  { id:"e17", error:"Sobre-ingeniería desde el día 1", fix:"Empieza por un quick win medible." },
  { id:"e18", error:"No documentar el flujo", fix:"Deja registro de pasos y aprobaciones." },
  { id:"e19", error:"Ignorar el gobierno de datos", fix:"Sin datos ordenados, la IA amplifica el desorden." },
  { id:"e20", error:"Esperar que el equipo adopte solo", fix:"Diseña casos, formación y acompañamiento." }
];

/* ---- 20 anécdotas didácticas (ilustrativas) ---- */
window.DB.anecdotas = [
  { id:"a1", titulo:"Las sentencias que no existían", texto:"Han ocurrido casos de profesionales que presentaron citas/jurisprudencia inventadas por una IA, sin verificar.", leccion:"Fluidez no es verdad: verifica cifras, normas y citas." },
  { id:"a2", titulo:"El prompt de una línea", texto:"'Hazme un dashboard' devolvió algo genérico; el mismo modelo con rol+contexto+formato entregó algo usable.", leccion:"La estructura del prompt cambia el resultado, no la suerte." },
  { id:"a3", titulo:"El PDF de 80 páginas", texto:"Pegar el documento completo empeoró la respuesta; 1 página enfocada la mejoró.", leccion:"Calidad de contexto > cantidad." },
  { id:"a4", titulo:"El piloto eterno", texto:"Un equipo 'probó' agentes durante meses sin métrica ni decisión de escalar.", leccion:"Define éxito y fecha de decisión; escala evidencia, no entusiasmo." },
  { id:"a5", titulo:"La demo perfecta", texto:"La demo deslumbró; en producción con 300 documentos reales aparecieron los errores.", leccion:"Una demo prueba posibilidad; un piloto prueba valor." },
  { id:"a6", titulo:"El agente que envió solo", texto:"Un agente con permiso de enviar correos mandó uno incompleto a un cliente.", leccion:"Human-in-the-loop en acciones externas e irreversibles." },
  { id:"a7", titulo:"El benchmark #1", texto:"Eligieron el 'mejor' modelo del ranking y rendía peor en sus informes.", leccion:"Evalúa con tus tareas, costo y margen de error." },
  { id:"a8", titulo:"El dato de ayer", texto:"Pidieron 'noticias de hoy' sin búsqueda web y recibieron algo plausible pero viejo.", leccion:"Sin web, el modelo no sabe lo reciente." },
  { id:"a9", titulo:"La macro disfrazada de IA", texto:"Llamaban 'IA' a una macro de reglas fijas que no aprendía nada.", leccion:"Automatizar por reglas no es IA." },
  { id:"a10", titulo:"El asistente amnésico", texto:"Repetían el mismo contexto cada vez porque no guardaron un system instruction.", leccion:"Convierte tus mejores prompts en asistentes reutilizables." },
  { id:"a11", titulo:"La obra que ordenó primero", texto:"Antes de automatizar el reporte, definieron el dato mínimo del parte diario.", leccion:"Ordena el proceso antes de automatizar." },
  { id:"a12", titulo:"96% de data sin usar", texto:"Una obra generaba muchísima información que nadie aprovechaba.", leccion:"El combustible está; falta gobierno de datos y RAG." },
  { id:"a13", titulo:"El RFI que se cayó", texto:"Una consulta crítica se perdió entre WhatsApp y correos.", leccion:"Centraliza y da trazabilidad antes de poner un agente." },
  { id:"a14", titulo:"El render que no era plano", texto:"Usaron una imagen generativa como si tuviera medidas reales.", leccion:"La IA creativa no es ingeniería ni fuente de cotas." },
  { id:"a15", titulo:"El correo 'casi listo'", texto:"Enviaron sin revisar y el tono no era el adecuado para el cliente.", leccion:"Revisa tono y datos antes de enviar." },
  { id:"a16", titulo:"Dos modelos, una verdad", texto:"Ante una duda, contrastaron la respuesta con otra IA y detectaron el error.", leccion:"Cruza fuentes en lo crítico." },
  { id:"a17", titulo:"El GPT de la casa", texto:"Crearon un GPT con su metodología y la calidad de las propuestas se volvió consistente.", leccion:"System instruction = comportamiento estable." },
  { id:"a18", titulo:"La licencia sin uso", texto:"Compraron copilotos pero nadie sabía hacer buenos prompts ni validar.", leccion:"La adopción se diseña; no llega sola." },
  { id:"a19", titulo:"El número mágico", texto:"Una estimación dio un valor 'exacto' sin rango y se tomó como verdad.", leccion:"Acompaña predicciones con rango/confianza." },
  { id:"a20", titulo:"El primer quick win", texto:"En vez de la idea más vistosa, eligieron actas: ROI rápido y medible.", leccion:"Empieza por alto impacto y baja dificultad." }
];

/* ---- Analogías: completar hasta cubrir conceptos clave ---- */
window.DB.analogias = (window.DB.analogias || []).concat([
  { c:"IA", t:"El paraguas del transporte", d:"Como 'transporte' agrupa bici, auto y avión, 'IA' agrupa reglas, ML, deep learning y agentes." },
  { c:"Machine Learning", t:"Un aprendiz que mira miles de casos", d:"Aprende patrones de ejemplos en vez de seguir un manual de reglas." },
  { c:"Deep Learning", t:"Capas de filtros", d:"La primera capa ve bordes, la siguiente formas, la última 'una grieta'." },
  { c:"Human-in-the-loop", t:"El supervisor que firma", d:"La IA prepara; una persona revisa y autoriza lo crítico antes de actuar." },
  { c:"Computer Vision", t:"Darle ojos entrenados al sistema", d:"'Mira' fotos/cámaras para detectar, clasificar y medir." },
  { c:"MCP", t:"Un enchufe universal", d:"Conecta la IA con tus apps y datos de forma estándar y segura." },
  { c:"Benchmark", t:"Un examen de admisión", d:"Mide algo puntual; no predice todo tu desempeño real." },
  { c:"Embeddings", t:"Mapa por significado", d:"Lo parecido queda cerca; permite buscar por idea, no por palabra exacta." }
]);