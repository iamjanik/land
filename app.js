/* ════════════════════════════════════════════
   THEME
════════════════════════════════════════════ */
const themeBtn = document.getElementById('themeToggleBtn');

function getTheme() {
  const s = localStorage.getItem('theme');
  return s || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function applyTheme(theme, save) {
  const dark = theme === 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.classList.toggle('is-dark', dark);
  themeBtn.setAttribute('aria-pressed', String(dark));
  themeBtn.setAttribute('aria-label', dark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln');
  if (save) localStorage.setItem('theme', theme);
}

themeBtn.addEventListener('click', () => applyTheme(getTheme() === 'dark' ? 'light' : 'dark', true));
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light', false);
});
applyTheme(getTheme(), false);

/* ════════════════════════════════════════════
   DATA
════════════════════════════════════════════ */
const FLAGS = {
  "Afghanistan":"🇦🇫","Albanien":"🇦🇱","Algerien":"🇩🇿","Andorra":"🇦🇩",
  "Angola":"🇦🇴","Antigua und Barbuda":"🇦🇬","Argentinien":"🇦🇷",
  "Armenien":"🇦🇲","Aserbaidschan":"🇦🇿","Australien":"🇦🇺",
  "Bahamas":"🇧🇸","Bahrain":"🇧🇭","Bangladesch":"🇧🇩","Barbados":"🇧🇧",
  "Belarus":"🇧🇾","Belgien":"🇧🇪","Belize":"🇧🇿","Benin":"🇧🇯",
  "Bhutan":"🇧🇹","Bolivien":"🇧🇴","Bosnien und Herzegowina":"🇧🇦",
  "Botswana":"🇧🇼","Brasilien":"🇧🇷","Brunei":"🇧🇳","Bulgarien":"🇧🇬",
  "Burkina Faso":"🇧🇫","Burundi":"🇧🇮","Chile":"🇨🇱",
  "China, Republik / Taiwan":"🇹🇼","China, Volksrepublik":"🇨🇳",
  "Costa Rica":"🇨🇷","Dänemark":"🇩🇰","Deutschland":"🇩🇪",
  "Dominica":"🇩🇲","Dominikanische Republik":"🇩🇴","Dschibuti":"🇩🇯",
  "Ecuador":"🇪🇨","El Salvador":"🇸🇻","Elfenbeinküste":"🇨🇮",
  "Eritrea":"🇪🇷","Estland":"🇪🇪","Eswatini":"🇸🇿","Fidschi":"🇫🇯",
  "Finnland":"🇫🇮","Frankreich":"🇫🇷","Gabun":"🇬🇦","Gambia":"🇬🇲",
  "Georgien":"🇬🇪","Ghana":"🇬🇭","Grenada":"🇬🇩","Griechenland":"🇬🇷",
  "Guatemala":"🇬🇹","Guinea":"🇬🇳","Guinea-Bissau":"🇬🇼","Guyana":"🇬🇾",
  "Haiti":"🇭🇹","Honduras":"🇭🇳","Indien":"🇮🇳","Indonesien":"🇮🇩",
  "Irak":"🇮🇶","Iran":"🇮🇷","Irland":"🇮🇪","Island":"🇮🇸",
  "Israel":"🇮🇱","Italien":"🇮🇹","Jamaika":"🇯🇲","Japan":"🇯🇵",
  "Jemen":"🇾🇪","Jordanien":"🇯🇴","Kambodscha":"🇰🇭","Kamerun":"🇨🇲",
  "Kanada":"🇨🇦","Kap Verde":"🇨🇻","Kasachstan":"🇰🇿","Katar":"🇶🇦",
  "Kenia":"🇰🇪","Kirgisistan":"🇰🇬","Kiribati":"🇰🇮","Kolumbien":"🇨🇴",
  "Komoren":"🇰🇲","Kongo, Demokratische Republik":"🇨🇩","Kongo, Republik":"🇨🇬",
  "Korea, Nord (Nordkorea)":"🇰🇵","Korea, Süd (Südkorea)":"🇰🇷",
  "Kosovo":"🇽🇰","Kroatien":"🇭🇷","Kuba":"🇨🇺","Kuwait":"🇰🇼",
  "Laos":"🇱🇦","Lesotho":"🇱🇸","Lettland":"🇱🇻","Libanon":"🇱🇧",
  "Liberia":"🇱🇷","Libyen":"🇱🇾","Liechtenstein":"🇱🇮","Litauen":"🇱🇹",
  "Luxemburg":"🇱🇺","Madagaskar":"🇲🇬","Malawi":"🇲🇼","Malaysia":"🇲🇾",
  "Malediven":"🇲🇻","Mali":"🇲🇱","Malta":"🇲🇹","Marokko":"🇲🇦",
  "Marshallinseln":"🇲🇭","Mauretanien":"🇲🇷","Mauritius":"🇲🇺",
  "Mexiko":"🇲🇽","Mikronesien":"🇫🇲","Moldau":"🇲🇩","Monaco":"🇲🇨",
  "Mongolei":"🇲🇳","Montenegro":"🇲🇪","Mosambik":"🇲🇿","Myanmar":"🇲🇲",
  "Namibia":"🇳🇦","Nauru":"🇳🇷","Nepal":"🇳🇵","Neuseeland":"🇳🇿",
  "Nicaragua":"🇳🇮","Niederlande":"🇳🇱","Niger":"🇳🇪","Nigeria":"🇳🇬",
  "Nordmazedonien":"🇲🇰","Norwegen":"🇳🇴","Oman":"🇴🇲",
  "Osttimor / Timor-Leste":"🇹🇱","Österreich":"🇦🇹","Pakistan":"🇵🇰",
  "Palau":"🇵🇼","Panama":"🇵🇦","Papua-Neuguinea":"🇵🇬","Paraguay":"🇵🇾",
  "Peru":"🇵🇪","Philippinen":"🇵🇭","Polen":"🇵🇱","Portugal":"🇵🇹",
  "Ruanda":"🇷🇼","Rumänien":"🇷🇴","Russland":"🇷🇺","Salomonen":"🇸🇧",
  "Sambia":"🇿🇲","Samoa":"🇼🇸","San Marino":"🇸🇲",
  "São Tomé und Príncipe":"🇸🇹","Saudi-Arabien":"🇸🇦","Schweden":"🇸🇪",
  "Schweiz":"🇨🇭","Senegal":"🇸🇳","Serbien":"🇷🇸","Seychellen":"🇸🇨",
  "Sierra Leone":"🇸🇱","Simbabwe":"🇿🇼","Singapur":"🇸🇬",
  "Slowakei":"🇸🇰","Slowenien":"🇸🇮","Somalia":"🇸🇴","Spanien":"🇪🇸",
  "Sri Lanka":"🇱🇰","St. Kitts und Nevis":"🇰🇳","St. Lucia":"🇱🇨",
  "St. Vincent und die Grenadinen":"🇻🇨","Sudan":"🇸🇩","Suriname":"🇸🇷",
  "Syrien":"🇸🇾","Südafrika":"🇿🇦","Südsudan":"🇸🇸",
  "Tadschikistan":"🇹🇯","Tansania":"🇹🇿","Thailand":"🇹🇭","Togo":"🇹🇬",
  "Tonga":"🇹🇴","Trinidad und Tobago":"🇹🇹","Tschad":"🇹🇩",
  "Tschechien":"🇨🇿","Tunesien":"🇹🇳","Turkmenistan":"🇹🇲",
  "Tuvalu":"🇹🇻","Türkei":"🇹🇷","Uganda":"🇺🇬","Ukraine":"🇺🇦",
  "Ungarn":"🇭🇺","Uruguay":"🇺🇾","Usbekistan":"🇺🇿","Vanuatu":"🇻🇺",
  "Vatikanstadt":"🇻🇦","Venezuela":"🇻🇪",
  "Vereinigte Arabische Emirate":"🇦🇪","Vereinigte Staaten":"🇺🇸",
  "Vereinigtes Königreich":"🇬🇧","Vietnam":"🇻🇳",
  "Zentralafrikanische Republik":"🇨🇫","Zypern":"🇨🇾",
  "Ägypten":"🇪🇬","Äquatorialguinea":"🇬🇶","Äthiopien":"🇪🇹"
};

