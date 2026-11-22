// Contenido editorial independiente del renderizado. ES es la versión canónica;
// EN es una adaptación editorial del manifiesto, no de la documentación técnica.
export const philosophyES = {
  kicker: 'NO ES OTRA DISTRIBUCIÓN MÁS',
  title: 'Tu software. Tu mundo. Para todos.',
  lead: 'Crea hoy algo que puedas conservar mañana. NEEBLES OS nació para que tus aplicaciones no queden atadas a la próxima actualización de una distribución, sino a materiales y entornos que tú puedes conocer, preservar y evolucionar.',
  motto: 'Gratuidad con gratuidad. Para todos.',
  buttons: ['Conoce la ingeniería', 'Explora el código'],
  problemKicker: 'EL PROBLEMA QUE NOS HIZO CONSTRUIR NEEBLES',
  problemTitle: 'Tu programa funciona. ¿Por qué debería dejar de hacerlo porque Linux cambió?',
  problem: [
    'Escribes código, seleccionas bibliotecas, configuras un compilador, pruebas una interfaz y finalmente consigues que tu aplicación funcione. No es un archivo aislado: detrás de ese resultado existe un mundo entero de dependencias, herramientas y decisiones de ingeniería.',
    'Después llega el siguiente ciclo de la distribución. Cambian las bibliotecas, desaparecen versiones, se alteran las rutas, evolucionan los intérpretes. Tu código sigue ahí, pero reconstruir el entorno puede convertirse en otro proyecto.',
    'NEEBLES OS nació de esa necesidad concreta: conservar el trabajo y su mundo técnico. No queremos que una aplicación deba perseguir indefinidamente las decisiones de actualización de terceros. Queremos que el desarrollador pueda conservar sus materiales certificados y decidir cómo y cuándo evolucionarlos.'
  ],
  promisesTitle: 'Lo que cambia cuando el entorno también está bajo tu control',
  promises: [
    {number:'01',title:'Conservas los materiales',text:'Los paquetes DEB certificados se identifican y preservan como material reutilizable. Si sus licencias lo permiten, puedes mantener copias, distribuirlas y preparar nuevas versiones bajo tus propias reglas de ingeniería.'},
    {number:'02',title:'No sacrificas un módulo por otro',text:'CUSTOM V2 comparte paquetes Essential y deltas, mientras cada módulo declara el RootFS y mundo que necesita. Reutilizar el material no obliga a mezclar todos los entornos.'},
    {number:'03',title:'Tu lenguaje no es el límite',text:'Boss no necesita conocer el lenguaje interno de cada módulo. Lifecycle interpreta contratos y utiliza artillerías registradas; Construction puede conducir a ejecutables de tecnologías diferentes en mundos certificados.'},
    {number:'04',title:'La certificación no depende del azar',text:'Esbirro controla fuentes, herramientas, mundos, dependencias, fronteras y evidencias. Un resultado de compilación no basta para declarar válido el material.'},
    {number:'05',title:'El sistema puede evolucionar sin rehacer la ISO',text:'Después de instalar Boss, el ciclo de los módulos se gestiona mediante contratos y materiales autenticados. Una nueva aplicación no exige reconstruir toda la distribución.'},
    {number:'06',title:'Tu trabajo puede ayudar a todos',text:'La visión de la futura red NEEBLES es que quien quiera compartir sus módulos pueda entregar a la comunidad no solo una idea, sino trabajo preservable y documentado.'}
  ],
  ownershipKicker:'LA DIFERENCIA ES EL CONTROL',
  ownershipTitle:'No dependas de que un repositorio externo conserve tu mundo por ti.',
  ownershipLead:'En NEEBLES, los DEB certificados son materiales que puedes preservar y reutilizar; los RootFS se componen según las necesidades de cada módulo. No confundimos el paquete que conservas con el entorno que construyes a partir de él.',
  beforeTitle:'Modelo dependiente del entorno de turno',
  before:[
    'El software se adapta al inventario de paquetes disponible en el host.',
    'Una actualización puede cambiar las bibliotecas o retirar versiones necesarias.',
    'Reconstruir un entorno antiguo puede exigir trabajo y dependencias ya no publicadas.'
  ],
  afterTitle:'Modelo de material certificado NEEBLES',
  after:[
    'Conservas las identidades y bytes de los DEB permitidos por sus licencias.',
    'CUSTOM V2 reutiliza Essential y deltas sin imponer un RootFS universal.',
    'Esbirro certifica mundos y Boss gobierna su consumo bajo contratos.'
  ],
  differentiationKicker:'POR QUÉ NEEBLES NO ES SIMPLEMENTE OTRO LINUX',
  differentiationTitle:'No se trata de sumar herramientas. Se trata de conectar todas las piezas.',
  differentiationLead:'Distintas soluciones del ecosistema GNU/Linux resuelven partes de este desafío. NEEBLES desarrolla su propio recorrido integrado desde la construcción de la ISO hasta la certificación, conservación y ejecución gobernada de módulos.',
  differentiation:[
    {name:'Paquetes del sistema',detail:'Gestionan software y actualizaciones de la distribución. NEEBLES añade material DEB certificado que puede conservarse y reutilizarse entre mundos declarados.'},
    {name:'Aislamiento de aplicaciones',detail:'Separar aplicaciones del host es una idea conocida. NEEBLES vincula ese aislamiento con Esbirro, contratos de material, RootFS específicos y autoridad OS.'},
    {name:'Construcciones reproducibles',detail:'También existen fuera de NEEBLES. Aquí se combinan con el lore y las leyes de Esbirro, la verdad material de CUSTOM y el gobierno de Boss.'},
    {name:'Nuestro modelo integrado',detail:'BUILD prepara el sistema; OS aporta fronteras; Esbirro certifica; CUSTOM conserva; Boss interpreta; Lifecycle ejecuta capacidades registradas. Esa unión es la propuesta propia.'}
  ],
  worldsKicker:'LIBERTAD PARA INVENTAR',
  worldsTitle:'¿Te falta una aplicación en Linux? Fabrícala aquí.',
  worlds:[
    'Linux tiene herramientas extraordinarias, pero muchas funcionalidades están dispersas en aplicaciones, scripts, servicios y proyectos que no siempre dialogan entre sí. NEEBLES quiere ofrecer un marco común donde un desarrollador pueda reunir esas piezas y construir experiencias más coherentes.',
    '¿Hay una función de otro sistema operativo que te gustaría tener en GNU/Linux? Puedes diseñar una implementación propia y convertirla en módulo. No importa si la solución requiere Rust, Qt, Python, C++, Node.js u otra tecnología compatible con un mundo que puedas certificar.',
    'En el lore de Esbirro, los guetos protegen a sus elfos con casas, muebles y barrotes. En ingeniería, eso significa mundos controlados, dependencias explícitas y fronteras verificadas. «Indestructibles» es nuestra aspiración de preservación, no una promesa de inmunidad ante cualquier cambio de kernel, hardware o vulnerabilidad.'
  ],
  journeyTitle:'De tu idea a un módulo que puedes conservar',
  journey:[
    {title:'Imagina',text:'Resuelve una necesidad real o une funcionalidades que hoy están dispersas.'},
    {title:'Construye con Esbirro',text:'Prepara fuentes, herramientas, paquetes y mundos bajo las leyes de certificación.'},
    {title:'Declara en CUSTOM V2',text:'Identifica Essential, delta, RootFS, mundo y pasos Construction autenticados.'},
    {title:'Entrega contratos a Boss',text:'Governor y Lifecycle interpretan identidad, transiciones y capacidades sin conocer la implementación privada.'},
    {title:'Conserva y evoluciona',text:'Mantén tu material y decide cuándo certificar una evolución compatible.'},
    {title:'Comparte si quieres',text:'La futura red NEEBLES busca convertir tu trabajo en un aporte voluntario para otros.'}
  ],
  communityKicker:'UNA FILOSOFÍA DE COMUNIDAD',
  communityTitle:'Gratuidad con gratuidad. Para todos.',
  community:[
    'NEEBLES OS es gratuito. Pero nuestra filosofía no termina en ofrecer una ISO sin costo: la idea es que, usando software de terceros junto con tu propio código, puedas terminar construyendo software libre y útil para todos.',
    'Un módulo que tú construyes es tu trabajo. Puedes conservarlo, estudiarlo, mejorarlo y, cuando sus licencias y tus decisiones lo permitan, compartirlo. Así, cosas dispersas de Linux pueden unificarse en mejores aplicaciones, y funcionalidades que te gusten de otros sistemas operativos pueden desarrollarse aquí y transformarse en nuevas posibilidades para la comunidad.',
    'La red NEEBLES se presenta aquí como visión de futuro, no como un servicio público de publicación de módulos ya desplegado. El acceso actual al trabajo es mediante los repositorios GitHub enlazados en esta página.'
  ],
  transparencyTitle:'Libertad con ingeniería y responsabilidad',
  transparency:[
    'Conservar paquetes no te transfiere la propiedad intelectual de terceros. El derecho a copiar, modificar o redistribuir depende de cada licencia y de sus obligaciones; conservar un DEB tampoco significa adquirir automáticamente su código fuente.',
    'Un mundo certificado reduce la dependencia del host, pero no elimina todas las incompatibilidades posibles ni reemplaza los parches de seguridad. El objetivo es que la evolución sea controlada y verificable, no prometer que nunca habrá que mantener el software.',
    'No afirmamos ser la primera distribución que aísla aplicaciones o preserva dependencias. Nuestra propuesta es integrar esos objetivos en una arquitectura propia de construcción, material certificado, gobierno genérico, Lifecycle y ejecución autorizada.'
  ],
  closeTitle:'No desarrolles solamente para el Linux de hoy.',
  closeLead:'Construye algo que puedas conservar, comprender, mejorar y, si lo deseas, compartir con todos.',
  closeCta:'Entra a la arquitectura',
};

