# 10 · Conceptos técnicos top 1%

> Avanzados pero enseñables. Formato compacto: **Def. precisa · Simple · Empresa · AEC · Error común · Frase.**
> Los 70 conceptos base (con analogía + ejemplo) viven en la app (`data/conceptos.js`).
> Aquí van los **avanzados/estratégicos** que te separan del promedio.

---

**1. Scaling laws** — Def: relación predecible entre más datos/parámetros/cómputo y menor pérdida (mejor capacidad). · Simple: "más grande y más datos = mejor, de forma medible". · Empresa: explica por qué la frontera costó tanto capex. · AEC: justifica usar modelos ya entrenados, no entrenar el tuyo. · Error: creer que escala infinitamente sin rendimientos decrecientes. · Frase: "Escalar funcionó… hasta que el razonamiento en inferencia abrió otra palanca."

**2. Transformer** — Def: arquitectura basada en atención que procesa secuencias en paralelo. · Simple: el motor de los LLMs. · Empresa: base común de todos los proveedores. · AEC: lo que permite leer un contrato largo y relacionar cláusulas. · Error: pensar que "entiende"; reconoce patrones. · Frase: "Un paper de 2017 es el cimiento de toda la IA de hoy."

**3. Attention** — Def: mecanismo que pondera qué partes del contexto importan para cada predicción. · Simple: subrayar lo relevante antes de responder. · Empresa: por qué el contexto ordenado mejora el resultado. · AEC: relaciona "plazo" del inicio con "penalidad" de la pág. 40. · Error: saturar el contexto creyendo que "lee todo igual". · Frase: "La atención decide a qué le hace caso el modelo."

**4. Tokens** — Def: unidades de texto que procesa el modelo. · Simple: ingredientes cortados. · Empresa: unidad de costo/latencia. · AEC: pegar PDFs enormes gasta tokens y empeora. · Error: confundir tokens con palabras. · Frase: "Pagas y piensas en tokens, no en palabras."

**5. Embeddings** — Def: vector que representa el significado de un texto/imagen. · Simple: mapa donde lo parecido queda cerca. · Empresa: base de la búsqueda semántica. · AEC: buscar "multa" encuentra "penalidad". · Error: usar embeddings malos y culpar al LLM del RAG. · Frase: "Embeddings = buscar por idea, no por palabra."

**6. Vector database** — Def: BD que indexa embeddings y busca por similitud. · Simple: archivador por significado. · Empresa: memoria de un asistente RAG. · AEC: índice de RFIs/normas. · Error: mal chunking → mala recuperación. · Frase: "El RAG es tan bueno como su índice."

**7. RAG** — Def: recuperar fragmentos relevantes y generar con ellos (con fuente). · Simple: consultar la biblioteca antes de responder. · Empresa: responder sobre tus documentos sin reentrenar. · AEC: asistente de BEP/normas con cita. · Error: creer que RAG elimina alucinaciones (las reduce). · Frase: "Los agentes útiles no piensan más; leen mejor."

**8. Fine-tuning** — Def: reentrenar un modelo con tus ejemplos para ajustar comportamiento/estilo. · Simple: entrenar al empleado en el estilo de la casa. · Empresa: formato/tono/tarea muy específica. · AEC: que siempre redacte en tu formato de informe. · Error: usarlo para "agregar conocimiento" (eso es RAG). · Frase: "RAG = conocimiento; fine-tuning = comportamiento."

**9. LoRA / PEFT** — Def: fine-tuning eficiente que ajusta pocos parámetros (adaptadores) en vez de todo el modelo. · Simple: parche barato en vez de reentrenar todo. · Empresa: personalizar a bajo costo. · AEC: adaptar un open-weight a tu nomenclatura. · Error: creer que necesitas reentrenar el modelo completo. · Frase: "LoRA: personalizar sin pagar el entrenamiento entero."

**10. Distillation** — Def: entrenar un modelo pequeño para imitar a uno grande. · Simple: el aprendiz que copia al maestro. · Empresa: modelos chicos baratos casi tan buenos. · AEC: modelo ligero para edge en obra. · Error: esperar capacidad idéntica al maestro. · Frase: "Destilar = meter al genio en una lámpara más barata."

**11. Quantization** — Def: reducir la precisión numérica (p. ej. de 16 a 4 bits) para que el modelo pese/corra menos. · Simple: comprimir el modelo. · Empresa: servir más barato / en menos hardware. · AEC: correr en dispositivos de obra. · Error: cuantizar de más y perder calidad sin medir. · Frase: "Cuantizar: el modelo cabe en menos, casi igual de listo."

**12. Mixture of Experts (MoE)** — Def: el modelo activa solo unos "expertos" por token (no toda la red). · Simple: convocar solo a los especialistas necesarios. · Empresa: más capacidad por costo de inferencia. · AEC: por qué algunos modelos grandes son baratos de servir. · Error: comparar "parámetros totales" vs. "activos". · Frase: "MoE: un panel de expertos que solo despierta a quien hace falta."