const UN_CFG = {
  nicht_anerkannt: { cardClass:"un-nicht-anerkannt", markerClass:"un-marker--none", blockClass:"un-block--none", icon:"🚫", label:"UN-Status" },
  beobachter:      { cardClass:"un-beobachter",      markerClass:"un-marker--obs",  blockClass:"un-block--obs",  icon:"👁",  label:"UN-Status" },
  teilweise_anerkannt: { cardClass:"un-teilweise",   markerClass:"un-marker--part", blockClass:"un-block--part", icon:"⚠️", label:"UN-Status" }
};

/* ════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const cssId = s => s.replace(/[^a-z0-9]/gi,"_").toLowerCase();
const getFlag = n => FLAGS[n] || "🌐";
const normalize = s => s.toLowerCase().trim().replace(/\s+/g,"").replace(/[^a-z0-9äöüéèàâêîôûñ]/g,"");
const alphaGroup = n => ({ Ä:"A",Ö:"O",Ü:"U",É:"E",È:"E",Ñ:"N" }[n[0].toUpperCase()] ?? n[0].toUpperCase());
const debounce = (fn, ms=150) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const shuffle = arr => { const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]; } return a; };

function getCapitalVariants(h) {
  return h.split(/[\n/,]/).map(s => s.replace(/\(.*?\)/g,"").trim()).filter(Boolean);
}

function btnRow(items) {
  return `<div class="fc-actions">${items.map(b =>
    `<button class="fc-btn ${b.cls}"${b.id?` id="${b.id}"`:""}type="button">${b.label}</button>`
  ).join("")}</div>`;
}

/* ════════════════════════════════════════════
   APP STATE
════════════════════════════════════════════ */
let LAENDER = [];
let currentFilter = "Alle";
let currentSearch  = "";
const activeCards  = new Set();

