/* ============================================================
   INVESTIGACIÓN IA + AEC — papers y reportes con dato citable.
   Extraído y curado de los PDFs de _17_AI-Research-Papers (2022–2026).
   { id, titulo, autores, anio, fuente, cat, metric, metricLbl,
     hallazgo, detalle, aec(bool), verify(bool) }
   ============================================================ */
window.DB = window.DB || {};

window.DB.paperCats = ["BIM & LLM", "Costos & predicción", "Computer Vision", "Gestión de proyectos", "Aprendizaje & adopción", "Marco & revisión"];

window.DB.papers = [
  { id:"bim-gpt", titulo:"BIM-GPT: asistente virtual basado en prompts para consultar modelos BIM",
    autores:"Zheng & Fischer", anio:"2023", fuente:"Stanford University · arXiv 2304.09333", cat:"BIM & LLM", aec:true, verify:true,
    metric:"99.5%", metricLbl:"precisión clasificando consultas con solo 2% de datos en el prompt (83.5% sin datos)",
    hallazgo:"Un LLM (GPT) conectado a un modelo BIM permite preguntar en lenguaje natural — “¿cuántas puertas cortafuego hay en el piso 3?” — y obtener respuesta resumida, sin saber programar ni la estructura del modelo.",
    detalle:"Un gestor de prompts + plantilla dinámica traducen la consulta del usuario; incorporar apenas 2% de datos de ejemplo dispara la precisión de 83.5% a 99.5%. Demuestra que el cuello de botella del BIM no es el modelo, es el acceso a su información." },

  { id:"aecode-learning", titulo:"Enfoque IA para el diseño de producto que optimiza el aprendizaje en AEC",
    autores:"GEN+ / AECODE", anio:"2025", fuente:"IGLC 33 · Osaka–Kyoto, Japón", cat:"Aprendizaje & adopción", aec:true, verify:true,
    metric:"450 / 12", metricLbl:"expertos y estudiantes encuestados, de 12 países",
    hallazgo:"La formación tradicional en AEC desperdicia tiempo: 70% de los participantes pierde horas en capacitación que no responde a su necesidad y 65% no encuentra contenido relevante. El 80% quiere una plataforma de microlearning just-in-time.",
    detalle:"MVP de plataforma educativa que combina Lean 4.0 (eliminar Muda), microlearning, Just-in-Time y agentes de IA para rutas personalizadas. Validado con encuesta + focus group. Base conceptual de AECODE." },

  { id:"ai-brim", titulo:"Predicción de costo conceptual con datos históricos y Machine Learning (AI-BrIM)",
    autores:"GEN+ (Lean 4.0)", anio:"2025", fuente:"Integración Lean 4.0 + IA · proyectos de puentes", cat:"Costos & predicción", aec:true, verify:true,
    metric:"R² 0.92", metricLbl:"precisión del modelo XGBoost prediciendo el costo conceptual de puentes",
    hallazgo:"En la fase conceptual, los costos se estiman por ratios y fallan: hay una brecha grande entre lo estimado y lo real. Un modelo XGBoost entrenado con datos históricos limpios (principio Built-in Quality) alcanza R²=0.92 y cierra esa brecha.",
    detalle:"AI-BrIM estructura la data histórica, prueba varios modelos ML y conecta un ChatBot al LLM de OpenAI. Referencias del sector: BIM reduce costos hasta 20%; ANN/Gradient Boosting/XGBoost llegan a ~99% en datasets limpios." },

  { id:"cv-aec", titulo:"Estado del arte: Computer Vision en la industria AEC",
    autores:"Análisis de startups", anio:"2025", fuente:"Informe de mercado (Buildots, Doxel, OpenSpace)", cat:"Computer Vision", aec:true, verify:true,
    metric:"5–12%", metricLbl:"del valor de un proyecto se pierde en reproceso (demoler y rehacer)",
    hallazgo:"La visión por computadora cierra la “brecha de realidad” entre el modelo BIM y lo que se construye. Las cámaras recorren la obra, la IA reconoce cada elemento (tubería, viga, enchufe), lo compara con el BIM y calcula el % de avance y la calidad — automáticamente.",
    detalle:"Tres fases de madurez: registro pasivo → reality capture (gemelo visual) → inteligencia semántica. Debate técnico: vSLAM con cámaras de <$500 (escala barata) vs LiDAR (precisión). Construcción = 13% del PIB mundial." },

  { id:"vdc", titulo:"Virtual Design and Construction (VDC): revisión, actualización y discusión",
    autores:"Del Savio, Fischer et al.", anio:"2022", fuente:"Applied Sciences 12, 12178 · MDPI", cat:"Marco & revisión", aec:true, verify:true,
    metric:"+1%/año", metricLbl:"crecimiento de productividad en construcción (1995–2014) vs 2.8% economía y 3.6% manufactura",
    hallazgo:"La construcción aporta el 13% del PIB mundial pero su productividad apenas creció 1% al año durante dos décadas. El marco VDC organiza la respuesta: BIM + ICE (sesiones colaborativas) + gestión de producción + métricas.",
    detalle:"Revisión que actualiza el marco VDC de Stanford CIFE. Útil como columna metodológica para integrar IA: sin objetivos, métricas y procesos claros, la tecnología no mueve la aguja de productividad." },

  { id:"ml-bim", titulo:"Aplicación de IA y Machine Learning para BIM: una revisión",
    autores:"Revisión sistemática", anio:"2023", fuente:"Int. J. for Simulation & Multidisciplinary Design Optimization", cat:"BIM & LLM", aec:true,
    metric:"Review", metricLbl:"revisión sistemática de IA/ML aplicado al ciclo de vida BIM",
    hallazgo:"La IA y el ML ya tocan todo el ciclo BIM: diseño generativo, eficiencia energética, detección de interferencias, mantenimiento predictivo y gestión del edificio en operación.",
    detalle:"Mapa de oportunidades: el BIM deja de ser un repositorio 3D y pasa a ser una base de datos sobre la que entrenar y operar modelos predictivos a lo largo de toda la vida del activo." },

  { id:"ai-pm", titulo:"Inteligencia Artificial en la Gestión de Proyectos",
    autores:"Monografía", anio:"2024", fuente:"Computational Intelligence (Springer)", cat:"Gestión de proyectos", aec:true,
    metric:"PM + IA", metricLbl:"IA aplicada a riesgo, cronograma, costo y decisiones",
    hallazgo:"La IA entra al núcleo de la gestión de proyectos: estima riesgos, ajusta cronogramas, predice sobrecostos y apoya decisiones con datos en lugar de intuición.",
    detalle:"El rol del PM no desaparece: se eleva. La IA prepara el análisis y los escenarios; el gestor pone el criterio, negocia y decide con responsabilidad." },

  { id:"pmi-community", titulo:"Community-Led AI and Project Management Report",
    autores:"PMI Sweden + capítulos globales", anio:"2025", fuente:"Encuesta global liderada por capítulos PMI", cat:"Gestión de proyectos", aec:false, verify:true,
    metric:"300", metricLbl:"capítulos PMI del mundo invitados a una encuesta global sobre IA en PM",
    hallazgo:"La IA generativa ya es tema central de la profesión: los gestores de proyecto la están adoptando para reportes, comunicación, análisis de riesgo y planificación, con una mezcla de entusiasmo y cautela.",
    detalle:"Estudio coral entre capítulos PMI de muchos países. Señal clave: la adopción es desigual y depende más de cultura y formación que de la tecnología disponible." },

  { id:"ai-civil", titulo:"Artificial Intelligence (AI) Applied in Civil Engineering",
    autores:"Compendio editado", anio:"2023", fuente:"Applied Sciences / CivilEng / AI / Symmetry / Mathematics (MDPI)", cat:"Marco & revisión", aec:true,
    metric:"700 pp", metricLbl:"compendio de aplicaciones de IA en ingeniería civil",
    hallazgo:"Panorama amplio de IA en ingeniería civil: análisis estructural, geotecnia, hidráulica, transporte, materiales y monitoreo de salud estructural (SHM).",
    detalle:"Reúne decenas de estudios revisados por pares. Útil como mapa de “dónde ya funciona la IA” en el sector, con casos concretos por disciplina." }
];