**13. Dense models** — Def: usan todos sus parámetros en cada paso (opuesto a MoE). · Simple: todo el cerebro trabaja siempre. · Empresa: simples y predecibles, a veces más caros. · Error: asumir que dense siempre es mejor/peor que MoE (depende). · Frase: "Dense piensa con todo; MoE con lo necesario."

**14. Reasoning models** — Def: generan pasos intermedios ("thinking") antes de responder (test-time compute). · Simple: dar tiempo de borrador antes de la respuesta. · Empresa: mejores en mate/código/planificación, más caros/lentos. · AEC: análisis de cronograma o cálculo complejo. · Error: enrutar TODO a un reasoning model. · Frase: "En 2026 ya no solo eliges el modelo; eliges cuánto piensa."

**15. Test-time compute** — Def: gastar más cómputo en inferencia para subir calidad. · Simple: pensar más cuando el problema es difícil. · Empresa: palanca de calidad sin reentrenar. · Error: pagarlo en tareas triviales. · Frase: "Comprar más 'pensamiento' por tarea, a demanda."

**16. Synthetic data** — Def: datos generados por IA para entrenar/evaluar otros modelos. · Simple: el modelo se hace sus propios ejercicios. · Empresa: cubrir casos raros sin datos reales. · AEC: simular observaciones para entrenar un clasificador. · Error: amplificar sesgos/errores (modelo entrenado en su propio ruido). · Frase: "Datos sintéticos: útiles… si no se vuelven un eco de sí mismos."

**17. RLHF** — Def: ajuste con retroalimentación humana (preferencias) para alinear respuestas. · Simple: enseñarle qué respuestas preferimos. · Empresa: por qué los chats "se sienten" útiles/seguros. · Error: confundir "preferido" con "correcto". · Frase: "RLHF afina el gusto, no garantiza la verdad."

**18. RLAIF / Constitutional AI** — Def: alineamiento usando feedback de IA guiado por principios/"constitución" (enfoque de Anthropic). · Simple: enseñarle a autocorregirse con reglas. · Empresa: escala el alineamiento sin tanto humano. · Error: creer que elimina el juicio humano. · Frase: "Una constitución para que la IA se corrija sola."

**19. Tool use / function calling** — Def: el modelo decide llamar funciones/APIs y usa el resultado. · Simple: saber cuándo usar la calculadora o el correo. · Empresa: convierte un modelo que habla en uno que hace. · AEC: consultar clima y agendar la vaciada. · Error: dar permisos amplios sin validación. · Frase: "Tool use: de hablar a hacer."

**20. MCP (Model Context Protocol)** — Def: estándar abierto para conectar modelos con herramientas/datos. · Simple: enchufe universal IA↔tus sistemas. · Empresa: menos integraciones a medida. · AEC: conectar el agente al CDE/Drive/GitHub. · Error: exponer todo sin permisos finos. · Frase: "MCP: el USB de los agentes."

**21. Agents** — Def: sistema con objetivo, herramientas, memoria y permisos que ejecuta pasos. · Simple: practicante digital con checklist. · Empresa: automatiza flujos multi-paso. · AEC: agente de RFIs. · Error: autonomía sin human-in-the-loop. · Frase: "Un agente reemplaza diez tareas, no a la persona."

**22. Multi-agent systems** — Def: varios agentes especializados coordinados por un orquestador. · Simple: un equipo con roles. · Empresa: procesos extremo a extremo. · Error: multiplicar agentes antes de probar uno. · Frase: "Primero un agente que funcione; luego el equipo."

**23. Guardrails** — Def: reglas/filtros que limitan entradas y salidas del modelo. · Simple: barreras de seguridad. · Empresa: evitar fugas, toxicidad, acciones indebidas. · AEC: impedir que el agente envíe sin aprobar. · Error: confiar solo en el prompt como guardrail. · Frase: "El prompt no es un control de seguridad."

**24. Red teaming** — Def: atacar deliberadamente el sistema para hallar fallas/jailbreaks. · Simple: contratar hackers éticos del modelo. · Empresa: requisito antes de producción en regulados. · Error: lanzar sin probar ataques. · Frase: "Si no lo atacas tú, lo atacará otro."

**25. Model card** — Def: documento que describe capacidades, límites, datos y usos previstos de un modelo. · Simple: la ficha técnica. · Empresa: base para decidir y auditar. · Error: elegir modelo sin leerla. · Frase: "Antes de elegir, lee la ficha."

**26. System card** — Def: documento sobre el **sistema** desplegado (riesgos, evals de seguridad, mitigaciones). · Simple: el informe de seguridad del producto. · Empresa: due diligence de proveedores. · Frase: "La system card te dice qué puede salir mal."

