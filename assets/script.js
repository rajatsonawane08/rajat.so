/* ===== CONTENT: edit here. All facts come from the resume. ===== */
const projects = [
  {id:'hsbc', cat:'Analytics', title:'Senior financial security study', org:'HSBC Life, Singapore', when:'Dec 2024 – Feb 2025',
   blurb:'Analysed senior demographic data to find coverage gaps in financial security products.',
   badge:'Executive reports',
   story:'As Project Assistant Intern I supported community-focused wealth and insurance initiatives aligned with regional social impact frameworks.',
   did:['Analysed senior demographic data to judge how well financial security products suit ageing client segments','Identified gaps in coverage and ways to bridge them','Worked with internal stakeholders to streamline client outreach and make policies easier to access','Synthesised research into executive reports on strengthening financial resilience']},
  {id:'sino', cat:'Analytics', title:'Client pipeline dashboards', org:'Sinotron United, Singapore', when:'2024 – 2025',
   blurb:'Power BI dashboards that let management track client pipelines and decide faster.',
   badge:'Power BI',
   story:'As Sales Intern I combined market research with operations: profiling clients, onboarding them and reporting on progress.',
   did:['Researched international markets and profiled clients across Asia-Pacific channels','Managed client onboarding end to end, keeping multiple stakeholders aligned to deadlines','Built Power BI dashboards to track client pipelines for management decisions']},
  {id:'tele', cat:'Research', title:'Barriers to telemedicine adoption', org:'SP Jain School of Global Management', when:'2023 – 2025',
   blurb:'Mapped regulatory and behavioural barriers that stop people adopting digital health platforms.',
   badge:'Onboarding funnels',
   story:'An academic research project from my Master of Global Business.',
   did:['Mapped regulatory and behavioural barriers to digital platform adoption','Evaluated onboarding funnels to improve user conversion and operational scalability']},
  {id:'bridge', cat:'Impact', title:'The Learning Bridge', org:'Associate Researcher', when:'Awarded contribution',
   blurb:'Research support for scalable education frameworks serving vulnerable children in the Philippines.',
   badge:'400,000+ children',
   story:'Recognised for key contributions as an Associate Researcher on an initiative supporting education frameworks for more than 400,000 vulnerable children.',
   did:['Contributed research to scalable education frameworks','Received an award for key contributions']},
  {id:'switch', cat:'Events', title:'SWITCH Singapore', org:'Project lead (volunteer)', when:'Singapore',
   blurb:'Led timelines, stakeholder alignment and live operations for a deep-tech summit.',
   badge:'Live operations',
   story:'Asia\'s premier deep-tech summit needed tight coordination between many parties on the day.',
   did:['Led project timelines','Aligned stakeholders','Ran live operations on site']},
  {id:'doers', cat:'Events', title:'Doers Summit Dubai', org:'Logistics coordinator (volunteer)', when:'Dubai',
   blurb:'End-to-end logistics, C-suite speaker schedules and vendor delivery for a leadership summit.',
   badge:'C-suite scheduling',
   story:'A premier leadership summit where speaker time and vendor delivery had to run on schedule.',
   did:['Coordinated end-to-end logistics','Managed C-suite speaker schedules','Managed vendor execution']}
];

const timeline = [
  {cat:'Operations', when:'2021 – 2022', title:'Marketing Intern, Greenex Agro Chemicals', text:'Evaluated front-office client touchpoints and implemented process changes that improved workflow response times. Prepared monthly executive performance reports from campaign outcomes and business metrics.'},
  {cat:'Strategy', when:'Sep – Dec 2021', title:'Business Analytics certificate, Harvard Business School Online', text:'Applied analytical frameworks to evidence-based decisions, interpreted business data, and practised communicating insights.'},
  {cat:'Strategy', when:'Oct 2023 – Feb 2025', title:'Master of Global Business, SP Jain', text:'Studied across Singapore, Dubai and London. Research project on telemedicine adoption barriers.'},
  {cat:'Corporate Growth', when:'2024 – 2025', title:'Sales Intern, Sinotron United', text:'Client profiling, onboarding workflows and Power BI pipeline dashboards across Asia-Pacific channels.'},
  {cat:'Strategy', when:'Dec 2024 – Feb 2025', title:'Project Assistant Intern, HSBC Life', text:'Senior demographic analysis for financial security products and executive reporting on financial resilience.'},
  {cat:'Operations', when:'2025', title:'Summit operations in Singapore and Dubai', text:'Led SWITCH Singapore operations, coordinated Doers Summit Dubai, and volunteered at TIE Global Summit and TLAACSEA 2025.'}
];

