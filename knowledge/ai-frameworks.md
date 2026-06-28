# 11 · Frameworks que debo dominar

> 15 frameworks operativos. Cada uno: **objetivo · pasos · ejemplo · error común · resultado.**
> Son tu caja de herramientas para asesorar, vender y enseñar.

---

### 1. EVAL-FIT — Evaluar un modelo
- **Objetivo:** elegir el modelo correcto para una tarea.
- **Pasos:** (1) Define la tarea y el "éxito". (2) Reúne 20–50 casos reales con respuesta esperada. (3) Acota candidatos por benchmark del tipo de tarea. (4) Corre tu eval. (5) Cruza capacidad × costo/tarea × latencia × riesgo. (6) Decide y re-evalúa trimestral.
- **Ejemplo:** clasificar 10k tickets → small barato gana al "top".
- **Error:** elegir por el #1 del ranking global.
- **Resultado:** modelo justificado con datos propios.

### 2. TASK-MATCH — Elegir herramienta IA
- **Objetivo:** mapear tarea → herramienta.
- **Pasos:** (1) ¿Generar, predecir o ejecutar? (2) ¿Datos propios? → RAG/NotebookLM. (3) ¿Conectado a Google/Office? (4) ¿Privacidad/costo? → open/self-host. (5) ¿Una vez o repetible? → GPT/asistente guardado. (6) Valida con un caso real.
- **Error:** una sola marca para todo.
- **Resultado:** stack por capacidad (ver mapa en la app).

### 3. RICCF — Diseñar prompts
- **Objetivo:** prompts confiables.
- **Pasos:** **R**ol · **I**ntención/objetivo · **C**ontexto · **C**riterios · **F**ormato (+ "pregunta si falta info").
- **Ejemplo:** "Actúa como planner… objetivo… contexto… criterios… formato HTML."
- **Error:** redacción bonita sin estructura.
- **Resultado:** salida usable a la primera. (Patrones en `data/recursos.js`.)

### 4. AGENT-6 — Diseñar un agente
- **Objetivo:** agente acotado y seguro.
- **Pasos (6 componentes):** Identidad/rol · Objetivo · Conocimiento (RAG) · Herramientas · Memoria · **Gobierno (human-in-the-loop)**.
- **Ejemplo:** agente de RFIs con aprobación antes de responder al cliente.
- **Error:** autonomía sin guardianes.
- **Resultado:** agente con caso claro y riesgo controlado.

### 5. RAG-7 — Implementar RAG
- **Objetivo:** responder con fuente, sin alucinar.
- **Pasos:** (1) Reúne y limpia docs. (2) Chunking semántico. (3) Embeddings (elige por MTEB). (4) Vector DB. (5) Retrieval + **rerank**. (6) Generación con cita. (7) Eval de **faithfulness**.
- **Error:** chunking pobre → respuestas malas (y culpar al LLM).
- **Resultado:** asistente con respuestas trazables.

### 6. AUTO-5 — Automatizar un proceso
- **Objetivo:** quitar trabajo repetitivo con control.
- **Pasos:** (1) Mapea el proceso actual. (2) Identifica disparador y resultado. (3) Marca dónde entra IA (criterio) vs. reglas. (4) Define aprobación humana. (5) Mide y monitorea.
- **Error:** automatizar un proceso roto.
- **Resultado:** flujo documentado, medible, auditable.

### 7. ROI-IA — Medir retorno
- **Objetivo:** probar valor antes de escalar.
- **Pasos:** (1) Métrica base (horas/errores hoy). (2) Piloto 4 sem. (3) Mide después. (4) `ROI = (horas_ahorradas×costo_hora − costo_IA)/costo_IA`. (5) Decide escalar/parar.
- **Error:** piloto sin métrica → "piloto eterno".
- **Resultado:** decisión con evidencia.

