# 01 · Estado global de la IA (mid-2026)

> Foto estratégica del momento. Datos volátiles marcados 🔴/🟡; estructurales ✅.
> Consulta: 2026-06-28.

---

## 10 tesis centrales

1. **La ventaja ya no es el modelo; es el sistema.** El acceso a modelos de frontera se
   commoditiza. La diferencia la hacen datos, contexto, herramientas, evals y gobierno.
2. **El costo de inteligencia se desploma.** Lo que costaba caro hace dos años hoy es casi
   gratis: la frontera se mueve hacia arriba y el "suelo" de calidad sube para todos.
3. **Open-weight alcanzó a closed en lo práctico.** Para la mayoría de tareas de negocio,
   un modelo abierto "suficientemente bueno" + buen sistema gana a "el mejor modelo".
4. **China dejó de seguir y empezó a marcar ritmo en open-weight.** DeepSeek, Qwen, GLM
   (Zhipu/Z.ai), Kimi (Moonshot) lideran el frente abierto con precios permanentemente bajos.
5. **Reasoning models cambiaron la economía.** "Pensar más en inferencia" (test-time compute)
   sube calidad pero también costo/latencia: el error caro de 2026 es enrutar TODO a un modelo de razonamiento.
6. **Los agentes pasaron de demo a producción… con asterisco.** Hay adopción real, pero el
   cuello de botella #1 es la **calidad/fiabilidad**, no la capacidad del modelo.
7. **Multimodal es el default.** Texto+imagen+audio+(video/PDF) ya no es feature premium; es base.
8. **El software es el primer dominio "agéntico" maduro.** Coding agents son el caso con
   mejor señal medible (SWE-bench) y mayor disrupción de flujo de trabajo.
9. **El cuello de botella físico es chips + energía + data centers.** La política industrial
   (export controls, capex en cómputo) es ahora variable competitiva de primer orden.
10. **La regulación se volvió operativa.** Con el EU AI Act en fase de enforcement, "gobernanza
    de IA" deja de ser teoría y se vuelve requisito comercial.

---

## 10 datos clave

1. ✅ El costo de inferencia para un sistema nivel **GPT-3.5 cayó ~280×** entre nov-2022 y
   oct-2024 ($20 → **$0.07 por millón de tokens** en MMLU-equivalente). *(Stanford AI Index 2025)*
2. ✅ A nivel hardware, **costo −30%/año** y **eficiencia energética +40%/año**. *(AI Index 2025)*
3. ✅ La **brecha open vs. closed** se redujo de **~8% a ~1.7%** en un año en ciertos benchmarks. *(AI Index 2025)*
4. ✅ **Inversión corporativa en IA 2024: ~$252.3 B** (+26% interanual). *(AI Index 2025)*
5. ✅ **78% de organizaciones** usan IA (vs. 55% en 2023). *(AI Index 2025)*
6. ✅ En un año, saltos de **+18.8 (MMMU), +48.9 (GPQA), +67.3 (SWE-bench)** puntos. *(AI Index 2025)*
7. 🟡 Mid-2026, la frontera está **clusterizada**: varios modelos top dentro de pocos puntos
   (Claude Opus 4.8, Gemini 3.1 Pro, GPT-5.5, Claude Opus 4.7). *(Artificial Analysis / LMArena, jun-2026)* 🔴 verificar lista exacta.
8. 🟡 El **mejor open-weight** lo lidera un lab chino (GLM-5.2, Z.ai/Zhipu) en el índice de
   Artificial Analysis. *(jun-2026)* 🔴 verificar.
9. 🟡 **Gartner:** ~**40% de apps empresariales** incluirán agentes task-specific en 2026
   (desde <5% en 2025). 🔴 verificar cifra/fecha en fuente Gartner.
10. 🟡 **~57%** de equipos encuestados ya tienen **agentes en producción**; la **calidad** es
    el bloqueador #1. *(LangChain State of Agents, ~2026)* 🔴 verificar.

---

## 10 señales de mercado

1. Precios de API que **bajan de forma permanente** (no promoción) — guerra de costos liderada por labs chinos.
2. Labs lanzando **familias por nivel** (nano/mini/flash/pro/max) para separar costo de capacidad.
3. **Routers** que eligen modelo/esfuerzo por dificultad de la tarea (señal: la economía manda).
4. Explosión de **coding agents** y herramientas de "app building" (V0, Lovable, Replit, Cursor).
5. **MCP** y tool-use estandarizándose: la IA "se conecta" a tus sistemas.
6. Consolidación nube–lab: distribución vía hyperscalers (Azure/AWS/Google Cloud).
7. **Export controls** y geopolítica de chips moldeando qué modelos están disponibles dónde.
8. Aumento de **evals propias** en empresas (no confiar solo en benchmarks públicos).
9. **Seguridad/gobernanza** como criterio de compra (no solo capacidad).
10. Movimiento de "asistentes" → "agentes" → "fuerza laboral digital" en el marketing de big tech.

