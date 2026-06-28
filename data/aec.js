/* IA aplicada a AEC — aplicaciones por área + estructuras visuales. */

/* Aplicaciones por área del sector AEC */
window.DB.aecAplicaciones = [
  { area:"Obra", ico:"⌂", que:"Parte diario digital, consolidación de avance, desviaciones y reporte ejecutivo." },
  { area:"BIM", ico:"◫", que:"Asistente sobre el modelo federado; clasificación de observaciones e interferencias." },
  { area:"Planificación", ico:"◷", que:"Borradores de cronograma, análisis de ruta crítica y escenarios." },
  { area:"Costos y presupuestos", ico:"$", que:"Estimación temprana (AI-BrIM: ML+LLMs, ~30% menos tiempo vs. humano)." , verify:true},
  { area:"Seguridad", ico:"⚠", que:"Visión por computadora: detección de EPP y alertas con evento/zona/hora." },
  { area:"Calidad", ico:"✓", que:"Detección de defectos en fotos; checklist y trazabilidad de no-conformidades." },
  { area:"Metrados", ico:"∑", que:"Extracción de cantidades con reglas; tablas estándar por nivel/categoría." },
  { area:"Valorizaciones", ico:"▤", que:"Cruce de avance vs. contrato; soporte a la valorización y control." },
  { area:"Control documental", ico:"❑", que:"RAG sobre contratos/adendas; matriz de obligaciones y riesgos." },
  { area:"Diseño generativo", ico:"❖", que:"Exploración de variantes y optimización (paramétrico/generativo)." },
  { area:"Computer Vision", ico:"◉", que:"Grietas, fallas de pavimento, nubes de puntos, inspección por drones." },
  { area:"Reportes ejecutivos", ico:"▦", que:"Consolidación de avance, costos, curva S, riesgos y recomendaciones." },
  { area:"Asistentes BIM", ico:"◆", que:"Consulta BEP/EIR/normas con fuente; respuestas y checklists." },
  { area:"Agentes para obra", ico:"⬡", que:"Seguimiento de RFIs, clasificación, documentos y soporte multi-paso." }
];

/* Escalera de madurez (chatbot → hub agentivo) */
window.DB.escalera = [
  { n:"1", t:"Chatbot", d:"Responde preguntas puntuales." },
  { n:"2", t:"Asistente", d:"Produce con rol, contexto y formato." },
  { n:"3", t:"Agente", d:"Ejecuta pasos con herramientas y permisos." },
  { n:"4", t:"Equipo digital", d:"Varios agentes coordinados por proceso." },
  { n:"5", t:"Hub agentivo", d:"Orquesta agentes, datos y sistemas." }
];

/* Chatbot vs Asistente vs Agente (comparación) */
window.DB.cba = [
  { t:"Chatbot", verbo:"Responde", d:"'Te respondo'. Ideal para preguntas puntuales.", ej:"Te explica cómo redactar un acta." },
  { t:"Asistente", verbo:"Produce", d:"'Te ayudo a producir'. Usa rol, contexto, criterios y formato.", ej:"Redacta el acta a partir de tus notas." },
  { t:"Agente", verbo:"Ejecuta", d:"'Ejecuto pasos'. Usa herramientas, reglas y aprobación.", ej:"Transcribe, extrae acuerdos y envía el seguimiento." }
];

/* 6 componentes de un agente (metáfora empresarial) */
window.DB.componentes = [
  { k:"Modelo base", e:"Talento bruto", d:"La capacidad de razonar y generar." },
  { k:"Conocimiento (RAG)", e:"Documentación interna", d:"Tus datos para responder con fuente." },
  { k:"Herramientas", e:"Las manos", d:"Web, hojas, correo, código, APIs." },
  { k:"Memoria", e:"CRM / ERP / KB", d:"Lo que recuerda entre tareas." },
  { k:"Evals", e:"Control de calidad", d:"Pruebas que miden si funciona." },
  { k:"Gobernanza", e:"Comité de riesgos", d:"Permisos y aprobación humana." }
];

/* Flujo de datos → modelo → output → validación humana */
window.DB.flujo = [
  { t:"Datos", d:"Documentos, fotos, sensores, texto." },
  { t:"Modelo", d:"Procesa y genera o predice." },
  { t:"Output", d:"Borrador: texto, tabla, alerta, clasificación." },
  { t:"Validación humana", d:"Se revisa, corrige y aprueba." },
  { t:"Acción / valor", d:"Decisión, entregable o automatización." }
];

/* IA generativa vs predictiva */
window.DB.genVsPred = {
  gen: { t:"IA Generativa", d:"Crea contenido nuevo.", ej:["Redactar un informe","Generar una imagen","Escribir código","Resumir una reunión"] },
  pred:{ t:"IA Predictiva", d:"Estima un valor o clase a partir de datos.", ej:["Predecir costo de un puente","Estimar riesgo de retraso","Clasificar una grieta","Prever demanda"] }
};
