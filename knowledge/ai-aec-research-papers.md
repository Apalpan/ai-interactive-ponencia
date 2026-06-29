# Investigación IA + AEC — datos extraídos de papers (2022–2026)

> Fuente: PDFs de `_17_AI-Research-Papers` procesados uno a uno (PyMuPDF) y
> curados. Alimenta el módulo **Investigación IA+AEC** (`data/papers.js`).
> Las cifras conservan su fuente; verificar antes de citar en público.

## Dato citable por paper

| Paper | Dato clave | Fuente |
|---|---|---|
| **BIM-GPT** (Zheng & Fischer, Stanford, 2023 · arXiv 2304.09333) | 99.5% de precisión clasificando consultas en lenguaje natural sobre un modelo BIM con solo **2% de datos** en el prompt (83.5% sin datos). | Stanford CEE |
| **AI-Driven Learning in AEC** (GEN+/AECODE · IGLC 33, Osaka–Kyoto 2025) | Encuesta + focus group a **450 expertos/estudiantes de 12 países**: 70% pierde tiempo en formación irrelevante, 65% no halla contenido relevante, 80% quiere microlearning JIT. | IGLC 33 |
| **AI-BrIM** — predicción de costo conceptual (GEN+ · Lean 4.0, puentes 2025) | Modelo **XGBoost R² = 0.92** para costo conceptual de puentes; cierra la brecha estimado–real. BIM reduce costos hasta 20%. | Lean 4.0 |
| **Computer Vision en AEC** (análisis de startups 2025) | El **reproceso = 5–12% del valor** del proyecto; CV compara foto vs BIM y calcula % de avance. vSLAM (<US$500) vs LiDAR. Construcción = 13% del PIB mundial. | Buildots/Doxel/OpenSpace |
| **VDC Framework** (Del Savio, Fischer et al. · Appl. Sci. 12:12178, MDPI 2022) | Construcción aporta 13% del PIB pero productividad **+1%/año (1995–2014)** vs 2.8% economía y 3.6% manufactura. Marco VDC = BIM + ICE + gestión de producción + métricas. | MDPI |
| **AI & ML for BIM: a review** (Int. J. Simulation & Multidisc. Design Opt.) | IA/ML en todo el ciclo BIM: diseño generativo, energía, interferencias, mantenimiento predictivo, gestión del activo. | Review |
| **AI in Project Management** (Springer, Computational Intelligence) | IA para riesgo, cronograma, costo y decisiones; eleva el rol del PM, no lo elimina. | Springer |
| **Community-Led AI & PM Report** (PMI Sweden + capítulos globales) | Encuesta coral a **300 capítulos PMI** del mundo: la IA generativa entra al núcleo de la gestión de proyectos; adopción desigual. | PMI |
| **AI Applied in Civil Engineering** (compendio MDPI, ~700 pp) | Panorama de IA en estructuras, geotecnia, hidráulica, transporte, materiales y SHM (monitoreo de salud estructural). | MDPI |

## Notas de método

- Procesados con PyMuPDF; se conservó el texto de las primeras páginas (abstract +
  resultados) para extraer el dato verificable de cada estudio.
- Dos papers son producción propia del ecosistema (GEN+/AECODE): el de aprendizaje en
  AEC (IGLC 33) y AI-BrIM (predicción de costos). Refuerzan la credibilidad de la ponencia.
- El resto son referencias externas revisadas por pares o reportes de industria.
