/* ==========================================================================
   RAJAT SONAWANE – PORTFOLIO  ·  script.js
   PART 1 holds ALL the content (edit here). PART 2 holds the interactions.
   ========================================================================== */
(() => {
'use strict';

/* ==========================================================================
   PART 1 · CONTENT  (edit the text below, keep the quotes and commas)
   ========================================================================== */

// Contact form: paste your Formspree address, e.g. 'https://formspree.io/f/abcdwxyz'.
// Leave '' to fall back to opening the visitor's email app.
const FORM_ENDPOINT = '';

// Scrolling ticker under the hero
const MARQUEE = ['Financial data analysis', 'Power BI', 'Tableau', 'Client relationship mapping', 'Portfolio performance reporting',
  'Process optimisation', 'Business analytics', 'Operational risk awareness', 'Cross-border perspective'];

// Experience timeline. tags: Strategy, Analytics, Client, Operations
// Bullets with d:true only show in "Deep dive" view.
const EXPERIENCE = [
  { title: 'Project Assistant Intern', org: 'HSBC Life, Singapore', date: 'Dec 2024 – Feb 2025', tags: ['Strategy', 'Analytics', 'Client'], open: true,
    bullets: [
      { t: 'Supported strategic community-focused wealth and insurance initiatives aligned with regional social impact frameworks.' },
      { t: 'Analysed senior demographic data to assess financial security product suitability and bridge coverage gaps for ageing client segments.' },
      { t: 'Collaborated with internal stakeholders to streamline client outreach workflows and enhance policy accessibility.', d: true },
      { t: 'Synthesised research data into executive reports aimed at strengthening financial resilience.', d: true } ] },
  { title: 'Sales Intern', org: 'Sinotron United, Singapore', date: '2024 – 2025', tags: ['Analytics', 'Client', 'Operations'],
    bullets: [
      { t: 'Conducted international market research and client profiling across Asia-Pacific channels to support client acquisition and relationship mapping.' },
      { t: 'Built performance reporting dashboards in Power BI to track client pipelines and enable management decision-making.' },
      { t: 'Managed end-to-end client onboarding workflows, ensuring multi-stakeholder alignment and strict timeline compliance.', d: true } ] },
  { title: 'Event & summit operations (volunteer)', org: 'SWITCH Singapore · Doers Summit Dubai · TIE Global Summit · TLAACSEA 2025', date: 'Singapore & Dubai', tags: ['Operations', 'Strategy'],
    bullets: [
      { t: 'SWITCH Singapore: led project timelines, stakeholder alignment and live operations for Asia\'s premier deep-tech summit.' },
      { t: 'Doers Summit Dubai: coordinated end-to-end logistics, C-suite speaker schedules and vendor execution for a premier leadership summit.' },
      { t: 'Also volunteered at the TIE Global Summit Singapore and Transport Logistic & Air Cargo Southeast Asia (TLAACSEA) 2025.', d: true } ] },
  { title: 'Marketing Intern', org: 'Greenex Agro Chemicals Ltd.', date: '2021 – 2022', tags: ['Analytics', 'Client', 'Operations'],
    bullets: [
      { t: 'Evaluated front-office client touchpoints and implemented process enhancements that improved workflow response times.' },
      { t: 'Analysed campaign outcomes and business metrics to prepare monthly executive performance reports.' } ] },
];

// Skills & impact. group: Finance, Analytics, Client, Operations, Strategy
// where = where it was used (more entries = more filled dots)
const SKILLS = [
  { name: 'Financial data analysis', group: 'Finance', where: ['HSBC Life', 'MGB research'], impact: 'Assessed senior demographic data to judge product suitability and show where coverage gaps sat for ageing clients.' },
  { name: 'Portfolio performance reporting', group: 'Finance', where: ['Greenex', 'HBS Online'], impact: 'Turned campaign and business metrics into monthly executive performance reports leaders could act on.' },
  { name: 'Dashboards in Power BI & Tableau', group: 'Analytics', where: ['Sinotron'], impact: 'Gave management a single live view of client pipelines across Asia-Pacific to support decisions.' },
  { name: 'Executive reporting', group: 'Analytics', where: ['HSBC Life', 'Greenex'], impact: 'Synthesised research into executive reports aimed at strengthening financial resilience.' },
  { name: 'Market & demographic research', group: 'Analytics', where: ['Sinotron', 'HSBC Life', 'MGB research'], impact: 'Profiled clients across Asia-Pacific channels and mapped barriers to digital platform adoption.' },
  { name: 'Client touchpoint optimisation', group: 'Client', where: ['Greenex'], impact: 'Evaluated front-office touchpoints and implemented changes that improved workflow response times.' },
  { name: 'Client profiling & onboarding', group: 'Client', where: ['Sinotron'], impact: 'Ran end-to-end onboarding with multi-stakeholder alignment and strict timeline compliance.' },
  { name: 'Process optimisation', group: 'Operations', where: ['Greenex', 'HSBC Life'], impact: 'Streamlined client outreach workflows and made policy information easier to access.' },
  { name: 'Live event operations', group: 'Operations', where: ['SWITCH', 'Doers Summit', 'TIE / TLAACSEA'], impact: 'Kept timelines, vendors and C-suite speaker schedules on track at live international summits.' },
  { name: 'Operational risk awareness', group: 'Operations', where: ['Standard Chartered simulation'], impact: 'Practised credit and risk assessment in a Standard Chartered credit analyst simulation.' },
  { name: 'Cross-functional collaboration', group: 'Strategy', where: ['HSBC Life', 'Sinotron', 'BCG simulation'], impact: 'Worked across internal teams, clients and vendors to move projects forward together.' },
  { name: 'Research & problem framing', group: 'Strategy', where: ['MGB research', 'Learning Bridge'], impact: 'Supported scalable education frameworks for 400,000+ vulnerable children and studied digital adoption barriers.' },
];

// Selected work. tags: Analytics, Research, Events, Impact
// image: optional path. pdf: optional path (if the file exists it is shown inside the pop-up).
const PROJECTS = [
  { id: 'sinotron', title: 'Asia-Pacific Client Pipeline Dashboard', org: 'Sinotron United · Sales Intern', date: '2024 – 2025', tags: ['Analytics'], hue: 24,
    image: 'assets/sinotron-dashboard.jpg', imageNote: 'Illustrative mockup · sample data',
    summary: 'Power BI dashboards that track client pipelines across Asia-Pacific for management decisions.',
    points: ['Built performance reporting dashboards in Power BI to track client pipelines.', 'Ran international market research and client profiling across Asia-Pacific channels.', 'Managed end-to-end client onboarding with multi-stakeholder alignment.'] },
  { id: 'telemed', title: 'Barriers to Telemedicine Adoption', org: 'SP Jain · Master of Global Business', date: '2023 – 2025', tags: ['Research'], hue: 160,
    pdf: 'assets/telemedicine-research.pdf',
    summary: 'A study mapping regulatory and behavioural barriers to digital platform adoption.',
    points: ['Mapped regulatory and behavioural barriers to digital platform adoption.', 'Evaluated onboarding funnels to improve user conversion and operational scalability.'] },
  { id: 'hsbc', title: 'Senior Coverage-Gap Analysis', org: 'HSBC Life · Project Assistant Intern', date: 'Dec 2024 – Feb 2025', tags: ['Analytics', 'Research'], hue: 8,
    summary: 'Demographic analysis to judge product suitability and bridge coverage gaps for ageing clients.',
    points: ['Analysed senior demographic data to assess financial security product suitability.', 'Synthesised findings into executive reports on strengthening financial resilience.', 'Supported community-focused wealth and insurance initiatives.'] },
  { id: 'greenex', title: 'Front-Office Touchpoint Review', org: 'Greenex Agro Chemicals · Marketing Intern', date: '2021 – 2022', tags: ['Analytics'], hue: 90,
    summary: 'Evaluated client touchpoints and improved workflow response times.',
    points: ['Evaluated front-office client touchpoints and implemented process enhancements.', 'Prepared monthly executive performance reports from campaign outcomes.'] },
  { id: 'switch', title: 'SWITCH Singapore', org: 'Volunteer · Project lead', date: 'Deep-tech summit', tags: ['Events'], hue: 210,
    summary: 'Led timelines, stakeholder alignment and live operations for Asia\'s premier deep-tech summit.',
    points: ['Led project timelines and stakeholder alignment.', 'Ran live operations during the summit.'] },
  { id: 'doers', title: 'Doers Summit Dubai', org: 'Volunteer · Coordinator', date: 'Leadership summit', tags: ['Events'], hue: 40,
    summary: 'Coordinated logistics, C-suite speaker schedules and vendors for a premier leadership summit.',
    points: ['Coordinated end-to-end logistics.', 'Managed C-suite speaker schedules and vendor execution.'] },
  { id: 'summits', title: 'TIE Global Summit & TLAACSEA 2025', org: 'Volunteer · Singapore', date: '2025', tags: ['Events'], hue: 280,
    summary: 'Volunteered at two major Singapore events: TIE Global Summit and Transport Logistic & Air Cargo Southeast Asia.',
    points: ['TIE Global Summit Singapore.', 'Transport Logistic and Air Cargo Southeast Asia (TLAACSEA) 2025, Singapore.'] },
  { id: 'bridge', title: 'The Learning Bridge', org: 'Associate Researcher · Award recipient', date: 'Philippines initiative', tags: ['Research', 'Impact'], hue: 340,
    summary: 'Awarded for key contributions to scalable education frameworks for 400,000+ vulnerable children.',
    points: ['Supported scalable education frameworks for 400,000+ vulnerable children in the Philippines.', 'Recognised with an award for key contributions as Associate Researcher.'] },
  { id: 'hbs', title: 'Harvard Business School Online', org: 'Global Chapter Team Member', date: 'Community', tags: ['Impact'], hue: 350,
    summary: 'Global chapter volunteer, and delegate for the Asia Conference for the Harvard College Project for Asian and International Relations.',
    points: ['Global Chapter Team Member, Harvard Business School Online.', 'Selected as a delegate for the Asia Conference on behalf of the Harvard College Project for Asian and International Relations Selection Committee.'],
    links: [{ label: 'View my HBS Online portfolio', href: 'https://community.myhbx.org/u/m9s6se/#/about' }] },
];

// Certifications. group: Consulting, Finance & law, Tech & AI, Marketing, Licences
// slug = certificate image name in /certificates (jpg, png or webp). logo = file name in /logos.
const CERTS = [
  { t: 'BCG: Strategy Consulting Job Simulation', i: 'Boston Consulting Group', d: 'Sep 2026', s: ['Business advisory', 'Benchmarking'], g: 'Consulting', slug: 'bcg-strategy', logo: 'bcg', dom: 'bcg.com', ini: 'BCG' },
  { t: 'BCG: GenAI Job Simulation', i: 'BCG X', d: 'Sep 2026', s: ['AI for product development', 'Data modeling'], g: 'Consulting', slug: 'bcg-genai', logo: 'bcg-x', dom: 'bcg.com', ini: 'BCG X' },
  { t: 'BCG: Teaming@BCG Job Simulation', i: 'Boston Consulting Group', d: 'Sep 2026', s: ['Cross-functional team management'], g: 'Consulting', slug: 'bcg-teaming', logo: 'bcg', dom: 'bcg.com', ini: 'BCG' },
  { t: 'Standard Chartered: Credit Analyst Job Simulation', i: 'Standard Chartered', d: 'Sep 2026', s: ['Financial accounting', 'Risk management'], g: 'Finance & law', slug: 'standard-chartered-credit-analyst', logo: 'standard-chartered', dom: 'standardchartered.com', ini: 'SC' },
  { t: 'Freshfields: US Capital Markets Job Simulation', i: 'Freshfields', d: 'Sep 2026', s: ['Written communication', 'Legal research'], g: 'Finance & law', slug: 'freshfields-us-capital-markets', logo: 'freshfields', dom: 'freshfields.com', ini: 'FF' },
  { t: 'Freshfields Hong Kong: Mergers and Acquisitions Job Simulation', i: 'Freshfields', d: 'Sep 2026', s: ['Legal research'], g: 'Finance & law', slug: 'freshfields-hk-ma', logo: 'freshfields', dom: 'freshfields.com', ini: 'FF' },
  { t: 'Baker McKenzie: Corporate Job Simulation', i: 'Baker McKenzie', d: 'Sep 2025', s: ['Project management'], g: 'Finance & law', slug: 'baker-mckenzie-corporate', logo: 'baker-mckenzie', dom: 'bakermckenzie.com', ini: 'BM' },
  { t: 'GE Aerospace: Manufacturing Engineering Job Simulation', i: 'GE Aerospace', d: 'Sep 2026', s: ['Accountability', 'Data interpretation'], g: 'Finance & law', slug: 'ge-aerospace', logo: 'ge-aerospace', dom: 'geaerospace.com', ini: 'GE' },
  { t: 'British Airways: Data Science Job Simulation', i: 'Forage', d: 'Sep 2026', s: ['Data modeling'], g: 'Tech & AI', slug: 'british-airways-data-science', logo: 'british-airways', dom: 'britishairways.com', ini: 'BA' },
  { t: 'Mastercard: Cybersecurity Job Simulation', i: 'Mastercard', d: 'Apr 2025', s: ['Cybersecurity', 'Data visualization'], g: 'Tech & AI', slug: 'mastercard-cybersecurity', logo: 'mastercard', dom: 'mastercard.com', ini: 'MC' },
  { t: 'Foundations in Generative AI', i: 'IBM', d: 'Sep 2026', s: ['Prompt engineering', 'Generative AI'], g: 'Tech & AI', slug: 'ibm-generative-ai', logo: 'ibm', dom: 'ibm.com', ini: 'IBM',
    desc: 'How large language models generate text and images, high-impact use cases for daily workflows, and prompt refinement to improve output quality.' },
  { t: 'Develop an Agile Cloud Computing Solution', i: 'Practera', d: 'Apr 2025', s: ['Cloud computing', 'AWS', 'Scrum'], g: 'Tech & AI', slug: 'practera-agile-cloud', logo: 'practera', dom: 'practera.com', ini: 'P',
    desc: 'A 48+ hour Agile sprint designing a lift-and-shift cloud migration for a non-profit, with secure AWS architecture and an automated CI/CD pipeline.' },
  { t: 'Google Ads Certifications', i: 'Google Ads (Google Partner)', d: 'Sep 2026 · Expires Sep 2027', s: ['Google Ads'], g: 'Marketing', slug: 'google-ads', logo: 'google-ads', dom: 'ads.google.com', ini: 'G' },
  { t: 'AI-Powered Performance Ads Certification', i: 'Google Ads (Google Partner)', d: 'Sep 2026 · Expires Sep 2027', s: ['Advertising', 'Performance management'], g: 'Marketing', slug: 'google-ai-performance-ads', logo: 'google-ads', dom: 'ads.google.com', ini: 'G' },
  { t: 'Certified Professional Food Manager (CPFM)', i: 'NTUC LearningHub', d: 'Mar 2024', s: ['Food & beverage operations'], g: 'Licences', slug: 'ntuc-cpfm', logo: 'ntuc-learninghub', dom: 'ntuclearninghub.com', ini: 'NTUC' },
  { t: 'Certified Professional, Food Safety (CP-FS)', i: 'NTUC LearningHub', d: 'Mar 2024 · Expires Mar 2029', s: ['Food & beverage operations'], g: 'Licences', slug: 'ntuc-cpfs', logo: 'ntuc-learninghub', dom: 'ntuclearninghub.com', ini: 'NTUC' },
];

// "Beyond the CV" flip cards. The first card holds the easter egg.
const PERSONAL = [
  { emo: '🏸', title: 'State-level badminton', hint: 'Hover or tap', back: 'Singles and doubles on competitive state circuits. Footwork, patience and reading the other side of the net carry over to client conversations.', egg: true },
  { emo: '🌏', title: 'Three cities, one degree', hint: 'Hover or tap', back: 'Singapore, London and Dubai at SP Jain. Different markets, one constant question: what does the client actually need?' },
  { emo: '📊', title: 'Favourite tools', hint: 'Hover or tap', back: 'Power BI and Tableau for turning messy data into a one-screen story that a busy executive can read in a minute.' },
  { emo: '🎤', title: 'Summit regular', hint: 'Hover or tap', back: 'SWITCH, Doers Summit, TIE Global Summit, TLAACSEA 2025. I enjoy the controlled chaos of live events.' },
];

/* ==========================================================================
   PART 2 · INTERACTIONS (you normally do not need to edit below this line)
   ========================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- view toggle (Executive / Deep dive) ---------- */
function setView(v) {
  document.body.dataset.view = v;
  $$('[data-set-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setView === v)));
  try { localStorage.setItem('rs-view', v); } catch (e) { /* storage blocked: ignore */ }
}
$$('[data-set-view]').forEach(b => b.addEventListener('click', () => setView(b.dataset.setView)));
try { const v = localStorage.getItem('rs-view'); if (v === 'deep' || v === 'exec') setView(v); } catch (e) { /* ignore */ }

/* ---------- mobile menu ---------- */
const burger = $('#burger'), mmenu = $('#mobileMenu');
burger.addEventListener('click', () => { const o = mmenu.classList.toggle('open'); burger.setAttribute('aria-expanded', String(o)); });
$$('a', mmenu).forEach(a => a.addEventListener('click', () => { mmenu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

/* ---------- hero headline: split into letters, react to the pointer ---------- */
const title = $('#heroTitle');
title.setAttribute('aria-label', title.textContent);
(function split(node, st) {
  [...node.childNodes].forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(tok => {
        if (!tok) return;
        if (/^\s+$/.test(tok)) { frag.append(' '); return; }
        const w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
        [...tok].forEach(ch => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch; s.style.setProperty('--i', st.i++); w.append(s); });
        frag.append(w);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) split(n, st);
  });
})(title, { i: 0 });
const chars = $$('.ch', title);
if (FINE && !RM) {
  let mx = -999, my = -999, queued = false;
  const paint = () => {
    queued = false;
    chars.forEach(c => {
      const r = c.getBoundingClientRect(), dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2);
      const k = clamp(1 - Math.hypot(dx, dy) / 190, 0, 1);
      c.style.fontVariationSettings = `"wght" ${Math.round(620 + 180 * k)}, "opsz" 96`;
      c.style.transform = k > 0.01 ? `translateY(${(-6 * k).toFixed(1)}px)` : '';
    });
  };
  title.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; if (!queued) { queued = true; requestAnimationFrame(paint); } });
  title.addEventListener('mouseleave', () => { mx = my = -999; requestAnimationFrame(paint); });
}

/* ---------- custom cursor, glow, magnetic buttons, portrait tilt ---------- */
const glow = $('#glow');
if (FINE) {
  document.documentElement.classList.add('has-cursor');
  const dot = $('#curDot'), ring = $('#curRing');
  let px = innerWidth / 2, py = innerHeight / 2, rx = px, ry = py, gx = px, gy = py;
  addEventListener('mousemove', e => { px = e.clientX; py = e.clientY; dot.style.transform = `translate(${px}px,${py}px)`; }, { passive: true });
  document.addEventListener('mouseover', e => ring.classList.toggle('hover', !!e.target.closest('a,button,.sk,.pj,.flip,.view-cert,summary')));
  document.addEventListener('mouseleave', () => { dot.style.opacity = ring.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = ring.style.opacity = ''; });
  (function loop() {
    rx += (px - rx) * .18; ry += (py - ry) * .18;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    if (!RM) { gx += (px - gx) * .04; gy += (py - gy) * .04; glow.style.transform = `translate3d(${gx - 310}px,${gy - 310}px,0)`; }
    requestAnimationFrame(loop);
  })();
  if (!RM) {
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px,${(e.clientY - r.top - r.height / 2) * .32}px)`; });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
    const pt = $('#portrait');
    pt.addEventListener('mousemove', e => { const r = pt.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; pt.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`; });
    pt.addEventListener('mouseleave', () => { pt.style.transform = ''; });
  }
}

