# 20 · Glosario maestro

> Consolidado técnico + estratégico + comercial. (El glosario base de la app vive en
> `data/db.js` y los 70 conceptos en `data/conceptos.js`; esto suma términos avanzados.)

## Modelos y entrenamiento
- **IA / ML / DL:** paraguas → aprende de datos → redes profundas (círculos concéntricos).
- **LLM:** modelo de lenguaje grande; predice el siguiente token.
- **Foundation model:** modelo base pre-entrenado, adaptable a muchas tareas.
- **Transformer:** arquitectura de atención; base de los LLMs.
- **Parámetros/pesos:** valores aprendidos; "conocimiento" del modelo.
- **Scaling laws:** más datos/cómputo/parámetros → mejor, de forma predecible.
- **Pre-training / post-training:** entrenamiento base vs. ajuste (instrucción/alineamiento).
- **Fine-tuning / LoRA / PEFT:** reentrenar comportamiento; versión eficiente con adaptadores.
- **Distillation:** modelo pequeño imita a uno grande.
- **Quantization:** bajar precisión numérica para que pese/corra menos.
- **MoE (Mixture of Experts):** activa solo expertos necesarios por token.
- **Dense model:** usa todos los parámetros siempre.
- **Synthetic data:** datos generados por IA para entrenar/evaluar.
- **Distributed training:** entrenar en miles de GPUs en paralelo.

## Inferencia y uso
- **Inferencia:** usar el modelo ya entrenado.
- **Token:** unidad de texto; unidad de costo/contexto.
- **Context window:** info que el modelo "ve" a la vez.
- **Reasoning model / test-time compute:** "pensar" más en inferencia (thinking tokens).
- **Temperatura:** creatividad vs. determinismo de la salida.
- **Few-shot:** dar ejemplos en el prompt.
- **System instruction:** reglas base permanentes del asistente.
- **Prompt caching:** reutilizar contexto fijo más barato.
- **Latency / TTFT:** tiempo a la respuesta / primer token.
- **Throughput:** tokens/seg.
- **Inference optimization:** batching, KV-cache, speculative decoding, cuantización.

## Datos, búsqueda y memoria
- **Corpus:** datos de entrenamiento/alimentación.
- **Embedding:** vector de significado; búsqueda semántica.
- **Vector database:** BD que busca por similitud.
- **RAG:** recuperar tus docs y responder con fuente.
- **Retrieval / reranking:** traer fragmentos / reordenarlos por relevancia.
- **Chunking:** trocear documentos para indexar.
- **Faithfulness:** fidelidad de la respuesta a las fuentes (anti-alucinación).
- **Long-context failure ("lost in the middle"):** olvido de info en el medio del contexto.
- **Memoria:** lo que el sistema recuerda entre tareas.

## Agentes y herramientas
- **Agente:** objetivo + herramientas + memoria + permisos que ejecuta pasos.
- **Multi-agente:** varios agentes coordinados.
- **Tool use / function calling:** el modelo llama funciones/APIs.
- **MCP:** estándar para conectar modelos con herramientas/datos.
- **Orquestación:** coordinar pasos/herramientas/agentes (n8n, etc.).
- **Human-in-the-loop (HITL):** persona aprueba pasos críticos.
- **Gatillador (trigger):** evento que inicia un flujo.

## Alineamiento y seguridad
- **RLHF / RLAIF:** ajuste con feedback humano / de IA.
- **Constitutional AI:** alineamiento por principios (Anthropic).
- **Guardrails:** filtros de entrada/salida.
- **Red teaming:** ataque ético para hallar fallas.
- **Jailbreak:** burlar las restricciones del modelo.
- **Prompt injection:** instrucciones maliciosas ocultas en datos/web.
- **Data exfiltration:** fuga de datos vía el modelo/agente.
- **Hallucination:** salida plausible pero falsa.
- **Alignment:** que el modelo haga lo que queremos y sea seguro.

## Evaluación y gobierno
- **Benchmark:** examen estandarizado (no verdad absoluta).
- **Eval / eval harness:** prueba sistemática (idealmente con tus casos).
- **Data contamination:** test ya visto en el entrenamiento → score inflado.
- **Model card / system card:** ficha del modelo / informe de seguridad del sistema.
- **Governance:** reglas de datos, permisos, trazabilidad, cumplimiento.
- **Observability:** monitoreo de costo, calidad, errores en producción.

## Negocio, mercado e infraestructura
- **Capex / Opex:** inversión de capital vs. gasto operativo (IA en nube = Opex).
- **Costo por tarea:** costo real de completar una tarea (no por token).
- **ROI:** (horas ahorradas × costo hora − costo IA) / costo IA.
- **Throughput (negocio):** lo que el sistema entrega de verdad.
- **Moat:** ventaja difícil de copiar (marca, distribución, infra, datos, gobernanza).
- **Hyperscaler:** gran nube (AWS, Azure, Google Cloud).
- **Open-weight vs. closed vs. open-source:** pesos liberados / solo API / código+pesos+datos abiertos.
- **Export controls:** restricciones a la exportación de chips/modelos (geopolítica).
- **Sovereignty (soberanía de IA):** control nacional/empresarial sobre modelos y datos.
- **Edge AI:** IA en el dispositivo/borde, sin nube.
- **GPU / TPU / NPU / Ascend / Trainium:** aceleradores de cómputo (NVIDIA / Google / genérico / Huawei / Amazon).
- **AI-first / AI-native:** mentalidad / arquitectura con IA en el núcleo.

## Paradigmas
- **IA generativa:** crea contenido.
- **IA predictiva:** estima valor/clase.
- **IA agéntica:** persigue objetivos ejecutando pasos.
- **Copiloto:** asiste sin reemplazar.
- **Computer vision:** interpreta imágenes/video.
- **Multimodal:** texto+imagen+audio+video.