const skills = [
  {name:'Data interpretation (Power BI & Tableau)', where:['Sinotron United: pipeline dashboards for management','Greenex: monthly executive performance reports','HSBC Life: research turned into executive reports']},
  {name:'Financial data analysis', where:['HSBC Life: product suitability and coverage gaps for senior clients','Portfolio performance reporting coursework at SP Jain']},
  {name:'Client onboarding & touchpoints', where:['Sinotron: end-to-end onboarding with multi-stakeholder alignment','Greenex: front-office touchpoint evaluation and faster response times','Telemedicine study: onboarding funnel evaluation']},
  {name:'Process optimisation', where:['Greenex: workflow changes that improved response times','HSBC Life: streamlined client outreach workflows']},
  {name:'Live operations & stakeholder management', where:['SWITCH Singapore: timelines, alignment and live ops','Doers Summit Dubai: logistics, C-suite schedules, vendors']},
  {name:'Research & social impact', where:['The Learning Bridge: frameworks for 400,000+ children','Telemedicine adoption barriers research']}
];

const beyond = [
  {front:'Badminton', icon:'trophy', back:'State-level player in singles and doubles. Competition taught me pace, patience and reading the next move.'},
  {front:'Asia Conference', icon:'globe', back:'Selected as a delegate for the Harvard College Project for Asian and International Relations.'},
  {front:'Global volunteering', icon:'heart-handshake', back:'Global Chapter Team Member, Harvard Business School Online, plus summit volunteering in Singapore.'},
  {front:'Design inspiration', icon:'sparkles', back:'Placeholder: add your favourite studios, sites and designers here.'}
];

/* ===== Helpers ===== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const h = (t, a={}, html='') => Object.assign(document.createElement(t), a, {innerHTML: html});
const icons = () => window.lucide && lucide.createIcons();

/* ===== View toggle (Executive / Deep dive) ===== */
$$('.view-btn').forEach(b => b.addEventListener('click', () => {
  document.documentElement.dataset.view = b.dataset.set;
  $$('.view-btn').forEach(x => x.setAttribute('aria-selected', x === b));
  // Deep dive also reveals the long-form narrative in project cards
  $$('.proj .more').forEach(m => m.hidden = b.dataset.set !== 'deep');
}));

/* ===== Chip filter factory ===== */
function chips(host, labels, onPick){
  labels.forEach((l,i) => {
    const b = h('button', {className:'chip', type:'button'}, l);
    b.setAttribute('aria-pressed', i === 0);
    b.onclick = () => { $$('.chip', host).forEach(c => c.setAttribute('aria-pressed', c === b)); onPick(l, i); };
    host.append(b);
  });
}