/* ---------- small helpers: reveal, filters, logos ---------- */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
const reveal = el => { if (io) io.observe(el); else el.classList.add('in'); };

// Build "All + tags" chips and call apply(tag) when one is chosen
function filters(box, tags, apply) {
  const all = ['All', ...tags];
  box.innerHTML = all.map((t, i) => `<button type="button" class="chip" data-f="${esc(t)}" aria-pressed="${i === 0}">${esc(t)}</button>`).join('');
  box.addEventListener('click', e => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    $$('[data-f]', box).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    apply(b.dataset.f);
  });
}
const uniq = a => [...new Set(a)];

// Official logos: if /logos/<key>.png|jpg|svg|webp exists it replaces the small default icon
function logoHTML(key, dom, ini) {
  return `<img data-logo="logos/${key}" src="https://www.google.com/s2/favicons?domain=${dom}&sz=128" alt="" width="30" height="30" loading="lazy" onerror="this.parentNode.textContent='${ini}'">`;
}
function applyLogos(root = document) {
  $$('img[data-logo]', root).forEach(img => {
    const exts = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
    const next = i => {
      if (i >= exts.length) return;
      const t = new Image();
      t.onload = () => { img.removeAttribute('width'); img.removeAttribute('height'); img.src = img.dataset.logo + exts[i]; img.style.cssText = 'width:100%;height:100%;object-fit:contain;padding:3px'; };
      t.onerror = () => next(i + 1);
      t.src = img.dataset.logo + exts[i];
    };
    next(0);
  });
}

