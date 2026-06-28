# 09 · Costo real de la IA: por token vs. por tarea

> El error #1 de 2026: pensar en **costo por token** en vez de **costo por tarea/decisión**.
> Precios concretos = 🔴 (cambian siempre): usa la **pricing page** del proveedor a la fecha.
> Aquí va el **modelo de razonamiento de costo** (✅) que no caduca.

---

## Anatomía del costo de un LLM

- **Input tokens:** lo que envías (prompt + contexto + documentos). Más contexto = más caro.
- **Output tokens:** lo que genera. Suelen costar **más** que input.
- **Cached tokens:** contexto reutilizado (prompt caching) → mucho **más barato**; clave para apps repetitivas.
- **Reasoning/thinking tokens:** los "pensamientos" internos de un reasoning model → **se pagan** aunque no los veas. Pueden multiplicar el costo.
- **Latencia (TTFT):** time-to-first-token; afecta UX, no factura.
- **Throughput:** tokens/seg; afecta cuánto tardas en escala.
- **Overhead de agente:** un agente hace **múltiples llamadas** (planificar, usar tools, reintentar) → el costo por tarea es la suma de todas.

> **Costo por tarea = (input + output + reasoning + cached) × nº de llamadas del flujo.**
> No el precio de "1M tokens".

---

## Las 7 unidades de costo que importan
1. **Costo por documento** (resumir/extraer 1 PDF).
2. **Costo por correo** procesado.
3. **Costo por reunión** (transcripción + acta).
4. **Costo por reporte** generado.
5. **Costo por tarea automatizada** (1 corrida del flujo).
6. **Costo por agente** (todas sus llamadas hasta terminar).
7. **Costo por usuario/mes** y **por decisión** (lo que de verdad mira el negocio).

---

## Tabla de tareas (modelo recomendado + ROI) 🔴 costos = estimar con pricing del día

| Tarea | Modelo recomendado | Costo estimado | Riesgo | Métrica de ROI | Alternativa barata |
|---|---|---|---|---|---|
| Analizar 100 correos | Small/flash (no reasoning) | 🔴 estimar | Errores de clasificación | Min/correo ahorrados | Llama/Qwen self-host |
| Resumir 1 reunión (1h) | Mid (Claude/Gemini) | 🔴 | Acuerdos mal capturados | Acuerdos cumplidos/tiempo | Whisper + LLM small |
| Revisar 20 PDFs (RAG) | RAG + mid | 🔴 (cachear contexto) | Alucinación si mal RAG | Min/consulta + % con cita | NotebookLM / embeddings open |
| Reporte ejecutivo | Mid-high | 🔴 | Datos sin validar | Horas/reporte | Plantilla + small |
| Programar una landing | Coding agent (Claude/GPT/Cursor) | 🔴 (varias llamadas) | Bugs/deuda técnica | Horas de dev | Modelo open + revisión |
| Analizar una obra (datos) | Mid + tools | 🔴 | Decisión con dato malo | Decisiones a tiempo | Small + dashboard |
| Revisar observaciones BIM | Clasificador small + RAG | 🔴 | Cerrar críticas por error | Tiempo/observación | Open-weight self-host |
| Contenido semanal | Mid + imagen | 🔴 | Voz de marca / claims | Piezas/hora | Small + plantillas |

> **Regla:** usa el **modelo más pequeño que cumpla** la tarea. Reserva reasoning/modelos
> grandes para lo que **realmente** lo necesita.

---

## 8 palancas para bajar el costo (sin perder calidad)
1. **Router por dificultad:** small para fácil, grande/reasoning solo para difícil.
2. **Cap de "thinking":** limita la profundidad de razonamiento donde el proveedor lo permite.
3. **Prompt caching:** cachea el contexto fijo (instrucciones, docs base).
4. **RAG en vez de meter todo al contexto:** recupera solo lo relevante.
5. **Batch / async** para tareas no urgentes (suele ser más barato).
6. **Salidas acotadas:** pide formato/longitud (menos output tokens).
7. **Self-host open-weight** para alto volumen estable (costo marginal bajo).
8. **Mide y poda:** instrumenta costo por tarea y elimina llamadas inútiles.

---

## Cómo presentar costo a un CFO (3 frases)
1. "No pagamos por tokens; pagamos por **tareas completadas**."
2. "Un reasoning model en cada request es como mandar al **senior a fotocopiar**."
3. "El ROI es **horas ahorradas × costo/hora − costo de inferencia**; lo medimos en el piloto."

## ROI rápido (fórmula)
```
ROI = (horas_ahorradas/semana × costo_hora − costo_IA/semana) / costo_IA/semana
```
Si no puedes medir horas ahorradas, el piloto está mal definido (ver `ai-frameworks.md`).

### Fuentes
- Pricing oficial de cada proveedor (🔴 a la fecha).
- Artificial Analysis (precio + velocidad): https://artificialanalysis.ai/
- Stanford AI Index 2025 (caída de costos de inferencia): https://hai.stanford.edu/ai-index/2025-ai-index-report