function getFiltered() {
  const q = currentSearch.toLowerCase();
  return LAENDER.filter(l =>
    (currentFilter === "Alle" || l.Kontinent === currentFilter) &&
    (!q || l.Land.toLowerCase().includes(q) || l.Hauptstadt.toLowerCase().includes(q))
  );
}

/* ════════════════════════════════════════════
   RENDER
════════════════════════════════════════════ */
function renderList() {
  const filtered = getFiltered();
  const main = $("main");
  const pill = $("resultPill");
  const noResults = $("noResults");

  // Update pill
  if (filtered.length === LAENDER.length) {
    pill.textContent = ""; pill.classList.remove("visible");
  } else {
    pill.textContent = `${filtered.length} von ${LAENDER.length}`;
    pill.classList.add("visible");
  }

  // Clear cards
  Array.from(main.children).forEach(c => {
    if (c.id !== "noResults" && c.id !== "loadingMsg") c.remove();
  });

  if (!filtered.length) { noResults.style.display = "block"; return; }
  noResults.style.display = "none";

  if (currentFilter === "Alle") {
    let lastGroup = "";
    filtered.forEach(land => {
      const g = alphaGroup(land.Land);
      if (g !== lastGroup) {
        lastGroup = g;
        const div = document.createElement("div");
        div.className = "alpha-divider";
        div.setAttribute("aria-hidden","true");
        div.innerHTML = `<span class="alpha-letter">${g}</span><span class="alpha-line"></span>`;
        main.insertBefore(div, noResults);
      }
      main.insertBefore(buildCard(land), noResults);
    });
  } else {
    const group = document.createElement("div");
    group.className = "continent-group";
    group.innerHTML = `<div class="continent-header">
      <span class="continent-title">${currentFilter}</span>
      <span class="continent-line"></span>
      <span class="continent-count">${filtered.length} Länder</span>
    </div>`;
    filtered.forEach(l => group.appendChild(buildCard(l)));
    main.insertBefore(group, noResults);
  }
}

