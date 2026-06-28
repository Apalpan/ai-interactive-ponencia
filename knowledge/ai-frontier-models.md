# 06 · Modelos que debo conocer (familias)

> Aprende **familias**, no versiones (las versiones 🔴 cambian cada mes). Para cada familia:
> qué es · quién · qué la diferencia · mejor para · dónde falla · acceso · fuertes en
> coding / razonamiento / multimodal / costo · mejor uso prod/empresa/AEC.

Acceso: **API/closed** · **open-weight (OW)** · **local** (corre en tu hardware).

---

### GPT (OpenAI) — 🇺🇸 API/closed
- **Diferencia:** producto + ecosistema maduro; reasoning integrado con router (fast vs. thinking).
- **Mejor para:** uso general, razonamiento, GPTs por proceso, multimodal.
- **Falla:** costo a volumen; no conoce tu contexto sin RAG.
- **Coding** alto · **Razonamiento** alto · **Multimodal** alto · **Costo** medio.
- **Prod:** asistente transversal. **Empresa:** API para productos. **AEC:** redacción/análisis general.

### Claude (Anthropic) — 🇺🇸 API/closed
- **Diferencia:** calidad de escritura/código, documentos largos, **MCP**, foco en seguridad.
- **Mejor para:** analizar textos largos, redactar con calidad, agentes con herramientas.
- **Falla:** menos presencia consumer; algunas features en evolución.
- **Coding** muy alto · **Razonamiento** alto · **Multimodal** medio-alto · **Costo** medio.
- **Prod:** documentos/propuestas. **Empresa:** trazabilidad/legal. **AEC:** BEP/contratos/informes.

### Gemini (Google) — 🇺🇸 híbrido (Gemini closed + Gemma OW)
- **Diferencia:** multimodal nativo, **contexto muy largo**, integración Workspace, TPUs.
- **Mejor para:** trabajo conectado a Google, análisis de documentos/medios largos.
- **Falla:** rutas consumer/dev/cloud confusas; ejecución variable.
- **Coding** alto · **Razonamiento** alto · **Multimodal** muy alto · **Costo** competitivo.
- **Prod:** Workspace. **Empresa:** Vertex/RAG. **AEC:** analizar planos/PDF largos.

### Llama (Meta) — 🇺🇸 open-weight/local
- **Diferencia:** abanderado open-weight; gran ecosistema de fine-tunes.
- **Mejor para:** self-host por costo/privacidad, personalización.
- **Falla:** no siempre en la frontera; requiere ingeniería para servir.
- **Coding** medio-alto · **Razonamiento** medio-alto · **Multimodal** según versión · **Costo** muy bajo (self-host).
- **Prod/Empresa:** privacidad/costo. **AEC:** datos sensibles on-prem.

### Grok (xAI) — 🇺🇸 híbrido
- **Diferencia:** acceso a info en **tiempo real** de X; tono directo.
- **Mejor para:** tendencias, pulso del momento, brainstorming crítico.
- **Falla:** sesgo de fuente (X); gobernanza.
- **Coding** medio-alto · **Razonamiento** alto · **Multimodal** medio · **Costo** medio.
- **Prod:** research de tendencias. **Empresa/AEC:** monitoreo de mercado/tecnología.

### Qwen (Alibaba) — 🇨🇳 open-weight
- **Diferencia:** familia amplia (dense+MoE), multimodal, muy adoptada por la comunidad.
- **Mejor para:** self-host, coding, multilingüe, fine-tuning.
- **Falla:** confianza/datos (origen); soporte.
- **Coding** alto · **Razonamiento** alto · **Multimodal** alto · **Costo** muy bajo.
- **Empresa/AEC:** base open versátil para personalizar.

### DeepSeek — 🇨🇳 open-weight + API barata
- **Diferencia:** **eficiencia/costo extremos**; reasoning (R-series).
- **Mejor para:** alto volumen barato, razonamiento, código.
- **Falla:** soporte/escala; geopolítica/datos.
- **Coding** alto · **Razonamiento** muy alto · **Multimodal** según versión · **Costo** el más bajo.
- **Empresa/AEC:** pilotos costo-eficientes; tareas masivas.

