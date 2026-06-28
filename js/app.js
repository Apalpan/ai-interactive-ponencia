/* =====================================================================
   IA Interactiva — engine. Vanilla JS, sin build. Funciona en file:// y Pages.
   ===================================================================== */
(function () {
  "use strict";
  const DB = window.DB;
  if (!DB) { document.body.innerHTML = "<p style='padding:40px;font-family:sans-serif'>No se cargaron los datos (data/*.js).</p>"; return; }

  /* ---------- helpers ---------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = {
    get: (k, d) => { try { const v = localStorage.getItem("iap_" + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set: (k, v) => { try { localStorage.setItem("iap_" + k, JSON.stringify(v)); } catch {} }
  };
  const rich = (parts) => Array.isArray(parts)
    ? parts.map(p => typeof p === "string" ? esc(p) : `<span class="grad">${esc(p.grad)}</span>`).join("")
    : esc(parts);
  const lvlBadge = (n) => `<span class="badge lvl-${esc(n)}">${esc(n)}</span>`;
  const verifyBadge = `<span class="verify" title="Dato con fuente externa: confírmalo antes de presentar">⚠ verificar</span>`;
  const counts = {
    biblioteca: DB.conceptos.length, rutas: DB.rutas.length, recursos: (DB.tips || []).length + (DB.promptPatterns || []).length,
    mitos: DB.mitos.length, casos: DB.casos.length, herramientas: DB.herramientas.length,
    preguntas: DB.preguntas.length, productividad: DB.prodAreas.length, dinamicas: DB.dinamicas.length
  };
  const conceptById = id => DB.conceptos.find(c => c.id === id);
  const catMeta = id => DB.conceptCats.find(c => c.id === id) || { label: id, ico: "◆", color: "var(--violet)" };

  /* ---------- state ---------- */
  const state = {
    mod: null,
    deckIndex: {},
    track: store.get("track", null),
    theme: store.get("theme", "dark"),
    facilitador: store.get("facilitador", false),
    cmd: { open: false, items: [], sel: 0 },
    filters: {}, // per-bank
    teams: store.get("teams", [
      { name: "Equipo Verde", color: "#00a85a", pts: 0 },
      { name: "Equipo Azul",  color: "#275cff", pts: 0 },
      { name: "Equipo Violeta", color: "#7654df", pts: 0 }
    ]),
    spot: null
  };

  /* ---------- theme (flash-free) ---------- */
  function applyTheme(t, animate) {
    if (!animate) document.documentElement.classList.add("theming");
    document.documentElement.setAttribute("data-theme", t);
    state.theme = t; store.set("theme", t);
    if (!animate) requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.remove("theming")));
    const b = $("#themeBtn"); if (b) b.textContent = t === "dark" ? "☀" : "☾";
  }

  /* ---------- sidebar ---------- */
  function renderSidebar() {
    const groups = [...new Set(DB.modules.map(m => m.group))];
    const nav = groups.map(g => `
      <div class="nav-group">
        <div class="label">${esc(g)}</div>
        ${DB.modules.filter(m => m.group === g).map(m => `
          <button class="nav-item" data-mod="${m.id}">
            <span class="ico">${m.ico}</span><span>${esc(m.label)}</span>
            ${counts[m.id] ? `<span class="n">${counts[m.id]}</span>` : ""}
          </button>`).join("")}
      </div>`).join("");
    $("#sidebar").innerHTML = `
      <div class="brand">
        <div class="mark"><img src="assets/brand/aecode-isotipo.png" alt="AECODE" loading="eager" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'AE',style:'font-weight:800;color:var(--lav)'}))"></div>
        <div class="name">${esc(DB.brand.title)}<small>${esc(DB.brand.subtitle)}</small></div>
      </div>
      <div class="kbar"><button id="cmdkBtn" title="Buscar / ir a (Ctrl/⌘ K)">⌕ <span>Buscar concepto o sección…</span> <span class="kbd">⌘K</span></button></div>
      <div class="nav" id="nav">${nav}</div>
      <div class="sidebar-foot">
        <button class="btn sm" id="modeBtn" title="Elegir recorrido">◷ Modo</button>
        <button class="btn icon sm" id="themeBtn" title="Tema claro/oscuro">☾</button>
        <button class="btn icon sm" id="helpBtn" title="Atajos de teclado">?</button>
      </div>`;
    $("#nav").addEventListener("click", e => { const b = e.target.closest(".nav-item"); if (b) gotoModule(b.dataset.mod); });
    $("#cmdkBtn").addEventListener("mousedown", e => { e.preventDefault(); openCmd(); });
    $("#modeBtn").onclick = openMode;
    $("#themeBtn").onclick = () => applyTheme(state.theme === "dark" ? "light" : "dark", true);
    $("#helpBtn").onclick = () => $("#help").classList.add("on");
  }
  function markSidebar() { $$("#nav .nav-item").forEach(b => b.classList.toggle("active", b.dataset.mod === state.mod)); }

  /* ---------- topbar ---------- */
  function renderTopbar() {
    $("#topbar").innerHTML = `
      <button class="btn icon menu-btn" id="menuBtn" title="Menú">☰</button>
      <div class="crumb" id="crumb"></div>
      <div class="spacer"></div>
      <button class="btn sm" id="randomBtn" title="Tarjeta aleatoria (R)">🎲 <span id="randomLbl">Aleatorio</span></button>
      <button class="btn icon sm" id="ovBtn" title="Índice de slides (G)">▦</button>
      <button class="btn sm" id="facBtn" title="Modo facilitador" aria-pressed="${state.facilitador}">🎤 <span>Facilitador</span></button>
      <button class="btn icon sm" id="timerToggle" title="Temporizador (T)">◷</button>
      <button class="btn icon sm" id="scoreToggle" title="Marcador por equipos (S)">🏆</button>
      <button class="btn icon sm" id="fsBtn" title="Pantalla completa (F)">⤢</button>`;
    $("#menuBtn").onclick = () => $("#app").classList.toggle("nav-open");
    $("#randomBtn").onclick = randomForModule;
    $("#ovBtn").onclick = openOverview;
    $("#facBtn").onclick = () => toggleFacilitator();
    $("#timerToggle").onclick = () => $("#timerPanel").classList.toggle("on");
    $("#scoreToggle").onclick = () => $("#scorePanel").classList.toggle("on");
    $("#fsBtn").onclick = toggleFs;
  }
  function setCrumb() {
    const m = DB.modules.find(x => x.id === state.mod);
    const tk = state.track ? ` · <small>${esc(DB.tracks[state.track].label)}</small>` : "";
    $("#crumb").innerHTML = (m ? esc(m.label) : "") + tk;
    const rl = $("#randomLbl");
    if (rl) rl.textContent = ({ mitos: "Mito", casos: "Caso", preguntas: "Pregunta", apertura: "¿IA o no IA?" }[state.mod]) || "Aleatorio";
  }

  /* ===================================================================
     ROUTER
     =================================================================== */
  function moduleOrder() { return state.track ? DB.tracks[state.track].steps : DB.modules.map(m => m.id); }
  function gotoModule(id, slideIdx) {
    const m = DB.modules.find(x => x.id === id); if (!m) return;
    state.mod = id; state._relist = null; markSidebar(); setCrumb();
    $("#app").classList.remove("nav-open");
    location.hash = id; store.set("mod", id);
    if (m.kind === "deck") renderDeck(id, slideIdx || 0);
    else renderBank(id);
    $("#view .scroll")?.scrollTo(0, 0);
    updateProgress();
  }

  /* ===================================================================
     DECK rendering
     =================================================================== */
  function renderDeck(id, idx) {
    const slides = DB.slides[id] || [];
    state.deckIndex[id] = clamp(idx || 0, 0, slides.length - 1);
    $("#view").innerHTML = `
      <div class="deck">
        <div class="stage" id="stage">
          ${slides.map((s, i) => `<section class="slide" data-i="${i}"><div class="slide-inner">${slideHTML(s)}</div></section>`).join("")}
        </div>
        <div class="notes" id="notes"><div class="nt">◆ Guion del ponente</div><p id="noteText"></p></div>
        <div class="deck-nav">
          <button class="arrow" id="dPrev" title="Anterior">‹</button>
          <div class="counter"><span class="cur" id="dCur">01</span> / <span id="dTot">01</span></div>
          <button class="arrow" id="dNext" title="Siguiente">›</button>
        </div>
      </div>`;
    $("#dPrev").onclick = () => deckGo(-1);
    $("#dNext").onclick = () => deckGo(1);
    $("#dTot").textContent = String(slides.length).padStart(2, "0");
    showSlide(state.deckIndex[id]);
    if (state.facilitador) $("#notes").classList.add("on");
    animateBars();
  }
  function showSlide(i) {
    const id = state.mod, slides = DB.slides[id]; if (!slides) return;
    i = clamp(i, 0, slides.length - 1); state.deckIndex[id] = i;
    $$("#stage .slide").forEach((s, idx) => { s.classList.toggle("active", idx === i); s.classList.toggle("past", idx < i); });
    $("#dCur").textContent = String(i + 1).padStart(2, "0");
    const nt = slides[i].notes; const np = $("#noteText");
    if (np) np.textContent = nt || "—";
    updateProgress(); animateBars();
  }
  function deckGo(dir) {
    const id = state.mod, slides = DB.slides[id];
    const next = state.deckIndex[id] + dir;
    if (next < 0 || next >= slides.length) { advanceModule(dir); return; }
    showSlide(next);
  }
  function advanceModule(dir) {
    const order = moduleOrder(); const i = order.indexOf(state.mod);
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    const target = order[j], tm = DB.modules.find(x => x.id === target);
    // entering a deck backwards → land on its last slide
    if (tm && tm.kind === "deck" && dir < 0) gotoModule(target, (DB.slides[target] || []).length - 1);
    else gotoModule(target, 0);
  }

  /* ---------- slide layouts ---------- */
  function slideHTML(s) {
    const eyebrow = s.eyebrow ? `<p class="eyebrow">${esc(s.eyebrow)}</p>` : "";
    const head = (s.h2 ? `<h2 class="h2">${rich(s.h2)}</h2>` : "") + (s.lead ? `<p class="lead">${rich(s.lead)}</p>` : "");
    switch (s.layout) {
      case "title":
        return `${eyebrow}<h1 class="h1">${rich(s.h1)}</h1>${s.lead ? `<p class="lead">${rich(s.lead)}</p>` : ""}
          ${s.chips ? `<div class="chips">${s.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div>` : ""}`;

      case "quote":
        return `<p class="quote">${rich(s.quote)}</p>${s.src ? `<p class="qsrc">— ${esc(s.src)}</p>` : ""}`;

      case "cards": {
        const items = s.dataRef ? cardsFromRef(s.dataRef) : s.cards;
        return `${eyebrow}${head}<div class="grid ${items.length > 4 ? "" : items.length === 4 ? "four" : items.length === 2 ? "two" : ""}">
          ${items.map(c => cardHTML(c)).join("")}</div>`;
      }
      case "split":
        return `<div class="split"><div>${eyebrow}<h2 class="h2">${rich(s.h2)}</h2>${s.lead ? `<p class="lead mt12">${rich(s.lead)}</p>` : ""}</div>
          <div class="callout">${s.callout}</div></div>`;

      case "process":
        return `${eyebrow}${head}<div class="process" style="--steps:${s.steps.length}">
          ${s.steps.map(st => `<div class="step"><span class="s">${esc(st.s)}</span><h4>${esc(st.h4)}</h4><p>${esc(st.p)}</p></div>`).join("")}</div>`;

      case "stats": {
        const d = DB.stats[s.statsKey] || [];
        return `${eyebrow}${head}<div class="grid four">${d.map(x => `
          <div class="card stat"><div class="big">${esc(x.big)}</div><div class="lbl">${esc(x.lbl)}</div>
          ${x.src ? `<div class="mt8">${x.verify ? verifyBadge : ""} <small class="dim">${esc(x.src)}</small></div>` : ""}</div>`).join("")}</div>`;
      }
      case "bars": {
        const d = DB.stats[s.barsKey] || [], max = Math.max(...d.map(x => x.v));
        return `${eyebrow}${head}<div class="card"><div class="bars">${d.map(x => `
          <div class="bar-row"><div class="bl">${esc(x.l)} ${x.verify ? verifyBadge : ""}</div>
          <div class="bar-track"><div class="bar-fill" data-w="${(x.v / max * 100).toFixed(1)}"></div></div>
          <div class="bv">${esc(x.v)}${esc(s.suffix || "")}</div></div>`).join("")}</div>
          ${s.note ? `<p class="dim mt16">${esc(s.note)}</p>` : ""}</div>`;
      }
      case "ladder":
        return `${eyebrow}${head}<div class="process" style="--steps:${DB.escalera.length}">
          ${DB.escalera.map(x => `<div class="step"><span class="s">Nivel ${esc(x.n)}</span><h4>${esc(x.t)}</h4><p>${esc(x.d)}</p></div>`).join("")}</div>`;

      case "compare3":
        return `${eyebrow}${head}<div class="grid">${DB.cba.map((c, i) => `
          <div class="card hover"><div class="num ${["", "blue", "violet"][i]}">${i + 1}</div>
          <h3>${esc(c.t)} <span class="dim">· ${esc(c.verbo)}</span></h3><p>${esc(c.d)}</p>
          <p class="mt8"><span class="badge gray">ejemplo</span> ${esc(c.ej)}</p></div>`).join("")}</div>`;

      case "compareLR":
        return `${eyebrow}${head}<div class="grid two">
          <div class="card"><span class="kicker" style="color:var(--danger)">${esc(s.left.t)}</span><p style="font-size:18px;color:var(--ink)">${esc(s.left.d)}</p></div>
          <div class="card" style="border-color:color-mix(in srgb,var(--green) 45%,var(--line))"><span class="kicker">${esc(s.right.t)}</span><p style="font-size:18px;color:var(--ink)">${esc(s.right.d)}</p></div>
          </div>${s.foot ? `<p class="callout mt16">${s.foot}</p>` : ""}`;

      case "applications":
        return `${eyebrow}${head}<div class="grid auto">${DB.aecAplicaciones.map(a => `
          <div class="card pad-sm hover"><h3 style="font-size:17px">${a.ico} ${esc(a.area)} ${a.verify ? verifyBadge : ""}</h3>
          <p style="font-size:14px">${esc(a.que)}</p></div>`).join("")}</div>`;

      case "flow":
        return `${eyebrow}${head}<div class="process" style="--steps:${DB.flujo.length}">
          ${DB.flujo.map((f, i) => `<div class="step"><span class="s">${i + 1}</span><h4>${esc(f.t)}</h4><p>${esc(f.d)}</p></div>`).join("")}</div>
          <p class="dim mt16">El humano valida y aprueba: la IA produce el borrador, el profesional pone el criterio.</p>`;

      case "framework":
        return `${eyebrow}${head}<div class="process" style="--steps:${s.steps.length}">
          ${s.steps.map(st => `<div class="step"><div class="num" style="width:34px;height:34px;font-size:15px;margin-bottom:8px">${esc(st.n)}</div><h4>${esc(st.t)}</h4><p>${esc(st.d)}</p></div>`).join("")}</div>`;

      case "matrix":
        return `${eyebrow}${head}<div class="grid two" style="align-items:center">
          <div class="matrix">
            <div class="ql"><b>Apuesta grande</b><span>Alto impacto · difícil</span></div>
            <div class="ql good"><b>Quick wins ✦</b><span>Alto impacto · fácil</span></div>
            <div class="ql"><b>Evitar</b><span>Bajo impacto · difícil</span></div>
            <div class="ql"><b>Relleno</b><span>Bajo impacto · fácil</span></div>
            <div class="axis-x">Facilidad de implementación →</div>
            <div class="axis-y">Impacto →</div>
          </div>
          <div><p class="lead">Tu primer piloto vive en <strong>Quick wins</strong>: alto impacto, baja dificultad, datos disponibles.</p>
          <p class="dim mt12">Las "apuestas grandes" valen, pero no son el primer paso. Lo de bajo impacto, después.</p></div>
        </div>`;

      case "analogias": {
        const a = DB.analogias.slice(0, 6);
        return `${eyebrow}${head}<div class="grid">${a.map(x => `
          <div class="card hover"><span class="kicker">${esc(x.c)}</span><h3 style="font-size:18px">${esc(x.t)}</h3><p style="font-size:14px">${esc(x.d)}</p></div>`).join("")}</div>`;
      }
      case "genpred": {
        const g = DB.genVsPred;
        const col = (o, cls) => `<div class="card hover"><span class="kicker" style="${cls}">${esc(o.t)}</span><p style="font-size:17px;color:var(--ink)">${esc(o.d)}</p>
          <ul class="mt8">${o.ej.map(e => `<li>${esc(e)}</li>`).join("")}</ul></div>`;
        return `${eyebrow}${head}<div class="grid two">${col(g.gen, "")}${col(g.pred, "color:var(--blue)")}</div>`;
      }
      default:
        return `${eyebrow}${head}`;
    }
  }
  function cardsFromRef(ref) {
    if (ref === "componentes") return DB.componentes.map(c => ({ kicker: c.k, h3: c.e, p: c.d }));
    return [];
  }
  function cardHTML(c) {
    return `<div class="card hover">
      ${c.num ? `<div class="num">${esc(c.num)}</div>` : ""}
      ${c.kicker ? `<span class="kicker">${esc(c.kicker)}</span>` : ""}
      ${c.h3 ? `<h3>${esc(c.h3)}</h3>` : ""}
      ${c.p ? `<p>${esc(c.p)}</p>` : ""}
      ${c.ul ? `<ul>${c.ul.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div>`;
  }
  function animateBars() {
    requestAnimationFrame(() => requestAnimationFrame(() => $$(".bar-fill").forEach(b => { b.style.width = b.dataset.w + "%"; })));
  }

  /* ===================================================================
     BANK rendering
     =================================================================== */
  function bankShell(inner) { $("#view").innerHTML = `<div class="scroll"><div class="wrap">${inner}</div></div>`; }
  function renderBank(id) {
    ({ biblioteca: renderBiblioteca, rutas: renderRutas, mapa: renderMapa, recursos: renderRecursos,
       mitos: renderMitos, casos: renderCasos, herramientas: renderTools, preguntas: renderPreguntas,
       productividad: renderProd, dinamicas: renderDinamicas, graficas: renderGraficas }[id] || (() => bankShell("<div class='empty'>—</div>")))();
    updateProgress();
  }
  function toolbar(opts) {
    const f = state.filters[state.mod] || (state.filters[state.mod] = { q: "", cat: "all", nivel: "all" });
    const cats = opts.cats ? `<div class="filters" id="catFilters">
      ${["all", ...opts.cats].map(c => `<button class="pill ${f.cat === c ? "active" : ""}" data-cat="${esc(c)}">${c === "all" ? "Todas" : esc(c)}</button>`).join("")}</div>` : "";
    const niv = opts.niveles ? `<select class="select" id="nivelSel">
      ${["all", "basico", "intermedio", "avanzado"].map(n => `<option value="${n}" ${f.nivel === n ? "selected" : ""}>${n === "all" ? "Todo nivel" : n}</option>`).join("")}</select>` : "";
    const rnd = opts.random ? `<button class="btn sm primary" id="tbRandom">🎲 ${esc(opts.random)}</button>` : "";
    const prn = opts.print ? `<button class="btn sm no-print" id="tbPrint" title="Imprimir / exportar PDF">⎙ Exportar</button>` : "";
    return `<div class="toolbar no-print">
      <div class="search">⌕ <input id="searchInput" type="text" placeholder="${esc(opts.placeholder || "Buscar…")}" value="${esc(f.q)}" aria-label="Buscar"></div>
      ${niv}${rnd}${prn}</div>${cats}<div class="count-note no-print mt8" id="countNote"></div>`;
  }
  function wireToolbar(render, opts) {
    const f = state.filters[state.mod];
    const si = $("#searchInput");
    if (si) si.oninput = () => { f.q = si.value; (state._relist || render)(); };
    $("#catFilters") && ($("#catFilters").onclick = e => { const b = e.target.closest(".pill"); if (!b) return; f.cat = b.dataset.cat; render(); });
    $("#nivelSel") && ($("#nivelSel").onchange = e => { f.nivel = e.target.value; render(); });
    $("#tbRandom") && ($("#tbRandom").onclick = () => randomForModule());
    $("#tbPrint") && ($("#tbPrint").onclick = () => window.print());
  }
  function rerenderList(render) { render(); } // simple full re-render (lists are small)
  function applyFilters(arr) {
    const f = state.filters[state.mod] || {};
    let r = arr;
    if (f.cat && f.cat !== "all") r = r.filter(x => x.cat === f.cat);
    if (f.nivel && f.nivel !== "all") r = r.filter(x => x.nivel === f.nivel);
    if (f.q && f.q.trim()) { const q = f.q.toLowerCase(); r = r.filter(x => JSON.stringify(x).toLowerCase().includes(q)); }
    return r;
  }
  function setCount(n, total) { const c = $("#countNote"); if (c) c.textContent = `${n} de ${total} · clic en una tarjeta para revelar`; }

  /* ---------- Mitos ---------- */
  function renderMitos() {
    const cats = [...new Set(DB.mitos.map(m => m.cat))];
    bankShell(`<p class="eyebrow">Banco</p><h2 class="h2">Mitos y realidades</h2>
      <p class="lead mt8">${DB.mitos.length} mitos frecuentes con su realidad, explicación y ejemplo. Úsalos como tarjetas: pregunta “¿mito o realidad?”, recibe votos y revela.</p>
      ${toolbar({ placeholder: "Buscar mito…", cats, random: "Mito al azar" })}
      <div class="grid auto mt16" id="list"></div>`);
    state._relist = () => { const d = applyFilters(DB.mitos); $("#list").innerHTML = d.length ? d.map(mythCard).join("") : emptyHTML(); setCount(d.length, DB.mitos.length); };
    state._relist();
    wireReveal(); wireToolbar(renderMitos, {});
  }
  function mythCard(m) {
    return `<article class="item" data-reveal>
      <div class="top"><span class="badge danger">Mito</span><span class="badge gray">${esc(m.cat)}</span></div>
      <h4>“${esc(m.mito)}”</h4>
      <button class="btn sm ghost no-print" data-toggle>Revelar realidad ▾</button>
      <div class="hidden-ans">
        <p><span class="real-tag">Realidad:</span> ${esc(m.realidad)}</p>
        <p class="mt8 dim">${esc(m.exp)}</p>
        <p class="mt8"><span class="badge green">ejemplo</span> ${esc(m.ej)}</p>
      </div></article>`;
  }

  /* ---------- Casos ---------- */
  function renderCasos() {
    const cats = [...new Set(DB.casos.map(c => c.cat))];
    bankShell(`<p class="eyebrow">Banco</p><h2 class="h2">Casos prácticos</h2>
      <p class="lead mt8">${DB.casos.length} casos por dominio. Lee el problema, lanza la pregunta a la audiencia y revela la solución con herramientas, impacto, riesgos y siguiente paso.</p>
      ${toolbar({ placeholder: "Buscar caso…", cats, random: "Caso al azar" })}
      <div class="grid auto mt16" id="list"></div>`);
    state._relist = () => { const d = applyFilters(DB.casos); $("#list").innerHTML = d.length ? d.map(caseCard).join("") : emptyHTML(); setCount(d.length, DB.casos.length); };
    state._relist();
    wireReveal(); wireToolbar(renderCasos, {});
  }
  function caseCard(c) {
    return `<article class="item" data-reveal>
      <div class="top"><span class="badge blue">${esc(c.cat)}</span></div>
      <h4>${esc(c.titulo)}</h4>
      <p class="dim"><strong>Problema:</strong> ${esc(c.problema)}</p>
      <p class="dim" style="color:var(--ink)"><strong>🗣 Para la audiencia:</strong> ${esc(c.pregunta)}</p>
      <button class="btn sm ghost no-print" data-toggle>Revelar solución ▾</button>
      <div class="hidden-ans">
        <dl class="kv">
          <dt>Contexto</dt><dd>${esc(c.contexto)}</dd>
          <dt>Info disponible</dt><dd>${esc(c.info)}</dd>
          <dt>Solución IA</dt><dd>${esc(c.solucion)}</dd>
          <dt>Herramientas</dt><dd>${c.tools.map(t => `<span class="chip" style="padding:3px 9px;font-size:12px">${esc(t)}</span>`).join(" ")}</dd>
          <dt>Impacto</dt><dd>${esc(c.impacto)}</dd>
          <dt>Métrica de éxito</dt><dd>${esc(c.metrica)}</dd>
          <dt>Riesgos</dt><dd>${esc(c.riesgos)}</dd>
          <dt>Primer paso</dt><dd>${esc(c.primer)}</dd>
          <dt>Variante simple</dt><dd>${esc(c.simple)}</dd>
          <dt>Variante avanzada</dt><dd>${esc(c.avanzada)}</dd>
        </dl></div></article>`;
  }

  /* ---------- Herramientas ---------- */
  function renderTools() {
    const cats = [...new Set(DB.herramientas.map(t => t.cat))];
    bankShell(`<p class="eyebrow">Banco</p><h2 class="h2">Herramientas IA</h2>
      <p class="lead mt8">${DB.herramientas.length} herramientas con qué hacen, para qué sirven, caso, riesgo y mejor uso. Preséntalas como capacidades, no como catálogo.</p>
      ${toolbar({ placeholder: "Buscar herramienta…", cats })}
      <div class="grid auto mt16" id="list"></div>`);
    state._relist = () => { const d = applyFilters(DB.herramientas); $("#list").innerHTML = d.length ? d.map(toolCard).join("") : emptyHTML(); setCount(d.length, DB.herramientas.length); };
    state._relist();
    wireReveal(); wireToolbar(renderTools, {});
  }
  function toolCard(t) {
    return `<article class="item tool" data-reveal>
      <div class="head"><div class="logo" style="background:${esc(t.color)}">${esc(t.logo)}</div>
        <div><div class="cat">${esc(t.cat)} ${t.verify ? verifyBadge : ""}</div><h4>${esc(t.name)}</h4></div></div>
      <p class="dim">${esc(t.que)}</p>
      <button class="btn sm ghost no-print" data-toggle>Ver detalle ▾</button>
      <div class="hidden-ans"><dl class="kv">
        <dt>Para qué</dt><dd>${esc(t.para)}</dd>
        <dt>Mejor uso</dt><dd>${esc(t.mejor)}</dd>
        <dt>Productividad</dt><dd>${esc(t.prod)}</dd>
        <dt>En AEC</dt><dd>${esc(t.aec)}</dd>
        <dt>Limitación</dt><dd>${esc(t.limite)}</dd>
        <dt>Riesgo</dt><dd>${esc(t.riesgo)}</dd>
        <dt>Alternativa</dt><dd>${esc(t.alt)}</dd>
        <dt>Fuente</dt><dd>${esc(t.fuente)}${t.verify ? " · " + verifyBadge : ""}</dd>
      </dl></div></article>`;
  }

  /* ---------- Preguntas ---------- */
  const catLabels = { vf: "Verdadero/Falso", alt: "Alternativas", abierta: "Abierta", caso: "Análisis de caso", herramienta: "Elige herramienta", automatizar: "Qué automatizar" };
  function renderPreguntas() {
    const cats = Object.keys(catLabels);
    const f = state.filters.preguntas || (state.filters.preguntas = { q: "", cat: "all", nivel: "all" });
    bankShell(`<p class="eyebrow">Banco</p><h2 class="h2">Banco de preguntas</h2>
      <p class="lead mt8">${DB.preguntas.length} preguntas en 6 categorías y 3 niveles. Filtra, lanza una al azar a pantalla completa, revela la respuesta y suma puntos por equipo. Exporta para imprimir.</p>
      <div class="toolbar no-print">
        <div class="search">⌕ <input id="searchInput" type="text" placeholder="Buscar pregunta…" value="${esc(f.q)}" aria-label="Buscar"></div>
        <select class="select" id="nivelSel">${["all", "basico", "intermedio", "avanzado"].map(n => `<option value="${n}" ${f.nivel === n ? "selected" : ""}>${n === "all" ? "Todo nivel" : n}</option>`).join("")}</select>
        <button class="btn sm primary" id="tbRandom">🎲 Pregunta al azar</button>
        <button class="btn sm no-print" id="tbPrint">⎙ Exportar</button>
      </div>
      <div class="filters" id="catFilters">
        <button class="pill ${f.cat === "all" ? "active" : ""}" data-cat="all">Todas</button>
        ${cats.map(c => `<button class="pill ${f.cat === c ? "active" : ""}" data-cat="${c}">${esc(catLabels[c])}</button>`).join("")}
      </div>
      <div class="count-note no-print mt8" id="countNote"></div>
      <div class="grid auto mt16" id="list"></div>`);
    state._relist = () => { const d = applyFilters(DB.preguntas); $("#list").innerHTML = d.length ? d.map(qCard).join("") : emptyHTML(); setCount(d.length, DB.preguntas.length); };
    state._relist();
    wireReveal(); wireToolbar(renderPreguntas, {});
  }
  function qCard(q) {
    let body = "";
    if (q.cat === "vf") {
      body = `<div class="opts">
        <div class="opt ${q.correct === true ? "correct" : ""}"><span class="ltr">V</span> Verdadero</div>
        <div class="opt ${q.correct === false ? "correct" : ""}"><span class="ltr">F</span> Falso</div></div>`;
    } else if (q.opts) {
      body = `<div class="opts">${q.opts.map((o, i) =>
        `<div class="opt ${i === q.correct ? "correct" : ""}"><span class="ltr">${String.fromCharCode(65 + i)}</span> ${esc(o)}</div>`).join("")}</div>`;
    } else {
      body = `<p class="dim"><strong>Respuesta esperada:</strong> ${esc(q.esperada)}</p>`;
    }
    return `<article class="item" data-reveal>
      <div class="top"><span class="badge violet">${esc(catLabels[q.cat])}</span>${lvlBadge(q.nivel)}${q.verify ? verifyBadge : ""}</div>
      <h4>${esc(q.q)}</h4>
      <button class="btn sm ghost no-print" data-toggle>Revelar respuesta ▾</button>
      <div class="hidden-ans">${body}<p class="mt8 dim"><strong>Por qué:</strong> ${esc(q.exp)}</p>
        ${q.uso ? `<p class="mt8"><span class="badge gray">uso</span> ${esc(q.uso)}</p>` : ""}</div></article>`;
  }

  /* ---------- Productividad ---------- */
  function renderProd() {
    bankShell(`<p class="eyebrow">Módulo</p><h2 class="h2">Productividad con IA</h2>
      <p class="lead mt8">Diez áreas donde la IA cambia tu día, cinco ejercicios prácticos para hacer en vivo y dieciséis tips accionables.</p>
      <h3 class="h3 mt24">Áreas · antes vs. con IA</h3>
      <div class="grid auto mt12">${DB.prodAreas.map(a => `
        <div class="card hover"><h3 style="font-size:18px">${a.ico} ${esc(a.area)}</h3>
        <p class="dim" style="font-size:14px"><strong>Antes:</strong> ${esc(a.antes)}</p>
        <p style="font-size:14px;color:var(--ink)"><strong>Con IA:</strong> ${esc(a.con)}</p>
        <div class="mt8">${a.tools.map(t => `<span class="chip" style="padding:3px 9px;font-size:11px">${esc(t)}</span>`).join(" ")}</div></div>`).join("")}</div>

      <h3 class="h3 mt32">Ejercicios prácticos</h3>
      <div class="grid auto mt12" id="exList">${DB.prodEjercicios.map(exCard).join("")}</div>

      <h3 class="h3 mt32">Tips y trucos <span class="dim" style="font-size:.55em">· primeros 8 de ${DB.tips.length}</span></h3>
      <div class="grid auto mt12">${DB.tips.slice(0, 8).map(t => `
        <div class="card pad-sm hover"><span class="kicker">${esc(t.cat)}</span><h4 style="font-size:16px">${esc(t.t)}</h4><p style="font-size:14px">${esc(t.d)}</p></div>`).join("")}</div>
      <button class="btn sm mt16" data-goto="recursos">Ver los ${DB.tips.length} tips + trucos de prompt, errores y anécdotas →</button>`);
    wireReveal();
  }
  function exCard(e) {
    return `<article class="item" data-reveal>
      <div class="top"><span class="badge green">Ejercicio</span><span class="badge gray">${esc(e.tiempo)}</span></div>
      <h4>${esc(e.titulo)}</h4><p class="dim">${esc(e.reto)}</p>
      <button class="btn sm ghost no-print" data-toggle>Ver antes/después ▾</button>
      <div class="hidden-ans">
        <p><span class="badge danger">débil</span> ${esc(e.malo)}</p>
        <p class="mt8"><span class="badge green">fuerte</span> ${esc(e.bueno)}</p>
        <p class="mt8 callout">${esc(e.clave)}</p></div></article>`;
  }

  /* ---------- Dinámicas ---------- */
  function renderDinamicas() {
    bankShell(`<p class="eyebrow">Taller</p><h2 class="h2">Dinámicas grupales</h2>
      <p class="lead mt8">${DB.dinamicas.length} dinámicas listas para ejecutar, con objetivo, tiempo, instrucciones, preguntas, respuesta esperada y criterio. Usa el temporizador y el marcador.</p>
      <div class="chips mt8"><button class="btn sm" id="dynTimer">◷ Abrir temporizador</button><button class="btn sm" id="dynScore">🏆 Abrir marcador</button></div>
      <div class="grid auto mt16" id="list">${DB.dinamicas.map(dynCard).join("")}</div>`);
    wireReveal();
    $("#dynTimer").onclick = () => $("#timerPanel").classList.add("on");
    $("#dynScore").onclick = () => $("#scorePanel").classList.add("on");
  }
  function dynCard(d) {
    const li = a => a.map(x => `<li>${esc(x)}</li>`).join("");
    return `<article class="item" data-reveal>
      <div class="top"><span class="badge violet">${esc(d.fmt)}</span><span class="badge gray">⏱ ${esc(d.tiempo)}</span></div>
      <h4>${esc(d.titulo)}</h4><p class="dim">${esc(d.objetivo)}</p>
      <button class="btn sm ghost no-print" data-toggle>Ver guía completa ▾</button>
      <div class="hidden-ans">
        <dl class="kv">
          <dt>Ponente</dt><dd><ul style="margin:0;padding-left:16px">${li(d.ponente)}</ul></dd>
          <dt>Audiencia</dt><dd><ul style="margin:0;padding-left:16px">${li(d.audiencia)}</ul></dd>
          <dt>Preguntas</dt><dd><ul style="margin:0;padding-left:16px">${li(d.preguntas)}</ul></dd>
          <dt>Esperada</dt><dd>${esc(d.esperada)}</dd>
          <dt>Criterio</dt><dd>${esc(d.criterio)}</dd>
        </dl>
        ${d.link ? `<button class="btn sm mt12" data-goto="${esc(d.link)}">Ir al módulo relacionado →</button>` : ""}
      </div></article>`;
  }

  /* ---------- Gráficas ---------- */
  function aflow(nodes) {
    return `<div class="aflow">${nodes.map((n, i) => `${i ? '<span class="ar">→</span>' : ""}<div class="node ${n.hot ? "hot" : ""}">${esc(n.t)}${n.s ? `<small>${esc(n.s)}</small>` : ""}</div>`).join("")}</div>`;
  }
  function renderGraficas() {
    const toolMap = [
      ["Escribir / redactar", ["ChatGPT", "Claude"]],
      ["Investigar con fuentes", ["Perplexity", "Gemini"]],
      ["Consultar TUS documentos", ["NotebookLM", "Vertex AI"]],
      ["Reuniones / actas", ["Read AI"]],
      ["Imagen", ["Midjourney", "Firefly"]],
      ["Video / avatar", ["Runway", "Sora", "HeyGen"]],
      ["Voz", ["ElevenLabs"]],
      ["Código", ["Claude Code", "Cursor", "GitHub Copilot"]],
      ["Automatizar", ["n8n", "Make", "Zapier", "Power Automate"]],
      ["Construir apps", ["Lovable", "V0", "Replit"]],
      ["Oficina (docs/hojas)", ["M365 Copilot", "Gemini Workspace", "Notion AI"]]
    ];
    const toc = [["g1","Multiplicador"],["g2","IA/ML/DL"],["g3","Gen vs Pred"],["g4","Flujo de datos"],["g5","Tokens & embeddings"],["g6","RAG vs fine-tuning"],["g7","Chatbot→Agente"],["g8","Impacto/Facilidad"],["g9","Riesgo/Autonomía"],["g10","Mapa herramientas"],["g11","Roadmap"],["g12","Automatización"],["g13","Caso obra"],["g14","Caso BIM"],["g15","Caso CV"]];
    bankShell(`<p class="eyebrow">Manual · Visual</p><h2 class="h2">Gráficas y <span class="grad">mapas</span></h2>
      <p class="lead mt8">15 visualizaciones didácticas para explicar la IA. Las cifras con ⚠ requieren verificación antes de presentar.</p>
      <div class="filters no-print mt12">${toc.map(([a,l])=>`<a class="pill" href="#${a}">${l}</a>`).join("")}</div>

      <h3 class="h3 mt32" id="g1">1 · IA como multiplicador de productividad</h3>
      <div class="card mt12"><div class="bars">${barsBlock(DB.stats.productividad, "")}</div><p class="dim mt12">Mismo usuario, distinto nivel de aprovechamiento.</p></div>

      <h3 class="h3 mt32" id="g2">2 · IA ⊃ Machine Learning ⊃ Deep Learning</h3>
      <div class="grid two mt12" style="align-items:center">
        <div class="venn"><div class="ring r1">IA</div><div class="ring r2">ML</div><div class="ring r3">DL<small>redes profundas</small></div></div>
        <div><p class="lead">Círculos concéntricos, no cosas distintas: <b>Deep Learning</b> está dentro de <b>ML</b>, que está dentro de <b>IA</b>.</p></div>
      </div>

      <h3 class="h3 mt32" id="g3">3 · IA generativa vs. predictiva</h3>
      <div class="grid two mt12">
        <div class="card"><span class="kicker">${esc(DB.genVsPred.gen.t)} · crea</span><p>${esc(DB.genVsPred.gen.d)}</p><ul>${DB.genVsPred.gen.ej.map(e => `<li>${esc(e)}</li>`).join("")}</ul></div>
        <div class="card"><span class="kicker" style="color:var(--blue)">${esc(DB.genVsPred.pred.t)} · estima</span><p>${esc(DB.genVsPred.pred.d)}</p><ul>${DB.genVsPred.pred.ej.map(e => `<li>${esc(e)}</li>`).join("")}</ul></div>
      </div>

      <h3 class="h3 mt32" id="g4">4 · Flujo: datos → modelo → respuesta → validación → valor</h3>
      <div class="card mt12">${aflow([{t:"Datos",s:"docs, fotos, sensores"},{t:"Modelo",s:"procesa/genera"},{t:"Respuesta",s:"borrador"},{t:"Validación humana",s:"revisa y aprueba",hot:true},{t:"Valor",s:"decisión/acción"}])}</div>

      <h3 class="h3 mt32" id="g5">5 · Tokenización y embeddings</h3>
      <div class="card mt12">
        <p class="dim" style="font-size:13px">El texto se trocea en <b>tokens</b>…</p>
        <div class="tok mt8">${"La IA predice el siguiente token".split(" ").map(w=>`<span class="tk">${esc(w)}</span>`).join("")}</div>
        <p class="dim mt16" style="font-size:13px">…y cada idea se ubica como un <b>vector</b> (embedding); lo parecido queda cerca:</p>
        <div class="tok mt8"><span class="tk">multa</span><span class="ar" style="color:var(--accent)">≈</span><span class="tk">penalidad</span><span class="vec" style="margin-left:10px">${"".padEnd(6).split("").map(()=>'<i></i>').join("")}</span></div>
      </div>

      <h3 class="h3 mt32" id="g6">6 · RAG vs. fine-tuning</h3>
      <div class="grid two mt12">
        <div class="card"><span class="kicker">RAG · conocimiento</span><p>Recupera TUS documentos y responde con fuente. Rápido de actualizar.</p><p class="mt8 dim">Úsalo para responder sobre normas, BEP, contratos.</p></div>
        <div class="card"><span class="kicker" style="color:var(--blue)">Fine-tuning · comportamiento</span><p>Reentrena el estilo/tarea. Necesita volumen de datos.</p><p class="mt8 dim">Úsalo para que siempre redacte en tu formato.</p></div>
      </div>

      <h3 class="h3 mt32" id="g7">7 · Chatbot · Asistente · Agente</h3>
      <div class="grid mt12">${DB.cba.map((c, i) => `<div class="card hover"><div class="num ${["", "blue", "violet"][i]}">${i + 1}</div><h3>${esc(c.t)}</h3><p class="dim">${esc(c.verbo)} — ${esc(c.d)}</p></div>`).join("")}</div>

      <h3 class="h3 mt32" id="g8">8 · Matriz impacto vs. facilidad</h3>
      <div class="grid two mt12" style="align-items:center">
        <div class="matrix"><div class="ql"><b>Apuesta grande</b><span>Alto impacto · difícil</span></div><div class="ql good"><b>Quick wins ✦</b><span>Alto impacto · fácil</span></div><div class="ql"><b>Evitar</b><span>Bajo impacto · difícil</span></div><div class="ql"><b>Relleno</b><span>Bajo impacto · fácil</span></div><div class="axis-x">Facilidad →</div><div class="axis-y">Impacto →</div></div>
        <div><p class="lead">El primer piloto vive en <strong>Quick wins</strong>: alto impacto, baja dificultad.</p></div>
      </div>

      <h3 class="h3 mt32" id="g9">9 · Matriz riesgo vs. autonomía</h3>
      <div class="grid two mt12" style="align-items:center">
        <div class="matrix"><div class="ql"><b>Supervisar de cerca</b><span>Alto riesgo · alta autonomía</span></div><div class="ql good"><b>Automatizar ✦</b><span>Bajo riesgo · alta autonomía</span></div><div class="ql"><b>Human-in-the-loop</b><span>Alto riesgo · baja autonomía</span></div><div class="ql"><b>Asistir</b><span>Bajo riesgo · baja autonomía</span></div><div class="axis-x">Autonomía →</div><div class="axis-y">Riesgo →</div></div>
        <div><p class="lead">A más riesgo, más <strong>human-in-the-loop</strong>. Solo automatiza del todo lo de bajo riesgo.</p></div>
      </div>

      <h3 class="h3 mt32" id="g10">10 · Mapa de herramientas por tarea</h3>
      <div class="card mt12"><div class="tmap">${toolMap.map(([task, ts]) => `<div class="row"><b>${esc(task)}</b><div class="chips">${ts.map(t => `<span class="chip" style="padding:4px 10px;font-size:12px">${esc(t)}</span>`).join("")}</div></div>`).join("")}</div></div>

      <h3 class="h3 mt32" id="g11">11 · Roadmap de adopción IA</h3>
      <div class="card mt12"><p class="kicker">Personal</p>${aflow([{t:"Usar como chat"},{t:"Prompts con criterio"},{t:"Asistentes guardados"},{t:"1 automatización"},{t:"AI-first",hot:true}])}</div>
      <div class="card mt12"><p class="kicker">Empresa</p>${aflow([{t:"Gobernar datos"},{t:"Quick win medible"},{t:"Piloto 4 sem."},{t:"Escalar lo que probó valor"},{t:"AI-native",hot:true}])}</div>

      <h3 class="h3 mt32" id="g12">12 · Flujo de automatización (n8n / Make / Zapier)</h3>
      <div class="card mt12">${aflow([{t:"Disparador",s:"correo, formulario, hora"},{t:"IA",s:"clasifica/redacta",hot:true},{t:"Acción",s:"crea tarea / actualiza"},{t:"Notifica",s:"al responsable"},{t:"Aprobación",s:"human-in-the-loop"}])}</div>

      <h3 class="h3 mt32" id="g13">13 · Caso AEC: obra → decisión</h3>
      <div class="card mt12">${aflow([{t:"Obra",s:"parte diario"},{t:"Datos",s:"digitalizados"},{t:"IA",s:"consolida/analiza",hot:true},{t:"Dashboard",s:"avance, riesgos"},{t:"Decisión",s:"gerencia"}])}</div>

      <h3 class="h3 mt32" id="g14">14 · Caso BIM: documentos → respuesta verificable</h3>
      <div class="card mt12">${aflow([{t:"Documentos",s:"BEP, normas"},{t:"RAG",s:"recupera",hot:true},{t:"Asistente",s:"responde con cita"},{t:"Respuesta",s:"verificable"},{t:"Acción",s:"checklist"}])}</div>

      <h3 class="h3 mt32" id="g15">15 · Caso Computer Vision: cámara → reporte</h3>
      <div class="card mt12">${aflow([{t:"Cámara",s:"obra"},{t:"Detección",s:"EPP, grietas",hot:true},{t:"Alerta",s:"evento/zona/hora"},{t:"Responsable",s:"notificado"},{t:"Reporte",s:"evidencia"}])}</div>

      <h3 class="h3 mt32">+ Escalera de madurez IA</h3>
      <div class="process mt12" style="--steps:${DB.escalera.length}">${DB.escalera.map(x => `<div class="step"><span class="s">Nivel ${esc(x.n)}</span><h4>${esc(x.t)}</h4><p>${esc(x.d)}</p></div>`).join("")}</div>

      <h3 class="h3 mt32">+ Adopción: el mundo vs. construcción</h3>
      <div class="card mt12"><div class="bars">${barsBlock(DB.stats.adopcion, "%")}</div></div>`);
    animateBars();
  }
  function barsBlock(d, suffix) {
    const max = Math.max(...d.map(x => x.v));
    return d.map(x => `<div class="bar-row"><div class="bl">${esc(x.l)} ${x.verify ? verifyBadge : ""}</div>
      <div class="bar-track"><div class="bar-fill" data-w="${(x.v / max * 100).toFixed(1)}"></div></div>
      <div class="bv">${esc(x.v)}${esc(suffix)}</div></div>`).join("");
  }

  /* ===================================================================
     BIBLIOTECA DE CONCEPTOS (cross-linked)
     =================================================================== */
  function renderBiblioteca() {
    const f = state.filters.biblioteca || (state.filters.biblioteca = { q: "", cat: "all", nivel: "all" });
    bankShell(`
      <p class="eyebrow">Manual · Biblioteca</p>
      <h2 class="h2">Biblioteca de <span class="grad">conceptos de IA</span></h2>
      <p class="lead mt8">${DB.conceptos.length} conceptos clave que se cruzan entre sí. Cada uno trae qué es, cómo funciona, una analogía, un dato clave, un tip y un ejemplo en AEC. Toca un concepto para abrirlo y saltar a sus conceptos relacionados.</p>
      <div class="toolbar no-print">
        <div class="search">⌕ <input id="searchInput" type="text" placeholder="Buscar concepto…" value="${esc(f.q)}" aria-label="Buscar"></div>
        <select class="select" id="nivelSel">${["all","basico","intermedio","avanzado"].map(n => `<option value="${n}" ${f.nivel === n ? "selected" : ""}>${n === "all" ? "Todo nivel" : n}</option>`).join("")}</select>
        <button class="btn sm" id="cmdkOpen" title="Buscar (⌘K)">⌘K Buscar</button>
      </div>
      <div class="filters" id="catFilters">
        <button class="pill ${f.cat === "all" ? "active" : ""}" data-cat="all">Todas</button>
        ${DB.conceptCats.map(c => `<button class="pill ${f.cat === c.id ? "active" : ""}" data-cat="${c.id}">${c.ico} ${esc(c.label)}</button>`).join("")}
      </div>
      <div class="count-note no-print mt8" id="countNote"></div>
      <div class="grid auto mt16" id="list"></div>`);
    const data = applyFilters(DB.conceptos);
    $("#list").innerHTML = data.length ? data.map(conceptCard).join("") : emptyHTML();
    setCount(data.length, DB.conceptos.length);
    wireReveal();
    const si = $("#searchInput"); if (si) si.oninput = () => { f.q = si.value; const d = applyFilters(DB.conceptos); $("#list").innerHTML = d.length ? d.map(conceptCard).join("") : emptyHTML(); setCount(d.length, DB.conceptos.length); };
    $("#nivelSel").onchange = e => { f.nivel = e.target.value; renderBiblioteca(); };
    $("#catFilters").onclick = e => { const b = e.target.closest(".pill"); if (b) { f.cat = b.dataset.cat; renderBiblioteca(); } };
    $("#cmdkOpen").onclick = openCmd;
  }
  function conceptCard(c) {
    const m = catMeta(c.cat);
    return `<button class="concept-card" data-concept="${c.id}">
      <div class="top"><span class="badge" style="background:color-mix(in srgb,${m.color} 24%,transparent);color:${m.color}">${m.ico} ${esc(m.label)}</span>${lvlBadge(c.nivel)}</div>
      <div class="ct">${esc(c.term)}</div>
      <div class="cd">${esc(c.que)}</div>
      <div class="crel">↔ ${c.rel.length} conceptos relacionados</div>
    </button>`;
  }
  function openConcept(id) {
    const c = conceptById(id); if (!c) return;
    state.mod = "biblioteca"; markSidebar();
    location.hash = "biblioteca";
    $("#crumb").innerHTML = `Biblioteca · <small>${esc(c.term)}</small>`;
    bankShell(conceptDetailHTML(c));
    wireReveal();
    $("#view .scroll")?.scrollTo(0, 0);
    updateProgress();
  }
  function conceptDetailHTML(c) {
    const m = catMeta(c.cat);
    const rel = c.rel.map(conceptById).filter(Boolean);
    const sameCat = DB.conceptos.filter(x => x.cat === c.cat && x.id !== c.id).slice(0, 6);
    const sec = (cls, lbl, txt, extra = "") => `<div class="sec ${cls}"><div class="lbl">${lbl} ${extra}</div><p>${esc(txt)}</p></div>`;
    return `
      <button class="btn sm ghost no-print mt8" data-back="biblioteca">‹ Biblioteca</button>
      <div class="mt16" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <span class="badge" style="background:color-mix(in srgb,${m.color} 24%,transparent);color:${m.color}">${m.ico} ${esc(m.label)}</span>${lvlBadge(c.nivel)}
      </div>
      <h2 class="h1 mt12" style="font-size:clamp(30px,4.4vw,52px)">${esc(c.term)}</h2>
      <p class="lead mt12">${esc(c.que)}</p>
      <div class="concept-detail mt24">
        <div class="grid two">
          ${sec("como", "⚙ Cómo funciona", c.como)}
          ${sec("analogy", "◑ Analogía", c.analogia)}
        </div>
        <div class="grid two">
          ${sec("dato", "★ Dato clave", c.dato, c.datoVerify ? verifyBadge : "")}
          ${sec("tip", "✦ Tip / truco", c.tip)}
        </div>
        ${sec("ej", "⌂ Ejemplo en AEC", c.ejemplo)}
      </div>
      ${rel.length ? `<h3 class="h3 mt32">Conceptos relacionados</h3>
        <div class="crosslinks mt12">${rel.map(r => `<button class="chip tap" data-concept="${r.id}">${esc(r.term)} →</button>`).join("")}</div>` : ""}
      ${sameCat.length ? `<h3 class="h3 mt32">Más en ${esc(m.label)}</h3>
        <div class="crosslinks mt12">${sameCat.map(r => `<button class="chip tap" data-concept="${r.id}">${esc(r.term)}</button>`).join("")}</div>` : ""}`;
  }

  /* ===================================================================
     RUTAS DE APRENDIZAJE (sesiones académicas)
     =================================================================== */
  function renderRutas() {
    bankShell(`
      <p class="eyebrow">Manual · Academia</p>
      <h2 class="h2">Rutas de <span class="grad">aprendizaje</span></h2>
      <p class="lead mt8">${DB.rutas.length} sesiones con estructura académica: presentación, motivación, conceptos clave (enlazados a la biblioteca), proyecto y estrategia, proceso convencional vs. propuesto, y key takeaway. Toca una sesión para abrirla.</p>
      <div class="grid mt16" style="grid-template-columns:1fr;gap:12px" id="list">${DB.rutas.map((r, i) => rutaCard(r, i === 0)).join("")}</div>`);
    wireReveal();
  }
  function rutaCard(r, open) {
    const concepts = r.conceptos.map(conceptById).filter(Boolean);
    const row = (k, v) => `<div class="rstep"><div class="rk">${k}</div><div class="rv">${v}</div></div>`;
    return `<div class="ruta ${open ? "open" : ""}">
      <button class="rh" data-ruta="${r.id}">
        <div class="rnum">${esc(r.n)}</div>
        <div><div class="rt">${esc(r.titulo)}</div><div class="rtt">${esc(r.subtitulo)} · ${esc(r.nivel)} · ⏱ ${esc(r.dur)}</div></div>
        <div class="rcaret">▾</div>
      </button>
      <div class="rbody">
        ${row("Presentación", esc(r.presentacion))}
        ${row("Motivación", esc(r.motivacion))}
        ${row("Conceptos clave", `<div class="crosslinks">${concepts.map(c => `<button class="chip tap" data-concept="${c.id}">${esc(c.term)}</button>`).join("")}</div>`)}
        ${row("Proyecto y estrategia", `<ol style="margin:0;padding-left:18px">${r.estrategia.map(s => `<li>${esc(s)}</li>`).join("")}</ol>`)}
        ${row("Convencional", esc(r.convencional))}
        ${row("Propuesto", `${esc(r.propuesto)} <span class="dim">→ <b style="color:var(--ink)">${esc(r.ventaja)}</b></span>`)}
        ${row("Key takeaway", `<div class="callout" style="margin:0">${esc(r.takeaway)}</div>`)}
        ${row("Ideas", `<ul style="margin:0;padding-left:18px">${r.ideas.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`)}
      </div>
    </div>`;
  }

  /* ===================================================================
     MAPA DE CONCEPTOS
     =================================================================== */
  function renderMapa() {
    bankShell(`
      <p class="eyebrow">Manual · Mapa</p>
      <h2 class="h2">Mapa de <span class="grad">conceptos</span></h2>
      <p class="lead mt8">El territorio completo en una vista: ${DB.conceptos.length} conceptos en ${DB.conceptCats.length} categorías. Toca una categoría para filtrarla en la biblioteca, o un concepto para abrirlo.</p>
      <div class="grid auto mt20" id="list">${DB.conceptCats.map(cat => {
        const items = DB.conceptos.filter(c => c.cat === cat.id);
        return `<div class="card">
          <button class="kicker" data-catbib="${cat.id}" style="background:none;border:0;padding:0;cursor:pointer;color:${cat.color}">${cat.ico} ${esc(cat.label)} · ${items.length}</button>
          <div class="crosslinks mt8">${items.map(c => `<button class="chip tap" data-concept="${c.id}">${esc(c.term)}</button>`).join("")}</div>
        </div>`;
      }).join("")}</div>`);
    wireReveal();
  }

  /* ===================================================================
     RECURSOS (tips · prompt-patterns · errores · anécdotas · analogías)
     =================================================================== */
  function renderRecursos() {
    const f = state.filters.recursos || (state.filters.recursos = { q: "" });
    const q = (f.q || "").toLowerCase();
    const fil = arr => !q ? arr : arr.filter(x => JSON.stringify(x).toLowerCase().includes(q));
    const tips = fil(DB.tips || []), pats = fil(DB.promptPatterns || []), errs = fil(DB.errores || []), anec = fil(DB.anecdotas || []), anal = fil(DB.analogias || []);
    const sec = (id, title, n) => `<h3 class="h3 mt32" id="${id}">${title} <span class="dim" style="font-size:.6em">· ${n}</span></h3>`;
    bankShell(`
      <p class="eyebrow">Manual · Recursos</p>
      <h2 class="h2">Tips, trucos y <span class="grad">analogías</span></h2>
      <p class="lead mt8">${(DB.tips||[]).length} tips · ${(DB.promptPatterns||[]).length} trucos de prompt · ${(DB.errores||[]).length} errores comunes · ${(DB.anecdotas||[]).length} anécdotas · ${(DB.analogias||[]).length} analogías. Usa 🎲 para una tarjeta al azar.</p>
      <div class="toolbar no-print">
        <div class="search">⌕ <input id="searchInput" type="text" placeholder="Buscar en recursos…" value="${esc(f.q)}" aria-label="Buscar"></div>
        <button class="btn sm primary" id="tbRandom">🎲 Recurso al azar</button>
      </div>
      <div class="filters no-print">${[["secTips","Tips"],["secPat","Trucos de prompt"],["secErr","Errores"],["secAnec","Anécdotas"],["secAnal","Analogías"]].map(([a,l])=>`<a class="pill" href="#${a}">${l}</a>`).join("")}</div>
      <div id="recWrap">
        ${sec("secTips","✦ Tips de productividad", tips.length)}
        <div class="grid auto mt12">${tips.map(t=>`<div class="card pad-sm hover"><span class="kicker">${esc(t.cat)}</span><h4 style="font-size:16px">${esc(t.t)}</h4><p style="font-size:14px">${esc(t.d)}</p></div>`).join("")||emptyHTML()}</div>
        ${sec("secPat","⌨ Trucos de prompt engineering", pats.length)}
        <div class="grid auto mt12">${pats.map(p=>`<div class="card pad-sm hover"><span class="kicker">${esc(p.name)}</span><p style="font-size:14px;color:var(--ink)"><code style="font-family:ui-monospace,monospace;font-size:.92em;color:var(--lav)">${esc(p.pattern)}</code></p><p class="dim mt8" style="font-size:13px">ej: ${esc(p.ej)}</p></div>`).join("")||emptyHTML()}</div>
        ${sec("secErr","⚠ Errores comunes", errs.length)}
        <div class="grid auto mt12">${errs.map(e=>`<div class="card pad-sm hover"><p style="color:var(--ink)"><span class="badge danger">error</span> ${esc(e.error)}</p><p class="mt8" style="font-size:14px"><span class="badge green">arréglalo</span> ${esc(e.fix)}</p></div>`).join("")||emptyHTML()}</div>
        ${sec("secAnec","◑ Anécdotas didácticas", anec.length)}
        <div class="grid auto mt12">${anec.map(a=>`<article class="item" data-reveal><h4>${esc(a.titulo)}</h4><p class="dim">${esc(a.texto)}</p><button class="btn sm ghost no-print" data-toggle>Ver lección ▾</button><div class="hidden-ans"><p class="callout" style="margin:0">${esc(a.leccion)}</p></div></article>`).join("")||emptyHTML()}</div>
        ${sec("secAnal","◐ Analogías que se quedan", anal.length)}
        <div class="grid auto mt12">${anal.map(a=>`<div class="card pad-sm hover"><span class="kicker">${esc(a.c)}</span><h4 style="font-size:16px">${esc(a.t)}</h4><p style="font-size:14px">${esc(a.d)}</p></div>`).join("")||""}</div>
      </div>`);
    wireReveal();
    const si = $("#searchInput"); if (si) si.oninput = () => { f.q = si.value; renderRecursos(); };
    $("#tbRandom").onclick = () => randomForModule();
  }

  /* ===================================================================
     COMMAND PALETTE (⌘K)
     =================================================================== */
  function cmdActions() {
    return [
      { ico: "🎲", label: "Tarjeta aleatoria", sub: "según el módulo", kw: "random azar", run: () => { closeCmd(); randomForModule(); } },
      { ico: "◷", label: "Temporizador", sub: "actividades", kw: "timer reloj", run: () => { closeCmd(); $("#timerPanel").classList.add("on"); } },
      { ico: "🏆", label: "Marcador por equipos", sub: "puntos", kw: "score equipos", run: () => { closeCmd(); $("#scorePanel").classList.add("on"); } },
      { ico: "☾", label: "Cambiar tema claro/oscuro", sub: "", kw: "theme dark light tema", run: () => { closeCmd(); applyTheme(state.theme === "dark" ? "light" : "dark", true); } },
      { ico: "⤢", label: "Pantalla completa", sub: "", kw: "fullscreen", run: () => { closeCmd(); toggleFs(); } },
      { ico: "◷", label: "Elegir recorrido / modo", sub: "rápida · taller · curso", kw: "modo track", run: () => { closeCmd(); openMode(); } }
    ];
  }
  function cmdBuild(q) {
    q = (q || "").trim().toLowerCase();
    const match = (s) => !q || s.toLowerCase().includes(q);
    const out = [];
    DB.modules.forEach(m => { if (match(m.label) || match(m.group)) out.push({ type: "Ir a", ico: m.ico, label: m.label, sub: m.group, run: () => { closeCmd(); gotoModule(m.id); } }); });
    DB.conceptos.forEach(c => { const cm = catMeta(c.cat); if (match(c.term) || match(cm.label) || match(c.que)) out.push({ type: "Conceptos", ico: "❖", label: c.term, sub: cm.label, run: () => { closeCmd(); openConcept(c.id); } }); });
    cmdActions().forEach(a => { if (match(a.label) || match(a.kw)) out.push({ type: "Acciones", ico: a.ico, label: a.label, sub: a.sub, run: a.run }); });
    return out;
  }
  function cmdRender() {
    const items = state.cmd.items;
    if (!items.length) { $("#cmdList").innerHTML = `<div class="kempty">Sin resultados</div>`; return; }
    let html = "", lastType = "";
    items.forEach((it, i) => {
      if (it.type !== lastType) { html += `<div class="kgroup">${esc(it.type)}</div>`; lastType = it.type; }
      html += `<div class="kitem" role="option" data-i="${i}" aria-selected="${i === state.cmd.sel}">
        <span class="kico">${it.ico}</span><span>${esc(it.label)}</span>${it.sub ? `<span class="ksub">${esc(it.sub)}</span>` : ""}</div>`;
    });
    const list = $("#cmdList"); list.innerHTML = html;
    const sel = list.querySelector('[aria-selected="true"]'); if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest" });
  }
  function cmdFilter(q) { state.cmd.items = cmdBuild(q).slice(0, 60); state.cmd.sel = 0; cmdRender(); }
  function openCmd() {
    state.cmd.open = true; $("#cmd").classList.add("on");
    const inp = $("#cmdInput"); inp.value = ""; cmdFilter("");
    setTimeout(() => inp.focus(), 20);
  }
  function closeCmd() { state.cmd.open = false; $("#cmd").classList.remove("on"); }
  function cmdMove(d) { const n = state.cmd.items.length; if (!n) return; state.cmd.sel = (state.cmd.sel + d + n) % n; cmdRender(); }

  /* ---------- shared bank helpers ---------- */
  function emptyHTML() { return `<div class="empty" style="grid-column:1/-1"><div class="big">🔍</div>Sin resultados. Ajusta la búsqueda o los filtros.</div>`; }
  function wireReveal() {
    const list = $("#view");
    if (list.dataset.revealWired) return;   // attach delegation only once (persistent #view)
    list.dataset.revealWired = "1";
    list.addEventListener("click", e => {
      const t = e.target.closest("[data-toggle]");
      if (t) {
        const item = t.closest(".item"); const on = item.classList.toggle("revealed");
        t.textContent = t.textContent.replace(/[▾▴]/, on ? "▴" : "▾");
        return;
      }
      const cc = e.target.closest("[data-concept]");
      if (cc) { openConcept(cc.dataset.concept); return; }
      const cb = e.target.closest("[data-catbib]");
      if (cb) { state.filters.biblioteca = { q: "", cat: cb.dataset.catbib }; gotoModule("biblioteca"); return; }
      const rt = e.target.closest("[data-ruta]");
      if (rt) { const r = rt.closest(".ruta"); r.classList.toggle("open"); return; }
      const bk = e.target.closest("[data-back]");
      if (bk) { gotoModule(bk.dataset.back); return; }
      const g = e.target.closest("[data-goto]");
      if (g) gotoModule(g.dataset.goto);
    });
  }

  /* ===================================================================
     RANDOM spotlight (fullscreen flashcard)
     =================================================================== */
  function randomForModule() {
    const f = { mitos: spotMyth, casos: spotCase, preguntas: spotQuestion, apertura: spotIaOno,
      herramientas: spotTool, recursos: spotResource, biblioteca: spotConcept, mapa: spotConcept }[state.mod] || spotQuestion;
    f();
  }
  function openSpot(html, onKeyNext) {
    const sp = $("#spotlight");
    sp.querySelector(".flash").innerHTML = html + `
      <div class="controls">
        <button class="btn primary" id="spReveal">Revelar respuesta</button>
        <button class="btn" id="spNext">Siguiente 🎲</button>
        <button class="btn ghost" id="spClose">Cerrar</button>
      </div>`;
    sp.classList.add("on"); sp.querySelector(".flash").classList.remove("revealed");
    $("#spReveal").onclick = () => sp.querySelector(".flash").classList.add("revealed");
    $("#spNext").onclick = onKeyNext;
    $("#spClose").onclick = closeSpot;
    state.spot = onKeyNext;
  }
  function closeSpot() { $("#spotlight").classList.remove("on"); state.spot = null; }
  function spotMyth() {
    const m = pick(DB.mitos);
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge danger">Mito o realidad</span><span class="badge gray">${esc(m.cat)}</span></div>
      <p class="q">“${esc(m.mito)}”</p>
      <div class="a"><p><span class="real-tag">Realidad:</span> ${esc(m.realidad)}</p><p class="mt12 dim">${esc(m.exp)}</p><p class="mt12"><span class="badge green">ejemplo</span> ${esc(m.ej)}</p></div>`, spotMyth);
    $("#x").onclick = closeSpot;
  }
  function spotCase() {
    const c = pick(DB.casos);
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge blue">${esc(c.cat)}</span></div>
      <p class="q">${esc(c.titulo)}</p>
      <p class="mt12 dim"><strong>Problema:</strong> ${esc(c.problema)}</p>
      <p class="mt8" style="font-size:20px"><strong>🗣 ${esc(c.pregunta)}</strong></p>
      <div class="a"><p><strong>Solución:</strong> ${esc(c.solucion)}</p>
        <p class="mt8">${c.tools.map(t => `<span class="chip">${esc(t)}</span>`).join(" ")}</p>
        <p class="mt8 dim"><strong>Impacto:</strong> ${esc(c.impacto)} · <strong>Riesgos:</strong> ${esc(c.riesgos)}</p></div>`, spotCase);
    $("#x").onclick = closeSpot;
  }
  function spotQuestion() {
    const f = state.filters.preguntas || {};
    const pool = (state.mod === "preguntas") ? applyFilters(DB.preguntas) : DB.preguntas;
    const q = pick(pool.length ? pool : DB.preguntas);
    let body;
    if (q.cat === "vf") body = `<div class="opts mt12"><div class="opt"><span class="ltr">V</span> Verdadero</div><div class="opt"><span class="ltr">F</span> Falso</div></div>`;
    else if (q.opts) body = `<div class="opts mt12">${q.opts.map((o, i) => `<div class="opt"><span class="ltr">${String.fromCharCode(65 + i)}</span> ${esc(o)}</div>`).join("")}</div>`;
    else body = "";
    let ans;
    if (q.cat === "vf") ans = `<p><strong>Respuesta:</strong> ${q.correct ? "Verdadero" : "Falso"}</p>`;
    else if (q.opts) ans = `<p><strong>Correcta:</strong> ${String.fromCharCode(65 + q.correct)}) ${esc(q.opts[q.correct])}</p>`;
    else ans = `<p><strong>Esperada:</strong> ${esc(q.esperada)}</p>`;
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge violet">${esc(catLabels[q.cat])}</span>${lvlBadge(q.nivel)}${q.verify ? verifyBadge : ""}</div>
      <p class="q">${esc(q.q)}</p>${body}
      <div class="a">${ans}<p class="mt8 dim">${esc(q.exp)}</p></div>`, spotQuestion);
    $("#x").onclick = closeSpot;
  }
  function spotIaOno() {
    const c = pick(DB.iaOno);
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge green">¿IA o no IA?</span></div>
      <p class="q">${esc(c.t)}</p>
      <div class="a"><p style="font-size:26px"><strong>${c.ia ? "✓ Sí es IA" : "✗ No es IA"}</strong></p><p class="mt8 dim">${esc(c.e)}</p></div>`, spotIaOno);
    $("#x").onclick = closeSpot;
  }
  function spotTool() {
    const t = pick(DB.herramientas);
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge violet">Herramienta</span><span class="badge gray">${esc(t.cat)}</span>${t.verify ? verifyBadge : ""}</div>
      <p class="q">${esc(t.name)}</p><p class="mt8 dim" style="font-size:19px">${esc(t.que)}</p>
      <div class="a"><dl class="kv">
        <dt>Mejor uso</dt><dd>${esc(t.mejor)}</dd><dt>En AEC</dt><dd>${esc(t.aec)}</dd>
        <dt>Limitación</dt><dd>${esc(t.limite)}</dd><dt>Alternativa</dt><dd>${esc(t.alt)}</dd></dl></div>`, spotTool);
    $("#x").onclick = closeSpot;
  }
  function spotConcept() {
    const f = state.filters.biblioteca || {};
    const pool = (f.cat && f.cat !== "all") ? DB.conceptos.filter(c => c.cat === f.cat) : DB.conceptos;
    const c = pick(pool.length ? pool : DB.conceptos); const m = catMeta(c.cat);
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge" style="background:color-mix(in srgb,${m.color} 24%,transparent);color:${m.color}">${m.ico} ${esc(m.label)}</span>${lvlBadge(c.nivel)}</div>
      <p class="q">${esc(c.term)}</p><p class="mt8 dim" style="font-size:19px">${esc(c.que)}</p>
      <div class="a"><dl class="kv">
        <dt>Cómo</dt><dd>${esc(c.como)}</dd><dt>Analogía</dt><dd>${esc(c.analogia)}</dd>
        <dt>Dato</dt><dd>${esc(c.dato)}</dd><dt>Ejemplo AEC</dt><dd>${esc(c.ejemplo)}</dd></dl>
        <button class="btn sm mt12" id="spOpen">Abrir ficha completa →</button></div>`, spotConcept);
    $("#x").onclick = closeSpot;
    const o = $("#spOpen"); if (o) o.onclick = () => { closeSpot(); openConcept(c.id); };
  }
  function spotResource() {
    const pool = [];
    (DB.analogias || []).forEach(a => pool.push({ tag: "Analogía", q: a.c, a: `<strong>${esc(a.t)}.</strong> ${esc(a.d)}` }));
    (DB.anecdotas || []).forEach(a => pool.push({ tag: "Anécdota", q: a.titulo, a: `${esc(a.texto)}<p class="mt8"><span class="badge green">lección</span> ${esc(a.leccion)}</p>` }));
    (DB.tips || []).forEach(t => pool.push({ tag: "Tip", q: t.t, a: esc(t.d) }));
    (DB.errores || []).forEach(e => pool.push({ tag: "Error común", q: e.error, a: `<span class="badge green">arréglalo</span> ${esc(e.fix)}` }));
    const r = pick(pool);
    openSpot(`<button class="btn icon close" id="x">×</button>
      <div class="meta"><span class="badge violet">${esc(r.tag)}</span></div>
      <p class="q">${esc(r.q)}</p><div class="a"><p>${r.a}</p></div>`, spotResource);
    $("#x").onclick = closeSpot;
  }

  /* ===================================================================
     TIMER
     =================================================================== */
  const timer = { total: 300, left: 300, t: null, running: false };
  function renderTimer() {
    $("#timerPanel").innerHTML = `
      <div class="timer-display" id="tDisp">05:00</div>
      <div class="timer-presets">
        ${[1, 3, 5, 10].map(m => `<button class="pill" data-min="${m}">${m}m</button>`).join("")}
        <input class="select" id="tCustom" type="number" min="1" max="120" placeholder="min" style="width:70px">
      </div>
      <div class="timer-row">
        <button class="btn sm primary" id="tStart" style="flex:1">▶ Iniciar</button>
        <button class="btn sm" id="tReset">↺</button>
        <button class="btn sm" id="tPlus">+1m</button>
      </div>`;
    $("#timerPanel").addEventListener("click", e => {
      const p = e.target.closest("[data-min]"); if (p) setTimer(+p.dataset.min * 60);
    });
    $("#tCustom").onchange = e => { const v = clamp(+e.target.value || 5, 1, 120); setTimer(v * 60); };
    $("#tStart").onclick = toggleTimer;
    $("#tReset").onclick = () => { setTimer(timer.total); };
    $("#tPlus").onclick = () => { timer.left += 60; timer.total += 60; paintTimer(); };
    paintTimer();
  }
  function setTimer(s) { stopTimer(); timer.total = s; timer.left = s; paintTimer(); }
  function toggleTimer() { timer.running ? stopTimer() : startTimer(); }
  function startTimer() {
    if (timer.t) return; timer.running = true; $("#tStart").innerHTML = "⏸ Pausar";
    timer.t = setInterval(() => { timer.left--; paintTimer(); }, 1000);
  }
  function stopTimer() { clearInterval(timer.t); timer.t = null; timer.running = false; const b = $("#tStart"); if (b) b.innerHTML = "▶ Iniciar"; }
  function paintTimer() {
    const d = $("#tDisp"); if (!d) return;
    const over = timer.left < 0, a = Math.abs(timer.left);
    d.textContent = (over ? "-" : "") + String((a / 60) | 0).padStart(2, "0") + ":" + String(a % 60).padStart(2, "0");
    d.classList.toggle("warn", !over && timer.left <= Math.max(10, timer.total * 0.1));
    d.classList.toggle("over", over);
    if (timer.left === 0) { try { beep(); } catch {} }
  }
  function beep() {
    const Ac = window.AudioContext || window.webkitAudioContext; if (!Ac) return;
    const ctx = new Ac(), o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination); o.frequency.value = 880; g.gain.value = 0.06;
    o.start(); setTimeout(() => { o.stop(); ctx.close(); }, 350);
  }

  /* ===================================================================
     SCOREBOARD
     =================================================================== */
  function renderScore() {
    const teamHTML = state.teams.map((t, i) => `
      <div class="team" data-i="${i}">
        <span class="dot" style="background:${esc(t.color)}"></span>
        <span class="tname" contenteditable="true" spellcheck="false">${esc(t.name)}</span>
        <button class="pm" data-act="minus">−</button>
        <span class="pts">${t.pts}</span>
        <button class="pm" data-act="plus">+</button>
      </div>`).join("");
    $("#scorePanel").innerHTML = `
      <div class="panel-head" style="margin-bottom:8px"><h3 style="font-size:16px">🏆 Marcador por equipos</h3></div>
      <div id="teams">${teamHTML}</div>
      <div class="timer-row mt12"><button class="btn sm" id="addTeam" style="flex:1">+ Equipo</button><button class="btn sm" id="resetScore">↺ Reset</button></div>`;
    const wrap = $("#teams");
    wrap.addEventListener("click", e => {
      const row = e.target.closest(".team"); if (!row) return; const i = +row.dataset.i;
      if (e.target.dataset.act === "plus") state.teams[i].pts++;
      if (e.target.dataset.act === "minus") state.teams[i].pts = Math.max(0, state.teams[i].pts - 1);
      if (e.target.dataset.act) { row.querySelector(".pts").textContent = state.teams[i].pts; store.set("teams", state.teams); }
    });
    wrap.addEventListener("input", e => {
      const row = e.target.closest(".team"); if (row && e.target.classList.contains("tname")) { state.teams[+row.dataset.i].name = e.target.textContent.trim(); store.set("teams", state.teams); }
    });
    $("#addTeam").onclick = () => { const cols = ["#00bfae", "#f5a524", "#e5484d", "#275cff", "#7654df", "#00a85a"]; state.teams.push({ name: "Equipo " + (state.teams.length + 1), color: cols[state.teams.length % cols.length], pts: 0 }); store.set("teams", state.teams); renderScore(); };
    $("#resetScore").onclick = () => { state.teams.forEach(t => t.pts = 0); store.set("teams", state.teams); renderScore(); };
  }

  /* ===================================================================
     OVERVIEW · MODE · HELP · FULLSCREEN
     =================================================================== */
  function openOverview() {
    const m = DB.modules.find(x => x.id === state.mod);
    let html;
    if (m && m.kind === "deck") {
      const slides = DB.slides[state.mod] || [];
      html = slides.map((s, i) => `<button class="ov" data-i="${i}"><small>${String(i + 1).padStart(2, "0")} · ${esc(s.eyebrow || s.block || "Slide")}</small><span>${esc(slideTitle(s))}</span></button>`).join("");
    } else {
      html = DB.modules.map(x => `<button class="ov" data-mod="${x.id}"><small>${x.ico} ${esc(x.group)}</small><span>${esc(x.label)}</span></button>`).join("");
    }
    $("#ovPanel").innerHTML = `<div class="panel-head"><h3>${m && m.kind === "deck" ? "Índice de slides" : "Módulos"}</h3><button class="btn icon" id="ovClose">×</button></div><div class="ov-grid">${html}</div>`;
    $("#overview").classList.add("on");
    $("#ovClose").onclick = () => $("#overview").classList.remove("on");
    $("#ovPanel .ov-grid").onclick = e => {
      const b = e.target.closest(".ov"); if (!b) return;
      if (b.dataset.mod) gotoModule(b.dataset.mod);
      else showSlide(+b.dataset.i);
      $("#overview").classList.remove("on");
    };
  }
  function slideTitle(s) { const t = s.h1 || s.h2 || s.quote || s.eyebrow || "Slide"; return (Array.isArray(t) ? t.map(p => typeof p === "string" ? p : p.grad).join("") : t).slice(0, 80); }

  function openMode() {
    $("#modePanel").innerHTML = `<div class="panel-head"><h3>Elegir recorrido</h3><button class="btn icon" id="mClose">×</button></div>
      <div class="grid two">
        <button class="card hover" data-track="rapida"><span class="kicker">Modo</span><h3>⚡ ${esc(DB.tracks.rapida.label)}</h3><p>${esc(DB.tracks.rapida.note)}</p></button>
        <button class="card hover" data-track="taller"><span class="kicker">Modo</span><h3>◎ ${esc(DB.tracks.taller.label)}</h3><p>${esc(DB.tracks.taller.note)}</p></button>
      </div>
      <button class="btn sm mt16 ${state.track ? "" : "primary"}" data-track="">↺ Sin recorrido (navegación libre)</button>`;
    $("#mode").classList.add("on");
    $("#mClose").onclick = () => $("#mode").classList.remove("on");
    $("#modePanel").addEventListener("click", e => {
      const b = e.target.closest("[data-track]"); if (!b) return;
      const tk = b.dataset.track;
      state.track = tk || null; store.set("track", state.track);
      $("#mode").classList.remove("on"); setCrumb();
      if (state.track) gotoModule(DB.tracks[state.track].steps[0]);
    });
  }
  function openHelp() { $("#help").classList.add("on"); }

  function toggleFs() { if (document.fullscreenElement) document.exitFullscreen?.(); else document.documentElement.requestFullscreen?.(); }
  function toggleFacilitator(on) {
    state.facilitador = (on === undefined) ? !state.facilitador : on;
    store.set("facilitador", state.facilitador);
    const b = $("#facBtn"); if (b) b.setAttribute("aria-pressed", state.facilitador);
    $("#timerPanel") && $("#timerPanel").classList.toggle("on", state.facilitador);
    $("#scorePanel") && $("#scorePanel").classList.toggle("on", state.facilitador);
    const n = $("#notes"); if (n) n.classList.toggle("on", state.facilitador && (DB.modules.find(m => m.id === state.mod) || {}).kind === "deck");
  }

  function updateProgress() {
    const bar = $("#progress > span"); if (!bar) return;
    const m = DB.modules.find(x => x.id === state.mod);
    let p = 0;
    if (m && m.kind === "deck") { const n = (DB.slides[state.mod] || []).length; p = n ? (state.deckIndex[state.mod] + 1) / n : 0; }
    else { const order = DB.modules.map(x => x.id); p = (order.indexOf(state.mod) + 1) / order.length; }
    bar.style.width = (p * 100) + "%";
  }

  /* ===================================================================
     KEYBOARD
     =================================================================== */
  function onKey(e) {
    const tag = (e.target.tagName || "").toLowerCase();
    const typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
    // ⌘K / Ctrl+K toggles the command palette from anywhere
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); state.cmd.open ? closeCmd() : openCmd(); return; }
    // command palette navigation has top priority
    if (state.cmd.open) {
      if (e.key === "Escape") { closeCmd(); return; }
      if (e.key === "ArrowDown") { cmdMove(1); e.preventDefault(); return; }
      if (e.key === "ArrowUp") { cmdMove(-1); e.preventDefault(); return; }
      if (e.key === "Enter") { state.cmd.items[state.cmd.sel]?.run(); e.preventDefault(); return; }
      return; // let other keys type into the input
    }
    // spotlight has priority
    if ($("#spotlight").classList.contains("on")) {
      if (e.key === "Escape") return closeSpot();
      if (e.key === "ArrowRight" || e.key === "Enter") { state.spot && state.spot(); return e.preventDefault(); }
      if (e.key === " ") { const f = $("#spotlight .flash"); f.classList.contains("revealed") ? state.spot && state.spot() : f.classList.add("revealed"); return e.preventDefault(); }
      return;
    }
    if (e.key === "Escape") { ["overview", "mode", "help"].forEach(id => $("#" + id).classList.remove("on")); return; }
    if (typing) return;
    const k = e.key.toLowerCase();
    const inDeck = (DB.modules.find(x => x.id === state.mod) || {}).kind === "deck";
    if (e.key === "ArrowRight") { inDeck ? deckGo(1) : advanceModule(1); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { inDeck ? deckGo(-1) : advanceModule(-1); e.preventDefault(); }
    else if (e.key === " ") { if (inDeck) { deckGo(1); e.preventDefault(); } }
    else if (e.key === "Home") { inDeck ? showSlide(0) : gotoModule(moduleOrder()[0]); }
    else if (e.key === "End") { if (inDeck) showSlide((DB.slides[state.mod] || []).length - 1); }
    else if (k === "g") openOverview();
    else if (k === "n") { const n = $("#notes"); if (n) n.classList.toggle("on"); }
    else if (k === "r") randomForModule();
    else if (k === "t") $("#timerPanel").classList.toggle("on");
    else if (k === "p" || k === "s") $("#scorePanel").classList.toggle("on");
    else if (k === "m") $("#app").classList.toggle(window.innerWidth <= 720 ? "nav-open" : "nav-collapsed");
    else if (k === "f") toggleFs();
    else if (k === "d") applyTheme(state.theme === "dark" ? "light" : "dark", true);
    else if (k === "h" || k === "?") openHelp();
  }

  /* ===================================================================
     INIT
     =================================================================== */
  function buildOverlays() {
    const ov = document.createElement("div");
    ov.innerHTML = `
      <div class="cmd" id="cmd"><div class="panel-k">
        <div class="kin">⌕ <input id="cmdInput" type="text" placeholder="Buscar concepto, sección o acción…" aria-label="Buscar"></div>
        <div class="klist" id="cmdList" role="listbox"></div>
        <div class="kfoot"><span><span class="kbd">↑↓</span> navegar</span><span><span class="kbd">↵</span> abrir</span><span><span class="kbd">esc</span> cerrar</span></div>
      </div></div>
      <div class="spotlight" id="spotlight"><div class="flash"></div></div>
      <div class="overlay" id="overview"><div class="panel" id="ovPanel"></div></div>
      <div class="overlay" id="mode"><div class="panel" id="modePanel" style="max-width:760px"></div></div>
      <div class="overlay" id="help"><div class="panel" id="helpPanel" style="max-width:560px"></div></div>
      <button class="btn icon timer-fab no-print" id="timerFab" title="Temporizador (T)">◷</button>
      <div class="timer-panel" id="timerPanel"></div>
      <div class="score-panel" id="scorePanel"></div>`;
    document.body.appendChild(ov);
    $("#cmdInput").addEventListener("input", e => cmdFilter(e.target.value));
    $("#cmdList").addEventListener("mousemove", e => { const it = e.target.closest(".kitem"); if (it) { state.cmd.sel = +it.dataset.i; cmdRender(); } });
    $("#cmdList").addEventListener("click", e => { const it = e.target.closest(".kitem"); if (it) state.cmd.items[+it.dataset.i]?.run(); });
    $("#cmd").addEventListener("mousedown", e => { if (e.target.id === "cmd") closeCmd(); });
    $("#timerFab").onclick = () => $("#timerPanel").classList.toggle("on");
    $("#help").addEventListener("click", e => { if (e.target.id === "help") e.currentTarget.classList.remove("on"); });
    $("#overview").addEventListener("click", e => { if (e.target.id === "overview") e.currentTarget.classList.remove("on"); });
    $("#mode").addEventListener("click", e => { if (e.target.id === "mode") e.currentTarget.classList.remove("on"); });
    $("#helpPanel").innerHTML = `
      <div class="panel-head"><h3>Atajos de teclado</h3><button class="btn icon" onclick="document.getElementById('help').classList.remove('on')">×</button></div>
      ${[["⌘K / Ctrl K", "Buscar concepto / ir a"], ["← / →", "Slide anterior / siguiente"], ["Espacio", "Avanzar"], ["Inicio / Fin", "Primer / último slide"], ["G", "Índice de slides"], ["N", "Notas del ponente"], ["R", "Tarjeta aleatoria"], ["T", "Temporizador"], ["S / P", "Marcador por equipos"], ["M", "Mostrar/ocultar menú"], ["F", "Pantalla completa"], ["D", "Tema claro/oscuro"], ["H / ?", "Ayuda"], ["Esc", "Cerrar overlays"]]
        .map(([k, d]) => `<div class="shortcut-row"><span>${esc(d)}</span><span class="kbd">${esc(k)}</span></div>`).join("")}
      <p class="dim mt16" style="font-size:13px">Las cifras marcadas con ⚠ <em>verificar</em> tienen fuente externa: confírmalas antes de presentar.</p>`;
  }

  function validateData() {
    const need = ["modules", "conceptos", "conceptCats", "rutas", "slides", "mitos", "casos", "herramientas", "preguntas", "dinamicas", "prodAreas", "tips"];
    const missing = need.filter(k => !DB[k] || (Array.isArray(DB[k]) && !DB[k].length));
    if (missing.length) console.warn("[Manual IA] datos faltantes:", missing.join(", "));
    return missing;
  }
  function init() {
    const missing = validateData();
    if (missing.includes("modules") || missing.includes("conceptos")) {
      document.getElementById("view") && (document.getElementById("view").innerHTML =
        `<div class="wrap"><div class="empty"><div class="big">⚠</div>No se cargaron todos los datos (${esc(missing.join(", "))}).<br>Verifica que <code>data/*.js</code> existan.</div></div>`);
      return;
    }
    applyTheme(state.theme, false);
    renderSidebar(); renderTopbar(); buildOverlays(); renderTimer(); renderScore();
    document.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", () => { const id = location.hash.slice(1); if (id && id !== state.mod && DB.modules.some(m => m.id === id)) gotoModule(id); });
    const start = location.hash.slice(1) || store.get("mod", "");
    gotoModule(DB.modules.some(m => m.id === start) ? start : "biblioteca");
    if (state.facilitador) toggleFacilitator(true);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