export const philosophyEN = {
  kicker:'MORE THAN ANOTHER LINUX DISTRIBUTION',
  title:'Your software. Your world. For everyone.',
  lead:'Build something today that you can preserve tomorrow. NEEBLES OS was born so your applications do not have to depend entirely on the next distribution upgrade, but on materials and environments you can understand, preserve and evolve.',
  motto:'Free software built with free software. For everyone.',
  buttons:['Explore the engineering','Browse the source'],
  problemKicker:'THE PROBLEM THAT STARTED NEEBLES',
  problemTitle:'Your application works. Why should a Linux upgrade decide otherwise?',
  problem:[
    'You write code, select libraries, configure toolchains, test an interface and finally make your application work. That result relies on an entire world of dependencies, tools and engineering decisions.',
    'Then your distribution moves forward. Libraries change, versions disappear, paths evolve, and rebuilding the original environment becomes a separate project.',
    'NEEBLES OS started from that practical need: preserve the work and its technical world. We want developers to keep certified materials under their control and decide how and when to evolve them.'
  ],
  promisesTitle:'What changes when you control the environment',
  promises:[
    {number:'01',title:'Preserve your materials',text:'Certified DEB packages have explicit identities and can be retained and reused, subject to their licenses. You can prepare and certify future versions on your terms.'},
    {number:'02',title:'Independent module environments',text:'CUSTOM V2 reuses Essential packages and module deltas, while each module declares the RootFS and world it needs.'},
    {number:'03',title:'No language lock-in',text:'Boss reads contracts rather than private implementations. Lifecycle dispatches registered capabilities and Construction can run software built with different technologies.'},
    {number:'04',title:'Certification with evidence',text:'Esbirro controls sources, tools, worlds, dependencies, boundaries and validation. A successful build alone is not certification.'},
    {number:'05',title:'Evolve modules independently',text:'Once Boss is installed, new modules can be governed through contracts and authenticated materials without rebuilding the entire ISO.'},
    {number:'06',title:'Share your work',text:'The envisioned NEEBLES network aims to let contributors share preserved, documented modules with the wider community.'}
  ],
  ownershipKicker:'CONTROL MAKES THE DIFFERENCE',
  ownershipTitle:'Do not rely on someone else to preserve your build environment.',
  ownershipLead:'NEEBLES treats certified DEBs as reusable materials and RootFS environments as separately composed results. The package you retain is not the same thing as the environment you assemble from it.',
  beforeTitle:'Host-dependent approach',
  before:[
    'Applications rely on the package inventory available on the host.',
    'System upgrades may change libraries or remove needed versions.',
    'Recreating older environments may require unavailable dependencies.'
  ],
  afterTitle:'NEEBLES certified-material approach',
  after:[
    'Retain permitted DEB bytes and identities under their licenses.',
    'Reuse Essential and module deltas without forcing a universal RootFS.',
    'Esbirro certifies worlds and Boss governs their use through contracts.'
  ],
  differentiationKicker:'WHY NEEBLES IS MORE THAN ANOTHER LINUX',
  differentiationTitle:'It is not about adding tools. It is about connecting the entire system.',
  differentiationLead:'Other GNU/Linux projects address parts of this challenge. NEEBLES develops an integrated path from ISO construction to certification, material preservation and governed module execution.',
  differentiation:[
    {name:'System package management',detail:'Manages distribution packages and updates. NEEBLES adds certified DEB materials that can be retained and reused across declared worlds.'},
    {name:'Application isolation',detail:'Isolation is not new. NEEBLES connects it with Esbirro, material contracts, module-specific RootFS environments and OS authority.'},
    {name:'Reproducible builds',detail:'They exist elsewhere too. Here, they are connected with Esbirro certification, CUSTOM material identity and Boss governance.'},
    {name:'Our integrated model',detail:'BUILD prepares; OS supplies boundaries; Esbirro certifies; CUSTOM preserves; Boss interprets; Lifecycle dispatches registered capabilities. Their integration is the proposition.'}
  ],
  worldsKicker:'THE FREEDOM TO CREATE',
  worldsTitle:'Missing an application on Linux? Build it here.',
  worlds:[
    'Linux has extraordinary tools, yet useful features are often scattered across applications, scripts and services. NEEBLES aims to provide a common framework for combining them into better-integrated experiences.',
    'Want a feature you know from another operating system? Build your own implementation for GNU/Linux. Rust, Qt, Python, C++, Node.js and other technologies can fit when their environments are properly certified.',
    'In Esbirro lore, ghettos protect their elves with houses, furniture and bars. In engineering terms, these are controlled worlds, explicit dependencies and verified boundaries. “Indestructible” expresses the preservation goal, not immunity to all hardware, kernel or security changes.'
  ],
  journeyTitle:'From an idea to a module you can preserve',
  journey:[
    {title:'Imagine',text:'Solve a real need or unite functionality that is currently fragmented.'},
    {title:'Build with Esbirro',text:'Control sources, tools, packages and worlds under certification rules.'},
    {title:'Declare in CUSTOM V2',text:'Identify Essential, module delta, RootFS, world and authenticated Construction steps.'},
    {title:'Provide contracts to Boss',text:'Governor and Lifecycle interpret identities and operations without knowing private implementation details.'},
    {title:'Preserve and evolve',text:'Keep your materials and certify compatible changes when needed.'},
    {title:'Share voluntarily',text:'The future NEEBLES network is envisioned as a place for community contributions.'}
  ],
  communityKicker:'A COMMUNITY PHILOSOPHY',
  communityTitle:'Free software built with free software. For everyone.',
  community:[
    'NEEBLES OS is free of charge. Our philosophy goes beyond offering a zero-cost ISO: by combining third-party software with your own code, you can end up building free and useful software for everyone.',
    'A module you create is your work. Preserve it, study it, improve it and—when you choose and applicable licenses permit—share it with others. Scattered Linux tools can be unified into better applications, and features inspired by other operating systems can be developed here for the community.',
    'The NEEBLES network is a future vision, not a currently deployed public module marketplace. Today, you can explore the project through the GitHub repositories linked on this site.'
  ],
  transparencyTitle:'Freedom requires engineering and responsibility',
  transparency:[
    'Keeping a third-party package does not transfer its intellectual-property rights. Copying, modifying and redistributing depend on each license and its conditions.',
    'Certified environments reduce host coupling but cannot eliminate every incompatibility or security update. The aim is controlled, verifiable evolution—not maintenance-free software.',
    'We do not claim to have invented isolation or reproducible dependencies. NEEBLES combines these goals in its own architecture for certification, governance, declarative operations and authorized execution.'
  ],
  closeTitle:'Do not build only for today’s Linux.',
  closeLead:'Build something you can preserve, understand, improve and—if you wish—share with everyone.',
  closeCta:'Explore the architecture',
};