function buildCard(land) {
  const flag   = getFlag(land.Land);
  const isOpen = activeCards.has(land.Land);
  const status = land.UNStatus ? UN_CFG[land.UNStatus] : null;
  const card   = document.createElement("article");

  card.className = ["country-card", isOpen?"open":"", status?.cardClass||""].filter(Boolean).join(" ");
  card.dataset.land = land.Land;

  const multiline = land.Hauptstadt.includes("\n");
  const unMarker  = status ? `<span class="un-marker ${status.markerClass}" aria-hidden="true">*</span>` : "";
  const unBlock   = status?.blockClass && land.UNStatusText
    ? `<div class="info-block un-block ${status.blockClass}">
         <div class="info-label">${status.icon} ${status.label}</div>
         <div class="info-value">${esc(land.UNStatusText)}</div>
       </div>` : "";
  const faktBlock = land.Fakt
    ? `<div class="info-block fakt-block">
         <div class="info-label">💡 Wusstest du?</div>
         <div class="info-value">${esc(land.Fakt)}</div>
       </div>` : "";

  card.innerHTML = `
    <button class="card-trigger" aria-expanded="${isOpen}"
            aria-controls="body-${cssId(land.Land)}" type="button">
      <span class="flag" aria-hidden="true">${flag}</span>
      <span class="country-name">${esc(land.Land)}${unMarker}</span>
      <span class="continent-tag tag-${land.Kontinent}">${land.Kontinent}</span>
      <svg class="chevron" width="17" height="17" fill="none" stroke="currentColor"
           stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </button>
    <div class="card-body" id="body-${cssId(land.Land)}" role="region" aria-label="${esc(land.Land)}">
      <div class="info-grid">
        <div class="info-block">
          <div class="info-label">🏛 Hauptstadt</div>
          <div class="info-value${multiline?" multiline":""}">${esc(land.Hauptstadt)}</div>
        </div>
        <div class="info-block">
          <div class="info-label">👥 Bevölkerung</div>
          <div class="info-value">${esc(land.Bevölkerung)}</div>
        </div>
        <div class="info-block">
          <div class="info-label">📐 Fläche</div>
          <div class="info-value">${esc(land["Fläche"])}</div>
        </div>
        ${unBlock}${faktBlock}
      </div>
    </div>`;

  card.querySelector(".card-trigger").addEventListener("click", () => {
    const open = card.classList.toggle("open");
    card.querySelector(".card-trigger").setAttribute("aria-expanded", String(open));
    open ? activeCards.add(land.Land) : activeCards.delete(land.Land);
    updateToggleBtn();
  });
  return card;
}

/* ════════════════════════════════════════════
   HEADER INTERACTIONS
════════════════════════════════════════════ */
const searchWrapMobile = $("searchWrapMobile");
const searchToggleBtn  = $("searchToggleBtn");

function closeSearchMobile() {
  searchWrapMobile.classList.remove("open");
  searchToggleBtn.setAttribute("aria-expanded","false");
  searchToggleBtn.classList.remove("active");
  $("searchInputMobile").value = "";
  currentSearch = "";
  renderList();
}

searchToggleBtn.addEventListener("click", () => {
  const open = searchWrapMobile.classList.contains("open");
  if (open) { closeSearchMobile(); return; }
  searchWrapMobile.classList.add("open");
  searchToggleBtn.setAttribute("aria-expanded","true");
  searchToggleBtn.classList.add("active");
  $("searchInputMobile").focus();
});

$("searchInput").addEventListener("input", debounce(e => { currentSearch = e.target.value; renderList(); }));
$("searchInputMobile").addEventListener("input", debounce(e => { currentSearch = e.target.value; renderList(); }));

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => { b.classList.remove("active"); b.removeAttribute("aria-current"); });
    btn.classList.add("active");
    btn.setAttribute("aria-current","true");
    currentFilter = btn.dataset.filter;
    renderList();
    updateToggleBtn();
  });
});

function updateToggleBtn() {
  const anyOpen = getFiltered().some(l => activeCards.has(l.Land));
  const btn   = $("toggleAllBtn");
  const label = $("toggleAllLabel");
  $("toggleAllIcon").style.transform = anyOpen ? "rotate(180deg)" : "";
  btn.setAttribute("aria-label", anyOpen ? "Alle Karten zuklappen" : "Alle Karten aufklappen");
  if (label) label.textContent = anyOpen ? "Zuklappen" : "Aufklappen";
}

$("toggleAllBtn").addEventListener("click", () => {
  const anyOpen = getFiltered().some(l => activeCards.has(l.Land));
  getFiltered().forEach(l => anyOpen ? activeCards.delete(l.Land) : activeCards.add(l.Land));
  renderList();
  updateToggleBtn();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && searchWrapMobile.classList.contains("open")) {
    closeSearchMobile(); searchToggleBtn.focus();
  }
});

/* ════════════════════════════════════════════
   FLASHCARDS
════════════════════════════════════════════ */
const fcOverlay = $("fcOverlay");
const fcBox     = $("fcBox");
const FC = { pool:[], index:0, correct:0, wrong:0, mode:"reveal", selectedLetters:new Set(), availableLetters:[], initialized:false };

const openFC  = () => { fcOverlay.classList.add("active"); fcBox.focus(); };
const closeFC = () => fcOverlay.classList.remove("active");

