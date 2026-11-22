import './style.css';
import es from './i18n/es.js';
import en from './i18n/en.js';
import { ecosystemES, repository } from './content-es.js';
import { enhanceDocumentation } from './content-extensions-es.js';
import { translateDocumentation } from './content-en.js';
import pageTranslations from './i18n/pages-en.js';
import { philosophyES, philosophyEN } from './philosophy.js';
import { bossDetailPage } from './boss-page.js';
import { secretsDetailPage } from './secrets-page.js';
import { connectDetailPage } from './connect-page.js';
import { proxyDetailPage } from './proxy-page.js';
import { dbDetailPage } from './db-page.js';

const app = document.querySelector('#app');
const docsES = enhanceDocumentation(ecosystemES);
// Imágenes editoriales de los tres mecanismos; no modifican sus contratos técnicos.
const editorialImages = [
 {section:'custom', after:'El lore del Goblin:', src:'https://krockzs.github.io/neebles-site/images/neebles-esbirro-large.webp', alt:'NEEBLES Esbirro: el Goblin invoca su grimorio y gobierna las leyes de certificación', caption:'ESBIRRO · El laboratorio, sus leyes y el lore del Goblin.'},
 {section:'boss', after:'Lifecycle: un lenguaje', src:'https://krockzs.github.io/neebles-site/images/neebles-lifecycle-large.webp', alt:'NEEBLES Lifecycle: Neebles despliega artillería y municiones contra archivos y carpetas', caption:'LIFECYCLE · Artillery, Objective y Munition: el lenguaje de las operaciones.'},
 {section:'boss', before:'Nightmare no pertenece', src:'https://krockzs.github.io/neebles-site/images/neebles-nightmare-large.webp', alt:'NEEBLES Nightmare: Neebles transforma archivos y carpetas mediante alquimia en un ambiente nocturno', caption:'NIGHTMARE · Transformación declarativa mediante fórmulas, Reader y Writer.'}
];
for (const image of editorialImages) {
 const section = docsES.find(s => s.id === image.section);
 if (!section) continue;
 const idx = section.blocks.findIndex(b => b.type === 'prose' && b.title.startsWith(image.after ?? image.before));
 if (idx < 0) throw new Error(`No se encontró la sección para ${image.src}`);
 section.blocks.splice(idx + (image.after ? 1 : 0), 0, {type:'editorial-image', src:image.src, alt:image.alt, caption:image.caption});
}
// Ilustraciones de cabecera de las pestañas técnicas.
// Se agregan después de las mejoras editoriales para mantener el orden de los bloques.
for (const illustration of [
 {id:'overview',src:'https://krockzs.github.io/neebles-site/images/neebles-overview-large.webp',alt:'Visión general de NEEBLES OS: Neebles invoca rayos sobre Esbirro, el arsenal Lifecycle y la alquimia Nightmare',caption:'VISIÓN GENERAL · Esbirro, Lifecycle y Nightmare dentro del ecosistema NEEBLES.'},
 {id:'build',src:'https://krockzs.github.io/neebles-site/images/neebles-build-large.webp',alt:'NEEBLES BUILD: Neebles incorpora componentes de Debian, paquetes y tecnología NEEBLES en una imagen ISO',caption:'BUILD · Composición de la ISO, materiales certificados e integración inicial.'},
 {id:'os',src:'https://krockzs.github.io/neebles-site/images/neebles-os-platform-large.webp',alt:'NEEBLES OS: el Sr. Neebles sostiene el emblema de Debian durante un ritual de integración de plataforma',caption:'OS · Plataforma basada en Debian, fronteras y capacidades propias de NEEBLES.'}
]) {
 const section = docsES.find(s => s.id === illustration.id);
 if (!section) throw new Error(`No existe la pestaña técnica ${illustration.id}`);
 section.blocks.unshift({type:'editorial-image',src:illustration.src,alt:illustration.alt,caption:illustration.caption});
}
const docsEN = translateDocumentation(docsES);
const artTranslations = {
 'https://krockzs.github.io/neebles-site/images/neebles-esbirro-large.webp': ['NEEBLES Esbirro: the Goblin summons his grimoire and enforces certification laws','ESBIRRO · The laboratory, its laws and Goblin lore.'],
 'https://krockzs.github.io/neebles-site/images/neebles-lifecycle-large.webp': ['NEEBLES Lifecycle: Neebles deploys artillery and munitions against digital files and folders','LIFECYCLE · Artillery, Objective and Munition: the language of operations.'],
 'https://krockzs.github.io/neebles-site/images/neebles-nightmare-large.webp': ['NEEBLES Nightmare: Neebles transforms files and folders through dark alchemy','NIGHTMARE · Declarative transformations using formulas, Reader and Writer.'],
 'https://krockzs.github.io/neebles-site/images/neebles-overview-large.webp': ['NEEBLES OS overview: Neebles summons lightning over Esbirro, the Lifecycle arsenal and Nightmare alchemy','OVERVIEW · Esbirro, Lifecycle and Nightmare within the NEEBLES ecosystem.'],
 'https://krockzs.github.io/neebles-site/images/neebles-build-large.webp': ['NEEBLES BUILD: Neebles integrates Debian components, packages and NEEBLES technology into an ISO image','BUILD · ISO composition, certified materials and initial integration.'],
 'https://krockzs.github.io/neebles-site/images/neebles-os-platform-large.webp': ['NEEBLES OS: Mr. Neebles holds the Debian emblem in a platform integration ritual','OS · Debian-based platform, boundaries and NEEBLES capabilities.']
};
for (const section of docsEN) for (const block of section.blocks) if (block.type === 'editorial-image') {
 const value=artTranslations[block.src];
 if (!value) throw new Error(`Missing editorial image translation: ${block.src}`);
 [block.alt,block.caption]=value;
}
const docsForLanguage = () => language === 'en' ? docsEN : docsES;
const philosophy = () => language === 'en' ? philosophyEN : philosophyES;
const ISO = 'https://drive.google.com/file/d/1JBJEL_ki2SeBlYZdoNHSboBYT9G0fng_/view?usp=sharing';
const translations = {es,en};
const defaultLanguage = localStorage.getItem('eg-lang') === 'en' ? 'en' : 'es';
let language = defaultLanguage;
let articleTab = 'overview';
const t = (key) => translations[language][key] ?? es[key] ?? key;
const escapeHTML = (input) => String(input).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pic = (source, alt, cls='') => `<img class="${cls}" src="${source}" alt="${escapeHTML(alt)}" ${cls==='priority'?'fetchpriority="high" loading="eager"':'loading="lazy"'} decoding="async" width="600" height="430">`;
const mod = [
 {id:'boss', name:'NEEBLES Boss', image:'boss',accent:'cyan',repository:repository.boss},
 {id:'secrets',name:'NEEBLES Secrets',image:'secrets',accent:'amber',repository:repository.secrets},
 {id:'connect',name:'NEEBLES Connect',image:'connect',accent:'purple',repository:repository.connect},
 {id:'proxy',name:'NEEBLES Proxy',image:'proxy',accent:'green',repository:null},
 {id:'db',name:'NEEBLES DB',image:'db',accent:'db',repository:null,comingSoon:true}
];
function textFor(item,field) { return t(`${item.id}${field}`); }
function breadcrumbs(items) { return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/" data-link>Entropia Games</a>${items.map(i=>`<span aria-hidden="true">/</span>${i.href?`<a href="${i.href}" data-link>${escapeHTML(i.label)}</a>`:escapeHTML(i.label)}`).join('')}</nav>`; }
function moduleCard(m,featured=false) {return `<a class="project-card accent-${m.accent} ${featured?'featured':''}" href="/proyectos/neebles-os/${m.id}" data-link><div class="card-media">${pic('https://krockzs.github.io/neebles-site/images/'+m.image+'-thumb.webp',m.name)}</div><div class="card-copy"><span class="card-kicker">${m.comingSoon?t('underDevelopment'):(featured?t('featured'):t('module'))}</span><h3>${m.name}</h3><p>${textFor(m,'Subtitle')}</p><span class="card-action">${m.comingSoon?t('learnMore'):t('explore')} ↗</span></div></a>`;}
function home() {return `<section class="section home-portfolio"><div class="section-heading"><div><span class="eyebrow">${t('portfolio')}</span><h1>${t('projects')}</h1></div><span class="count">01 / ${t('projects')}</span></div><div class="grid-four"><article class="project-card accent-cyan home-project-card"><a class="home-project-main" href="/proyectos/neebles-os" data-link aria-label="${t('viewProject')}: NEEBLES OS"><div class="card-media">${pic('https://krockzs.github.io/neebles-site/images/neebles-os-thumb.webp','NEEBLES OS','priority')}</div><div class="card-copy"><span class="card-kicker">${t('projectType')}</span><h3>NEEBLES OS</h3><p>${t('projectDescription')}</p></div></a><div class="home-card-actions"><a class="card-action" href="/proyectos/neebles-os" data-link>${t('viewProject')} ↗</a><a class="home-modules-button" href="/proyectos/neebles-os/modulos" data-link aria-label="${t('modules')}: ${t('moduleHeading')}"><img src="https://krockzs.github.io/neebles-site/images/neebles-modules-thumb.webp" width="30" height="30" alt="" loading="lazy" decoding="async"><span>${t('modules')}</span><span aria-hidden="true">↗</span></a></div></article></div></section>`;}
function osIntro(){return `${breadcrumbs([{label:'NEEBLES OS'}])}<section class="os-intro"><div class="os-art">${pic('https://krockzs.github.io/neebles-site/images/neebles-os-large.webp',language==='en'?'Official NEEBLES OS logo':'Logotipo oficial de NEEBLES OS','priority')}</div><div class="os-copy"><h1 class="neebles-project-title">NEEBLES OS</h1><p>${t('osDescription')}</p><div class="os-features"><span>${t('free')}</span><span>${t('multi')}</span><span>${t('modular')}</span><span>${t('debian')}</span></div><div class="os-download"><div class="os-download-info"><strong>NEEBLES OS — AMD64</strong><span>${t('iso')}</span></div><div class="os-download-actions"><a class="os-download-button" href="${ISO}" target="_blank" rel="noopener noreferrer">↓ ${t('download')}</a></div></div><a class="modules-entry" href="/proyectos/neebles-os/modulos" data-link aria-label="${t('modules')}: ${t('moduleHeading')}"><span class="modules-entry-icon" aria-hidden="true"><img src="https://krockzs.github.io/neebles-site/images/neebles-modules-thumb.webp" alt="" loading="lazy" decoding="async" width="76" height="76"></span><span class="modules-entry-text"><strong>${t('modules')}</strong><small>${t('moduleIntro')}</small></span><span class="modules-entry-arrow" aria-hidden="true">↗</span></a></div></section>`;}
function philosophyArea(){
  const d = philosophy();
  const para = values => values.map(x=>`<p>${escapeHTML(x)}</p>`).join('');
  return `<section class="manifesto" id="filosofia" aria-label="${escapeHTML(d.title)}">
    <div class="manifesto-hero">
      <div class="manifesto-kicker"><span class="pulse"></span>${escapeHTML(d.kicker)}</div>
      <h2>${escapeHTML(d.title)}</h2><p class="manifesto-lead">${escapeHTML(d.lead)}</p>
      <div class="manifesto-actions"><button type="button" class="manifesto-main-cta" data-scroll="engineering">${escapeHTML(d.buttons[0])} ↓</button></div>
      <p class="manifesto-motto">${escapeHTML(d.motto)}</p>
    </div>
    <div class="manifesto-problem"><div class="manifesto-side"><span class="eyebrow">${escapeHTML(d.problemKicker)}</span><h3>${escapeHTML(d.problemTitle)}</h3></div><div class="manifesto-body">${para(d.problem)}</div></div>
    <div class="manifesto-promises"><div class="manifesto-section-head"><span class="eyebrow">NEEBLES OS</span><h3>${escapeHTML(d.promisesTitle)}</h3></div><div class="promise-grid">${d.promises.map(x=>`<article class="promise"><span>${escapeHTML(x.number)}</span><h4>${escapeHTML(x.title)}</h4><p>${escapeHTML(x.text)}</p></article>`).join('')}</div></div>
    <div class="ownership"><span class="eyebrow">${escapeHTML(d.ownershipKicker)}</span><h3>${escapeHTML(d.ownershipTitle)}</h3><p class="ownership-lead">${escapeHTML(d.ownershipLead)}</p><div class="ownership-grid"><article class="ownership-before"><span class="ownership-badge">01 / HOST</span><h4>${escapeHTML(d.beforeTitle)}</h4><ul>${d.before.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></article><article class="ownership-after"><span class="ownership-badge">02 / NEEBLES</span><h4>${escapeHTML(d.afterTitle)}</h4><ul>${d.after.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></article></div></div>
    <div class="differentiation"><div class="manifesto-section-head"><span class="eyebrow">${escapeHTML(d.differentiationKicker)}</span><h3>${escapeHTML(d.differentiationTitle)}</h3><p>${escapeHTML(d.differentiationLead)}</p></div><div class="differentiation-grid">${d.differentiation.map((x,i)=>`<article class="${i===d.differentiation.length-1?'differentiation-highlight':''}"><span>${String(i+1).padStart(2,'0')}</span><h4>${escapeHTML(x.name)}</h4><p>${escapeHTML(x.detail)}</p></article>`).join('')}</div></div>
    <div class="worlds"><div class="worlds-copy"><span class="eyebrow">${escapeHTML(d.worldsKicker)}</span><h3>${escapeHTML(d.worldsTitle)}</h3>${para(d.worlds)}</div><div class="worlds-visual"><div class="worlds-title">ESBIRRO / CUSTOM V2</div><div class="world-pill">Qt · C++</div><div class="world-pill">Rust</div><div class="world-pill">Python</div><div class="world-pill">Node.js</div><div class="worlds-foot">ROOTFS + MUNDOS CERTIFICADOS</div></div></div>
    <div class="manifesto-journey"><div class="manifesto-section-head"><span class="eyebrow">NEEBLES OS</span><h3>${escapeHTML(d.journeyTitle)}</h3></div><ol class="journey-list">${d.journey.map((x,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><strong>${escapeHTML(x.title)}</strong><p>${escapeHTML(x.text)}</p></div></li>`).join('')}</ol></div>
    <div class="community"><span class="eyebrow">${escapeHTML(d.communityKicker)}</span><h3>${escapeHTML(d.communityTitle)}</h3>${para(d.community)}<div class="community-repos"><span>${language==='en'?'Explore the public repositories':'Explora los repositorios públicos'}</span><div><a href="${repository.build}" target="_blank" rel="noopener noreferrer">BUILD ↗</a><a href="${repository.os}" target="_blank" rel="noopener noreferrer">OS ↗</a><a href="${repository.custom}" target="_blank" rel="noopener noreferrer">CUSTOM ↗</a><a href="${repository.boss}" target="_blank" rel="noopener noreferrer">Boss ↗</a></div></div></div>
    <details class="transparency"><summary>${escapeHTML(d.transparencyTitle)} <span>+</span></summary><div>${para(d.transparency)}</div></details>
    <div class="manifesto-close"><h3>${escapeHTML(d.closeTitle)}</h3><p>${escapeHTML(d.closeLead)}</p></div>
  </section>`;
}
function conceptsMarkup(block){return `<section class="concepts"><h3>${escapeHTML(block.title)}</h3><div class="concept-grid">${block.items.map(item=>`<article><strong>${escapeHTML(item.name)}</strong><p>${escapeHTML(item.meaning)}</p></article>`).join('')}</div></section>`;}
function arsenalMarkup(block){return `<section class="arsenal"><h3>${escapeHTML(block.title)}</h3><p class="arsenal-caption">${escapeHTML(block.caption)}</p><div class="arsenal-grid">${block.items.map(item=>`<article><div class="arsenal-id">${escapeHTML(item.id)}</div><dl><dt>OBJECTIVE</dt><dd>${escapeHTML(item.objective)}</dd><dt>MUNITION</dt><dd>${escapeHTML(item.munition)}</dd></dl><p>${escapeHTML(item.purpose)}</p></article>`).join('')}</div></section>`;}
function flowMarkup(block, index) {return `<figure class="tech-flow"><figcaption class="flow-caption"><span class="flow-index">${t('flow')} ${String(index+1).padStart(2,'0')}</span><strong>${escapeHTML(block.title)}</strong>${block.caption?`<small>${escapeHTML(block.caption)}</small>`:''}</figcaption><ol class="flow-steps">${block.nodes.map((n,i)=>`<li><div class="step-count">${String(i+1).padStart(2,'0')}</div><div><strong>${escapeHTML(n.title)}</strong><p>${escapeHTML(n.text)}</p></div></li>`).join('')}</ol></figure>`;}
const englishSourceLabels = {
 'CUSTOM clásico':'Classic CUSTOM',
 'Repositorio BUILD':'BUILD repository',
 'README de BUILD':'BUILD README',
 'Boss · contratos de release':'Boss · release contracts',
 'Repositorio OS':'OS repository',
 'README de OS':'OS README',
 'Autoridades de plataforma':'Platform authorities',
 'Proveedores OS':'OS providers',
 'CUSTOM clásico · README':'Classic CUSTOM · README',
 'Esbirro · lore y leyes':'Esbirro · lore and laws',
 'CUSTOM · repositorio':'CUSTOM repository',
 'Connect · caso de ingeniería':'Connect · engineering case',
 'Boss · README técnico':'Boss · technical README',
 'Arquitectura implementada':'Implemented architecture'
};
function sourceLabel(value){return language==='en'?(englishSourceLabels[value]??value):value;}
function blockHTML(block, idx){switch(block.type){
 case 'editorial-image':return `<figure class="tech-illustration"><img src="${escapeHTML(block.src)}" alt="${escapeHTML(block.alt)}" loading="lazy" decoding="async" width="1280" height="946"><figcaption>${escapeHTML(block.caption)}</figcaption></figure>`;
 case 'prose':return `<section class="article-prose"><h3>${escapeHTML(block.title)}</h3>${block.paragraphs.map(p=>`<p>${escapeHTML(p)}</p>`).join('')}</section>`;
 case 'flow':return flowMarkup(block,idx);
 case 'code':return `<section class="article-code"><h3>${escapeHTML(block.title)}</h3><div class="code-head"><span>${escapeHTML(block.language)}</span><button type="button" class="copy-code" data-copy="${encodeURIComponent(block.code)}">${t('copy')}</button></div><pre><code>${escapeHTML(block.code)}</code></pre>${block.caption?`<p class="code-note">${escapeHTML(block.caption)}</p>`:''}</section>`;
 case 'concepts':return conceptsMarkup(block);
 case 'arsenal':return arsenalMarkup(block);
 case 'sources':return `<section class="article-sources"><h3>${t('sources')}</h3><div class="source-grid">${block.links.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(sourceLabel(name))}</span><span aria-hidden="true">↗</span></a>`).join('')}</div></section>`;
 default:return '';
}}
function technicalArticle(){const docs=docsForLanguage();const i=Math.max(0,docs.findIndex(s=>s.id===articleTab));const doc=docs[i];const labels=['labelGeneral','labelBuild','labelOs','labelCustom','labelBoss'];return `<div class="ecosystem-intro"><span class="eyebrow">${t('engineering')}</span><p>${t('engineeringIntro')}</p></div><nav class="subtabs" aria-label="${t('engineering')}">${docs.map((s,index)=>`<button class="subtab ${articleTab===s.id?'active':''}" type="button" data-article="${s.id}" aria-pressed="${articleTab===s.id}">${t(labels[index])}</button>`).join('')}</nav><article class="technical-article" id="tech-content"><div class="article-cover"><span class="eyebrow">${escapeHTML(doc.kicker)}</span><h2>${escapeHTML(doc.title)}</h2><p class="article-lead">${escapeHTML(doc.lead)}</p></div><div class="article-sections">${doc.blocks.map(blockHTML).join('')}</div><nav class="article-pages">${i>0?`<button data-article="${docs[i-1].id}" type="button">← ${t('prev')}</button>`:'<span></span>'}${i<docs.length-1?`<button data-article="${docs[i+1].id}" type="button">${t('next')} →</button>`:''}</nav></article>`;}
function moduleArea(){return `<div class="modules-area"><div class="module-area-head"><span class="eyebrow">05 / ${t('modules')}</span><h2>${t('moduleHeading')}</h2><p>${t('moduleIntro')}</p></div><div class="boss-featured">${moduleCard(mod[0],true)}</div><div class="module-three">${mod.slice(1).map(m=>moduleCard(m)).join('')}</div></div>`;}
function os(){return `${osIntro()}${philosophyArea()}<section class="ecosystem-shell" id="engineering"><div class="primary-panel">${technicalArticle()}</div></section>`;}
function modulesPage(){return `${breadcrumbs([{label:'NEEBLES OS',href:'/proyectos/neebles-os'},{label:t('modules')}])}<section class="modules-page">${moduleArea()}</section>`;}
function detail(m){if(m.id==='boss')return bossDetailPage({breadcrumbs,repository,language});if(m.id==='secrets')return secretsDetailPage({breadcrumbs,repository,language});if(m.id==='connect')return connectDetailPage({breadcrumbs,repository,language});if(m.id==='proxy')return proxyDetailPage({breadcrumbs,repository,language});if(m.id==='db')return dbDetailPage({breadcrumbs,language});const proxy=m.id==='proxy';return `${breadcrumbs([{label:'NEEBLES OS',href:'/proyectos/neebles-os'},{label:m.name}])}<div class="detail-header"><span class="eyebrow">${m.id==='boss'?t('featured'):t('module')}</span><h1>${m.name}</h1><p>${textFor(m,'Description')}</p></div>${proxy?`<div class="dual-images"><figure>${pic('https://krockzs.github.io/neebles-site/images/proxy-client-large.webp','NEEBLES Proxy Client')}<figcaption><a href="${repository.client}" target="_blank" rel="noopener noreferrer">Proxy Client ↗</a></figcaption></figure><figure>${pic('https://krockzs.github.io/neebles-site/images/proxy-server-large.webp','NEEBLES Proxy Server')}<figcaption><a href="${repository.server}" target="_blank" rel="noopener noreferrer">Proxy Server ↗</a></figcaption></figure></div>`:`<div class="detail-image">${pic('https://krockzs.github.io/neebles-site/images/'+m.image+'-large.webp',m.name)}</div>`}<div class="detail-bottom"><div><h2>${t('about')} ${m.name}</h2><p>${textFor(m,'Description')}</p></div><div class="info-panel"><h3>${t('sources')}</h3>${proxy?`<a href="${repository.client}" target="_blank" rel="noopener noreferrer">Proxy Client ↗</a><a href="${repository.server}" target="_blank" rel="noopener noreferrer">Proxy Server ↗</a>`:`<a href="${m.repository}" target="_blank" rel="noopener noreferrer">${t('sourceCode')} ↗</a>`}</div></div>`;}

