# 18 · Casos de uso — productividad, negocio, AEC, educación, investigación

> Guía estratégica por dominio. Los **42 casos operativos** (con métrica, primer paso y
> variantes) viven en la app (`data/casos.js`). Aquí va el **mapa de oportunidad** y los
> patrones que se venden.

---

## Productividad (individuo / equipo)
| Área | Caso | Herramienta | Métrica | Riesgo | Repetible |
|---|---|---|---|---|---|
| Correos | resumen + clasificación + borradores | Gemini/M365 Copilot | min/correo | enviar sin revisar | regla + HITL |
| Reuniones | acta + acuerdos + seguimiento | Read AI | acuerdos cumplidos | consentimiento | plantilla acta |
| Documentos | borradores + reescritura por audiencia | Claude/Notion AI | horas/doc | datos sin validar | system instruction |
| Presentaciones | guion → slides | M365/Gamma | horas/PPT | claims | estructura fija |
| Investigación | síntesis con fuentes | Perplexity/NotebookLM | horas/research | citas falsas | corpus base |
| Análisis de datos | fórmulas, patrones, resumen | Gemini/ChatGPT | horas/análisis | cálculos | plantilla |
| Programación | autocompletar, tests, refactor | Copilot/Cursor/Claude Code | horas dev | bugs/deuda | revisión |
| Aprendizaje | tutor con ruta + quiz | ChatGPT/NotebookLM | tiempo a dominio | dependencia | ruta semanal |
| Automatización | flujo disparador→pasos→resultado | n8n/Make/Zapier | horas/semana | fallos | monitoreo |
| Decisiones | opciones + pros/contras + datos | mid + tools | calidad/tiempo | sesgo | checklist |

**Prompt base reutilizable:** "Actúa como [rol]. Objetivo: [resultado]. Contexto: [datos].
Criterios: [reglas]. Formato: [tabla/correo/JSON]. Si falta info, pregunta antes de asumir."

---

## Negocio (empresa)
- **Ventas:** clasificación de leads, follow-up personalizado, briefing de reuniones, propuestas.
- **Marketing:** 1 mensaje → N formatos con voz de marca; insights de campañas; SEO/contenido.
- **Operaciones:** reportes, consolidación, soporte (RAG sobre FAQ), onboarding.
- **Conocimiento:** wiki consultable (RAG) para no perder know-how.
- **Finanzas/legal:** extracción de obligaciones de contratos (con revisión legal).
- **Estrategia de adopción (ADOPT-E):** gobierna datos → quick win medible → formación → piloto → escala.
- **Modelo de negocio para ti:** "implementación de IA costo-eficiente", "auditoría de IA",
  "diseño de agentes con gobierno", "formación corporativa", "radar/asesoría continua".

---

## AEC (arquitectura, ingeniería, construcción)
> La IA no levanta muros: trabaja la **capa informacional**. Primero **ordena datos**.

| # | Caso | Datos necesarios | Modelo/herramienta | Impacto | Métrica | Primer piloto |
|---|---|---|---|---|---|---|
| 1 | Asistente BIM (RAG) | BEP, normas, especif. | NotebookLM/Claude+RAG | respuestas con fuente | min/consulta, %cita | subir BEP, 10 preguntas |
| 2 | Agente de reportes de obra | partes diarios, cronograma | ChatGPT/Power Automate | reportes a tiempo | horas/reporte | 1 obra, 4 sem |
| 3 | Avance por visión | fotos fechadas + plan | Computer Vision | avance objetivo | error vs. manual | 1 frente |
| 4 | Detección de EPP | cámaras por acceso | CV + edge AI | seguridad continua | detecciones correctas | 1 acceso |
| 5 | Automatización de metrados | modelo BIM, reglas | Claude Code/Dynamo | menos retrabajo | tiempo/metrado | 1 partida |
| 6 | Revisión de observaciones | histórico observaciones | Claude/n8n | menos repetición | tiempo/observación | último lote |
| 7 | QA/QC de modelos | estándar, propiedades | script + IA | consistencia | %conformes | 1 estándar |
| 8 | Análisis de cronograma | actividades, precedencias | ChatGPT/MS Project+IA | mejores escenarios | hitos | 1 cronograma |
| 9 | Predicción de retrasos | históricos de obra | ML predictivo | anticipación | error predicción | dataset base |
| 10 | Control documental | contratos, adendas | RAG + extracción | cumplimiento | obligaciones rastreadas | 1 contrato |
| 11 | Priorización de RFIs | histórico RFIs | Claude/n8n+RAG | cierre más rápido | tiempo/RFI | centralizar RFIs |
| 12 | Valorizaciones | avance vs. contrato | Sheets+IA | menos errores | tiempo/valorización | 1 valorización |
| 13 | Análisis de contratos | contratos | Claude/NotebookLM | riesgos visibles | riesgos detectados | 1 contrato |
| 14 | Reportes ejecutivos | avance, costos, riesgos | ChatGPT/Power BI+IA | decisiones rápidas | tiempo preparación | plantilla |
| 15 | Last Planner con IA | restricciones, responsables | Sheets+IA/n8n | mayor PPC | PPC, %restricciones | 1 semana |
| 16 | Diseño generativo | requisitos, restricciones | paramétrico/generativo | más alternativas | variantes evaluadas | 1 problema |
| 17 | Optimización estructural | modelo, cargas | optimización | mejor/peso-costo | mejora vs. base | 1 elemento |
| 18 | Gemelos digitales | sensores, modelo | IoT + IA | operación informada | desviaciones | 1 sistema |
| 19 | Mantenimiento predictivo | datos de sensores | ML predictivo | menos fallas | fallas evitadas | 1 activo |
| 20 | Agentes de oficina técnica | procesos + datos | agente + RAG + HITL | throughput | tareas/semana | 1 proceso |

**Regla AEC:** empieza por casos **informacionales, repetibles y medibles** (actas, reportes,
RFIs). La responsabilidad técnica/normativa sigue siendo humana.

---

## Educación
- **Tutor IA:** ruta + analogías + quiz + feedback (caso AECODE).
- **Diseño instruccional:** clase + taller + rúbrica + proyecto en minutos.
- **Feedback a escala:** evaluación contra rúbrica + feedback borrador (docente valida).
- **Skills verificables:** certificación con evidencias reales (no solo asistencia).
- **Riesgo:** dependencia pasiva → enseña a **validar** y a pensar, no a copiar.
- **Oferta:** "implementar IA en una academia/institución" (microlearning + evaluación + IA).

## Investigación
- **Workflow:** pregunta → corpus → estado del arte (con citas) → matriz de consistencia → análisis.
- **Análisis cualitativo:** clasificar/temas/sentimiento de cientos de respuestas abiertas.
- **Herramientas:** Perplexity (fuentes), NotebookLM (corpus propio), Claude (síntesis).
- **Riesgo:** citas inventadas → verifica TODAS las referencias; no plagies.
- **Trazabilidad:** exige fuente para cada afirmación (faithfulness).

---
> **Cómo vender estos casos:** problema → dato (de `ai-facts.md`) → caso → ROI → primer piloto
> de 4 semanas. Nunca prometas magia; promete **un proceso medible**.