/* ---------- marquee ---------- */
const track = $('#track');
track.innerHTML = [0, 1].map(() => MARQUEE.map(t => `<span>${esc(t)}</span>`).join('')).join('');

/* ---------- experience timeline ---------- */
const tl = $('#tl');
EXPERIENCE.forEach((x, n) => {
  const el = document.createElement('article');
  el.className = 'tl-item rv' + (x.open ? ' open' : '');
  el.dataset.tags = x.tags.join('|');
  el.style.setProperty('--d', n);
  el.innerHTML = `<span class="tl-dot" aria-hidden="true"></span>
    <div class="card">
      <button type="button" class="tl-head" aria-expanded="${!!x.open}" aria-controls="tlb${n}">
        <span><h3>${esc(x.title)}</h3><span class="tl-meta" style="display:block">${esc(x.org)} · ${esc(x.date)}</span>
        <span class="tl-tags">${x.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</span></span>
        <span class="plus" aria-hidden="true">+</span>
      </button>
      <div class="expand" id="tlb${n}"><div><ul class="tl-body">${x.bullets.map(b => `<li class="${b.d ? 'deep-only' : ''}">${esc(b.t)}</li>`).join('')}</ul></div></div>
    </div>`;
  $('.tl-head', el).addEventListener('click', e => { const o = el.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });
  tl.append(el); reveal(el);
});
filters($('#tlFilters'), uniq(EXPERIENCE.flatMap(x => x.tags)), f => $$('.tl-item', tl).forEach(el => { el.hidden = !(f === 'All' || el.dataset.tags.split('|').includes(f)); }));
const tlFill = $('#tlFill');