function renderStart() {
  const filtered = getFiltered();
  FC.availableLetters = [...new Set(filtered.map(l => alphaGroup(l.Land)))].sort();
  if (!FC.initialized) {
    FC.selectedLetters = new Set(FC.availableLetters);
    FC.initialized = true;
  } else {
    for (const l of FC.selectedLetters) if (!FC.availableLetters.includes(l)) FC.selectedLetters.delete(l);
  }

  const poolSize    = filtered.filter(l => FC.selectedLetters.has(alphaGroup(l.Land))).length;
  const allSelected = FC.selectedLetters.size === FC.availableLetters.length;
  const letterBtns  = FC.availableLetters.map(l =>
    `<button class="fc-letter-btn${FC.selectedLetters.has(l)?" active":""}" data-l="${esc(l)}" type="button" aria-pressed="${FC.selectedLetters.has(l)}">${l}</button>`
  ).join("");

  fcBox.innerHTML = `
    <div class="fc-start-title">Lernkarten</div>
    <div class="fc-mode-row">
      <div class="fc-mode-label">Modus</div>
      <div class="fc-mode-btns">
        <button class="fc-mode-btn${FC.mode==="reveal"?" active":""}" data-mode="reveal" type="button" aria-pressed="${FC.mode==="reveal"}">Aufdecken</button>
        <button class="fc-mode-btn${FC.mode==="type"?" active":""}" data-mode="type" type="button" aria-pressed="${FC.mode==="type"}">Eingabe</button>
      </div>
    </div>
    <div class="fc-letters-row">
      <div class="fc-letters-label">Buchstaben · <strong>${poolSize}</strong> Länder</div>
      <div class="fc-letters-grid">
        <button class="fc-letter-btn${allSelected?" active":""}" data-l="alle" type="button" aria-pressed="${allSelected}">Alle</button>
        ${letterBtns}
      </div>
    </div>
    <div class="fc-warning" id="fcStartWarning" role="alert" aria-live="polite"></div>
    ${btnRow([
      { label:"Abbrechen", cls:"fc-btn-secondary", id:"fcCancelBtn" },
      { label:"Starten",   cls:"fc-btn-primary",   id:"fcStartBtn"  }
    ])}`;

  fcBox.querySelectorAll(".fc-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      FC.mode = btn.dataset.mode;
      fcBox.querySelectorAll(".fc-mode-btn").forEach(b => { b.classList.toggle("active",b===btn); b.setAttribute("aria-pressed",String(b===btn)); });
    });
  });
  fcBox.querySelectorAll(".fc-letter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const l = btn.dataset.l;
      if (l === "alle") {
        FC.selectedLetters = FC.selectedLetters.size === FC.availableLetters.length ? new Set() : new Set(FC.availableLetters);
      } else {
        FC.selectedLetters.has(l) ? FC.selectedLetters.delete(l) : FC.selectedLetters.add(l);
      }
      renderStart();
    });
  });
  $("fcStartBtn").addEventListener("click", () => {
    const pool = filtered.filter(l => FC.selectedLetters.has(alphaGroup(l.Land)));
    if (!pool.length) { $("fcStartWarning").textContent = "⚠️ Bitte mindestens einen Buchstaben auswählen."; return; }
    Object.assign(FC, { pool: shuffle(pool), index: 0, correct: 0, wrong: 0 });
    renderCard();
  });
  $("fcCancelBtn").addEventListener("click", closeFC);
}

function renderCard() {
  if (FC.index >= FC.pool.length) { renderResult(); return; }
  const land = FC.pool[FC.index];
  const flag = getFlag(land.Land);
  const prog = `${FC.index+1} / ${FC.pool.length} · ✅ ${FC.correct} · ❌ ${FC.wrong}`;
  FC.mode === "reveal" ? renderReveal(land, flag, prog) : renderType(land, flag, prog);
}

function cardHeader(flag, prog, question, land) {
  return `<div class="fc-progress">${prog}</div>
    <span class="fc-flag" aria-hidden="true">${flag}</span>
    <div class="fc-question" aria-live="polite">Hauptstadt von<br><strong>${esc(land.Land)}</strong>?</div>`;
}

