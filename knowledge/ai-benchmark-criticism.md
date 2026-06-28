# 08 · Por qué los benchmarks no son la verdad absoluta

> Para sonar experto **sin vender humo**: entender los límites de los rankings.

---

## Las 10 fallas estructurales

1. **Data contamination:** las preguntas del benchmark pueden estar en los datos de
   entrenamiento → el modelo "memoriza" en vez de razonar. (Por eso existen LiveCodeBench, FrontierMath, HLE.)
2. **Benchmark gaming / overfitting:** se optimiza el modelo *para el examen*, no para el trabajo real.
3. **Cherry-picking:** los labs reportan los benchmarks donde ganan y omiten donde pierden.
4. **Benchmark ≠ trabajo real:** resolver un issue de GitHub aislado ≠ mantener tu repo con tu contexto.
5. **Tareas artificiales vs. de negocio:** un examen de opción múltiple no se parece a "consolidar 12 reportes".
6. **Preferencia humana ≠ exactitud:** Arena premia respuestas agradables/largas; lo "que gusta" no es lo "correcto".
7. **Ignoran costo y latencia:** el #1 puede ser 10× más caro y lento — inútil a escala.
8. **Ignoran tu contexto:** ningún benchmark sabe de tus datos, tu nube, tu riesgo, tu formato.
9. **Ignoran seguridad/gobernanza:** capacidad alta + nula trazabilidad = riesgo en enterprise.
10. **Releases desalineados:** comparar modelos de fechas/condiciones distintas (con/sin tools, con/sin reasoning) no es justo.

## 10 errores comunes al leer rankings
1. Tomar el **#1 global** como "el mejor para mí".
2. Ignorar el **margen de error** (diferencias de <1–2 pts suelen no ser significativas).
3. No mirar **costo/velocidad** junto a la capacidad.
4. Confundir **Arena (preferencia)** con **exactitud técnica**.
5. Creer un score **sin saber si hubo contaminación**.
6. Comparar **con y sin reasoning/tools** como si fuera lo mismo.
7. Asumir que un benchmark **viejo/saturado** (MMLU, GSM8K) aún discrimina.
8. No distinguir **modelo** de **andamiaje/agente** (en SWE-bench el scaffold importa).
9. Olvidar que el ranking es **una foto** (cambia en semanas).
10. No correr **tu propia eval** con casos reales.

## 10 preguntas inteligentes antes de confiar en un benchmark
1. ¿**Qué** mide exactamente y qué **no**?
2. ¿Hay **riesgo de contaminación** (preguntas en el training)?
3. ¿Se midió **con o sin** tools/reasoning? ¿Mismo setup para todos?
4. ¿Cuál es el **margen de error**? ¿La diferencia es significativa?
5. ¿Incluye **costo y latencia**?
6. ¿Es **preferencia humana** o **corrección verificable** (tests)?
7. ¿La tarea se parece a **mi caso real**?
8. ¿Quién lo publica y tiene **incentivo** a cherry-pick?
9. ¿De **qué fecha** es? ¿Sigue vigente?
10. ¿Lo validé con **mi eval** y mi dato?

## 10 frases para sonar experto (sin humo)
1. "¿Estamos viendo un benchmark de preferencia o de corrección verificable?"
2. "Un punto de diferencia rara vez es significativo; miremos el margen de error."
3. "El #1 del ranking no es el mejor para ti; es el mejor para ese examen."
4. "Antes de creer el score, pregunto por contaminación de datos."
5. "Capacidad sin costo por tarea es media foto."
6. "SWE-bench mide el agente, no solo el modelo: el scaffold importa."
7. "Arena mide qué respuesta gusta, no cuál es correcta."
8. "Saturado MMLU; hoy discrimina MMLU-Pro/GPQA."
9. "La única eval que decide es la de nuestras tareas reales."
10. "Los rankings son foto del mes, no verdad permanente."

## 10 ejemplos aplicados a empresas
1. Eligen el #1 de Arena para clasificar 100k tickets → factura impagable; un modelo pequeño barato bastaba.
2. Compran "el mejor en código" sin probar en **su** repo → falla por contexto propio.
3. Citan un score contaminado en una propuesta → quedan mal cuando el cliente lo cuestiona.
4. Ignoran latencia → la UX del chatbot es lenta y el usuario lo abandona.
5. Comparan modelos con/sin reasoning → conclusión injusta y mala decisión.
6. Confían en MMLU saturado → no distinguen entre dos modelos top.
7. No corren eval propia → el modelo "top" alucina en su dominio.
8. Eligen por preferencia humana algo que no cumple **reglas de negocio** (τ-bench lo habría mostrado).
9. Olvidan seguridad → modelo capaz pero vulnerable a prompt injection en producción.
10. Toman el ranking de hace 6 meses → ya hay opciones mejores y más baratas.

---

## Regla maestra
> **"Benchmarks para descartar, tu eval para decidir."**
> Úsalos para acotar candidatos (capacidad/tipo de tarea), pero **decide con tus casos
> reales + costo por tarea + riesgo/gobernanza**.

### Fuentes
HELM (Stanford CRFM) · Artificial Analysis (metodología) · papers sobre data contamination ·
discusión pública de SWE-bench/Arena. Ver `ai-benchmarks-guide.md`.