/* ===== Project grid + tilt + panel ===== */
const grid = $('#grid');
projects.forEach(p => {
  const c = h('button', {className:'card proj reveal', type:'button'},
    `<div class="top"><span>${p.org}</span><span>${p.when}</span></div>
     <div class="body"><h3>${p.title}</h3><p>${p.blurb}</p>
     <p class="more mt-3" hidden>${p.story}</p><span class="badge">${p.badge}</span></div>`);
  c.dataset.cat = p.cat;
  c.onclick = () => openPanel(p);
  c.addEventListener('mousemove', e => {           // hover tilt
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left)/r.width - .5, y = (e.clientY - r.top)/r.height - .5;
    c.style.transform = `perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  c.addEventListener('mouseleave', () => c.style.transform = '');
  grid.append(c);
});
chips($('#filters'), ['All','Analytics','Research','Events','Impact'], l =>
  $$('.proj').forEach(c => c.classList.toggle('hide', l !== 'All' && c.dataset.cat !== l)));

const panel = $('#panel'), scrim = $('#scrim'); let lastFocus;
function openPanel(p){
  lastFocus = document.activeElement;
  $('#p-body').innerHTML = `<span class="badge">${p.cat}</span><h2 id="p-title">${p.title}</h2>
    <p>${p.org} · ${p.when}</p><h4>Context</h4><p>${p.story}</p>
    <h4>What I did</h4><ul>${p.did.map(d=>`<li>${d}</li>`).join('')}</ul>`;
  scrim.classList.remove('hidden'); panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); panel.focus();
}
function closePanel(){
  panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); scrim.classList.add('hidden'); lastFocus && lastFocus.focus();
}
$('#p-close').onclick = scrim.onclick = closePanel;
addEventListener('keydown', e => e.key === 'Escape' && closePanel());

/* ===== Timeline ===== */
const tl = $('#timeline');
timeline.forEach(t => {
  const li = h('li', {className:'tl-item reveal'}, `<time>${t.when}</time><h3>${t.title}</h3><p>${t.text}</p>`);
  li.dataset.cat = t.cat; tl.append(li);
});
chips($('#tl-filters'), ['All','Strategy','Operations','Corporate Growth'], l =>
  $$('.tl-item').forEach(i => i.classList.toggle('hide', l !== 'All' && i.dataset.cat !== l)));
const bar = $('#tl-progress');
function tlScroll(){                                // scroll-linked progress line
  const r = tl.getBoundingClientRect(), v = innerHeight * .6;
  bar.style.height = Math.max(0, Math.min(r.height, v - r.top)) + 'px';
}
addEventListener('scroll', tlScroll, {passive:true}); tlScroll();

/* ===== Competency matrix ===== */
const sk = $('#skills'), det = $('#skill-detail');
function showSkill(i){
  $$('.skill', sk).forEach((b,j) => b.setAttribute('aria-selected', i === j));
  det.innerHTML = `<h3>${skills[i].name}</h3><ul>${skills[i].where.map(w=>`<li>${w}</li>`).join('')}</ul>`;
}
skills.forEach((s,i) => { const b = h('button', {className:'skill', type:'button'}, `${s.name}<i data-lucide="arrow-right"></i>`); b.onclick = () => showSkill(i); sk.append(b); });
showSkill(0);

/* ===== Beyond work flip cards ===== */
beyond.forEach(b => {
  const f = h('button', {className:'flip', type:'button'},
    `<div><span class="card face"><i data-lucide="${b.icon}" class="text-gold"></i><h3>${b.front}</h3></span>
     <span class="card face back"><p>${b.back}</p></span></div>`);
  f.setAttribute('aria-pressed', 'false');
  f.onclick = () => f.setAttribute('aria-pressed', f.getAttribute('aria-pressed') !== 'true');
  $('#flips').append(f);
});

/* ===== Cursor glow + peacock eye ===== */
const glow = $('#glow'), eye = $('#eye');
addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px';
  const r = eye.getBoundingClientRect(), dx = (e.clientX - r.left - r.width/2)/innerWidth, dy = (e.clientY - r.top - r.height/2)/innerHeight;
  $$('.ring', eye).forEach((g,i) => g.style.transform = `translate(${-dx*(i+1)*14}px,${-dy*(i+1)*14}px)`);
});
let taps = 0;                                       // Easter egg: tap the eye 5 times
eye.onclick = () => { if(++taps >= 5){ taps = 0; eye.classList.remove('burst'); void eye.offsetWidth; eye.classList.add('burst'); } };

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), {threshold:.12});
$$('.reveal').forEach(el => io.observe(el));
icons();
