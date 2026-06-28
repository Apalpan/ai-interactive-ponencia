# 19 · Riesgos, gobernanza y regulación

> Para asesorar con seriedad y **vender gobernanza** como diferenciador.

---

## Riesgos técnicos
1. **Alucinación:** salida plausible pero falsa (intrínseca). → Validar + citar (RAG).
2. **Prompt injection:** instrucciones ocultas en datos/web secuestran al agente. → Aislar contenido externo, permisos mínimos.
3. **Data exfiltration:** fuga de datos vía el modelo/agente. → Clasificar datos, limitar salidas, DLP.
4. **Jailbreak:** burlar restricciones. → Guardrails + red teaming.
5. **Long-context failure:** olvido "en el medio". → RAG + no confiar en mega-contexto.
6. **Data contamination:** scores inflados. → Desconfiar de benchmarks; usar evals propias.
7. **Sesgo:** hereda sesgos de datos. → Evals de equidad, supervisión.
8. **Sobre-autonomía:** agente actúa sin control. → Human-in-the-loop en lo crítico.
9. **Dependencia de proveedor (lock-in):** → multimodelo / open-weight de respaldo.
10. **Degradación entre versiones:** un release rompe tu flujo. → evals de regresión.

## Riesgos de negocio / legales
1. **Responsabilidad:** la empresa responde por la salida de su IA (casos: política inventada validada por tribunal). → HITL + trazabilidad.
2. **Propiedad intelectual:** derechos de outputs/imágenes; datos de entrenamiento. → herramientas con licencias claras (Firefly, etc.).
3. **Confidencialidad:** datos sensibles a terceros. → plan no-entrenamiento / self-host.
4. **Privacidad / datos personales:** GDPR/leyes locales. → minimizar, anonimizar, consentimiento.
5. **Reputación:** errores públicos del bot. → guardrails, pruebas, tono.
6. **Costo descontrolado:** factura por mal diseño. → costo por tarea, router, caps.
7. **Falsa sensación de productividad:** parecer rápido sin valor real. → medir ROI.
8. **Adopción fallida (shelfware):** licencias sin uso. → ADOPT-E.
9. **Decisión con dato malo:** automatizar sobre datos sucios. → gobierno de datos.
10. **Seguridad de la cadena (terceros/MCP):** integraciones inseguras. → revisar permisos/proveedores.

## Marco de gobernanza (qué pedir/implementar)
- **Clasificación de datos:** qué entra, qué nunca entra.
- **Permisos mínimos** y aprobación humana en acciones externas/irreversibles.
- **Trazabilidad/logs:** quién/qué/cuándo, fuentes de cada respuesta.
- **Evals + monitoreo:** calidad, costo, seguridad en producción.
- **Red teaming** antes de producción.
- **Model/system cards** del proveedor revisadas.
- **Política de uso de IA** interna + alfabetización del equipo.
- **Plan B** (multimodelo / fallback).

---

## Regulación — EU AI Act (timeline) ✅
> El marco más influyente; referencia global. (Fuente: Comisión Europea / artificialintelligenceact.eu)

- **2 feb 2025:** aplican **prácticas prohibidas** + obligación de **alfabetización en IA**.
- **2 ago 2025:** obligaciones para **GPAI** (modelos de propósito general) + **AI Office** operativo; Código de Práctica GPAI (jul-2025).
- **2 ago 2026:** **poderes de enforcement** de la Comisión sobre GPAI (incl. multas); aplicabilidad general (con excepciones).
- **2 ago 2027:** deadline de cumplimiento para GPAI lanzados **antes** de ago-2025.
- **2 ago 2028:** transición extendida para sistemas de **alto riesgo** embebidos en productos regulados.

**Tiers de riesgo:** prohibido · alto riesgo · riesgo limitado (transparencia) · mínimo.
**GPAI:** transparencia + documentación técnica + copyright; si hay **riesgo sistémico**, evaluación y mitigación.

### Otras jurisdicciones (verificar localmente 🔴)
- **EE.UU.:** enfoque sectorial/estatal + órdenes ejecutivas + NIST AI RMF (marco voluntario).
- **China:** regulación estatal fuerte (registro de modelos, contenido).
- **LATAM/Perú:** marcos emergentes 🔴 — verifica normativa vigente antes de asesorar.
- **Estándares:** ISO/IEC 42001 (gestión de IA), NIST AI RMF — útiles como respaldo de gobernanza.

---
## Cómo venderlo
- "Con el EU AI Act en enforcement, **la gobernanza de IA es un argumento de venta**, no un costo."
- Oferta: **auditoría de riesgos de IA** (RISK-AUDIT) + **política de uso** + **diseño con HITL**.
- Frase: "No vendo el modelo más potente; vendo el sistema que tu comité de riesgos aprobaría."

### Fuentes
- EU AI Act (Comisión Europea): https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- Implementation timeline: https://artificialintelligenceact.eu/implementation-timeline/
- GPAI guidelines: https://digital-strategy.ec.europa.eu/en/policies/guidelines-gpai-providers
- NIST AI RMF · ISO/IEC 42001 (verificar versión).
