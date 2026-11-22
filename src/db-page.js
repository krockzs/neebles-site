// F20 — Producto anunciado: no representa conectores implementados ni una release.
export function dbDetailPage({breadcrumbs,language}) {
 const en=language==='en';
 const t=(es,eng)=>en?eng:es;
 return `${breadcrumbs([{label:'NEEBLES OS',href:'/proyectos/neebles-os'},{label:t('Módulos','Modules'),href:'/proyectos/neebles-os/modulos'},{label:'NEEBLES DB'}])}
 <div class="db-page">
  <section class="db-hero">
   <div class="db-hero-copy">
    <span class="db-status"><span class="db-dot"></span>${t('EN DESARROLLO','IN DEVELOPMENT')}</span>
    <span class="eyebrow">NEEBLES OS · ${t('PRÓXIMO MÓDULO','UPCOMING MODULE')}</span>
    <h1>NEEBLES <em>DB</em></h1>
    <h2>${t('Muchas bases de datos. Una sola herramienta.','Many databases. One tool.')}</h2>
    <p>${t('Un multiconector concebido para administrar bases de datos relacionales y no relacionales desde una misma aplicación. La idea es reducir la necesidad de instalar herramientas distintas para cada motor y reunir las tareas habituales del desarrollador en una experiencia coherente.', 'A multi-connector application envisioned to manage relational and non-relational databases from one place. The goal is to reduce the need for separate tools for each database engine, bringing common development workflows into a consistent experience.')}</p>
    <div class="db-tags"><span>${t('Relacionales','Relational')}</span><span>${t('No relacionales','Non-relational')}</span><span>${t('Multiconector','Multi-connector')}</span><span>${t('Interfaz unificada','Unified interface')}</span></div>
    <p class="db-hero-disclaimer">${t('Proyecto anunciado. Aún no se ha publicado una versión funcional ni conectores certificados.', 'Announced project. No functional release or certified connectors have been published yet.')}</p>
   </div>
   <figure class="db-hero-art"><img src="https://krockzs.github.io/neebles-site/images/db-large.webp" alt="${t('Ilustración conceptual de NEEBLES DB: Sr. Neebles frente a motores de bases de datos','NEEBLES DB concept art: Neebles surrounded by database engines')}" fetchpriority="high" loading="eager" decoding="async" width="1280" height="960"><figcaption>${t('Ilustración conceptual; las marcas y motores mostrados no representan integraciones terminadas.', 'Concept art; the depicted engines and brands do not represent completed integrations.')}</figcaption></figure>
  </section>
  <section class="db-section" id="db-purpose"><span class="eyebrow">01 / ${t('LA IDEA','THE IDEA')}</span><h2>${t('Dejar de saltar entre administradores de bases de datos.','Stop switching between database managers.')}</h2>
   <p>${t('Hoy es habitual utilizar un programa para PostgreSQL, otro para MySQL, otro para MongoDB y herramientas adicionales para diferentes motores. NEEBLES DB nace con la intención de concentrar conexiones y operaciones habituales en una sola interfaz, sin obligar a instalar una aplicación distinta para cada tecnología.', 'It is common to use one tool for PostgreSQL, another for MySQL, another for MongoDB and additional applications for other engines. NEEBLES DB aims to bring connections and common operations into a single interface rather than requiring a separate application for every technology.')}</p>
   <div class="db-feature-grid">
    <article><span>01</span><h3>${t('Conexiones unificadas','Unified connections')}</h3><p>${t('Un mismo lugar para registrar y organizar destinos de distintos motores.','One place to register and organize connections to multiple database engines.')}</p></article>
    <article><span>02</span><h3>${t('Motores diferentes','Different engines')}</h3><p>${t('Una visión que incluye tecnologías relacionales y no relacionales, respetando las capacidades particulares de cada motor.','A vision spanning relational and non-relational technologies while respecting engine-specific capabilities.')}</p></article>
    <article><span>03</span><h3>${t('Menos herramientas dispersas','Fewer scattered tools')}</h3><p>${t('Reducir la fragmentación del entorno de trabajo y facilitar la administración cotidiana desde una experiencia común.','Reduce fragmented workflows and simplify day-to-day administration through a shared experience.')}</p></article>
   </div>
  </section>
  <section class="db-section"><span class="eyebrow">02 / ${t('VISIÓN DE INGENIERÍA','ENGINEERING VISION')}</span><h2>${t('Un núcleo común, conectores especializados.','One shared core, specialized connectors.')}</h2>
   <p>${t('La dirección propuesta es que NEEBLES DB disponga de una interfaz central capaz de incorporar conectores para tecnologías diferentes. Cada conector deberá respetar las particularidades, consultas, permisos y operaciones que soporte su motor. El diseño definitivo y el alcance del primer desarrollo aún deben definirse.', 'The intended direction is a central interface that can incorporate connectors for different technologies. Each connector will need to respect its engine’s supported queries, permissions and operations. The final design and initial scope are yet to be defined.')}</p>
   <div class="db-flow"><div><strong>NEEBLES DB</strong><small>${t('Experiencia unificada','Unified experience')}</small></div><span aria-hidden="true">↓</span><div><strong>${t('Conectores específicos','Engine connectors')}</strong><small>${t('Adaptación por tecnología','Technology-specific adapters')}</small></div><span aria-hidden="true">↓</span><div><strong>${t('Bases relacionales y no relacionales','Relational and non-relational databases')}</strong><small>${t('Capacidades sujetas al motor','Capabilities vary by engine')}</small></div></div>
   <p class="db-disclaimer">${t('Este esquema representa una propuesta conceptual, no una arquitectura implementada. Las herramientas y logotipos de la ilustración muestran el universo de tecnologías que queremos estudiar, no una lista de conectores disponibles.', 'This diagram is a conceptual proposal, not implemented architecture. The tools and logos in the illustration show technologies we intend to explore, not a list of available connectors.')}</p>
  </section>
  <section class="db-section db-roadmap"><span class="eyebrow">03 / ${t('ESTADO DEL PROYECTO','PROJECT STATUS')}</span><h2>${t('El siguiente módulo de NEEBLES está por construirse.','The next NEEBLES module is yet to be built.')}</h2>
   <p>${t('NEEBLES DB está presentado públicamente como concepto. Todavía no ofrecemos descarga, demostraciones funcionales ni fechas de publicación. Su desarrollo se abordará siguiendo las reglas de construcción, certificación y gobernanza del ecosistema NEEBLES, con Esbirro, CUSTOM V2 y Boss.', 'NEEBLES DB is publicly introduced as a concept. No download, working demo or release date is available. Development is intended to follow the NEEBLES ecosystem’s construction, certification and governance practices, including Esbirro, CUSTOM V2 and Boss.')}</p>
   <div class="db-development-note"><span class="db-dot"></span><div><strong>${t('En desarrollo','In development')}</strong><p>${t('En esta etapa mostramos la visión del producto; no anunciamos compatibilidad verificada con ningún motor de base de datos.', 'At this stage we present the product vision; no verified compatibility with any database engine is being announced.')}</p></div></div>
   <a class="db-back" href="/proyectos/neebles-os/modulos" data-link>${t('← Volver a Módulos','← Back to Modules')}</a>
  </section>
 </div>`;
}