/* ---------- skills & impact matrix ---------- */
const skGrid = $('#skGrid');
SKILLS.forEach((s, n) => {
  const el = document.createElement('button');
  el.type = 'button'; el.className = 'card sk rv'; el.dataset.g = s.group; el.style.setProperty('--d', n % 4);
  el.setAttribute('aria-expanded', 'false');
  el.innerHTML = `<span class="sk-top"><span><span class="tag">${esc(s.group)}</span><h3 style="margin-top:.7rem">${esc(s.name)}</h3></span><span class="plus" aria-hidden="true">+</span></span>
    <span class="nodes" aria-hidden="true">${[0, 1, 2].map(i => `<i class="${i < s.where.length ? 'on' : ''}"></i>`).join('')}</span>
    <small>Used in: ${esc(s.where.join(' · '))}</small>
    <span class="expand"><span style="overflow:hidden;display:block"><span class="impact" style="display:block"><b>Impact</b>${esc(s.impact)}</span></span></span>`;
  el.addEventListener('click', () => { const o = el.classList.toggle('open'); el.setAttribute('aria-expanded', String(o)); });
  skGrid.append(el); reveal(el);
});
filters($('#skFilters'), uniq(SKILLS.map(s => s.group)), f => $$('.sk', skGrid).forEach(el => { el.hidden = !(f === 'All' || el.dataset.g === f); }));

