# 07 · Benchmarks: guía avanzada

> Para cada uno: qué mide · qué NO mide · por qué importa · cómo se interpreta · cómo
> puede engañar · ejemplo simple · cuándo usarlo para elegir modelo · público · frase corta.
> **Los números cambian; aprende qué mide cada uno.** Crítica detallada en `ai-benchmark-criticism.md`.

---

### Conocimiento y razonamiento

**1. MMLU** — 57 materias de opción múltiple (conocimiento general).
- No mide: razonamiento profundo, tareas reales, actualidad.
- Importa: histórico estándar de "cultura general" del modelo. Hoy **saturado** (todos altos).
- Engaña: contaminación de datos (preguntas en el entrenamiento).
- Frase: "MMLU es el examen de cultura general; ya casi todos lo aprueban."

**2. MMLU-Pro** — versión más difícil y robusta de MMLU (más opciones, más razonamiento).
- Importa: discrimina mejor entre modelos top que MMLU.
- Usar: comparación general más actual que MMLU.
- Frase: "MMLU-Pro es MMLU con el examen subido de dificultad."

**3. GPQA (Diamond)** — preguntas de ciencia nivel PhD "google-proof".
- No mide: aplicabilidad de negocio.
- Importa: razonamiento experto real, difícil de memorizar.
- Frase: "GPQA: preguntas que ni googleando resuelves."

**4. MMMU** — razonamiento **multimodal** (texto + imágenes, nivel universitario).
- Importa: capacidad de "ver y razonar" (diagramas, figuras).
- AEC: relevante para interpretar planos/figuras.
- Frase: "MMMU mide si el modelo entiende lo que ve, no solo lo que lee."

**5. Humanity's Last Exam (HLE)** — examen extremadamente difícil, multidisciplina, frontera.
- Importa: techo actual de dificultad; mide cuánto falta.
- Engaña: scores bajos en todos → poco discriminante aún para uso práctico.
- Frase: "HLE mide lo que la IA todavía NO sabe."

### Matemáticas

**6. AIME** — olimpiada de matemática (problemas difíciles).
- Importa: razonamiento matemático multi-paso; favorece reasoning models.
- Frase: "AIME separa a los modelos que 'piensan' de los que 'responden'."

**7. MATH** — problemas de competencia matemática.
- Similar a AIME; ya bastante alto en modelos top.

**8. GSM8K** — problemas de matemática escolar (palabras).
- **Saturado** (casi resuelto). Útil histórico, ya no discrimina.
- Frase: "GSM8K es matemática de colegio; ya es tarea fácil."

**9. FrontierMath** — problemas matemáticos **muy** difíciles (research-level), diseñados por matemáticos.
- Importa: techo real de matemática avanzada; resistente a memorización.
- Frase: "FrontierMath: matemática que reta a matemáticos profesionales."

### Código

**10. HumanEval** — generar funciones que pasen tests unitarios.
- **Saturado**; histórico. No mide ingeniería real (multi-archivo, contexto).
- Frase: "HumanEval mide funciones sueltas, no software real."

**11. LiveCodeBench** — problemas de código **nuevos/recientes** (anti-contaminación).
- Importa: evita memorización (problemas posteriores al corte).
- Frase: "LiveCodeBench usa problemas que el modelo no pudo memorizar."

**12. SWE-bench (y SWE-bench Verified)** — resolver **issues reales de GitHub** (patch que pasa tests).
- No mide: diseño de arquitectura, criterio de producto.
- Importa: **mejor señal de coding agents** porque ejecuta tests reales. "Verified" = 500 casos revisados por humanos.
- Engaña: depende del andamiaje (scaffold/agente), no solo del modelo.
- Frase: "SWE-bench mide si el agente arregla bugs reales, no si recita código."

**13. SWE-bench Pro / Terminal-Bench** — variantes más duras / tareas en terminal.
- Importa: tareas agentivas más realistas y difíciles.

### Agentes y tool use

**14. BFCL (Berkeley Function-Calling Leaderboard)** — qué tan bien el modelo **llama funciones/herramientas**.
- Importa: base de los agentes (tool use correcto).
- Frase: "BFCL mide si el modelo sabe usar herramientas, no solo hablar."

**15. Tau-bench (τ-bench)** — agentes en tareas de **servicio al cliente/negocio** con herramientas y reglas.
- Importa: fiabilidad agentic en escenarios tipo empresa.
- Frase: "Tau-bench: ¿el agente cumple reglas de negocio sin romperlas?"