### Mistral / Mixtral — 🇫🇷 open-weight/híbrido
- **Diferencia:** eficiencia (MoE), soberanía UE.
- **Mejor para:** self-host europeo, costo, multilingüe.
- **Falla:** escala/capital.
- **Coding** medio-alto · **Razonamiento** medio-alto · **Multimodal** según versión · **Costo** bajo.
- **Empresa/AEC:** soberanía de datos (UE/clientes regulados).

### Phi (Microsoft) — 🇺🇸 open-weight (small)
- **Diferencia:** **modelos pequeños** muy capaces (eficiencia/edge).
- **Mejor para:** edge AI, on-device, tareas acotadas baratas.
- **Falla:** no para tareas frontier complejas.
- **Coding** medio · **Razonamiento** medio · **Multimodal** limitado · **Costo** mínimo.
- **AEC:** edge en obra (dispositivos limitados).

### Nova (Amazon) — 🇺🇸 API (Bedrock)
- **Diferencia:** familia propia integrada a AWS; costo/latencia.
- **Mejor para:** empresas en AWS que quieren modelo gestionado.
- **Falla:** menos visible en frontera.
- **Costo** competitivo · integración AWS.
- **Empresa/AEC:** despliegue gobernado en AWS.

### Nemotron (NVIDIA) — 🇺🇸 open-weight
- **Diferencia:** optimizado para su stack (entrenamiento/inferencia).
- **Mejor para:** quienes corren sobre NVIDIA (data/synthetic data).
- **Costo** según infra · fuerte en pipelines NVIDIA.

### Command / Embed (Cohere) — 🇨🇦 enterprise
- **Diferencia:** **RAG y embeddings** enterprise, privado, multilingüe.
- **Mejor para:** búsqueda semántica + RAG en VPC.
- **Empresa/AEC:** RAG privado sobre documentos de proyecto.

### Granite (IBM) — 🇺🇸 open-weight enterprise
- **Diferencia:** gobernado, eficiente, licencias claras, on-prem.
- **Mejor para:** regulados que exigen auditabilidad.
- **Empresa/AEC:** banca/seguros/Estado.

### ERNIE (Baidu), Hunyuan (Tencent), GLM (Zhipu/Z.ai), Kimi (Moonshot), MiniMax, Yi (01.AI), Pangu (Huawei), Doubao (ByteDance) — 🇨🇳
- **GLM:** top open-weight (jun-2026, 🔴), reasoning + long-horizon coding.
- **Kimi:** agentic/coding + contexto largo (open).
- **MiniMax:** coding/agentic eficiente (open).
- **Yi:** open bilingüe sólido.
- **ERNIE/Hunyuan/Doubao:** integrados a ecosistemas chinos (búsqueda/WeChat/apps).
- **Pangu:** modelo + chips Ascend (soberanía).
- Ver detalle en `ai-china-radar.md`.

---

## Cómo elegir familia (regla rápida)
- **Máxima calidad/escritura/código + trazabilidad:** Claude.
- **Conectado a Google / multimodal / contexto largo:** Gemini.
- **Producto general + ecosistema de devs:** GPT.
- **Costo/privacidad/self-host:** Llama, Qwen, DeepSeek, Mistral.
- **RAG privado enterprise:** Cohere; **regulados:** Granite/IBM.
- **Edge / on-device:** Phi (small).
- **Realtime/tendencias:** Grok.

> Recuerda: **no existe "la mejor IA"**, existe la mejor **para una tarea, con cierto dato,
> riesgo, costo y formato**. (Ver framework de selección en `ai-frameworks.md`.)

### Fuentes
Model cards oficiales · Artificial Analysis (https://artificialanalysis.ai/) · LMArena.
🔴 Versiones/posiciones cambian — verificar a la fecha.