/* ---------- selected work + modal ---------- */
const modal = $('#modal'), mBody = $('#mBody'), mKicker = $('#mKicker');
const pjGrid = $('#pjGrid');
PROJECTS.forEach((p, n) => {
  const el = document.createElement('button');
  el.type = 'button'; el.className = 'card pj rv'; el.dataset.tags = p.tags.join('|'); el.style.setProperty('--d', n % 3);
  el.innerHTML = `<span class="pj-cover" style="--h:${p.hue}">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : `<span class="big">${String(n + 1).padStart(2, '0')}</span>`}<span class="open-pill">Open ↗</span></span>
    <span class="pj-body"><span class="tag">${esc(p.tags.join(' · '))}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></span>`;
  el.addEventListener('click', () => openProject(p));
  pjGrid.append(el); reveal(el);
});
filters($('#pjFilters'), uniq(PROJECTS.flatMap(p => p.tags)), f => $$('.pj', pjGrid).forEach(el => { el.hidden = !(f === 'All' || el.dataset.tags.split('|').includes(f)); }));

function openProject(p) {
  mKicker.textContent = p.tags.join(' · ');
  mBody.innerHTML = `<span class="tag">${esc(p.date)}</span><h3 id="mTitle">${esc(p.title)}</h3><p class="m-meta">${esc(p.org)}</p>
    <p>${esc(p.summary)}</p><ul>${p.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    ${p.image ? `<figure class="m-img" style="margin-inline:0"><img src="${esc(p.image)}" alt="${esc(p.title)} preview"><figcaption>${esc(p.imageNote || '')}</figcaption></figure>` : ''}
    <div id="mExtra"></div>
    ${p.links ? `<div class="m-links">${p.links.map(l => `<a class="btn btn-ghost" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</div>` : ''}`;
  modal.showModal();
  if (p.pdf) { // show the research paper inside the pop-up only if the file exists
    fetch(p.pdf, { method: 'HEAD' }).then(r => { if (r.ok) $('#mExtra').innerHTML = `<iframe class="m-frame" src="${esc(p.pdf)}#toolbar=0&navpanes=0" title="${esc(p.title)} (research paper)"></iframe>`; }).catch(() => { /* file not added yet */ });
  }
}

/* ---------- certifications + view-only viewer ---------- */
const certGrid = $('#certGrid'), viewer = $('#viewer'), vImg = $('#vImg'), vTitle = $('#vTitle');
CERTS.forEach((c, n) => {
  const el = document.createElement('article');
  el.className = 'card cert rv'; el.dataset.g = c.g; el.dataset.cert = 'certificates/' + c.slug; el.style.setProperty('--d', n % 3);
  el.innerHTML = `<div class="cert-top"><span class="logo-tile">${logoHTML(c.logo, c.dom, c.ini)}</span><div><h3>${esc(c.t)}</h3><p class="iss">${esc(c.i)} · ${esc(c.d)}</p></div></div>
    ${c.desc ? `<p class="dsc">${esc(c.desc)}</p>` : ''}<div class="skl">${c.s.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>
    <button type="button" class="view-cert" hidden>View certificate</button>`;
  certGrid.append(el); reveal(el);
  // reveal the "View certificate" button only when the image file exists
  const btn = $('.view-cert', el), exts = ['.jpg', '.jpeg', '.png', '.webp'];
  const probe = i => { if (i >= exts.length) return; const im = new Image(); im.onload = () => { btn.dataset.src = el.dataset.cert + exts[i]; btn.hidden = false; }; im.onerror = () => probe(i + 1); im.src = el.dataset.cert + exts[i]; };
  probe(0);
  btn.addEventListener('click', () => { vImg.src = btn.dataset.src; vImg.alt = 'Certificate: ' + c.t; vTitle.textContent = c.t; viewer.showModal(); });
});
vImg.addEventListener('contextmenu', e => e.preventDefault());
filters($('#certFilters'), uniq(CERTS.map(c => c.g)), f => $$('.cert', certGrid).forEach(el => { el.hidden = !(f === 'All' || el.dataset.g === f); }));
$('#certCount').dataset.to = CERTS.length;
$('#hbsLogo').innerHTML = logoHTML('hbs', 'hbs.edu', 'HBS');
applyLogos();

// close dialogs via ✕ button or a click on the dark backdrop
[modal, viewer].forEach(d => {
  d.addEventListener('click', e => { if (e.target === d || e.target.closest('[data-close]')) d.close(); });
  d.addEventListener('close', () => { if (d === viewer) vImg.removeAttribute('src'); });
});

/* ---------- "Beyond the CV" flip cards + easter egg ---------- */
function rain() {
  if (RM) return;
  for (let i = 0; i < 26; i++) {
    const s = document.createElement('span');
    s.className = 'rain'; s.textContent = '🏸'; s.setAttribute('aria-hidden', 'true');
    s.style.left = Math.random() * 100 + 'vw'; s.style.animationDuration = 2.4 + Math.random() * 2.2 + 's'; s.style.animationDelay = Math.random() * .8 + 's';
    document.body.append(s); setTimeout(() => s.remove(), 5600);
  }
}
const flipGrid = $('#flipGrid');
PERSONAL.forEach((p, n) => {
  const el = document.createElement('div');
  el.className = 'flip rv'; el.tabIndex = 0; el.setAttribute('role', 'button'); el.setAttribute('aria-pressed', 'false'); el.style.setProperty('--d', n);
  el.setAttribute('aria-label', p.title + '. ' + p.back);
  el.innerHTML = `<div class="flip-in"><div class="face front"><span class="emo ${p.egg ? 'egg' : ''}">${p.emo}</span><div><h3>${esc(p.title)}</h3><small>${esc(p.hint)}</small></div></div>
    <div class="face back"><h3>${esc(p.title)}</h3><p>${esc(p.back)}</p></div></div>`;
  const toggle = () => { const f = el.classList.toggle('flipped'); el.setAttribute('aria-pressed', String(f)); };
  el.addEventListener('click', toggle);
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  if (p.egg) $('.egg', el).addEventListener('click', e => { e.stopPropagation(); rain(); });
  flipGrid.append(el); reveal(el);
});

/* ---------- reveal static elements ---------- */
$$('.rv').forEach(reveal);

/* ---------- count-up numbers ---------- */
const counter = el => {
  const to = +el.dataset.to, suf = el.dataset.suffix || '';
  if (RM) { el.textContent = to + suf; return; }
  const t0 = performance.now();
  (function step(t) { const k = clamp((t - t0) / 1300, 0, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
};
const cio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { counter(e.target); cio.unobserve(e.target); } }), { threshold: .6 });
$$('.stat b').forEach(b => cio.observe(b));

/* ---------- scroll: progress bar, active nav, timeline fill ---------- */
const bar = $('#progress'), links = $$('#navLinks a'), secs = links.map(a => $(a.getAttribute('href')));
let ticking = false;
function onScroll() {
  ticking = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max, 0, 1) : 0})`;
  let cur = -1; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= 140) cur = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === cur));
  const r = tl.getBoundingClientRect();
  tlFill.style.setProperty('--p', clamp((innerHeight * .65 - r.top) / r.height, 0, 1).toFixed(3));
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('resize', onScroll); onScroll();

