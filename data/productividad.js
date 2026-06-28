/* Productividad con IA — áreas, ejercicios y tips. */

/* Áreas de productividad: tarea diaria → cómo la IA la mejora */
window.DB.prodAreas = [
  { id:"p1", area:"Correos", ico:"✉", antes:"Escribir y responder correos desde cero, uno por uno.",
    con:"Resumen de hilos, borradores por tono y respuestas que tú apruebas.",
    tools:["Gemini en Workspace","M365 Copilot"] },
  { id:"p2", area:"Reuniones", ico:"◷", antes:"Tomar notas a mano y perder acuerdos.",
    con:"Transcripción → acuerdos, responsables, fechas y seguimiento automático.",
    tools:["Read AI","ChatGPT"] },
  { id:"p3", area:"Documentos", ico:"▤", antes:"Redactar informes y propuestas largas manualmente.",
    con:"Borradores estructurados, reescritura por audiencia y control de versiones.",
    tools:["Claude","Notion AI"] },
  { id:"p4", area:"Investigación", ico:"⌕", antes:"Buscar en mil pestañas sin saber qué es confiable.",
    con:"Respuestas con fuentes citadas y síntesis sobre tus documentos.",
    tools:["Perplexity","NotebookLM"] },
  { id:"p5", area:"Presentaciones", ico:"▦", antes:"Armar PPT desde el contenido y el diseño a la vez.",
    con:"De idea/Word a estructura, narrativa y slides; versiones por público.",
    tools:["M365 Copilot","ChatGPT","Gamma"] },
  { id:"p6", area:"Análisis de datos", ico:"▥", antes:"Pelear con fórmulas y tablas para sacar conclusiones.",
    con:"Fórmulas, limpieza, patrones y un resumen ejecutivo con acciones.",
    tools:["Gemini en Workspace","ChatGPT","Excel + IA"] },
  { id:"p7", area:"Automatización", ico:"⟳", antes:"Copiar-pegar datos entre apps todos los días.",
    con:"Flujos disparador → pasos → resultado, con IA en el paso de criterio.",
    tools:["n8n","Make","Zapier"] },
  { id:"p8", area:"Gestión de tareas", ico:"☑", antes:"Listas dispersas y prioridades poco claras.",
    con:"Convertir notas y correos en tareas priorizadas con plazos.",
    tools:["Notion AI","ChatGPT"] },
  { id:"p9", area:"Aprendizaje acelerado", ico:"↑", antes:"Estudiar sin ruta ni feedback.",
    con:"Tutor con ruta, analogías, quizzes y feedback personalizado.",
    tools:["ChatGPT","NotebookLM","Claude"] },
  { id:"p10", area:"Creación de contenido", ico:"✦", antes:"Producir cada pieza una por una.",
    con:"Un mensaje núcleo adaptado a muchos formatos con tu voz de marca.",
    tools:["ChatGPT","Claude","Firefly"] }
];