**27. Eval harness** — Def: marco para correr evals de forma sistemática y reproducible. · Simple: el "banco de pruebas" del modelo. · Empresa: medir mejoras de forma confiable. · Error: comparar a ojo sin harness. · Frase: "Sin harness, no sabes si mejoraste o tuviste suerte."

**28. Data contamination** — Def: el test ya estaba en el entrenamiento → score inflado. · Simple: copió el examen. · Empresa: por qué desconfiar de scores altos. · Error: citar benchmarks contaminados. · Frase: "Un 99% puede significar que memorizó el examen."

**29. Prompt injection** — Def: instrucciones maliciosas escondidas en datos/web que secuestran al modelo. · Simple: un papelito con órdenes falsas que el modelo obedece. · Empresa: riesgo #1 de agentes con acceso a web/datos. · AEC: PDF con texto oculto que altera el análisis. · Error: confiar en contenido externo sin aislarlo. · Frase: "Prompt injection: el phishing de los agentes."

**30. Data exfiltration** — Def: filtrar datos sensibles vía el modelo/agente (a propósito o por descuido). · Simple: el agente "se lleva" información. · Empresa: por qué limitar qué datos entran y a dónde salen. · AEC: contratos/planos saliendo a un tercero. · Error: pegar datos confidenciales sin verificar el plan. · Frase: "Lo que entra al modelo puede salir."

**31. Context window** — Def: cuánta info "ve" el modelo a la vez. · Simple: el escritorio de trabajo. · Empresa: calidad > cantidad de contexto. · Error: volcar todo y esperar magia. · Frase: "Escritorio ordenado, mejores respuestas."

**32. Long-context failure modes** — Def: aun con ventanas enormes, el modelo "pierde" info en el medio ("lost in the middle"). · Simple: lee mucho pero recuerda los extremos. · Empresa: no asumas que 1M de tokens = perfecto recall. · AEC: no metas 500 págs y confíes ciegamente. · Error: reemplazar RAG por "meter todo al contexto". · Frase: "Más contexto no es mejor recuperación."

**33. Retrieval** — Def: traer los fragmentos relevantes para la consulta. · Simple: buscar antes de responder. · Empresa: corazón del RAG. · Frase: "Primero recuperar bien; luego generar."

**34. Reranking** — Def: reordenar los resultados recuperados por relevancia real (segundo filtro). · Simple: el editor que elige lo mejor de la búsqueda. · Empresa: sube la precisión del RAG notablemente. · Error: pasar al LLM todo lo recuperado sin reordenar. · Frase: "Rerank: del montón, lo que de verdad sirve."

**35. Semantic search** — Def: buscar por significado (embeddings) no por palabra exacta. · Simple: te entiende aunque uses sinónimos. · AEC: buscar conceptos en contratos. · Frase: "Buscar por idea, no por keyword."

**36. Latency (TTFT)** — Def: tiempo hasta el primer token / a la respuesta. · Simple: cuánto tarda en "arrancar". · Empresa: define la UX (no la factura). · Error: optimizar solo capacidad e ignorar latencia. · Frase: "Un genio lento igual frustra al usuario."

**37. Inference optimization** — Def: técnicas para servir más rápido/barato (batching, caching, KV-cache, speculative decoding, cuantización). · Simple: afinar el motor para gastar menos. · Empresa: bajar costo a escala. · Frase: "La capacidad la da el modelo; la economía, la inferencia."

**38. Edge AI** — Def: correr modelos en el dispositivo/borde (sin nube). · Simple: IA local, sin internet. · Empresa: privacidad, latencia, costo. · AEC: visión en obra con Jetson (sin subir todo). · Error: querer un modelo gigante en el borde. · Frase: "En obra, a veces el modelo va al dato, no al revés."

**39. Distributed training / clusters** — Def: entrenar repartiendo el cómputo en miles de GPUs. · Simple: muchos cerebros entrenando en paralelo. · Empresa: por qué la frontera es cara y geopolítica. · Frase: "Entrenar la frontera es un proyecto de infraestructura."

**40. Hallucination (repaso avanzado)** — Def: salida plausible pero falsa; intrínseca a cómo predice el modelo. · Simple: responde seguro aunque no sepa. · Empresa: por qué validar y citar es obligatorio. · AEC: norma/cifra inventada. · Error: tratar la salida como hecho sin fuente. · Frase: "Fluidez no es verdad."

---

## Para enseñar estos conceptos
- Usa 1 **analogía** + 1 ejemplo **empresa** + 1 ejemplo **AEC** por concepto.
- Agrúpalos en 4 bloques: **Modelos** (1–16) · **Alineamiento/uso** (17–24) · **Gobierno/seguridad** (25–30) · **RAG/infra** (31–40).
- Cierra cada bloque con una **frase memorable**.

### Fuentes
Papers en arXiv · model/system cards · docs de proveedores · HELM/AI Index. Conceptos
estructurales (✅); ejemplos ilustrativos.