/* ---------- contact form ---------- */
const form = $('#contactForm'), okMsg = $('#formOk');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const n = form.name.value.trim(), m = form.email.value.trim(), t = form.message.value.trim();
  const checks = [[form.name, n.length > 1], [form.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)], [form.message, t.length >= 10]];
  checks.forEach(([f, ok]) => { f.closest('.field').classList.toggle('bad', !ok); f.setAttribute('aria-invalid', String(!ok)); });
  const bad = checks.find(c => !c[1]); if (bad) { bad[0].focus(); return; }
  const say = (msg) => { okMsg.textContent = msg; okMsg.classList.add('show'); };
  if (FORM_ENDPOINT) {
    try {
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: n, email: m, message: t }) });
      if (!r.ok) throw new Error('bad');
      say('Thanks, your message was sent. I will reply soon.'); form.reset();
    } catch (err) { say('The message could not be sent. Please email me directly at rajat.ms23dbm015@spjain.org.'); }
    return;
  }
  location.href = 'mailto:rajat.ms23dbm015@spjain.org?subject=' + encodeURIComponent('Portfolio enquiry from ' + n) + '&body=' + encodeURIComponent(t + '\n\nFrom: ' + n + ' (' + m + ')');
  say('Your email app should open with the message ready to send.'); form.reset();
});

$('#yr').textContent = new Date().getFullYear();
})();