### 8. RISK-AUDIT — Auditar riesgos
- **Objetivo:** desplegar sin sorpresas.
- **Pasos:** (1) ¿Qué datos entran? (clasifica sensibilidad). (2) ¿Qué pasa si se equivoca con confianza? (3) ¿Acciones externas/irreversibles? → HITL. (4) Prompt injection/exfiltration. (5) Trazabilidad/logs. (6) Cumplimiento (EU AI Act, etc.).
- **Error:** pensar el riesgo después del incidente.
- **Resultado:** matriz de riesgo + mitigaciones.

### 9. ADOPT-E — IA en empresa
- **Objetivo:** adopción real (no licencias sin uso).
- **Pasos:** (1) Gobierna datos. (2) Elige quick win medible. (3) Forma + acompaña. (4) Piloto. (5) Escala lo que probó valor. (6) Comunidad interna de práctica.
- **Error:** dar la herramienta y esperar adopción sola.
- **Resultado:** capacidad instalada, no shelfware.

### 10. AEC-AI — IA en construcción
- **Objetivo:** primer valor en obra/oficina técnica.
- **Pasos:** (1) Procesos informacionales repetitivos. (2) Ordena/gobierna datos. (3) RAG sobre BEP/normas/contratos. (4) CV para seguridad/avance. (5) Piloto medible. (6) HITL en lo crítico.
- **Error:** automatizar sin ordenar el proceso.
- **Resultado:** quick wins con ROI (actas, reportes, RFIs).

### 11. CONTENT-IA — Contenido de autoridad
- **Objetivo:** publicar valor consistente.
- **Pasos:** (1) Dato técnico (de `ai-facts.md`). (2) Tensión de negocio. (3) Ejemplo aplicado. (4) Insight contraintuitivo. (5) CTA. (Formato: hook → desarrollo → cierre.)
- **Error:** contenido genérico sin dato ni tensión.
- **Resultado:** posts/clases que generan autoridad.

### 12. RADAR-7 — Investigación IA semanal
- **Objetivo:** estar al día en 30–45 min/semana.
- **Pasos:** revisar (1) modelos/releases, (2) benchmarks, (3) precios/APIs, (4) papers, (5) big tech/China, (6) regulación/seguridad, (7) 1 cosa que probar. (Plantilla en `ai-weekly-radar-template.md`.)
- **Error:** consumir todo y no destilar.
- **Resultado:** 1 insight publicable + 1 cosa aprendida por semana.

### 13. BIGTECH-LENS — Comparar big tech
- **Objetivo:** entender estrategia, no titulares.
- **Pasos:** por empresa mira **foso** (marca/distribución/infra/open/gobernanza), modelo de negocio, fortaleza, debilidad, riesgo. (Ver `ai-big-tech-strategy.md`.)
- **Error:** comparar solo por "quién tiene el mejor modelo".
- **Resultado:** lectura estratégica que vende autoridad.

### 14. BENCH-READ — Leer benchmarks
- **Objetivo:** interpretar rankings sin caer en humo.
- **Pasos:** (1) ¿Qué mide/qué no? (2) ¿Contaminación? (3) ¿Con/sin tools-reasoning? (4) ¿Margen de error? (5) ¿Costo/latencia? (6) Valida con tu eval. (Ver `ai-benchmark-criticism.md`.)
- **Error:** tomar el #1 como verdad.
- **Resultado:** decisiones informadas, discurso creíble.

### 15. HYPE-FILTER — Detectar hype
- **Objetivo:** separar señal de ruido.
- **Pasos:** (1) ¿Hay demo o hay producción? (2) ¿Métrica real o anécdota? (3) ¿Quién se beneficia del claim? (4) ¿Reproducible/auditable? (5) ¿Costo/latencia/seguridad mencionados? (6) ¿Resiste "¿y en mi caso real?".
- **Error:** repetir titulares de marketing.
- **Resultado:** criterio para asesorar con honestidad.

---

## Cómo usarlos
- **Asesoría:** RISK-AUDIT + ROI-IA + ADOPT-E/AEC-AI.
- **Selección técnica:** EVAL-FIT + TASK-MATCH + BENCH-READ.
- **Construcción:** RICCF + AGENT-6 + RAG-7 + AUTO-5.
- **Autoridad:** CONTENT-IA + RADAR-7 + BIGTECH-LENS + HYPE-FILTER.
