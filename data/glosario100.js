/* ============================================================
   GLOSARIO 100 — De cero a experto en startups, negocio y AEC.
   Fuente: AECODE · Startup-100-Conceptos (10 niveles × 10).
   Cada concepto: { name, sub, como, analogia, ejemplo, brand }.
   como/analogia/ejemplo contienen HTML (negritas) — render con innerHTML.
   ============================================================ */
window.DB = window.DB || {};
window.DB.glosario100 = [
 {
  "no": 1,
  "tema": "Fundamentos",
  "accent": "violet",
  "sub": "Qué es realmente una startup y cómo se pasa de una corazonada a una idea que el mercado valida.",
  "concepts": [
   {
    "name": "Startup",
    "sub": "la empresa diseñada para crecer",
    "como": "Una organización temporal que <b>busca un modelo de negocio repetible y escalable</b> bajo incertidumbre extrema. No es una empresa pequeña: es una máquina diseñada para <i>crecer rápido</i>.",
    "analogia": "Es un cohete, no un auto. Un auto te lleva del punto A al B; el cohete se construye para <b>despegar y multiplicarse</b>, aunque pueda explotar.",
    "ejemplo": "<b>AECODE</b> no es una academia más: es una startup que busca un modelo escalable para <b>acelerar la adopción tecnológica</b> en construcción (BIM, automatización, IA), con comunidad en <b>14 países</b>.",
    "brand": "AECODE"
   },
   {
    "name": "El Problema",
    "sub": "pain point",
    "como": "El dolor real y frecuente del cliente que justifica que exista tu startup. Si nadie sufre el problema, <b>no hay negocio</b>: la regla es 'enamórate del problema, no de tu solución'.",
    "analogia": "Eres médico antes que vendedor: primero <b>diagnosticas el dolor</b>; recetar sin diagnóstico es vender vitaminas a quien necesita una cirugía.",
    "ejemplo": "<b>Airbnb</b> nació de un dolor doble y real: viajeros sin hotel asequible y anfitriones que necesitaban ingresos extra para pagar la renta.",
    "brand": "Airbnb"
   },
   {
    "name": "Propuesta de Valor",
    "sub": "value proposition",
    "como": "La promesa concreta de <b>por qué un cliente te elige a ti</b>: qué problema resuelves, para quién y qué te hace distinto. Se resume en una frase clara.",
    "analogia": "Es el titular de una noticia: si en <b>una línea</b> no entiendo qué gano, paso de página.",
    "ejemplo": "<b>AECODE:</b> «convierte el aprendizaje en <b>adopción tecnológica y mejora de productividad</b>». Aprende · Aplica · Construye mejor.",
    "brand": "AECODE"
   },
   {
    "name": "Idea vs Oportunidad",
    "sub": "idea ≠ opportunity",
    "como": "Una idea es una ocurrencia; una <b>oportunidad</b> es una idea con mercado, timing y forma de ganar dinero. Las ideas son baratas; <i>la ejecución sobre una oportunidad real es lo escaso</i>.",
    "analogia": "Una idea es una semilla; la oportunidad es la semilla <b>más</b> tierra fértil, clima y estación correcta. Sin lo segundo, no germina.",
    "ejemplo": "El video P2P existía antes que <b>YouTube</b>; la oportunidad llegó con banda ancha barata, Flash y cámaras masivas: el <i>timing</i> hizo la diferencia.",
    "brand": "YouTube"
   },
   {
    "name": "Founder-Market Fit",
    "sub": "encaje fundador-mercado",
    "como": "El grado en que los fundadores son <b>las personas correctas</b> para este problema: experiencia, red y obsesión genuina. Reduce el riesgo de ejecución más que cualquier plan.",
    "analogia": "Es un cirujano operando de lo suyo: no quieres al más entusiasta, quieres al que <b>ya conoce el cuerpo</b> por dentro.",
    "ejemplo": "<b>AECODE</b> lo tiene en AEC + IA: el equipo viene del sector construcción y educación tech, no llegó de afuera a 'disrumpir' algo que no entiende.",
    "brand": "AECODE"
   },
   {
    "name": "Visión y Misión",
    "sub": "norte de largo plazo",
    "como": "La <b>visión</b> es el mundo que quieres crear (destino); la <b>misión</b> es lo que haces cada día para acercarte (vehículo). Alinean al equipo cuando todo lo demás cambia.",
    "analogia": "La visión es la estrella polar; la misión, el barco y la ruta. La estrella no se toca, pero te orienta cada noche.",
    "ejemplo": "<b>Tesla:</b> visión = «acelerar la transición mundial a energía sostenible»; misión = construir autos eléctricos deseables y masivos para financiarla.",
    "brand": "Tesla"
   },
   {
    "name": "Lean Startup",
    "sub": "build–measure–learn",
    "como": "Método para construir bajo incertidumbre con <b>ciclos cortos</b>: construye algo mínimo, mídelo con clientes reales, aprende y vuelve a iterar. Minimiza el desperdicio de tiempo y dinero.",
    "analogia": "Es cocinar probando la sopa cada minuto, no servir un banquete de 3 horas y <b>recién</b> al final descubrir que estaba salado.",
    "ejemplo": "<b>Dropbox</b> validó con un <i>video</i> demo (no producto) y su lista de espera saltó de 5.000 a 75.000 en una noche: aprendió antes de construir.",
    "brand": "Dropbox"
   },
   {
    "name": "Hipótesis y Experimentos",
    "sub": "supuestos a probar",
    "como": "Tratas tus creencias del negocio como <b>hipótesis falsables</b> y diseñas el experimento más barato para confirmarlas o tumbarlas antes de apostar fuerte.",
    "analogia": "Eres científico, no profeta: en vez de jurar que lloverá, <b>pones un experimento</b> que te diga si llevar paraguas mañana.",
    "ejemplo": "<b>Zappos</b> testeó «¿la gente compra zapatos online?» fotografiando zapatos de tiendas y comprándolos al recibir el pedido, sin inventario.",
    "brand": "Zappos"
   },
   {
    "name": "MVP",
    "sub": "producto mínimo viable",
    "como": "La versión más simple que <b>entrega valor real y genera aprendizaje</b> con el mínimo esfuerzo. No es un producto a medias: es el experimento más pequeño que prueba tu hipótesis central.",
    "analogia": "Para cruzar la ciudad, primero una <b>patineta</b> que ya rueda, no un cuarto de auto que no se mueve. Cada versión transporta de verdad.",
    "ejemplo": "<b>AECODE</b> usa una skill piloto —«generar un reporte técnico de obra asistido por IA»— como MVP: evidencia clara en ≤90 min, sin construir toda la plataforma.",
    "brand": "AECODE"
   },
   {
    "name": "Customer Discovery",
    "sub": "validación con clientes",
    "como": "Salir a <b>hablar con clientes reales</b> antes de construir, para validar problema y solución con evidencia, no con opiniones de la oficina. «Get out of the building» (Steve Blank).",
    "analogia": "Es probar la receta con comensales <b>antes</b> de abrir el restaurante, no decorar el local y rezar para que alguien entre.",
    "ejemplo": "<b>Superhuman</b> entrevistó usuarios hasta que el 40% diría que se sentiría «muy decepcionado» sin el producto: midió el deseo antes de escalar.",
    "brand": "Superhuman"
   }
  ]
 },
 {
  "no": 2,
  "tema": "Cliente y Mercado",
  "accent": "violet",
  "sub": "A quién le resuelves, qué trabajo le haces y cuán grande es el juego al que entras.",
  "concepts": [
   {
    "name": "Cliente vs Usuario",
    "sub": "quién paga ≠ quién usa",
    "como": "El <b>usuario</b> usa el producto; el <b>cliente</b> es quien paga. A veces coinciden, a veces no, y confundirlos hace que diseñes para uno y cobres al otro mal.",
    "analogia": "En un colegio el alumno <b>usa</b> la clase, pero el padre la <b>paga</b>. Si solo enamoras al alumno y olvidas al padre, no renuevan.",
    "ejemplo": "<b>AECODE B2B2C:</b> el profesional <i>usa</i> y aprende; la empresa AEC <i>paga</i> por la adopción y la productividad del equipo. Hay que satisfacer a ambos.",
    "brand": "AECODE"
   },
   {
    "name": "ICP",
    "sub": "ideal customer profile",
    "como": "El <b>perfil de cliente ideal</b>: el tipo de empresa o persona a la que tu producto le calza perfecto, paga bien y se queda. Enfocarte en él multiplica la eficiencia comercial.",
    "analogia": "Es la talla exacta de zapato: vender a todos es vender tropezando; vender a tu talla es <b>caminar rápido y cómodo</b>.",
    "ejemplo": "<b>Slack</b> arrancó con su ICP claro: equipos de tecnología de 10–50 personas, donde el dolor de email interno era más agudo y la adopción viral.",
    "brand": "Slack"
   },
   {
    "name": "Buyer Persona",
    "sub": "arquetipo de comprador",
    "como": "Una <b>representación semi-ficticia</b> de tu cliente: rol, objetivos, frustraciones y cómo decide. Te hace diseñar y comunicar para una persona concreta, no para 'el mercado'.",
    "analogia": "Es darle nombre, cara y biografía a tu cliente para escribirle como a <b>un amigo</b>, no como a una multitud anónima.",
    "ejemplo": "<b>AECODE</b> perfila a «Coordinador BIM/VDC, 3–8 años, quiere subir de rol y demostrar impacto»: cada ruta y mensaje le habla a ese arquetipo.",
    "brand": "AECODE"
   },
   {
    "name": "Jobs To Be Done",
    "sub": "el trabajo a resolver",
    "como": "La gente no compra productos: <b>'contrata'</b> soluciones para hacer un progreso en su vida. El JTBD es ese trabajo funcional, social y emocional que quiere lograr.",
    "analogia": "«No quieres un taladro, quieres el <b>hueco en la pared</b>» —y en realidad, colgar la foto de tu familia.",
    "ejemplo": "<b>McDonald's</b> descubrió que su malteada se «contrataba» para el trayecto aburrido al trabajo: competía con plátanos y donas, no con otras malteadas.",
    "brand": "McDonald's"
   },
   {
    "name": "Segmentación",
    "sub": "dividir el mercado",
    "como": "Partir el mercado en <b>grupos homogéneos</b> por necesidad, comportamiento o tamaño, para priorizar a quién atacar primero en vez de querer servir a todos.",
    "analogia": "Es pescar con red en el banco de peces correcto, no echar el anzuelo <b>en todo el océano</b> a la vez.",
    "ejemplo": "<b>AECODE</b> segmenta: junior (CV/portafolio), intermedio (automatizar), coordinador BIM, empresa B2B y experto/instructor — cada uno con oferta distinta.",
    "brand": "AECODE"
   },
   {
    "name": "TAM · SAM · SOM",
    "sub": "tamaño del mercado",
    "como": "Tres círculos concéntricos: <b>TAM</b> (todo el mercado), <b>SAM</b> (el que puedes servir con tu modelo) y <b>SOM</b> (el que realmente capturarás a corto plazo).",
    "analogia": "TAM es todo el pastel; SAM, la porción que alcanza tu cuchillo; SOM, <b>el bocado</b> que de verdad te comerás este año.",
    "ejemplo": "<b>AECODE</b>: TAM formación digital AEC LATAM ~US$360M, SAM servible US$87.5M, SOM 3 años US$2.5M (menos del <b>3%</b> — no necesita dominar el mercado).",
    "brand": "AECODE"
   },
   {
    "name": "Beachhead Market",
    "sub": "mercado playa",
    "como": "El <b>nicho inicial</b> donde concentras toda tu fuerza para ganar de forma dominante antes de expandirte. Cabeza de playa: tomas un punto pequeño y desde ahí avanzas.",
    "analogia": "Como en el ajedrez o un desembarco: <b>aseguras una casilla</b> primero y la usas de trampolín, en vez de dispersarte por todo el tablero.",
    "ejemplo": "<b>Facebook</b> dominó Harvard, luego las Ivy League, luego universidades, antes de abrirse al mundo: un beachhead a la vez.",
    "brand": "Facebook"
   },
   {
    "name": "Early Adopters",
    "sub": "primeros usuarios",
    "como": "El pequeño grupo que <b>siente el dolor con tanta intensidad</b> que adopta soluciones imperfectas antes que nadie y te da feedback brutal. Son tus primeros 100 fans.",
    "analogia": "Son los que acampan afuera de la tienda por el lanzamiento: <b>perdonan los bugs</b> a cambio de ser los primeros.",
    "ejemplo": "<b>Tesla</b> empezó con el Roadster caro para entusiastas que perdonaban limitaciones; con su dinero financió los modelos masivos.",
    "brand": "Tesla"
   },
   {
    "name": "Why Now",
    "sub": "el timing",
    "como": "Por qué <b>esta idea es viable hoy</b> y no hace 5 años: qué cambió en tecnología, regulación, costos o conducta que abre la ventana. El timing mata más startups que la competencia.",
    "analogia": "Es surfear: la misma tabla que te ahoga sin ola <b>te impulsa</b> cuando la ola correcta llega. Hay que remar en el momento justo.",
    "ejemplo": "<b>AECODE</b> tiene su 'why now': inflexión de IA 2025–26 (77% del capital contech va a IA) + Plan BIM Perú obligatorio + brecha de talento crítica.",
    "brand": "AECODE"
   },
   {
    "name": "Customer Development",
    "sub": "desarrollo de clientes",
    "como": "El proceso de Steve Blank en 4 pasos —descubrir, validar, crear y construir clientes— para <b>buscar el modelo de negocio en paralelo al producto</b>, no después.",
    "analogia": "Construyes el puente <b>y</b> verificas que haya gente queriendo cruzarlo, al mismo tiempo, no terminas el puente y luego buscas tráfico.",
    "ejemplo": "<b>Dropbox</b> y miles más nacen de aquí: validar demanda (lista de espera) antes de invertir años en la ingeniería completa.",
    "brand": "Steve Blank"
   }
  ]
 },
 {
  "no": 3,
  "tema": "Producto",
  "accent": "violet",
  "sub": "Del primer prototipo al momento mágico en que el mercado tira del producto: Product-Market Fit.",
  "concepts": [
   {
    "name": "Product-Market Fit",
    "sub": "PMF",
    "como": "El punto donde tienes un producto que <b>un mercado quiere con tanta fuerza</b> que la demanda te empuja. Antes de PMF: empujas; después de PMF: te jalan. Es el objetivo #1 de toda startup temprana.",
    "analogia": "Es cuando dejas de pedalear cuesta arriba y de pronto vas <b>cuesta abajo</b>: el producto rueda solo porque la gente lo pide.",
    "ejemplo": "<b>Notion</b> sintió PMF cuando los usuarios empezaron a crear plantillas y a evangelizar solos; la retención y el boca a boca se dispararon.",
    "brand": "Notion"
   },
   {
    "name": "Value Proposition Canvas",
    "sub": "encaje problema-solución",
    "como": "Una herramienta para <b>encajar</b> lo que ofreces (productos, aliviadores de dolor, generadores de alegría) con lo que el cliente necesita (trabajos, dolores, alegrías).",
    "analogia": "Es armar un rompecabezas: tu pieza (producto) debe <b>encajar exacto</b> en el hueco del cliente, no a la fuerza.",
    "ejemplo": "Equipos usan el canvas de Strategyzer para evitar el error #1: construir <i>aliviadores</i> de dolores que el cliente en realidad no tiene.",
    "brand": "Strategyzer"
   },
   {
    "name": "Iteración",
    "sub": "mejora continua",
    "como": "Avanzar por <b>versiones sucesivas</b>, cada una mejor gracias al feedback real. El producto nunca está 'terminado'; está en una mejor versión que ayer.",
    "analogia": "Es esculpir: no sacas la estatua de un golpe, la <b>vas tallando</b> capa por capa hasta que aparece.",
    "ejemplo": "<b>Instagram</b> iteró desde Burbn (app de check-ins saturada) hasta quedarse solo con la función de fotos+filtros que la gente sí amaba.",
    "brand": "Instagram"
   },
   {
    "name": "Pivot",
    "sub": "cambio de rumbo",
    "como": "Un <b>cambio estructural de estrategia</b> manteniendo lo aprendido: cambias producto, segmento o modelo cuando los datos dicen que el camino actual no lleva a PMF.",
    "analogia": "Es girar sobre un pie fijo en básquet: <b>un pie no se mueve</b> (lo aprendido), el otro busca un mejor ángulo de tiro.",
    "ejemplo": "<b>Slack</b> era un videojuego (Glitch) que fracasó; pivotaron a la herramienta de chat interno que habían construido para ellos mismos.",
    "brand": "Slack"
   },
   {
    "name": "Roadmap",
    "sub": "hoja de ruta",
    "como": "El <b>plan priorizado</b> de qué construirás y por qué, conectando la visión con las entregas concretas. Comunica el rumbo sin prometer fechas imposibles.",
    "analogia": "Es el mapa de una expedición: marca <b>los hitos</b> y la dirección, pero deja espacio para rodear los obstáculos del camino.",
    "ejemplo": "<b>AECODE</b> ordena su roadmap por etapas: 2024 comunidad + programas en vivo → 2025 primer piloto B2B (×4) → 2026 microlearning + IA aplicada → 2027 expansión regional.",
    "brand": "AECODE"
   },
   {
    "name": "Onboarding / Activación",
    "sub": "primer valor",
    "como": "El proceso que lleva al usuario nuevo a <b>experimentar el valor por primera vez</b> rápido. Una activación pobre mata más usuarios que un mal producto.",
    "analogia": "Es el anfitrión que te recibe en la fiesta y te presenta a alguien: si te deja solo en la puerta, <b>te vas</b>.",
    "ejemplo": "<b>Duolingo</b> te pone a aprender en la primera pantalla, sin registro: sientes el valor antes de que te pida crear cuenta.",
    "brand": "Duolingo"
   },
   {
    "name": "Aha Moment",
    "sub": "momento de revelación",
    "como": "El instante exacto en que el usuario <b>'capta'</b> el valor y dice «ahora sí lo entiendo». Identificarlo y llevar a todos hacia él es clave para la retención.",
    "analogia": "Es el clic de un truco de magia: hay un segundo en que <b>todo encaja</b> y ya no puedes 'des-verlo'.",
    "ejemplo": "<b>Facebook</b> halló que su aha era «llegar a 7 amigos en 10 días»: quien lo lograba se quedaba; todo el onboarding se diseñó hacia eso.",
    "brand": "Facebook"
   },
   {
    "name": "Time to Value",
    "sub": "TTV",
    "como": "El <b>tiempo que tarda</b> un usuario en obtener su primer resultado útil. Cuanto más corto, mejor activación, retención y conversión a pago.",
    "analogia": "Es lo que esperas para probar bocado en un restaurante: si tardan una hora, te vas <b>antes</b> del plato fuerte.",
    "ejemplo": "<b>AECODE</b> diseña su skill piloto para dar evidencia visible en <b>≤90 minutos</b> (métrica TTFP, time to first practice): valor casi inmediato.",
    "brand": "AECODE"
   },
   {
    "name": "Wedge",
    "sub": "producto cuña",
    "como": "El <b>punto de entrada estrecho</b> y muy valioso por el que entras al cliente, para luego expandirte a más uso y más gasto. Empiezas pequeño pero indispensable.",
    "analogia": "Es la cuña que abre la puerta: <b>delgada al inicio</b>, pero una vez dentro, ensanchas el hueco.",
    "ejemplo": "<b>AECODE:</b> el profesional entra por productividad/relevancia (wedge), la empresa luego paga por transformar al equipo (engine).",
    "brand": "AECODE"
   },
   {
    "name": "Productización",
    "sub": "de servicio a producto",
    "como": "Convertir un <b>servicio manual</b> y a medida en un producto repetible, estandarizado y escalable, que no depende de horas humanas para crecer.",
    "analogia": "Es pasar del sastre que cose un traje por cliente a la <b>marca de ropa</b> con tallas: misma calidad, infinitas copias.",
    "ejemplo": "<b>AECODE</b> hace 'live-to-platform': cada curso en vivo se convierte en cápsulas, rúbricas y evidencias reutilizables — el servicio se vuelve producto.",
    "brand": "AECODE"
   }
  ]
 },
 {
  "no": 4,
  "tema": "Modelo de Negocio",
  "accent": "violet",
  "sub": "Cómo creas, entregas y —sobre todo— capturas valor: la mecánica de cómo ganas dinero.",
  "concepts": [
   {
    "name": "Business Model Canvas",
    "sub": "el lienzo del negocio",
    "como": "Un mapa de <b>9 bloques</b> (clientes, propuesta, canales, relaciones, ingresos, recursos, actividades, aliados, costos) para ver todo el negocio en una hoja.",
    "analogia": "Es el plano de una casa: ves <b>todas las habitaciones</b> y cómo conectan antes de poner un solo ladrillo.",
    "ejemplo": "Usado por equipos de Strategyzer en todo el mundo para diseñar y, sobre todo, <i>cuestionar</i> el modelo de negocio en una sola página.",
    "brand": "Strategyzer"
   },
   {
    "name": "Lean Canvas",
    "sub": "canvas para startups",
    "como": "Adaptación de Ash Maurya enfocada en <b>problema, solución, métricas clave y ventaja injusta</b>: ideal para la incertidumbre de una startup temprana.",
    "analogia": "Es la versión 'bisturí' del plano: quita los muros decorativos y deja <b>solo lo que puede matar o salvar</b> al negocio.",
    "ejemplo": "Miles de fundadores arrancan con un Lean Canvas porque obliga a nombrar el problema y la <i>unfair advantage</i> antes que el producto.",
    "brand": "Ash Maurya"
   },
   {
    "name": "Revenue Streams",
    "sub": "fuentes de ingreso",
    "como": "Las distintas <b>formas en que entra dinero</b>: venta directa, suscripción, comisión, publicidad, licencias. Diversificarlas con cabeza estabiliza el negocio.",
    "analogia": "Son los afluentes de un río: <b>varias corrientes</b> alimentando el mismo caudal lo hacen más difícil de secar.",
    "ejemplo": "<b>AECODE</b> combina motores: Live (ticket ~US$200), On-demand + IA y B2B institucional — modelo <b>B2B2C</b>, un solo flywheel con varias entradas de caja.",
    "brand": "AECODE"
   },
   {
    "name": "Pricing",
    "sub": "estrategia de precio",
    "como": "Cómo <b>fijas el precio</b>: por costo, por competencia o —el correcto— por <b>valor percibido</b>. El precio no es un número, es posicionamiento y filtro de cliente.",
    "analogia": "El precio es la etiqueta de un vino: el mismo líquido sabe distinto a $10 que a $100. <b>Comunica</b> tanto como cobra.",
    "ejemplo": "<b>AECODE</b> usa una escalera: Free (adquisición) → créditos S/49–99 → premium → ruta certificada → B2B team → in-house S/8k–60k.",
    "brand": "AECODE"
   },
   {
    "name": "Freemium",
    "sub": "gratis + premium",
    "como": "Ofreces un núcleo <b>gratis</b> para adquirir masa de usuarios y cobras por funciones avanzadas. Funciona si lo gratis engancha y lo pago resuelve un dolor real.",
    "analogia": "Es la entrada gratis al parque, pero <b>las atracciones top</b> se pagan: muchos entran, algunos compran el pase premium.",
    "ejemplo": "<b>Spotify</b> y <b>Dropbox</b> escalaron con freemium: gratis con límites (anuncios, espacio) y pago para quitarlos. AECODE lo aplica para adquirir.",
    "brand": "Spotify"
   },
   {
    "name": "SaaS / Suscripción",
    "sub": "software as a service",
    "como": "Vendes <b>acceso recurrente</b> a un software (mensual/anual) en vez de una licencia única. Genera ingresos predecibles y relación de largo plazo con el cliente.",
    "analogia": "Es Netflix en vez de comprar el DVD: pagas <b>mientras lo usas</b> y siempre tienes la última versión.",
    "ejemplo": "<b>Salesforce</b> inventó el SaaS moderno («the end of software»): hoy es el modelo dominante por su MRR predecible y altos márgenes.",
    "brand": "Salesforce"
   },
   {
    "name": "Marketplace",
    "sub": "mercado de dos lados",
    "como": "Conectas <b>oferta y demanda</b> y cobras por facilitar la transacción. El reto es el 'problema del huevo y la gallina': sin oferta no hay demanda y viceversa.",
    "analogia": "Eres el dueño de la feria: no produces ni compras nada, <b>cobras por el puesto</b> y por juntar a vendedores con compradores.",
    "ejemplo": "<b>Airbnb</b>, <b>Uber</b> y <b>Mercado Libre</b> son marketplaces: su valor está en la red de ambos lados, no en activos propios.",
    "brand": "Mercado Libre"
   },
   {
    "name": "B2B · B2C · B2B2C",
    "sub": "a quién le vendes",
    "como": "<b>B2C</b> vendes a personas, <b>B2B</b> a empresas, <b>B2B2C</b> una empresa paga/impulsa y el consumidor final usa. Cada uno cambia ciclo de venta, ticket y canal.",
    "analogia": "B2C es la tienda al público; B2B, el mayorista; B2B2C, la marca que <b>pone sus productos en góndola</b> de otra tienda para llegar a ti.",
    "ejemplo": "<b>AECODE</b> es <b>B2B2C</b>: la empresa paga o impulsa la formación, el profesional aprende y aplica, y AECODE mide evidencia para renovar o expandir la cuenta.",
    "brand": "AECODE"
   },
   {
    "name": "Take Rate",
    "sub": "comisión",
    "como": "El <b>porcentaje que se queda</b> el marketplace de cada transacción. Demasiado alto ahuyenta oferta; demasiado bajo no sostiene el negocio. Es un equilibrio delicado.",
    "analogia": "Es la propina obligatoria del intermediario: un <b>pedacito de cada trato</b> que pasa por tu plataforma.",
    "ejemplo": "<b>Uber</b> retiene ~20–25% de cada viaje; <b>Airbnb</b> cobra a huésped y anfitrión: el take rate es su motor de ingresos.",
    "brand": "Uber"
   },
   {
    "name": "Monetización",
    "sub": "cómo cobras",
    "como": "El <b>cómo y cuándo</b> conviertes valor entregado en ingreso. Puedes tener millones de usuarios y cero negocio si no resuelves la monetización.",
    "analogia": "Es ponerle caja registradora a la fuente de valor: muchos construyen una catarata hermosa pero <b>olvidan dónde cobrar la entrada</b>.",
    "ejemplo": "<b>WhatsApp</b> creció a 450M usuarios casi sin monetizar; <b>Instagram</b> monetizó vía ads. Ambos resolvieron la pregunta de forma distinta.",
    "brand": "WhatsApp"
   }
  ]
 },
 {
  "no": 5,
  "tema": "Unit Economics",
  "accent": "violet",
  "sub": "La pregunta que decide si una startup vive: ¿ganas o pierdes dinero con cada cliente?",
  "concepts": [
   {
    "name": "Unit Economics",
    "sub": "economía por unidad",
    "como": "Los ingresos y costos asociados a <b>una sola unidad</b> (un cliente, un pedido). Si la unidad no cierra, escalar solo multiplica las pérdidas.",
    "analogia": "Es probar una galleta antes de hornear 10.000: si <b>una</b> sale mal o cuesta más de lo que vendes, la fábrica entera quiebra.",
    "ejemplo": "<b>AECODE</b> mide unit economics por motor (Live, On-demand + IA, B2B): cada cliente debe cerrar —y el B2B es el más rentable y recurrente— antes de pisar el acelerador.",
    "brand": "AECODE"
   },
   {
    "name": "CAC",
    "sub": "costo de adquisición",
    "como": "Lo que <b>gastas en marketing y ventas</b> para conseguir un cliente nuevo. Es el precio de la gasolina del crecimiento: si sube sin control, te arruina.",
    "analogia": "Es cuánto cuesta el anzuelo, la carnada y la gasolina del bote <b>por cada pez</b> que pescas.",
    "ejemplo": "<b>AECODE</b> mantiene un CAC bajo (~<b>US$35</b> blended) apoyándose en su comunidad orgánica de <b>+95k</b> profesionales: el canal barato es su ventaja estructural.",
    "brand": "AECODE"
   },
   {
    "name": "LTV",
    "sub": "valor de vida del cliente",
    "como": "El <b>ingreso total</b> que deja un cliente durante toda su relación contigo. Cuanto más retienes y más expandes, más vale cada cliente conseguido.",
    "analogia": "Un cliente no es una venta, es una <b>suscripción a la revista</b>: importa cuántos años renueva, no solo el primer número.",
    "ejemplo": "Empresas SaaS como <b>Netflix</b> viven del LTV: un cliente que se queda 4 años vale 48 mensualidades, no una.",
    "brand": "Netflix"
   },
   {
    "name": "LTV : CAC",
    "sub": "el ratio que importa",
    "como": "La <b>relación</b> entre lo que vale un cliente y lo que cuesta conseguirlo. Regla de oro: <b>&gt;3×</b> es sano; &lt;1× significa que pierdes dinero con cada venta.",
    "analogia": "Es invertir $1 y recibir $3: por debajo de eso, estás <b>vendiendo billetes de $10 a $12</b> y celebrando el volumen.",
    "ejemplo": "<b>AECODE</b> cuida que cada motor (Live, On-demand, B2B) supere el umbral sano de <b>3×</b>, con el <b>B2B</b> como el más rentable por su recurrencia.",
    "brand": "AECODE"
   },
   {
    "name": "Payback Period",
    "sub": "periodo de recuperación",
    "como": "Los <b>meses que tardas en recuperar</b> el CAC con el margen del cliente. Cuanto más corto, menos capital necesitas para crecer.",
    "analogia": "Es cuánto tarda un panel solar en pagarse con el ahorro de luz: hasta ese día, <b>solo recuperas</b> tu inversión.",
    "ejemplo": "<b>AECODE</b> recupera el CAC en <b>pocos meses</b> gracias a su comunidad (CAC bajo): menos payback = crecimiento más autofinanciado.",
    "brand": "AECODE"
   },
   {
    "name": "Gross Margin",
    "sub": "margen bruto",
    "como": "El <b>% que queda</b> de cada venta tras restar el costo directo de entregarla. Define cuánto te sobra para marketing, equipo y utilidad. SaaS sano: 70–85%.",
    "analogia": "De cada $100 de pizza vendida, lo que sobra <b>después</b> de harina, queso y horno — antes de pagar el local y el sueldo.",
    "ejemplo": "<b>AECODE</b> mejora su margen ponderado de <b>35% → 47%</b> al cambiar el mix: menos B2C Live (intensivo en horas), más B2B y On-demand + IA.",
    "brand": "AECODE"
   },
   {
    "name": "Contribution Margin",
    "sub": "margen de contribución",
    "como": "Lo que <b>aporta cada venta</b> a cubrir los costos fijos, tras restar los costos variables. Cuando la suma supera los fijos, empiezas a ganar.",
    "analogia": "Es cuánto pone <b>cada plato vendido</b> al bote común que paga el alquiler del restaurante: si pone poco, necesitas vender muchísimo.",
    "ejemplo": "Aerolíneas viven de esto: cada asiento extra vendido casi no añade costo variable, así que su contribución marginal es altísima.",
    "brand": "Aerolíneas"
   },
   {
    "name": "Burn Rate",
    "sub": "ritmo de quema",
    "como": "El <b>dinero neto que gastas por mes</b> mientras no eres rentable. Controlarlo es literalmente controlar cuánto tiempo de vida le queda a la empresa.",
    "analogia": "Es el oxígeno que consume un buzo: <b>cuanto más rápido respiras</b>, menos tiempo tienes antes de volver a la superficie (a levantar capital).",
    "ejemplo": "En el crash de 2022, decenas de startups recortaron equipo para bajar su burn y estirar la vida: el burn rate define la urgencia.",
    "brand": "Startups 2022"
   },
   {
    "name": "Runway",
    "sub": "pista de despegue",
    "como": "Los <b>meses de vida</b> que te quedan al ritmo de quema actual con el efectivo en caja. Es el reloj real de la startup: cuando llega a cero, se acaba el juego.",
    "analogia": "Es la gasolina en el tanque medida en <b>kilómetros</b>: te dice cuánto puedes avanzar antes de necesitar otra gasolinera (ronda).",
    "ejemplo": "La regla VC: levanta para ~18–24 meses de runway, suficiente para alcanzar el siguiente hito que justifique una valoración mayor.",
    "brand": "Regla VC"
   },
   {
    "name": "Break-even",
    "sub": "punto de equilibrio",
    "como": "El nivel de ventas en que <b>ingresos = costos</b>: ni ganas ni pierdes. Cruzarlo significa que cada venta adicional ya es utilidad.",
    "analogia": "Es la cima de la montaña: hasta ahí solo gastas energía subiendo; <b>pasada la cima</b>, todo es bajada y a favor.",
    "ejemplo": "Una startup que llega a break-even deja de depender de inversionistas para sobrevivir: gana <i>opcionalidad</i> y poder de negociación.",
    "brand": "Default alive"
   }
  ]
 },
 {
  "no": 6,
  "tema": "Métricas y Crecimiento",
  "accent": "violet",
  "sub": "Qué medir para crecer de verdad y no engañarte con números que se ven bien pero no dicen nada.",
  "concepts": [
   {
    "name": "Vanity vs Actionable",
    "sub": "métricas que mienten",
    "como": "Las <b>vanity metrics</b> (descargas, seguidores, page views) se ven bien pero no guían decisiones; las <b>accionables</b> (activación, retención, ingreso) sí.",
    "analogia": "El número de gente que pasa frente a tu tienda vs. cuántos <b>compran y vuelven</b>: lo segundo paga el alquiler.",
    "ejemplo": "Muchas startups celebraron «millones de descargas» y murieron; lo que importaba era cuántos usaban el producto a la semana 4.",
    "brand": "Lección dura"
   },
   {
    "name": "North Star Metric",
    "sub": "métrica estrella",
    "como": "La <b>única métrica</b> que mejor captura el valor que entregas al cliente. Alinea a todo el equipo: si sube, el negocio sube de forma sana.",
    "analogia": "Es la estrella polar de los marineros: <b>todos reman</b> hacia el mismo punto, sin discutir cada noche hacia dónde ir.",
    "ejemplo": "<b>AECODE:</b> «progreso aplicado con evidencia / usuario activo». Mide <b>adopción real</b>, no consumo de contenido: o se aplica en obra, o no.",
    "brand": "AECODE"
   },
   {
    "name": "AARRR",
    "sub": "pirate metrics",
    "como": "El <b>embudo de 5 etapas</b> de Dave McClure: Adquisición, Activación, Retención, Revenue y Referido. Te dice <i>dónde</i> exactamente pierdes usuarios.",
    "analogia": "Es un examen médico por sistemas: en vez de «me siento mal», ubicas <b>qué órgano</b> (etapa) falla y lo tratas.",
    "ejemplo": "Startups usan AARRR para diagnosticar: si adquieres mucho pero no activas, el problema es el onboarding, no el marketing.",
    "brand": "Dave McClure"
   },
   {
    "name": "Activación",
    "sub": "el primer éxito",
    "como": "El % de usuarios nuevos que <b>llegan a su primer momento de valor</b>. Es la bisagra entre adquirir y retener: sin activación, todo lo demás se fuga.",
    "analogia": "Es lograr que el invitado <b>pruebe el primer bocado</b>: si solo entra y mira, nunca se queda a cenar.",
    "ejemplo": "<b>AECODE</b> activa con TTFP: que el usuario complete su primera práctica con evidencia rápido, antes de aburrirse o irse.",
    "brand": "AECODE"
   },
   {
    "name": "Retención",
    "sub": "que vuelvan",
    "como": "El % de usuarios que <b>siguen usando</b> el producto con el tiempo. Es la métrica más honesta de PMF: si no retienes, no hay negocio que escale.",
    "analogia": "No importa cuánta agua eches al balde si está <b>perforado</b>: la retención es tapar los hoyos antes de abrir la canilla del marketing.",
    "ejemplo": "<b>AECODE</b> tiene retención W4 de ~38% (sobre benchmark B2C 25–35%): el loop de evidencia+validación hace que el progreso se <i>sienta</i> real.",
    "brand": "AECODE"
   },
   {
    "name": "Churn",
    "sub": "tasa de abandono",
    "como": "El % de clientes que <b>te dejan</b> en un periodo. Es la fuga del balde: un churn alto obliga a correr cada vez más rápido solo para no caer.",
    "analogia": "Es el agua que se va por el desagüe: si entra a la misma velocidad que sale, <b>la tina nunca se llena</b>.",
    "ejemplo": "Para SaaS, un churn mensual &gt;5% es alarma. AECODE vigila su churn (~8% borde alto) como prioridad para que el MRR componga.",
    "brand": "SaaS"
   },
   {
    "name": "Cohort Analysis",
    "sub": "análisis por cohortes",
    "como": "Agrupar usuarios por <b>cuándo entraron</b> y seguir su comportamiento en el tiempo. Revela si el producto mejora: ¿las cohortes nuevas retienen mejor?",
    "analogia": "Es seguir a la <b>generación que entró en marzo</b> vs. la de junio, como un colegio mide cada promoción por separado.",
    "ejemplo": "<b>Facebook</b> obsesionaba con cohortes de retención; ver la curva «aplanarse» (no caer a cero) fue su señal temprana de PMF.",
    "brand": "Facebook"
   },
   {
    "name": "MRR / ARR",
    "sub": "ingreso recurrente",
    "como": "<b>MRR</b> = ingreso recurrente mensual; <b>ARR</b> = anual. Es el latido de un negocio por suscripción: predecible, componible y lo que más valoran los inversionistas.",
    "analogia": "Es un sueldo fijo vs. trabajos sueltos: el MRR <b>entra cada mes</b> sin volver a vender desde cero.",
    "ejemplo": "Una startup SaaS se valora en múltiplos de ARR; pasar de US$1M a US$10M ARR es el rito de paso hacia Serie B.",
    "brand": "SaaS"
   },
   {
    "name": "NRR · Expansion",
    "sub": "retención neta de ingresos",
    "como": "El % de ingreso que <b>conservas y expandes</b> de tus clientes actuales (upgrades, más asientos) menos lo que pierdes por churn. <b>&gt;100%</b> = creces sin clientes nuevos.",
    "analogia": "Es un jardín donde las plantas que ya tienes <b>crecen tanto</b> que el bosque se expande aunque no plantes nuevas.",
    "ejemplo": "<b>Snowflake</b> presume NRR de ~158%: sus clientes gastan cada vez más. Es el santo grial del SaaS.",
    "brand": "Snowflake"
   },
   {
    "name": "Growth Rate · T2D3",
    "sub": "ritmo de crecimiento",
    "como": "La <b>velocidad</b> a la que creces (semanal o anual). El patrón <b>T2D3</b> describe el camino de élite: triplicar, triplicar, duplicar, duplicar, duplicar el ingreso.",
    "analogia": "Es el interés compuesto del crecimiento: crecer 7% <b>semanal</b> parece poco, pero en un año te multiplica por 33.",
    "ejemplo": "Y Combinator pide a sus startups una meta de ~5–7% de crecimiento semanal: la pendiente importa más que el tamaño hoy.",
    "brand": "Y Combinator"
   }
  ]
 },
 {
  "no": 7,
  "tema": "Growth y GTM",
  "accent": "violet",
  "sub": "Cómo consigues clientes a escala de forma repetible: los motores de adquisición y distribución.",
  "concepts": [
   {
    "name": "Growth Hacking",
    "sub": "crecimiento por experimentos",
    "como": "Crecer mediante <b>experimentos rápidos y creativos</b> en todo el embudo, usando producto, datos e ingenio más que grandes presupuestos de publicidad.",
    "analogia": "Es ganar la guerra con <b>guerrilla</b>, no con tanques: tácticas ágiles y baratas que explotan palancas que otros no ven.",
    "ejemplo": "<b>Dropbox</b> hackeó su crecimiento regalando espacio por cada amigo invitado: convirtió a los usuarios en su fuerza de ventas.",
    "brand": "Dropbox"
   },
   {
    "name": "Funnel · AIDA",
    "sub": "embudo de conversión",
    "como": "El recorrido del cliente por etapas —<b>Atención, Interés, Deseo, Acción</b>— donde en cada paso pierdes gente. Optimizar el embudo es ganar sin gastar más arriba.",
    "analogia": "Es un embudo real: entra mucho líquido por arriba y <b>gotea</b> al final; ensanchar los cuellos hace caer más al vaso.",
    "ejemplo": "<b>AECODE</b> mide su funnel con gates: comunidad→diagnóstico→1ª práctica aplicada→adopción con evidencia→premium/B2B, cada uno con su tasa de conversión.",
    "brand": "AECODE"
   },
   {
    "name": "Viral Loop · K-factor",
    "sub": "viralidad",
    "como": "Cuando <b>cada usuario trae a otros</b> usando el producto. El <b>K-factor</b> mide cuántos nuevos genera cada uno; si K&gt;1, el crecimiento se vuelve exponencial.",
    "analogia": "Es un contagio: <b>cada 'infectado'</b> contagia a más de uno y la cosa se propaga sola, sin pagar por cada nuevo caso.",
    "ejemplo": "<b>Hotmail</b> añadió «PS: Get your free email» al pie de cada correo: pasó de 0 a 12M usuarios en 18 meses casi sin marketing.",
    "brand": "Hotmail"
   },
   {
    "name": "Network Effects",
    "sub": "efecto red",
    "como": "Cuando el producto se <b>vuelve más valioso</b> cuantos más lo usan. Genera un círculo virtuoso y una de las defensas más fuertes que existen.",
    "analogia": "Es un teléfono: <b>inútil si eres el único</b> que tiene uno, imprescindible cuando lo tiene todo el mundo.",
    "ejemplo": "<b>WhatsApp</b>, <b>LinkedIn</b> y los marketplaces viven de esto: tú no te vas porque <i>ahí está todo el mundo</i>.",
    "brand": "LinkedIn"
   },
   {
    "name": "Product-Led Growth",
    "sub": "crecimiento por producto",
    "como": "El <b>producto mismo</b> es el principal motor de adquisición, conversión y expansión: pruebas gratis, valor inmediato y viralidad, con menos peso de ventas.",
    "analogia": "Es dejar que el plato <b>se venda por su sabor</b>: das una muestra gratis tan buena que el cliente pide la orden completa solo.",
    "ejemplo": "<b>Figma</b>, <b>Slack</b> y <b>Notion</b> crecieron PLG: un usuario lo prueba, lo ama, lo lleva a su equipo y la empresa termina pagando.",
    "brand": "Figma"
   },
   {
    "name": "Go-To-Market",
    "sub": "estrategia GTM",
    "como": "El <b>plan de cómo llegas al mercado</b>: a qué segmento, por qué canal, con qué mensaje y modelo de venta. Define cómo conviertes producto en clientes.",
    "analogia": "Es el plan de batalla antes de la invasión: <b>dónde desembarcas</b>, con qué tropas y por qué ruta, no improvisas en la playa.",
    "ejemplo": "<b>AECODE</b> GTM (B2B2C): comunidad orgánica (CAC bajo) → diagnóstico y programas live → casos de adopción → entrada B2B con pilotos y ROI.",
    "brand": "AECODE"
   },
   {
    "name": "Inbound · Content",
    "sub": "marketing de atracción",
    "como": "<b>Atraer</b> clientes creando contenido útil que resuelve sus dudas, en vez de perseguirlos con anuncios. Construye audiencia, autoridad y un canal propio barato.",
    "analogia": "Es ser el faro, no el cazador: <b>el barco viene a ti</b> porque emites luz útil, no porque lo persigas en la oscuridad.",
    "ejemplo": "<b>HubSpot</b> creó la categoría enseñando inbound gratis; <b>AECODE</b> aplica el patrón BuildWitt: medios propios → audiencia → conversión barata.",
    "brand": "HubSpot"
   },
   {
    "name": "Sales Pipeline",
    "sub": "pipeline de ventas",
    "como": "La <b>fila de oportunidades</b> en cada etapa de venta (lead, calificado, propuesta, cierre). Gestionarlo te dice cuánto cerrarás y dónde se atascan los tratos.",
    "analogia": "Es una tubería con válvulas: ves <b>cuánta agua</b> hay en cada tramo y cuál válvula medio cerrada frena todo el flujo.",
    "ejemplo": "Equipos B2B usan CRMs como <b>Salesforce</b> o HubSpot para mover deals por el pipeline y pronosticar ingresos con realismo.",
    "brand": "B2B Sales"
   },
   {
    "name": "NPS",
    "sub": "net promoter score",
    "como": "Mide la <b>lealtad</b> con una pregunta: «¿qué tan probable es que nos recomiendes (0–10)?». Promotores menos detractores. Predice boca a boca y retención.",
    "analogia": "Es preguntar a los invitados de la boda si <b>recomendarían</b> al organizador: los que dan 9–10 te traen las próximas bodas.",
    "ejemplo": "<b>AECODE</b> reporta NPS de cohortes de 66–78, muy por encima de la media de EdTech: señal de que el valor se siente real.",
    "brand": "AECODE"
   },
   {
    "name": "Referral",
    "sub": "boca a boca",
    "como": "El crecimiento por <b>recomendación</b> de usuarios satisfechos. Es el canal más barato y de mayor confianza: un cliente feliz convierte mejor que cualquier anuncio.",
    "analogia": "Es el restaurante al que vas porque <b>tu amigo juró</b> que era buenísimo: confías en él más que en cualquier valla publicitaria.",
    "ejemplo": "<b>PayPal</b> pagaba $10 por referir y $10 al referido: compró su red inicial, pero el boca a boca la volvió viral y autosostenida.",
    "brand": "PayPal"
   }
  ]
 },
 {
  "no": 8,
  "tema": "Estrategia y Defensa",
  "accent": "violet",
  "sub": "Por qué, una vez que ganas, nadie te puede quitar el mercado: ventajas que se acumulan con el tiempo.",
  "concepts": [
   {
    "name": "Ventaja Competitiva",
    "sub": "por qué ganas",
    "como": "La razón <b>estructural</b> por la que ganas y sostienes clientes mejor que los rivales: costo, marca, tecnología o red. Sin ella, compites solo por precio.",
    "analogia": "Es jugar de local con el viento a favor: el rival puede ser bueno, pero <b>el campo te beneficia</b> sistemáticamente.",
    "ejemplo": "<b>Amazon</b> compite por escala y logística: precios y entrega que un competidor pequeño simplemente no puede igualar.",
    "brand": "Amazon"
   },
   {
    "name": "Moat",
    "sub": "foso defensivo",
    "como": "La <b>barrera duradera</b> que protege tu negocio de la competencia (red, marca, costos de cambio, datos). Buffett invierte solo en empresas con foso ancho.",
    "analogia": "Es el foso de agua alrededor del castillo: no impide que ataquen, pero hace que <b>conquistarte sea carísimo</b> y lento.",
    "ejemplo": "<b>AECODE</b> construye su foso con <b>comunidad AEC</b>, datos de adopción y rutas por rol: profundidad vertical en construcción que las plataformas horizontales no tienen.",
    "brand": "AECODE"
   },
   {
    "name": "Flywheel",
    "sub": "volante de inercia",
    "como": "Un <b>círculo virtuoso</b> donde cada parte impulsa a la siguiente y el sistema gana momentum: cuesta arrancar, pero luego gira casi solo.",
    "analogia": "Es un volante pesado: las primeras vueltas cuestan muchísimo, pero una vez girando, <b>un empujón lo acelera</b> sin parar.",
    "ejemplo": "<b>Amazon:</b> más selección → más clientes → más vendedores → mejores precios → más clientes. AECODE: más usuarios → más datos → mejores rutas.",
    "brand": "Amazon"
   },
   {
    "name": "Switching Costs",
    "sub": "costos de cambio",
    "como": "Lo que le <b>cuesta al cliente</b> irse con un competidor: tiempo, datos, aprendizaje, integraciones. Altos costos de cambio = clientes pegados.",
    "analogia": "Es mudarte de casa con 10 años de cosas: aunque haya una mejor, <b>la pereza de empacar todo</b> te mantiene donde estás.",
    "ejemplo": "<b>Salesforce</b> y los ERP: una vez que tu empresa tiene todo dentro, migrar es tan caro y riesgoso que casi nadie lo hace.",
    "brand": "Salesforce"
   },
   {
    "name": "Economías de Escala",
    "sub": "ventaja por tamaño",
    "como": "Cuando tu <b>costo por unidad baja</b> al crecer el volumen. El grande produce más barato que el chico y puede defender precio o margen.",
    "analogia": "Es comprar al por mayor: el costo del envío y la negociación se <b>reparten entre miles</b> de unidades, no entre diez.",
    "ejemplo": "<b>Tesla</b> con sus Gigafactories baja el costo por batería al escalar volumen: una ventaja que los rivales tardan años en igualar.",
    "brand": "Tesla"
   },
   {
    "name": "Plataforma / Ecosistema",
    "sub": "negocio de plataforma",
    "como": "Pasar de producto a <b>plataforma</b> donde terceros construyen sobre ti, multiplicando el valor sin que tú hagas todo. El ecosistema se vuelve barrera.",
    "analogia": "Es ser el sistema operativo, no una app: <b>otros crean encima de ti</b> y, mientras más construyen, más imposible es reemplazarte.",
    "ejemplo": "<b>Apple</b> App Store y <b>Shopify</b>: miles de desarrolladores crean valor para sus usuarios; el ecosistema es el verdadero foso.",
    "brand": "Shopify"
   },
   {
    "name": "Blue Ocean",
    "sub": "océano azul",
    "como": "Crear un <b>espacio de mercado nuevo</b> sin competencia directa, en vez de pelear en un 'océano rojo' saturado y sangriento por precio.",
    "analogia": "En vez de pelear por un pez en un charco lleno de tiburones, <b>nadas a un lago</b> nuevo donde eres el único.",
    "ejemplo": "<b>Cirque du Soleil</b> creó un océano azul fusionando circo y teatro; <b>Nintendo Wii</b> dejó la guerra de poder gráfico por el juego casual.",
    "brand": "Cirque du Soleil"
   },
   {
    "name": "Data Moat",
    "sub": "foso de datos",
    "como": "Una ventaja que <b>se acumula con los datos</b>: más uso → más datos → mejor producto → más uso. La IA convierte los datos propios en una barrera compuesta.",
    "analogia": "Es una bola de nieve rodando: <b>cada vuelta junta más nieve</b> y se hace más grande y más difícil de detener.",
    "ejemplo": "<b>AECODE</b> acumula evidencia y eventos de aprendizaje: cada usuario mejora las rutas y la evaluación sin escalar horas humanas.",
    "brand": "AECODE"
   },
   {
    "name": "First Mover vs Fast Follower",
    "sub": "mover primero o seguir",
    "como": "<b>First mover</b>: ventaja por llegar primero (red, marca); pero a veces el <b>fast follower</b> gana al aprender de los errores ajenos sin pagar la educación del mercado.",
    "analogia": "El primero abre la trocha en la selva y se llena de espinas; el segundo <b>camina por el sendero</b> ya despejado, más rápido.",
    "ejemplo": "<b>Google</b> no fue el primer buscador (lo fueron AltaVista, Yahoo); fue el fast follower que lo hizo claramente mejor.",
    "brand": "Google"
   },
   {
    "name": "Innovación Disruptiva",
    "sub": "disruption",
    "como": "Teoría de Christensen: una solución <b>más simple y barata</b> entra por abajo del mercado, mejora con el tiempo y termina desplazando a los líderes establecidos.",
    "analogia": "Es el pez chico que empieza comiendo migajas que el grande desprecia, <b>crece</b> y termina dominando el arrecife.",
    "ejemplo": "<b>Netflix</b> (DVDs por correo) parecía inferior a Blockbuster; subió hasta destruirlo. La disrupción casi nunca se ve venir desde arriba.",
    "brand": "Netflix"
   }
  ]
 },
 {
  "no": 9,
  "tema": "Fundraising y Capital",
  "accent": "violet",
  "sub": "Cómo se financia una startup, quién pone el dinero y qué entregas a cambio: el lenguaje del capital.",
  "concepts": [
   {
    "name": "Bootstrapping",
    "sub": "crecer con caja propia",
    "como": "Financiar la startup con <b>ingresos propios y ahorros</b>, sin levantar capital externo. Conservas control y disciplina, a cambio de crecer más lento.",
    "analogia": "Es construir la casa <b>ladrillo a ladrillo</b> con tu sueldo, sin pedir hipoteca: avanzas despacio pero la casa es 100% tuya.",
    "ejemplo": "<b>Mailchimp</b> creció a US$700M en ingresos sin un dólar de VC y se vendió por US$12.000M: bootstrapping llevado al extremo.",
    "brand": "Mailchimp"
   },
   {
    "name": "Fundraising",
    "sub": "levantar capital",
    "como": "El proceso de <b>conseguir inversión</b> a cambio de participación, para acelerar más rápido de lo que la caja permitiría. Es vender futuro para comprar velocidad.",
    "analogia": "Es echar más leña a una fogata que ya prende: <b>no enciende</b> leña mojada (idea sin tracción), pero aviva una llama real.",
    "ejemplo": "<b>AECODE</b> avanza con ProInnóvate (Hito 1 aprobado) y prepara su ronda (<b>ask ~US$125K</b> para escalar lo validado), conciliando tracción y unit economics.",
    "brand": "AECODE"
   },
   {
    "name": "Etapas de Ronda",
    "sub": "pre-seed a Serie C",
    "como": "El capital llega por <b>etapas</b>: pre-seed (idea), seed (PMF temprano), Serie A (escalar el modelo), B/C (expansión). Cada una con hitos y montos mayores.",
    "analogia": "Son los <b>grados escolares</b> del financiamiento: no saltas a la universidad sin pasar primaria; cada nivel exige probar el anterior.",
    "ejemplo": "<b>Uber</b> recorrió de seed (~$200k) a megarrondas de miles de millones; cada Serie financió una fase concreta de expansión.",
    "brand": "Uber"
   },
   {
    "name": "Ángel y Venture Capital",
    "sub": "quién invierte",
    "como": "El <b>ángel</b> invierte su dinero propio temprano y aporta mentoría; el <b>VC</b> gestiona un fondo de terceros y busca retornos de 10×+ en empresas escalables.",
    "analogia": "El ángel es el tío que cree en ti y pone de su bolsillo; el VC es el <b>banco de apuestas</b> que juega fuerte buscando el gran golpe.",
    "ejemplo": "<b>Y Combinator</b>, Sequoia y a16z apostaron temprano por Airbnb, Stripe y Dropbox cuando casi nadie lo veía claro.",
    "brand": "Sequoia"
   },
   {
    "name": "Valoración",
    "sub": "cuánto vales",
    "como": "El <b>valor asignado</b> a tu startup. <b>Pre-money</b> = antes de la inversión; <b>post-money</b> = pre + lo invertido. Define cuánto % entregas por el capital.",
    "analogia": "Es tasar una casa antes de vender una habitación: <b>el precio total</b> decide qué fracción das por el dinero que recibes.",
    "ejemplo": "Si vales US$4M pre-money y levantas US$1M, el post-money es US$5M y el inversionista se queda con el 20%.",
    "brand": "Ejemplo"
   },
   {
    "name": "Cap Table",
    "sub": "tabla de capitalización",
    "como": "El <b>registro de quién posee qué</b> % de la empresa: fundadores, inversionistas, empleados. Mantenerla limpia es vital para futuras rondas y para el exit.",
    "analogia": "Es el <b>reparto de la pizza</b> escrito en papel: cada ronda corta nuevas rebanadas y conviene saber exactamente quién se come cuánto.",
    "ejemplo": "Un cap table desordenado (demasiados socios pequeños) espanta a los VCs serios: prefieren una mesa de socios limpia y alineada.",
    "brand": "Buenas prácticas"
   },
   {
    "name": "Dilución",
    "sub": "reparto al crecer",
    "como": "Cuando emites <b>nuevas acciones</b> en una ronda, el % de los socios existentes se reduce. No es malo si la torta crece: prefieres 5% de algo gigante a 100% de nada.",
    "analogia": "Tu rebanada de pizza se hace <b>más fina</b>, pero la pizza entera creció tanto que tu trozo vale mucho más que antes.",
    "ejemplo": "Tras varias rondas, los fundadores de <b>Google</b> quedaron con un % pequeño, pero de una empresa de billones: dilución bien hecha.",
    "brand": "Google"
   },
   {
    "name": "SAFE / Convertible",
    "sub": "instrumentos tempranos",
    "como": "Formas de invertir <b>sin fijar valoración hoy</b>: el dinero entra ya y se convierte en acciones en la siguiente ronda, con descuento o cap. Rápido y simple.",
    "analogia": "Es un <b>vale</b>: «te doy el dinero ahora y luego lo canjeo por acciones al precio que se fije», sin discutir el valor exacto todavía.",
    "ejemplo": "El <b>SAFE</b> de Y Combinator estandarizó la inversión pre-seed: cierras en días, no en meses de negociación legal.",
    "brand": "Y Combinator"
   },
   {
    "name": "Equity · Vesting · ESOP",
    "sub": "participación del equipo",
    "como": "El <b>equity</b> es propiedad; el <b>vesting</b> la entrega gradualmente (típico: 4 años, 1 de cliff); el <b>ESOP</b> es el pool de acciones para empleados clave.",
    "analogia": "Es ganarte la casa <b>pagando cuotas con tu trabajo</b>: si te vas el primer año (antes del cliff), no te llevas nada.",
    "ejemplo": "<b>Startups</b> atraen talento top con equity: un ingeniero temprano de Stripe o Coinbase pudo volverse millonario por su vesting.",
    "brand": "Talento"
   },
   {
    "name": "Due Diligence",
    "sub": "auditoría del inversor",
    "como": "La <b>investigación a fondo</b> que hace el inversionista antes de poner el dinero: finanzas, legal, métricas, equipo y tecnología. Tu data room debe sostenerla.",
    "analogia": "Es la <b>revisión mecánica</b> antes de comprar el auto usado: levantan el capó, revisan papeles y prueban que todo lo dicho sea cierto.",
    "ejemplo": "<b>AECODE</b> prepara su due diligence conciliando ventas, analytics y CRM: las cifras de pitch deben cuadrar con la contabilidad real.",
    "brand": "AECODE"
   }
  ]
 },
 {
  "no": 10,
  "tema": "Escala y Experto",
  "accent": "violet",
  "sub": "De startup que funciona a empresa que define una categoría: escalar, componer ventajas y materializar el valor.",
  "concepts": [
   {
    "name": "Escalabilidad",
    "sub": "crecer sin crecer costos",
    "como": "La capacidad de <b>multiplicar ingresos sin multiplicar costos</b> en la misma proporción. Es lo que separa a una startup de un negocio de servicios lineal.",
    "analogia": "Es un molde de galletas vs. esculpir cada una a mano: el software te deja servir a <b>1 o a 1 millón</b> casi al mismo costo.",
    "ejemplo": "<b>WhatsApp</b> servía a 450M usuarios con ~55 empleados: el producto escalaba, el equipo no necesitaba crecer al mismo ritmo.",
    "brand": "WhatsApp"
   },
   {
    "name": "Blitzscaling",
    "sub": "escalar a toda velocidad",
    "como": "Priorizar la <b>velocidad sobre la eficiencia</b> en mercados 'winner-take-all' para ganar escala dominante antes que la competencia, aun quemando capital.",
    "analogia": "Es correr cuesta abajo tan rápido que <b>casi te caes</b>: arriesgado, pero si el premio es todo el mercado, frenar es perder.",
    "ejemplo": "<b>Uber</b> y <b>Airbnb</b> blitzscalearon globalmente: aceptaron caos y pérdidas para capturar el mercado antes que cualquier clon.",
    "brand": "Uber"
   },
   {
    "name": "Scale-up",
    "sub": "de startup a scale-up",
    "como": "Una startup que <b>ya encontró PMF</b> y crece de forma sostenida (típico: +20% anual en ingresos o equipo). El reto pasa de 'descubrir' a 'ejecutar y no romperse'.",
    "analogia": "Es pasar de inventar la receta a <b>abrir 100 sucursales</b> sin que la calidad ni la cultura se diluyan.",
    "ejemplo": "<b>Nubank</b> pasó de startup a scale-up y luego a banco gigante de LATAM: el desafío fue escalar sistemas, equipo y cultura a la vez.",
    "brand": "Nubank"
   },
   {
    "name": "Unicornio",
    "sub": "valoración de US$1.000M",
    "como": "Una startup privada valorada en <b>más de US$1.000 millones</b>. El término (Aileen Lee, 2013) marcaba lo raro; hoy hay cientos, y existen 'decacornios' (US$10B+).",
    "analogia": "Era tan raro como ver un unicornio; ahora es más como ver un caballo <b>muy</b> caro, pero sigue siendo la liga mayor.",
    "ejemplo": "<b>Rappi</b> y <b>Nubank</b> fueron unicornios latinoamericanos; alcanzar esa marca abre acceso a capital y talento global.",
    "brand": "Rappi"
   },
   {
    "name": "Pensamiento 10x",
    "sub": "moonshot",
    "como": "Apuntar a mejorar <b>10 veces</b>, no un 10%. El salto radical obliga a replantear desde cero y abre espacios que la mejora incremental nunca alcanza.",
    "analogia": "Para llegar a la Luna no construyes una <b>escalera más alta</b>: cambias de vehículo. El 10x exige reinventar, no optimizar.",
    "ejemplo": "<b>Google X</b> persigue moonshots (autos autónomos, Loon); SpaceX bajó 10× el costo de ir al espacio reusando cohetes.",
    "brand": "SpaceX"
   },
   {
    "name": "Compounding · AI Flywheel",
    "sub": "ventaja que compone",
    "como": "Ventajas que <b>se acumulan e interactúan</b> en el tiempo (datos, marca, red), creciendo de forma exponencial. Con IA, los datos propios componen el foso.",
    "analogia": "Es el interés compuesto: pequeño hoy, pero <b>se acelera solo</b> y en años se vuelve imbatible. El tiempo juega a tu favor.",
    "ejemplo": "<b>Tesla</b> compone datos de conducción de millones de autos para mejorar su autopilot, que atrae más autos, que generan más datos.",
    "brand": "Tesla"
   },
   {
    "name": "M&A",
    "sub": "fusiones y adquisiciones",
    "como": "Crecer o salir <b>comprando o fusionándote</b> con otra empresa, para ganar tecnología, talento, mercado o eliminar a un rival. Vía común de exit y de expansión.",
    "analogia": "Es absorber a otro equipo para <b>sumar sus jugadores</b> de golpe, en vez de formar cada talento desde la cantera.",
    "ejemplo": "<b>Facebook</b> compró Instagram (US$1B) y WhatsApp (US$19B): neutralizó amenazas y sumó redes enteras de un solo movimiento.",
    "brand": "Meta"
   },
   {
    "name": "Exit",
    "sub": "la salida",
    "como": "El evento en que fundadores e inversionistas <b>materializan el valor</b>: venta (M&A) o salida a bolsa (IPO). Es cuando el papel se vuelve dinero real.",
    "analogia": "Es vender la casa que renovaste por años: <b>recién en la venta</b> conviertes todo el esfuerzo en efectivo en el bolsillo.",
    "ejemplo": "El exit de <b>WhatsApp</b> a Facebook (US$19B) convirtió a un equipo de ~55 personas en una de las ventas más rentables de la historia.",
    "brand": "WhatsApp"
   },
   {
    "name": "IPO",
    "sub": "salida a bolsa",
    "como": "<b>Oferta Pública Inicial</b>: la empresa vende acciones al público en bolsa, consigue capital masivo y liquidez, a cambio de transparencia y escrutinio permanente.",
    "analogia": "Es pasar de un club privado a <b>un estadio abierto</b>: entra muchísimo público (capital), pero ahora todos miran cada jugada.",
    "ejemplo": "El IPO de <b>Airbnb</b> (2020) la valoró en ~US$47B; salir a bolsa fue el rito final de startup a empresa pública madura.",
    "brand": "Airbnb"
   },
   {
    "name": "Category Creation",
    "sub": "crear una categoría",
    "como": "En vez de competir en un mercado existente, <b>defines uno nuevo</b> y te conviertes en su rey. El 'category king' suele capturar la mayor parte del valor.",
    "analogia": "Es no ser 'otro refresco' sino <b>inventar la cola</b>: cuando creas la categoría, tu nombre se vuelve el del producto entero.",
    "ejemplo": "<b>Salesforce</b> creó el CRM en la nube; <b>AECODE</b> apunta a su propia categoría: la plataforma que convierte aprendizaje en <b>adopción tecnológica y productividad</b> en AEC (AEC + e-Learning + IA).",
    "brand": "AECODE"
   }
  ]
 }
];
