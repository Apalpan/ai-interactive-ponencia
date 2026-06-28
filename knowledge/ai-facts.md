# 13 · AI facts — datos clave para memorizar

> Núcleo curado (calidad > relleno; no invento cifras). Cada dato: **valor · confianza ·
> fuente · por qué importa / cómo usarlo.** Verifica 🟡/🔴 antes de citarlos como hecho cerrado.
> Más datos AEC/productividad en `data/db.js` (stats) y en `ai-global-state.md`.

## Estado / mercado
- **78% de organizaciones usan IA** (vs. 55% en 2023). ✅ AI Index 2025. → Ya no es opcional; es base competitiva.
- **Inversión corporativa en IA 2024 ≈ $252.3 B** (+26% interanual). ✅ AI Index 2025. → El capital valida la ola.
- **Costo de inferencia (nivel GPT-3.5) cayó ~280×** (nov-2022→oct-2024). ✅ AI Index 2025. → "El modelo se commoditiza".
- **Precio $20 → $0.07 / millón tokens** (MMLU-equiv). ✅ AI Index 2025. → Lo caro de ayer hoy es casi gratis.
- **Hardware: −30% costo/año; +40% eficiencia energética/año.** ✅ AI Index 2025. → La curva juega a tu favor.
- **Brecha open vs. closed: 8% → 1.7% en un año.** ✅ AI Index 2025. → El "suficientemente bueno" abierto basta para la mayoría.
- **Gartner: ~40% de apps empresariales con agentes en 2026** (desde <5% en 2025). 🔴 verificar. → Los agentes pasan a default.
- **~57% de equipos ya tienen agentes en producción; calidad = bloqueador #1.** 🟡 LangChain. → El reto es fiabilidad, no capacidad.

## Modelos / capacidades
- **En 1 año: +18.8 (MMMU), +48.9 (GPQA), +67.3 (SWE-bench) puntos.** ✅ AI Index 2025. → El ritmo de mejora es brutal.
- **Mid-2026, frontera clusterizada** (Claude Opus 4.8, Gemini 3.x, GPT-5.5, Opus 4.7 a pocos puntos). 🔴 → "No hay un único ganador".
- **Mejor open-weight lo lidera un lab chino (GLM-5.x).** 🔴 jun-2026. → China marca el open.
- **Todo lab top ya tiene reasoning model.** 🟡 → Test-time compute es estándar.
- **GPT-5 (ago-2025): sistema unificado con router** (fast + thinking); reporta 50–80% menos tokens vs. su reasoner previo. 🟡 → Enruta por dificultad para ahorrar.
- **Modelos multimodales son el default** (texto+imagen+audio+PDF). 🟡 → "Ver y razonar" ya es base.
- **Benchmarks viejos saturados** (MMLU, GSM8K, HumanEval). ✅ → Usa MMLU-Pro/GPQA/SWE-bench/LiveCodeBench.

## Benchmarks
- **SWE-bench Verified = 500 issues reales revisados por humanos.** ✅ → Mejor señal de coding agents.
- **SWE-bench top mid-2026 ~85–95%** (varía por modelo/scaffold). 🔴 → Verifica leaderboard a la fecha.
- **LMArena = preferencia humana por votos A/B (Elo), no exactitud.** ✅ → "Lo que gusta" ≠ "lo correcto".
- **Arena: rebranding de LMSYS (ene-2026); ~7M votos, ~368 modelos.** 🟡 → Volumen ≠ verdad técnica.
- **Artificial Analysis Index = compuesto + costo/velocidad.** ✅ → Para comparar capacidad y economía juntas.
- **FrontierMath/HLE/ARC-AGI resisten memorización.** ✅ → Miden el techo real, no lo memorizado.
- **MTEB elige tu modelo de embeddings (RAG).** ✅ → La búsqueda decide la calidad del RAG.

## China
- **Labs chinos: ~4 de top 5 open-weight.** 🔴 jun-2026. → El frente abierto es chino.
- **DeepSeek suele ser el más barato (~$0.14–0.30/Mtok input).** 🔴 → Reescribió el "precio justo".
- **Mejor open chino ~9 pts detrás del top propietario US.** 🔴 → Cerca y cerrando.
- **Kimi K2.x: primer open-weight en superar a un GPT-5.x en SWE-bench Pro.** 🔴 → El open alcanza tareas serias.
- **Licencias MIT/Apache en varios líderes chinos.** 🟡 → Uso comercial libre → adopción global.
- **Huawei Ascend: alternativa a NVIDIA dentro de China.** 🟡 → Soberanía de cómputo.

## Productividad / empresa
- **Profesional AEC pierde ~14 h/semana** buscando info y rehaciendo trabajo. 🟡 PMI. → El ROI más rápido está aquí.
- **Estudios (MIT/GitHub/Wharton) reportan +30–55% de velocidad en tareas de código.** 🟡 verificar. → Coding es el caso más probado.
- **El error de costo #1: enrutar todo a un reasoning model.** ✅ patrón 2026. → Router por dificultad.
- **"Demo prueba posibilidad; piloto prueba valor".** ✅ principio. → Mide antes de escalar.
- **La adopción se diseña** (casos+formación+acompañamiento); las licencias solas no se usan. ✅ → Shelfware si no.

## IA en AEC
- **96% de la data de obra no se usa.** 🟡 (Klutch AI 2025). → Combustible sin motor.
- **92% de proyectos terminan con sobrecostos (prom. +28%).** 🟡 → La oportunidad es enorme.
- **Solo ~12% del sector construcción usa IA regularmente.** 🟡 (Datagrid 2025). → Quien adopta, salta.
- **Arquitectura/ingeniería: ~84.8% de exposición a IA.** 🟡 (Anthropic Economic Index). → Sector muy afectado.
- **Computer vision viable en obra** (EPP, grietas, avance) con edge AI. ✅ → Capa informacional, no física.

## Riesgos / gobernanza
- **EU AI Act: prohibiciones + alfabetización desde feb-2025; GPAI desde ago-2025; enforcement ago-2026.** ✅ UE. → Gobernanza ya es requisito.
- **Prompt injection = riesgo #1 de agentes con web/datos.** ✅ → Aísla contenido externo.
- **La empresa responde por su IA** (casos legales: política inventada validada por tribunal). 🟡 → HITL en lo crítico.
- **Hallucination es intrínseca** (predice lo probable). ✅ → Validar + citar siempre.
- **Solo ~1 de 5 empresas tiene gobierno maduro de agentes.** 🟡 → Diferénciate con gobernanza.

## Infraestructura
- **NVIDIA: estándar de facto; foso = CUDA.** ✅ → El cómputo captura un valor enorme.
- **Google entrena en TPUs propias; Amazon en Trainium.** ✅ → Infra propia = costo/soberanía.
- **El cuello de botella es chips + energía + data centers.** ✅ → Geopolítica = variable de producto.
- **Export controls moldean qué modelos hay dónde** (ej. suspensiones jun-2026). 🔴 → La disponibilidad cambia por política.

---

## Cómo usar un fact en una conversación
1. Suelta el dato con su **fuente** ("según el AI Index 2025…").
2. Da el **"y por eso…"** (la implicancia).
3. Aterrízalo en **su negocio/AEC**.
4. Si es 🟡/🔴, di "dato a confirmar, pero la tendencia es clara".

### Fuentes
Stanford AI Index 2025 · Artificial Analysis · LMArena · SWE-bench · EU AI Act (ec.europa.eu) ·
Anthropic Economic Index · PMI/McKinsey (verificar) · model cards.