---

## 10 implicancias para empresas

1. No compres "el mejor modelo": compra **el adecuado por tarea, costo y riesgo**.
2. Primero **ordena tus datos**; sin eso, la IA amplifica el desorden.
3. Mide **costo por tarea**, no por token (ver `ai-cost-per-task.md`).
4. Empieza por **quick wins informacionales** (actas, reportes, RFIs).
5. Diseña **human-in-the-loop** para acciones externas/irreversibles.
6. Evita el **"piloto eterno"**: define métrica y fecha de decisión.
7. Combina herramientas por **capacidad** (no una sola marca).
8. Prepara **gobernanza** (datos, permisos, trazabilidad) — ya es requisito legal en la UE.
9. Considera **open-weight/self-host** para costo, privacidad y control.
10. Tu ventaja real: **procesos listos para agentes** (documentados, con datos).

---

## 10 implicancias para educación

1. El valor docente migra de "transmitir info" a **criterio, curaduría y práctica**.
2. **Microlearning + IA tutor** (ruta + analogías + quiz + feedback) escala el aprendizaje.
3. La evaluación se rediseña: menos memoria, más **aplicación verificable** (evidencias).
4. Riesgo de **dependencia pasiva**: enseña a validar, no a copiar.
5. **Alfabetización en IA** es obligación (y, en la UE, requisito legal desde feb-2025).
6. Contenido perece rápido: enseña **frameworks y criterio**, no apps de moda.
7. Oportunidad de **certificación de skills verificables** (caso AECODE).
8. Feedback asistido por IA + rúbrica = escala sin perder calidad docente.
9. Los estudiantes ya usan IA: mejor **integrarla con criterio** que prohibirla.
10. Diferénciate enseñando lo que los modelos **no** hacen: juicio, contexto, ética, oficio.

---

## 10 implicancias para AEC

1. La IA no levanta muros: aporta en la **capa informacional** (texto, datos, imágenes).
2. **96% de la data de obra no se usa** 🟡 (ver `ai-facts.md`): el combustible está; falta gobierno + RAG.
3. Primer ROI: **actas, reportes y RFIs** (informacional, repetible, medible).
4. **Computer vision** ya es viable en obra (EPP, grietas, avance) con edge AI.
5. **RAG sobre BEP/normas/contratos** da respuestas con fuente (trazabilidad).
6. La responsabilidad técnica/normativa **sigue siendo humana** (diseño, estructura).
7. Ordena el proceso **antes** de automatizar (si está mal, la IA lo hace más rápido… pero peor).
8. La adopción avanza sobre **confianza** (contrato relacional) más que sobre tecnología.
9. Open-weight + self-host ayuda con **confidencialidad** de datos de proyecto.
10. Oportunidad: **oficina técnica agéntica** (metrados, observaciones, valorizaciones) bajo gobierno.

---

## 10 ideas de contenido para vender autoridad

1. "El modelo ya no importa: importa el sistema" — explica con datos de caída de costos.
2. "Por qué el #1 de los benchmarks NO es la mejor IA para tu empresa."
3. "China está ganando el open-weight: qué significa para tu pyme."
4. "Costo por token vs. costo por tarea: el error que infla tu factura de IA."
5. "Reasoning models: cuándo pagar por 'pensar' y cuándo no."
6. "Demo vs. piloto vs. producción: dónde mueren los proyectos de IA."
7. "Tu ventaja no será tener agentes; será tener procesos listos para agentes."
8. "Las 6 preguntas que hago antes de elegir cualquier herramienta de IA."
9. "IA en obra: 3 quick wins con ROI medible en 4 semanas."
10. "El EU AI Act ya está en enforcement: la gobernanza de IA es ahora un argumento de venta."

---

### Fuentes
- Stanford HAI — AI Index 2025: https://hai.stanford.edu/ai-index/2025-ai-index-report
- AI Index 2025 (10 charts): https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts
- Artificial Analysis (leaderboards): https://artificialanalysis.ai/
- LMArena / Arena: https://arena.ai/leaderboard
- LangChain — State of Agents: https://www.langchain.com/state-of-agent-engineering
- Gartner agent prediction (verificar): vía https://joget.com/ai-agent-adoption-in-2026-what-the-analysts-data-shows/