### Preferencia humana y compuestos

**16. LMArena / Chatbot Arena** — ranking por **votos humanos** (A/B ciego), Elo.
- No mide: exactitud técnica ni costo; mide **preferencia**.
- Importa: señal de "se siente mejor" para usuarios reales.
- Engaña: favorece respuestas agradables/largas; gameable; estilo ≠ verdad.
- Frase: "Arena mide qué respuesta gusta más, no cuál es más correcta."

**17. Artificial Analysis Intelligence Index** — **índice compuesto** (MMLU-Pro, GPQA, AIME, LiveCodeBench, etc.) + datos de costo/velocidad.
- Importa: una nota agregada + tradeoffs costo/latencia en un solo lugar.
- Usar: comparación rápida multi-dimensión.
- Frase: "Artificial Analysis junta capacidad, costo y velocidad en un tablero."

**18. HELM (Stanford CRFM)** — evaluación **holística** y transparente (múltiples métricas/escenarios).
- Importa: rigor académico, más allá de un solo número.
- Frase: "HELM mide muchas cosas, no una sola nota."

**19. ARC-AGI** — razonamiento **abstracto/fluido** (patrones nuevos), test de "generalización".
- No mide: conocimiento; mide adaptación a problemas no vistos.
- Importa: proxy de "inteligencia fluida" (difícil para LLMs).
- Frase: "ARC-AGI mide si el modelo razona de verdad o solo memoriza."

### Recuperación / RAG / embeddings

**20. MTEB** — benchmark de **embeddings** (búsqueda, clustering, clasificación).
- Importa: elegir el modelo de embeddings para tu RAG.
- Frase: "MTEB elige el motor de búsqueda semántica de tu RAG."

**21. RAG faithfulness benchmarks** (p. ej. RAGAS y similares) — mide si la respuesta es **fiel a las fuentes** (sin alucinar).
- Importa: clave para RAG empresarial (trazabilidad).
- Frase: "Mide si el RAG cita bien o inventa."

### Seguridad, costo, latencia

**22. Safety benchmarks** (jailbreak, toxicidad, prompt injection) — robustez/seguridad.
- Importa: criterio de compra en enterprise/regulados.
- Frase: "Mide si el modelo aguanta ataques, no solo si responde bonito."

**23. Latency / cost benchmarks** (TTFT, tokens/seg, $/Mtok) — **velocidad y costo**.
- Importa: a veces decide más que la capacidad (UX y factura).
- Frase: "El benchmark que tu CFO entiende: costo y velocidad."

**24. Tu propia eval (custom)** — 20–50 casos REALES de tu negocio con respuesta esperada.
- **El más importante de todos.** Mide lo que a ti te importa.
- Frase: "El único benchmark que importa de verdad es el de tus tareas."

---

## Cómo usar benchmarks para elegir modelo (atajo)
1. **Tipo de tarea:** razonamiento (GPQA/AIME) · código (SWE-bench/LiveCodeBench) · agentes (BFCL/τ-bench) · multimodal (MMMU) · RAG (MTEB/faithfulness).
2. **Compuesto + tradeoffs:** Artificial Analysis (capacidad × costo × velocidad).
3. **Preferencia real:** LMArena (con cautela).
4. **Decisión final:** **tu eval** con casos reales + costo por tarea (ver `ai-cost-per-task.md`).

## Tabla mental "qué mide qué"
| Quiero medir… | Mira… |
|---|---|
| Cultura general | MMLU-Pro |
| Razonamiento experto | GPQA, HLE |
| Matemática | AIME, FrontierMath |
| Código real | SWE-bench Verified, LiveCodeBench |
| Tool use / agentes | BFCL, τ-bench |
| Multimodal | MMMU |
| Embeddings/RAG | MTEB, faithfulness |
| Preferencia humana | LMArena |
| Compuesto + costo | Artificial Analysis |
| Rigor holístico | HELM |
| Generalización | ARC-AGI |
| Seguridad | safety benchmarks |
| Costo/velocidad | latency/cost |
| **Tu negocio** | **tu eval** |

### Fuentes
Stanford CRFM/HELM · Artificial Analysis · LMArena · SWE-bench (princeton-nlp) · ARC Prize ·
Epoch AI/FrontierMath · MTEB (HuggingFace) · BFCL (Berkeley). Verificar scores a la fecha.