function renderReveal(land, flag, prog) {
  fcBox.innerHTML = cardHeader(flag, prog, null, land) +
    btnRow([
      { label:"Abbrechen",      cls:"fc-btn-secondary", id:"fcAbortBtn"  },
      { label:"Antwort zeigen", cls:"fc-btn-reveal",    id:"fcRevealBtn" }
    ]);

  $("fcRevealBtn").addEventListener("click", () => {
    fcBox.innerHTML = cardHeader(flag, prog, null, land) +
      `<div class="fc-answer-box" role="status" aria-live="polite">${esc(land.Hauptstadt)}</div>` +
      btnRow([
        { label:"✗ Nicht gewusst", cls:"fc-btn-wrong",   id:"fcWrongBtn" },
        { label:"✓ Gewusst",       cls:"fc-btn-correct", id:"fcOkBtn"    }
      ]);
    $("fcOkBtn").addEventListener("click",    () => { FC.correct++; FC.index++; renderCard(); });
    $("fcWrongBtn").addEventListener("click", () => { FC.wrong++;   FC.index++; renderCard(); });
  });
  $("fcAbortBtn").addEventListener("click", closeFC);
}

function renderType(land, flag, prog) {
  fcBox.innerHTML = cardHeader(flag, prog, null, land) +
    `<input class="fc-input" id="fcInput" type="text" placeholder="Hauptstadt eingeben …"
            autocomplete="off" spellcheck="false" aria-label="Deine Antwort">
     <div class="fc-feedback" id="fcFeedback" role="status" aria-live="polite"></div>` +
    btnRow([
      { label:"Abbrechen", cls:"fc-btn-secondary", id:"fcAbortBtn" },
      { label:"Prüfen",    cls:"fc-btn-reveal",    id:"fcCheckBtn" }
    ]);

  const input = $("fcInput");
  input.focus();

  const check = () => {
    const val = input.value.trim();
    if (!val) return;
    const variants = getCapitalVariants(land.Hauptstadt);
    const ok = variants.some(v => normalize(v) === normalize(val));
    input.classList.add(ok ? "correct" : "wrong");
    input.disabled = true;
    const fb = $("fcFeedback");
    fb.textContent = ok ? "✓ Richtig!" : `✗ Richtig wäre: ${variants.length > 1 ? variants.join(" / ") : land.Hauptstadt}`;
    fb.className   = "fc-feedback " + (ok ? "correct" : "wrong");
    ok ? FC.correct++ : FC.wrong++;
    fcBox.querySelector(".fc-actions").innerHTML =
      `<button class="fc-btn fc-btn-primary" id="fcNextBtn" type="button">Weiter →</button>`;
    $("fcNextBtn").addEventListener("click", () => { FC.index++; renderCard(); });
    $("fcNextBtn").focus();
  };

  input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  $("fcCheckBtn").addEventListener("click", check);
  $("fcAbortBtn").addEventListener("click", closeFC);
}

function renderResult() {
  const pct   = FC.pool.length > 0 ? Math.round(FC.correct / FC.pool.length * 100) : 0;
  const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚";
  fcBox.innerHTML = `
    <span class="fc-result-emoji" aria-hidden="true">${emoji}</span>
    <div class="fc-result-title">Fertig!</div>
    <div class="fc-result-sub" role="status">${FC.correct} richtig · ${FC.wrong} falsch · ${pct}&nbsp;%</div>
    ${btnRow([
      { label:"Schließen", cls:"fc-btn-secondary", id:"fcDoneBtn"  },
      { label:"Nochmal",   cls:"fc-btn-primary",   id:"fcRetryBtn" }
    ])}`;
  $("fcRetryBtn").addEventListener("click", () => {
    Object.assign(FC, { pool: shuffle(FC.pool), index: 0, correct: 0, wrong: 0 });
    renderCard();
  });
  $("fcDoneBtn").addEventListener("click", closeFC);
}

$("startFlashcardsBtn").addEventListener("click", () => { FC.initialized = false; openFC(); renderStart(); });
fcOverlay.addEventListener("click",   e => { if (e.target === fcOverlay) closeFC(); });
fcOverlay.addEventListener("keydown", e => { if (e.key === "Escape") closeFC(); });

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
async function loadData() {
  try {
    const resp = await fetch("laender.json");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    if (!Array.isArray(data) || !data.length) throw new Error("Leere Daten");
    return data;
  } catch (err) {
    const msg = $("loadingMsg");
    msg.innerHTML = location.protocol === "file:"
      ? "⚠️ Direktes Öffnen via <code>file://</code> blockiert den Datei-Zugriff.<br>Bitte einen lokalen Server verwenden."
      : `⚠️ <code>laender.json</code> konnte nicht geladen werden.<br><small>${err.message}</small>`;
    return null;
  }
}

(async () => {
  const data = await loadData();
  if (!data) return;
  LAENDER = data;
  $("loadingMsg").style.display = "none";
  renderList();
  updateToggleBtn();
})();