/* Ejercicios prácticos (para hacer en vivo) */
window.DB.prodEjercicios = [
  { id:"e1", titulo:"Mejora un prompt malo", tiempo:"5 min",
    reto:"Toma un prompt débil y conviértelo en uno fuerte.",
    malo:"\"Hazme un dashboard de obra.\"",
    bueno:"\"Actúa como especialista en planificación y control de obra. Crea un dashboard ejecutivo para una obra multifamiliar de 12 pisos en Lima con: avance físico vs. real, curva S, costos, actividades críticas, alertas, riesgos y recomendaciones gerenciales. Formato: HTML con datos simulados realistas.\"",
    clave:"Rol + objetivo + contexto + criterios + formato de salida." },
  { id:"e2", titulo:"Convierte una reunión en tareas", tiempo:"5 min",
    reto:"De una transcripción/nota, extrae acuerdos accionables.",
    malo:"\"Resume la reunión.\"",
    bueno:"\"De esta transcripción, extrae: acuerdos, responsable, fecha y estado. Devuelve una tabla y un mensaje corto de seguimiento para el equipo.\"",
    clave:"Pide estructura (tabla) y el siguiente paso, no solo un resumen." },
  { id:"e3", titulo:"Diseña tu asistente personal", tiempo:"8 min",
    reto:"Define un asistente para una tarea diaria tuya.",
    malo:"\"Sé mi asistente.\"",
    bueno:"\"Eres mi asistente de [tarea]. Objetivo: [resultado]. Trabaja con [datos/archivos]. Decide según [criterios]. Entrega siempre en [formato]. Si falta información, pregúntame antes de asumir.\"",
    clave:"Rol, objetivo, contexto, criterios, formato y manejo de dudas." },
  { id:"e4", titulo:"Automatiza un flujo repetitivo", tiempo:"8 min",
    reto:"Diseña (en papel) un flujo disparador → pasos → resultado.",
    malo:"\"Automatiza mis correos.\"",
    bueno:"\"Cuando llegue un correo con asunto 'Solicitud', extrae datos clave, créame una tarea en el gestor, redacta acuse de recibo (para aprobar) y avísame por chat.\"",
    clave:"Define el disparador, los pasos y dónde aprueba un humano." },
  { id:"e5", titulo:"Identifica tareas delegables a IA", tiempo:"6 min",
    reto:"Lista 5 tareas de tu semana y marca cuáles delegar.",
    malo:"\"¿Qué puede hacer la IA por mí?\"",
    bueno:"\"Estas son mis 5 tareas semanales: [...]. Clasifícalas en: delegable hoy, delegable con datos ordenados, y no delegable. Justifica y propón cómo empezar con la #1.\"",
    clave:"Delegable = informacional + repetible + datos disponibles." }
];

/* Tips y trucos */
window.DB.tips = [
  { id:"t1", cat:"Prompting", t:"Dale un rol", d:"Empieza con 'Actúa como…'. Cambia el nivel y el enfoque de la respuesta." },
  { id:"t2", cat:"Prompting", t:"Pide el formato", d:"Tabla, bullets, JSON, correo, slide. El formato correcto ahorra reescritura." },
  { id:"t3", cat:"Prompting", t:"Da ejemplos (few-shot)", d:"Un ejemplo de cómo quieres la salida vale más que tres párrafos de instrucciones." },
  { id:"t4", cat:"Prompting", t:"Pide que pregunte", d:"'Si falta información, pregúntame antes de asumir' reduce respuestas genéricas." },
  { id:"t5", cat:"Prompting", t:"Itera, no reinicies", d:"Refina sobre la respuesta ('más corto', 'con cifras') en vez de empezar de cero." },
  { id:"t6", cat:"Prompting", t:"Pide el razonamiento", d:"'Explica tu criterio paso a paso' ayuda a detectar errores de lógica." },
  { id:"t7", cat:"Validación", t:"Pide fuentes", d:"Si no hay fuente trazable, trátalo como borrador, no como evidencia." },
  { id:"t8", cat:"Validación", t:"Desconfía de la seguridad", d:"Cuanto más seguro suena un dato puntual (número, norma, cita), más conviene verificarlo." },
  { id:"t9", cat:"Validación", t:"Contrasta dos modelos", d:"Si dudas, pásale la misma tarea a otra IA y compara." },
  { id:"t10", cat:"Contexto", t:"Calidad > cantidad", d:"Mejor 1 página enfocada que 80 desordenadas. La ventana de contexto se ensucia." },
  { id:"t11", cat:"Contexto", t:"Reutiliza asistentes", d:"Convierte tus mejores prompts en GPTs/asistentes guardados por proceso." },
  { id:"t12", cat:"Contexto", t:"Da datos, no adjetivos", d:"'Cliente B2B, 50 empleados, sector AEC' rinde más que 'cliente importante'." },
  { id:"t13", cat:"Herramientas", t:"Modelo por tarea", d:"Razonar/documentos largos, conectar con Google, automatizar: cada uno en lo suyo." },
  { id:"t14", cat:"Herramientas", t:"RAG para tus datos", d:"Para responder sobre tus documentos, usa NotebookLM/RAG, no la memoria del modelo." },
  { id:"t15", cat:"Seguridad", t:"Cuida lo confidencial", d:"Verifica el plan (no-entrenamiento) antes de subir datos sensibles." },
  { id:"t16", cat:"Hábito", t:"Una tarea repetitiva por semana", d:"Convierte una sola tarea manual en asistente o flujo cada semana. Se acumula." }
];