function localizeModuleContent(container, moduleId) {
 const dictionary = pageTranslations[moduleId];
 if (!dictionary) return;
 const walker=document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
 let node;
 while ((node=walker.nextNode())) {
  const parent=node.parentElement;
  if (!parent || parent.closest('pre, code, script, style')) continue;
  const raw=node.nodeValue;
  const trimmed=raw.trim();
  if (!trimmed || !Object.hasOwn(dictionary,trimmed)) continue;
  const leading=raw.match(/^\s*/)?.[0] ?? '';
  const trailing=raw.match(/\s*$/)?.[0] ?? '';
  node.nodeValue=leading+dictionary[trimmed]+trailing;
 }
 container.querySelectorAll('[alt],[aria-label],[title]').forEach(el=>{
  for (const attr of ['alt','aria-label','title']) {
   const value=el.getAttribute(attr);
   if (!value) continue;
   if (Object.hasOwn(dictionary,value)) el.setAttribute(attr,dictionary[value]);
   else if (attr==='alt') el.setAttribute(attr,value.replace('Captura real de','Real screenshot of').replace('Captura real:','Real screenshot:').replace('Ilustración oficial de','Official illustration of').replace('Datos privados protegidos','private details protected'));
  }
 });
}

function render(){const path=decodeURI(location.pathname).replace(/\/$/,'')||'/';let content;if(path==='/')content=home();else if(path==='/proyectos/neebles-os')content=os();else if(path==='/proyectos/neebles-os/modulos')content=modulesPage();else{const match=path.match(/^\/proyectos\/neebles-os\/([a-z-]+)$/);const m=match&&mod.find(n=>n.id===match[1]);content=m?detail(m):`<div class="missing"><h1>404</h1><p>${t('notFound')}</p><a href="/" data-link>${t('back')}</a></div>`;}app.innerHTML=`<div class="site"><header class="site-header"><a href="/" class="brand" data-link><img src="https://krockzs.github.io/neebles-site/images/entropia-games-small.webp" alt="Entropia Games" width="120" height="80"></a><nav><a href="/" data-link>${t('navHome')}</a><a href="/proyectos/neebles-os" data-link>${t('navProject')}</a></nav><div class="lang-switch" role="group" aria-label="Language / Idioma"><button type="button" data-lang="es" class="${language==='es'?'active':''}" aria-pressed="${language==='es'}" title="Español"><img src="https://krockzs.github.io/neebles-site/images/cl.svg" alt="Chile" width="24" height="18"> ES</button><button type="button" data-lang="en" class="${language==='en'?'active':''}" aria-pressed="${language==='en'}" title="English"><img src="https://krockzs.github.io/neebles-site/images/us.svg" alt="United States" width="24" height="18"> EN</button></div></header><main>${content}</main><footer><span>© ${new Date().getFullYear()} Entropia Games</span><span>${t('footer')}</span></footer></div>`;document.documentElement.lang=language;
if (language==='en') {const moduleId=path.match(/^\/proyectos\/neebles-os\/(boss|secrets|connect|proxy)$/)?.[1];if (moduleId)localizeModuleContent(app.querySelector('main'),moduleId);}
const metaByRoute={
 '/proyectos/neebles-os/boss': ['NEEBLES Boss 2.0.17: gobernador modular, catálogo, configuración, acceso rápido, manifiestos, Lifecycle y control de dependencias.','NEEBLES Boss 2.0.17: modular governance, catalog, settings, quick access, manifests, Lifecycle and dependency control.'],
 '/proyectos/neebles-os/secrets':['NEEBLES Secrets 1.0.7: bóvedas KDBX, generación de secretos, Crypto Lab, estructuras cifradas, backups y aislamiento entre módulos.','NEEBLES Secrets 1.0.7: KDBX vaults, secret generation, Crypto Lab, encrypted structures, backups and module isolation.'],
 '/proyectos/neebles-os/connect':['NEEBLES Connect: conexiones SSH y VNC integradas, multimonitor, inventario de equipos y dependencia con Secrets. VS Code y Sunshine pendientes.','NEEBLES Connect: integrated SSH and VNC, multimonitor, computer inventory and Secrets dependency. VS Code and Sunshine are in development.'],
 '/proyectos/neebles-os/proxy':['NEEBLES Proxy: Client y Server, Tailscale Exit Node, Boss, Secrets, operación de red gobernada y estado real del allowlist.','NEEBLES Proxy: Client and Server, Tailscale Exit Node, Boss, Secrets, governed networking and actual allowlist enforcement status.'],
 '/proyectos/neebles-os/db':['NEEBLES DB: futuro multiconector para bases de datos relacionales y no relacionales. Una sola interfaz. En desarrollo.','NEEBLES DB: planned unified relational and non-relational database manager. In development.'],
 '/proyectos/neebles-os/modulos':['Módulos NEEBLES OS: Boss, Secrets, Connect, Proxy y NEEBLES DB en desarrollo.','NEEBLES OS modules: Boss, Secrets, Connect, Proxy and NEEBLES DB in development.'],
 '/proyectos/neebles-os':['Tu software. Tu mundo. Para todos. NEEBLES OS: distribución gratuita, Esbirro, DEB reutilizables, Boss y módulos certificados.','Your software. Your world. For everyone. NEEBLES OS: a free distribution, Esbirro, reusable DEBs, Boss and certified modules.'],
 '/':['Entropia Games: ingeniería y proyectos de software. Descubre NEEBLES OS y sus repositorios públicos.','Entropia Games: engineering and software projects. Explore NEEBLES OS and its public repositories.']
};
const metaDescription=(metaByRoute[path]??metaByRoute['/'])[language==='en'?1:0];
document.querySelector('meta[name="description"]')?.setAttribute('content',metaDescription);
document.querySelector('meta[property="og:description"]')?.setAttribute('content',metaDescription);
document.querySelector('meta[property="og:image"]')?.setAttribute('content',path.startsWith('/proyectos/neebles-os')?'https://entropiagames.clhttps://krockzs.github.io/neebles-site/images/neebles-os-large.webp':'https://entropiagames.clhttps://krockzs.github.io/neebles-site/images/entropia-games-large.webp');
document.querySelector('link[rel="canonical"]')?.setAttribute('href','https://entropiagames.cl'+path);
document.title=`${path==='/'?'Entropia Games':path==='/proyectos/neebles-os'?'NEEBLES OS':path==='/proyectos/neebles-os/modulos'?t('modules'):mod.find(m=>path.endsWith('/'+m.id))?.name||'404'} | Entropia Games`;}
document.addEventListener('click',e=>{const btn=e.target.closest('[data-lang],[data-article],[data-copy],[data-scroll]');if(btn){if(btn.dataset.scroll){document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth',block:'start'});return;}if(btn.dataset.lang){language=btn.dataset.lang;localStorage.setItem('eg-lang',language);render();return;}if(btn.dataset.article){articleTab=btn.dataset.article;render();document.querySelector('.ecosystem-shell')?.scrollIntoView({behavior:'smooth',block:'start'});return;}if(btn.dataset.copy){navigator.clipboard?.writeText(decodeURIComponent(btn.dataset.copy));btn.textContent=t('copied');return;}}const link=e.target.closest('a[data-link]');if(link&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey&&e.button===0){e.preventDefault();history.pushState({},'',link.href);render();window.scrollTo(0,0);}});
window.addEventListener('popstate',render);
render();
