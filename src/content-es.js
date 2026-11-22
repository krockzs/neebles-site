// Documentación editorial ES. Fuentes: README y contratos del ecosistema NEEBLES.
// El contenido se mantiene fuera de los componentes de presentación.
export const repository = {
  build:'https://github.com/krockzs/neebles-build',
  os:'https://github.com/krockzs/neebles-os',
  custom:'https://github.com/krockzs/neebles-custom',
  boss:'https://github.com/krockzs/neebles-boss',
  test:'https://github.com/krockzs/neebles-test-module',
  secrets:'https://github.com/krockzs/neebles-secrets',
  connect:'https://github.com/krockzs/neebles-connect',
  client:'https://github.com/krockzs/neebles-proxy-client',
  server:'https://github.com/krockzs/neebles-proxy-server'
};

export const ecosystemES = [
{
 id:'overview', label:'Visión general', kicker:'01 / ARQUITECTURA', title:'Un sistema modular construido sobre Debian',
 lead:'NEEBLES OS es una distribución GNU/Linux basada en Debian. La ingeniería propia del proyecto no consiste en reemplazar el kernel: consiste en integrar una plataforma con reglas explícitas para construir, certificar, instalar y ejecutar módulos independientes.',
 blocks:[
  {type:'prose',title:'Cuatro responsabilidades que trabajan juntas', paragraphs:[
   'BUILD, OS, CUSTOM y Boss son piezas complementarias. BUILD materializa la distribución; OS suministra capacidades y autoridad de plataforma; CUSTOM define la procedencia y la integridad del material certificado; Boss gobierna la vida de los módulos. Estas responsabilidades se conectan, pero no se sustituyen mutuamente.',
   'La distinción es deliberada. Cuando aparece una nueva tecnología para un módulo, la arquitectura intenta resolverla mediante declaraciones, materiales y capacidades existentes, en lugar de introducir una condición especial en la distribución o recompilar Boss para reconocer ese lenguaje.',
   'La página separa la preparación de la ISO, el arranque inicial de Boss y la vida posterior de los módulos. Son tres momentos distintos de un mismo sistema. Entender esa separación explica por qué la ISO puede incorporar material certificado y, al mismo tiempo, permitir que los módulos evolucionen después de la instalación.'
  ]},
  {type:'flow',title:'Mapa de responsabilidades',caption:'Representación de relaciones; no indica que los cuatro componentes se invoquen uno detrás de otro en todas las operaciones.',nodes:[
   {title:'BUILD',text:'Integra Debian modificado, proveedores OS, material clásico y bootstrap; genera la ISO.'},
   {title:'OS',text:'Entrega autoridad de plataforma y proveedores de frontera, sesión y recursos.'},
   {title:'CUSTOM clásico / V2',text:'Conserva material certificado para Boss y Calamares; y, por separado, paquetes, mundos y Construction de módulos.'},
   {title:'Boss',text:'Autentica, registra, concede, materializa, transacciona y ejecuta capacidades gobernadas.'},
   {title:'Módulos',text:'Declaran contratos y comportamiento privado sin imponer su lenguaje a Boss.'}
  ]},
  {type:'prose',title:'Primera etapa: de la distribución a Boss', paragraphs:[
   'BUILD prepara una ISO de Debian modificada que ya incorpora el material certificado de CUSTOM clásico requerido por la integración de Boss y Calamares. En la imagen también se incorporan los archivos de plataforma procedentes de OS y el mecanismo de bootstrap.',
   'El bootstrap consulta el contrato estable publicado en la última release de Boss, compara la versión disponible con la instalación local y, cuando procede, solicita la autorización necesaria para preparar e instalar el componente. El punto importante es que Boss no necesita descubrir desde cero en el equipo del usuario un entorno de construcción arbitrario: la imagen contiene materiales controlados y el bootstrap utiliza un camino de instalación definido.',
   'La consulta y descarga de los artefactos de la release de Boss sí dependen de GitHub. Tener incorporados los DEB de CUSTOM clásico no significa que la instalación de la versión estable más reciente sea automáticamente offline. Esta diferencia quedará visible en los diagramas para no confundir materiales de entorno con artefactos de release.'
  ]},
  {type:'flow',title:'Del origen a la primera ejecución de Boss',nodes:[
   {title:'Debian + fuentes certificadas',text:'Base del sistema, integración de BUILD, OS y material clásico de CUSTOM.'},
   {title:'ISO preparada por BUILD',text:'Incluye infraestructura de instalación, autoridad de plataforma y material controlado.'},
   {title:'Bootstrap de Boss',text:'Consulta bootstrap.json de la última release estable en GitHub.'},
   {title:'Autorización + materialización',text:'Prepara artefactos validados para instalar Boss en un entorno controlado.'},
   {title:'Boss instalado',text:'Ya puede consultar el Registry y comenzar a gobernar módulos.'}
  ]},
  {type:'prose',title:'Segunda etapa: del módulo al entorno ejecutable', paragraphs:[
   'Instalar un módulo es una operación distinta del bootstrap de Boss. El módulo publica una identidad y contratos. Boss valida qué debe instalar y resuelve las declaraciones de material autenticado que mantiene CUSTOM V2. Los DEB certificados pueden reutilizarse entre módulos: existen una capa Essential común y deltas específicos por módulo.',
   'Ese inventario reutilizable de paquetes no equivale a compartir un único RootFS para todas las aplicaciones. Un módulo puede declarar un RootFS y un mundo de ejecución distintos, según su tecnología. Los paquetes de origen se reaprovechan cuando corresponde; los entornos resultantes se componen de acuerdo con sus contratos.',
   'Boss utiliza Preinstall y materialización para preparar los requisitos; MaterialBinding conserva la identidad autenticada del material instalado; RuntimeLease resuelve un entorno efímero para la ejecución; Lifecycle interpreta las transiciones y solicita capacidades. OS aporta las fronteras y autoridades que autorizan el acceso a recursos concretos.'
  ]},
  {type:'flow',title:'Un módulo desde su declaración hasta la ejecución',nodes:[
   {title:'Módulo + Registry',text:'Identidad, versión, commit y contratos seleccionados.'},
   {title:'CUSTOM V2 / Esbirro',text:'Essential, deltas, mundos, declaraciones Construction e integridad certificada.'},
   {title:'Boss Preinstall',text:'Obtención o reutilización de DEB; preparación y validación del material requerido.'},
   {title:'MaterialBinding',text:'Vinculación persistente entre identidad de módulo y material autenticado.'},
   {title:'Lifecycle + Construction',text:'Declaración de operación y ejecución genérica mediante capacidades.'},
   {title:'RuntimeLease + OS',text:'Entorno de ejecución compuesto con recursos y autoridad acotados.'}
  ]},
  {type:'prose',title:'Las reglas importan tanto como las funcionalidades',paragraphs:[
   'Esbirro representa la ley de construcción y certificación de NEEBLES: no se presume que un binario es confiable porque compiló, ni que una herramienta del host está autorizada porque existe en el sistema. La cadena de procedencia y los manifiestos son parte del diseño.',
   'Boss mantiene otra separación: que un recurso exista no significa que haya sido solicitado; que sea conocido no significa que esté registrado; y que esté registrado no implica que se haya concedido autorización para usarlo. El README resume esta regla como AVAILABLE ≠ REQUESTED ≠ REGISTERED ≠ GRANTED ≠ USED.',
   'Esta arquitectura intenta evitar excepciones específicas para cada módulo. El resultado buscado es un ecosistema ampliable, donde las implementaciones privadas pueden variar y el marco de construcción, autenticación, autorización y ejecución permanece genérico.'
  ]},
  {type:'sources',links:[['BUILD · README',repository.build+'/blob/main/README.md'],['OS · README',repository.os+'/blob/main/README.md'],['CUSTOM clásico',repository.custom+'/blob/main/README_CUSTOM.md'],['CUSTOM V2',repository.custom+'/blob/main/README_CUSTOM_V2.md'],['Boss · README',repository.boss+'/blob/main/README.md']]}
 ]
},
{
 id:'build', label:'BUILD', kicker:'02 / CONSTRUCCIÓN',title:'BUILD: la distribución y el inyector de Boss',
 lead:'BUILD compone NEEBLES OS a partir de Debian, integra las piezas certificadas que deben existir en la imagen y produce la ISO híbrida. Su papel también incluye preparar el mecanismo de recuperación y los espacios genéricos que Boss utilizará más adelante.',
 blocks:[
  {type:'prose',title:'Qué construye BUILD y qué no decide',paragraphs:[
   'El repositorio BUILD utiliza la infraestructura de live-build para componer el sistema. Integra recursos de OS, materiales certificados de CUSTOM clásico para Boss y Calamares, los directorios base del ecosistema modular y el entorno de recuperación independiente. La ISO resultante es el soporte físico de esas integraciones.',
   'BUILD no es la autoridad semántica de todos los archivos que contiene. Las definiciones de autoridad pertenecen a OS. El material doméstico certificado de Boss y Calamares pertenece a CUSTOM clásico. Los contratos y transacciones de módulos pertenecen a Boss. Los paquetes y mundos particulares de los módulos pertenecen a CUSTOM V2. BUILD debe materializar esas fuentes sin reinterpretarlas.',
   'Es importante distinguir una ISO generada de una ISO certificada en funcionamiento. Ejecutar correctamente live-build acredita que se produjo una imagen, pero no demuestra por sí solo que el bootstrap, la instalación de módulos, los proveedores de sesión ni las fronteras operen correctamente. Las pruebas reales Live y del sistema instalado constituyen comprobaciones diferentes.'
  ]},
  {type:'flow',title:'Composición de la ISO',nodes:[
   {title:'Debian Trixie + KDE Plasma',text:'Sistema base que BUILD modifica y empaqueta.'},
   {title:'OS → plataforma',text:'Proveedores, descriptores AuthoritySupply y recursos de instalación.'},
   {title:'CUSTOM clásico → material',text:'Corpora certificados de Boss y Calamares, incluidos sus paquetes y metadatos efectivos.'},
   {title:'BUILD → integración',text:'Sincronización, verificación de paridad y creación de territorios genéricos.'},
   {title:'ISO híbrida de NEEBLES OS',text:'Imagen preparada para arranque Live, instalación y bootstrap.'}
  ]},
  {type:'prose',title:'El inyector: primera instalación de Boss',paragraphs:[
   'La ISO contiene el mecanismo de entrada de bootstrap. El archivo de origen neebles-os/bootstrap/neebles-bootstrap apunta al contrato bootstrap.json publicado en la última release estable de neebles-boss. Así, la imagen no necesita fijar permanentemente un parche concreto de Boss para saber qué release estable debe instalar.',
   'El bootstrap valida la estructura del contrato, su canal estable y la versión. Si Boss ya está instalado, compara versiones y puede abrir la instalación existente cuando no corresponde actualizar. Si falta o está desactualizado, invoca un helper privilegiado mediante pkexec para preparar el staging de artefactos.',
   'El materializador vuelve a obtener el contrato, descarga los artefactos requeridos para la versión seleccionada y comprueba su integridad. Entre los elementos del bootstrap figuran el backend, la interfaz, el instalador, el agente de autorización y el material de runtime. Una vez preparados, se usa el camino de instalación gobernado y se comprueba que Boss quedó disponible.',
   'Los DEB certificados de CUSTOM clásico que requiere el entorno de Boss ya forman parte de la integración de BUILD. En consecuencia, el bootstrap no debe confundirse con un procedimiento que improvisa todas las dependencias en el equipo del cliente. Sí utiliza la red para resolver los artefactos de la release estable de Boss: son dos clases de material distintas.'
  ]},
  {type:'flow',title:'Secuencia del inyector (bootstrap)',nodes:[
   {title:'Inicio del sistema / bootstrap',text:'Invoca neebles-bootstrap de la plataforma.'},
   {title:'GitHub Releases',text:'Consulta releases/latest/download/bootstrap.json, esquema 2 y canal stable.'},
   {title:'Comprobación local',text:'Si Boss ya cumple la versión estable, se inicia; si no, continúa.'},
   {title:'Polkit + helper materializer',text:'Solicita privilegios para preparar una sesión de staging.'},
   {title:'Validación de artefactos',text:'Material de release autenticado e integridad verificada.'},
   {title:'Instalación / lanzamiento',text:'Instala Boss sobre el entorno integrado y ejecuta el cliente.'}
  ]},
  {type:'prose',title:'Qué deja preparado para los módulos',paragraphs:[
   'La distribución no necesita incorporar estáticamente los RootFS y Construction de todos los módulos actuales y futuros. BUILD crea espacios genéricos para paquetes compartidos, manifiestos vinculados y leases temporales. El material concreto de los módulos llega dinámicamente desde CUSTOM V2 cuando Boss lo necesita.',
   'En la organización de la imagen aparecen áreas como modules/packages/essentials, modules/material y modules/runtime-leases bajo /opt/neebles-build. Estas rutas no convierten a BUILD en propietario de la semántica de los módulos; son infraestructura física para que el sistema modular funcione.',
   'La recuperación también se mantiene separada de la operación normal. BUILD aporta neebles-check para verificar integridad y coherencia de recursos y módulos; Boss no necesita ejecutar continuamente esa herramienta para arrancar.'
  ]},
  {type:'sources',links:[['Repositorio BUILD',repository.build],['README de BUILD',repository.build+'/blob/main/README.md'],['Bootstrap · OS',repository.os+'/blob/main/bootstrap/neebles-bootstrap'],['Materializer · OS',repository.os+'/blob/main/bootstrap/neebles-bootstrap-materializer'],['Boss · contratos de release',repository.boss+'/blob/main/README.md']]}
 ]
},
{
 id:'os',label:'OS',kicker:'03 / PLATAFORMA',title:'OS: la autoridad de plataforma y sus fronteras',
 lead:'El repositorio OS no representa todos los componentes de la distribución. Define los recursos de plataforma que BUILD coloca en la imagen y que Boss necesita autenticar y consumir para ejecutar operaciones sin recurrir a permisos implícitos del sistema anfitrión.',
 blocks:[
  {type:'prose',title:'AuthoritySupply y el principio de permiso explícito',paragraphs:[
   'OS publica descriptores de autoridad de plataforma. Esas definiciones identifican las capacidades y recursos disponibles: fronteras del sistema de archivos, interfaz de sesión de escritorio, staging para operaciones, manifestaciones de runtime y recursos IPC de los módulos.',
   'Boss autentica esos recursos, registra las autoridades suministradas y solicita concesiones explícitas antes de ejecutarlas. Un archivo en disco o un ejecutable accesible no son, por sí solos, autorización para utilizarlo. Esta distinción evita que la disponibilidad física se confunda con permiso operativo.',
   'La cadena explicada en Boss pasa por disponibilidad física, fuente autenticada, descriptor suministrado, registro, concesión y ejecución restringida. En la página conviene mostrarla sin esconder pasos, porque expresa una de las decisiones centrales del sistema.'
  ]},
  {type:'flow',title:'De un recurso físico a una operación autorizada',nodes:[
   {title:'Recurso disponible en OS',text:'Existe físicamente, pero todavía no implica autorización.'},
   {title:'AuthoritySupply',text:'Descriptor de plataforma y origen autenticado.'},
   {title:'Registro en Boss',text:'Identidad y capacidades suministradas quedan conocidas.'},
   {title:'Grant explícito',text:'La operación obtiene el permiso correspondiente.'},
   {title:'Ejecución acotada',text:'El proveedor OS materializa la frontera solicitada.'}
  ]},
  {type:'prose',title:'Aislamiento mediante un proveedor de frontera',paragraphs:[
   'OS proporciona neebles-boundary-provider, que transforma solicitudes autenticadas de Boss en ejecuciones mediante Bubblewrap. Las declaraciones permiten especificar qué RootFS se presenta, qué recursos son de solo lectura, cuáles son escribibles, qué directorio de trabajo se utiliza y qué entorno de variables se proporciona.',
   'El proveedor no entrega automáticamente el sistema de archivos completo del host. Los recursos se exponen mediante proyecciones y montajes definidos. Incluso cuando debe insertar un archivo externo en un árbol doméstico existente, la documentación describe una composición mediante overlay en vez de copiar arbitrariamente todo el directorio.',
   'Las rutas y las identidades que una operación recibe deben provenir de contratos y autoridad autenticada. El módulo puede declarar qué necesita, pero no puede concederse a sí mismo permisos de plataforma por el hecho de solicitarlo.'
  ]},
  {type:'prose',title:'La sesión de escritorio también es una autoridad',paragraphs:[
   'Cuando un módulo necesita abrir una ventana en Plasma, Boss no debe heredar sin validación todo el entorno gráfico de quien lo ejecutó. OS aporta un proveedor de sesión que valida recursos como XDG_RUNTIME_DIR, DBUS_SESSION_BUS_ADDRESS, DISPLAY, WAYLAND_DISPLAY y XAUTHORITY.',
   'Esa interfaz permite a Boss preparar una ejecución con identidad de usuario y recursos de sesión específicos. El proveedor informa qué recursos físicos son válidos; Boss conserva la gobernanza sobre la identidad y la ejecución. La separación es importante para procesos Qt, servicios de usuario y módulos que necesitan comunicarse con el escritorio.'
  ]},
  {type:'flow',title:'Ejecución gráfica gobernada',nodes:[
   {title:'Contrato Construction',text:'Un paso solicita ejecución con sesión.'},
   {title:'Boss',text:'Resuelve identidad autenticada y autoridad suministrada.'},
   {title:'Proveedor de sesión OS',text:'Valida sockets, variables y recursos gráficos reales.'},
   {title:'Proveedor de frontera OS',text:'Proyecta recursos precisos en el entorno aislado.'},
   {title:'Runtime del módulo',text:'Ejecuta bajo la identidad y el marco de sesión concedidos.'}
  ]},
  {type:'prose',title:'Relación con BUILD y CUSTOM',paragraphs:[
   'BUILD copia a la ISO los proveedores y descriptores vigentes de OS; su trabajo es preservar el contrato y materializarlo correctamente. CUSTOM certifica los materiales y mundos que operarán bajo esas condiciones. Boss une ambas dimensiones en el momento de ejecución, pero no puede reemplazar la definición de autoridad de OS con una regla inventada por un módulo.',
   'Si se cambia una definición de plataforma que físicamente se entrega en la ISO, puede ser necesario reconstruir la imagen para integrar ese cambio. En cambio, actualizar solamente una declaración de Construction o el RootFS de un módulo no debería obligar a reconstruir la distribución.'
  ]},
  {type:'sources',links:[['Repositorio OS',repository.os],['README de OS',repository.os+'/blob/main/README.md'],['Autoridades de plataforma',repository.os+'/tree/main/platform/authority'],['Proveedores OS',repository.os+'/tree/main/platform/bin']]}
 ]
},
{
 id:'custom',label:'CUSTOM / Esbirro',kicker:'04 / MATERIAL Y CERTIFICACIÓN',title:'CUSTOM y Esbirro: la ley de construcción',
 lead:'CUSTOM define la identidad y procedencia del material que consume el ecosistema. Esbirro establece el laboratorio y las leyes para crearlo y certificarlo. No son un simple repositorio de paquetes: juntos explican cómo NEEBLES evita confundir lo que existe en una máquina con lo que ha sido construido y validado para el sistema.',
 blocks:[
  {type:'prose',title:'Dos arquitecturas dentro de CUSTOM',paragraphs:[
   'CUSTOM clásico y CUSTOM V2 viven en un mismo repositorio, pero son autoridades distintas. CUSTOM clásico mantiene los corpora controlados de Boss y Calamares: RootFS, paquetes, metadatos efectivos, material de compilación y el entorno Qt certificado correspondiente. Es ese material clásico el que BUILD puede incorporar a la distribución para la instalación inicial.',
   'CUSTOM V2 se concentra en los módulos. Sus declaraciones indican qué paquetes se necesitan, qué inventarios son válidos, qué RootFS y mundos hay disponibles y qué pasos de Construction deben resolverse. Un fallo de material de un módulo no debería corregirse modificando el corpus clásico de Boss o Calamares.',
   'La autoridad no cambia por estar dos familias dentro de un mismo Git. Los manifiestos, hashes, pins y contratos determinan qué material exacto se está consumiendo. Una edición de README no altera automáticamente la identidad del binario o DEB previamente certificado.'
  ]},
  {type:'flow',title:'Separación de CUSTOM clásico y V2',nodes:[
   {title:'Esbirro — laboratorio y certificación',text:'Fuentes, mundos, herramientas controladas, pruebas y sellos.'},
   {title:'CUSTOM clásico',text:'Material certificado de Boss / Calamares, integrado en BUILD cuando corresponde.'},
   {title:'CUSTOM V2',text:'Essential, deltas, RootFS nominados, Construction, mundos y manifiestos de módulos.'},
   {title:'Boss consumidor',text:'Preinstall, MaterialBinding, RuntimeLease y ejecución gobernada de módulos.'}
  ]},
  {type:'prose',title:'Esbirro no es una herramienta opcional de build',paragraphs:[
   'El README del laboratorio define una ley contundente: el repositorio es la autoridad; el host y la carpeta Downloads no lo son; compilar exitosamente no equivale a certificar. Esbirro preserva una cadena de construcción desde las fuentes controladas hasta la auditoría física, publicación del material exacto y aceptación en una ejecución real.',
   'Su modelo de doble vida permite preparar o inventar nuevos mundos fuera de un NEEBLES instalado, y después proporcionar mundos ya certificados al ecosistema operativo. Así se amplían los entornos disponibles sin enseñar a Boss un caso especial por cada tecnología nueva.',
   'El laboratorio portable incluye snapshots y un mecanismo de restauración que valida integridad antes de extraer material. Los entornos como el sysroot Qt 6.8.2 y las dependencias de construcción controladas son parte de esa disciplina. El host no sustituye silenciosamente un mundo porque tenga una versión parecida de una biblioteca.'
  ]},
  {type:'flow',title:'La ley absoluta de Esbirro',nodes:[
   {title:'Fuente controlada',text:'Identidad, procedencia y requisitos determinados.'},
   {title:'Mundo y dependencias controladas',text:'Laboratorio restaurable con herramientas autorizadas.'},
   {title:'Configurar, construir y preparar',text:'Build y staging sin depender implícitamente del host.'},
   {title:'Auditoría de integridad y runtime',text:'Verificación de manifiestos, objetos ELF, bibliotecas y otras puertas pertinentes.'},
   {title:'Certificar material exacto',text:'Publicar bytes, hashes y metadatos coherentes.'},
   {title:'Consumir y aceptar en runtime',text:'Boss materializa; las pruebas reales verifican el comportamiento instalado.'}
  ]},
  {type:'prose',title:'El lore del Goblin: el lenguaje para entender sus leyes',paragraphs:[
   'La documentación de Esbirro dedica una parte completa al lore canónico del Esbirro Goblin. No es una broma colocada después de la arquitectura: es un lenguaje compartido para explicar investigación, entornos controlados, procedimientos y certificación.',
   'Elftown, el Ghetto, los muebles, los barrotes, los hechizos, el grimorio y las escuelas permiten visualizar situaciones que en ingeniería se describen con aislamiento, autoridad, mundos, pruebas y manifiestos. La analogía no reemplaza las especificaciones: ayuda a recorrerlas. Al presentar el lore en la web, cada término se vinculará a su significado documentado, no a una interpretación inventada.',
   'La figura del Goblin representa una disciplina: no dar por válido material solamente porque una compilación no emitió errores. Las tres capas del juicio y las reglas de buen casteo y penqueo, recogidas en el README, muestran cómo la comunidad de desarrollo describe errores, evidencias y nuevas leyes sin perder precisión técnica.'
  ]},
  {type:'prose',title:'Elftown: el mapa del lore y su traducción técnica',paragraphs:[
   'En el relato canónico, el Sr. Neebles dicta la doctrina y Esbirro Goblin es su segundo a bordo: observa, interroga, custodia y vuelve con testimonios. No posee autoridad ilimitada. El lore representa un modo de colaboración y diagnóstico; no cambia el gobierno efectivo que establecen OS y Boss.',
   'Un Elfo es un objeto ELF concreto, como un ejecutable o una biblioteca. Elftown es el territorio conceptual donde se investigan esos objetos. El Goblin no solo comprueba que un ejecutable arranque: observa su intérprete PT_INTERP, las dependencias DT_NEEDED y las reglas RPATH/RUNPATH. Después persigue transitivamente referencias aún no resueltas, llamadas Prófugos, hasta comprobar que el mundo tiene un cierre válido.',
   'La Casa es el root físico materializado; sus Muebles abarcan ejecutables, bibliotecas, loaders, helpers y rutas de datos. El Ghetto es el mundo controlado que contiene la Casa. Los Barrotes son las fronteras reales que impiden resolver dependencias escapando silenciosamente al Linux anfitrión. No se debe confundir una Casa con el Ghetto completo ni los Muebles con una simple lista de archivos .so.',
   'Una Ventanilla es una interfaz explícita hacia el exterior y una Llave es el grant que autoriza utilizar esa interfaz. Encontrar una Ventanilla no entrega una Llave. Este vocabulario permite entender de inmediato por qué disponibilidad física, registro de autoridad y permiso concedido son hechos distintos.',
   'Los Poderes representan capacidades genéricas. Los Hechizos son invocaciones declarativas bajo una ley; el Grimorio conserva el vocabulario y la relación con los mundos; un cast es el acto controlado de ejecutar la pregunta. El Goblin registra sus Testimonios y puede hacer un Penqueo cuando el cast viola un contrato o necesita una investigación adicional.',
   'La Cuarta Pared identifica hallazgos laterales: durante una auditoría que pregunta por X, el Goblin puede advertir Y, informar la observación y mantener separado el resultado de X. Las tres capas de su juicio distinguen observación, evidencia, autoridad y sentencia. La lección es que un resultado negativo no autoriza automáticamente a parchear el sensor, cambiar la ley o buscar en el host para forzar un verde.'
  ]},
  {type:'flow',title:'El Goblin investiga un Elfo',nodes:[
   {title:'Elfo identificado',text:'Objeto ELF concreto en su Casa.'},
   {title:'Observación',text:'PT_INTERP, DT_NEEDED y RPATH/RUNPATH se registran como hechos.'},
   {title:'Persecución de Prófugos',text:'Dependencias y rutas transitivas se resuelven bajo el mundo declarado.'},
   {title:'Barrotes y Ventanillas',text:'No hay fugas al host; el acceso externo requiere Llave explícita.'},
   {title:'Testimonio y juicio',text:'Evidencia documentada, autoridad y sentencia se mantienen separadas.'}
  ]},
  {type:'prose',title:'Hechizos, escuelas y buenas leyes',paragraphs:[
   'El lore documenta siete escuelas de hechizos: allowed_session_inputs, data_paths, environment, executable, helpers, library_paths y runtime_paths. Cubren desde qué entra por una ventanilla de sesión hasta la observación de bibliotecas, ejecutables y rutas de runtime. Sus identidades son conceptos declarativos reutilizables, no comandos especiales para un módulo concreto.',
   'El dossier histórico cita 32 hechizos y 233 casos declarativos en siete escuelas. Son cifras de un baseline documental de septiembre de 2026, no un censo actualizado del repositorio. La web no las presentará como métricas vigentes. La ley que sí permanece es cómo crear un nuevo poder: observar el problema, buscar primero una capacidad existente, formular una ley genérica y certificarla con pruebas y evidencia física.',
   'Un buen casteo declara pregunta, hechizo, mundo y autoridad exacta. Un mal casteo intenta imponer el resultado deseado mediante excepciones específicas o resoluciones implícitas del host. Esa diferencia transforma un lore aparentemente fantástico en un lenguaje claro para comprender ingeniería reproducible.'
  ]},
  {type:'prose',title:'DEB reutilizables, RootFS compuestos según cada módulo',paragraphs:[
   'CUSTOM V2 distingue la capa Essential compartida de los deltas específicos por módulo. Essential no es un módulo ficticio y no pertenece en exclusiva a Secrets, Connect o Proxy: representa un conjunto certificado de dependencias comunes. Cada delta conserva solamente el material adicional requerido por su consumidor.',
   'La membresía de paquetes y la integridad de sus contenidos se declaran por separado. Los inventarios TSV identifican qué paquetes forman parte de cada capa; los manifiestos describen qué objetos físicos y metadatos deben producir. Ese control permite reutilizar DEB por identidad sin convertir toda la instalación en un árbol indiferenciado.',
   'Los RootFS son otra cosa. Un módulo puede seleccionar un RootFS y un mundo de ejecución concretos, compuestos con los paquetes que requiere. Por ejemplo, Connect documenta un RootFS rust-qt y el mundo modules.rust-qt. Dos módulos pueden compartir una buena parte de los DEB certificados y aun así ejecutar en entornos compuestos distintos. Cambiar un módulo no implica regenerar toda la distribución.',
   'En la documentación del material de Test Module existe una referencia histórica a 59 paquetes Essential y 32 DEB de delta, pero esos números no deben presentarse como cantidades globales inmutables ni como el inventario actual de todos los módulos. Los manifiestos y revisiones seleccionadas son siempre la fuente de verdad.'
  ]},
  {type:'flow',title:'Reutilización de paquetes y composición de entornos',nodes:[
   {title:'CUSTOM V2 · Essential',text:'Conjunto compartido de paquetes certificados.'},
   {title:'DEB de delta por módulo',text:'Paquetes adicionales autenticados para el consumidor.'},
   {title:'Pool de material reutilizable',text:'Se conserva la identidad del paquete y se reutilizan bytes cuando corresponde.'},
   {title:'RootFS + mundo seleccionado',text:'Composición específica para cada módulo y paso Construction.'},
   {title:'Boss · RuntimeLease',text:'Materialización efímera, aislada y autenticada para la ejecución.'}
  ]},
  {type:'prose',title:'Cómo se agrega una tecnología que todavía no existía',paragraphs:[
   'La expansión del ecosistema no comienza añadiendo instrucciones ad hoc a Boss. Se estudian las dependencias y el entorno necesarios, se prepara un mundo mediante Esbirro y se certifica el material. CUSTOM V2 declara sus paquetes, su RootFS nominado y sus pasos de Construction con identidades concretas.',
   'Boss consume esas declaraciones genéricamente. El módulo conserva su propio comportamiento y puede estar programado con tecnología distinta. El nuevo mundo se incorpora al inventario certificado, mientras el gobierno de operaciones y permisos continúa sujeto a contratos existentes.',
   'La documentación local muestra precisamente ese recorrido con Connect y la adaptación de LibVNCClient: fuente controlada, biblioteca modificada, DEB autenticado, delta CUSTOM V2, construcción Qt en Esbirro, auditoría ELF y ejecución Rust. Ese caso concreto ilustra por qué la certificación es más que un resultado verde del compilador.'
  ]},
  {type:'sources',links:[['CUSTOM clásico · README',repository.custom+'/blob/main/README_CUSTOM.md'],['CUSTOM V2 · README',repository.custom+'/blob/main/README_CUSTOM_V2.md'],['Esbirro · lore y leyes',repository.custom+'/blob/main/portable/esbirro/README.md'],['CUSTOM · repositorio',repository.custom],['Connect · caso de ingeniería',repository.connect+'/tree/main/tooling/esbirro']]}
 ]
},
{
 id:'boss',label:'Boss',kicker:'05 / GOBERNANZA',title:'Boss: el sistema modular en funcionamiento',
 lead:'Boss no es simplemente un lanzador de aplicaciones. Es la capa que autentica material, interpreta contratos, administra transacciones, gobierna permisos y coordina la ejecución de módulos heterogéneos. Su arquitectura concentra varias tecnologías propias que merecen explicarse por separado.',
 blocks:[
  {type:'prose',title:'Governor y los contratos genéricos',paragraphs:[
   'Un módulo declara su identidad y los contratos que ofrece. Boss consume un Registry de módulos seleccionados y manifiestos que pueden apuntar a Lifecycle, superficies de interfaz, comandos, configuración, notificaciones, proveedores de bandeja y puntos de entrada de runtime.',
   'Governor vincula las acciones solicitadas con las transiciones que el módulo declara. Estas transiciones no tienen que llevar el mismo nombre que la acción pública. Esa independencia permite separar cómo se presenta la funcionalidad al usuario de cómo se describe su ejecución interna.',
   'La regla arquitectónica permanente es que Boss no debe convertirse en una colección de casos especiales para Python, Rust, Node.js, Qt o tecnologías futuras. Los consumidores declaran los requisitos; Boss provee capacidades genéricas y ejecución gobernada.'
  ]},
  {type:'flow',title:'Desde la intención del usuario hasta el runtime',nodes:[
   {title:'Usuario / interfaz',text:'Solicita instalar, actualizar, abrir o ejecutar una operación.'},
   {title:'Governor',text:'Resuelve identidad, contrato, estado y autorización.'},
   {title:'Lifecycle / Battlefield',text:'Interpreta la transición declarada en su contexto.'},
   {title:'Battleplan y dependencias',text:'Organiza las operaciones que requiere la transición.'},
   {title:'FireControl + CapabilityRegistry',text:'Resuelve la Artillery y Objective solicitadas.'},
   {title:'Handler Rust y autoridad',text:'Ejecuta con municiones validadas y capacidades autorizadas.'},
   {title:'Intelligence / estado / eventos',text:'Normaliza resultados y propaga el desenlace a Boss.'}
  ]},
  {type:'prose',title:'Lifecycle: un lenguaje de operaciones, no una lista de botones',paragraphs:[
   'Lifecycle es un motor declarativo. Sus contratos pueden contener valores hardcoded, requisitos, objetos con estado, transiciones y operaciones. Una acción de Governor se puede vincular a una transición particular, y una transición puede reunir varias operaciones con dependencias entre ellas.',
   'El vocabulario del motor utiliza términos de un campo de batalla. Battlefield reúne el contexto y los valores que deben resolverse. Battleplan construye el plan de ejecución con un grafo de dependencias. FireControl toma una operación declarada y la dirige a una capacidad registrada. Intelligence describe la información derivada de la ejecución que vuelve a alimentar resultados, estado y eventos.',
   'Dentro de una operación, Artillery designa la familia de capacidad, Objective señala la acción concreta y Munition entrega los argumentos de esa acción. Tactics e Intelligence forman parte del mismo contrato. No son etiquetas visuales agregadas por la web: aparecen en los JSON reales de módulos como Test Module y Proxy Client.',
   'Esta elección de nombres tiene propósito didáctico. El autor de un módulo no necesita empezar imaginando una llamada Rust particular: describe qué misión requiere, cuál es su objetivo y qué munición entregará. Boss sigue siendo responsable de resolver esa petición mediante capacidades concretas y permisos explícitos.'
  ]},
  {type:'code',title:'Ejemplo real: operación de Proxy Client',language:'json',code:`{
  "artillery": "boss.platform_operation",
  "objective": "execute",
  "munition": {
    "operation": "activate",
    "require_privilege": "true"
  },
  "tactics": {},
  "intelligence": {}
}`,
    caption:'Fragmento del contrato lifecycle.json de neebles-proxy-client. Las municiones son datos declarados y validados, no permisos concedidos automáticamente.'},
  {type:'prose',title:'La Artillery se conecta con implementaciones Rust reales',paragraphs:[
   'Las declaraciones Lifecycle no ejecutan directamente código arbitrario proporcionado por el módulo. Boss dispone de un registro de capacidades y de handlers implementados en Rust. FireControl identifica qué implementación corresponde a la pareja Artillery/Objective y la operación se ejecuta dentro de los límites admitidos por el sistema.',
   'La base Rust de Boss incorpora distintas bibliotecas para comunicación, serialización, sistemas, transporte, archivos y criptografía. Eso amplía lo que se puede implementar detrás de una capacidad. No obstante, la existencia de una dependencia en Cargo.toml no significa por sí misma que toda su API esté disponible como operación Lifecycle: cada capacidad debe estar realmente registrada y gobernada.',
   'Este punto es esencial para comprender el potencial de NEEBLES. Se pueden crear nuevas operaciones de propósito general sin convertir cada módulo en una extensión privilegiada del host. El módulo declara intención y parámetros; la ejecución recae en mecanismos definidos y auditables.'
  ]},
  {type:'flow',title:'Anatomía de una misión Lifecycle',nodes:[
   {title:'Governor → transición',text:'Acción pública vinculada al vocabulario del módulo.'},
   {title:'Battlefield',text:'Interpolación de datos, identidades y contexto.'},
   {title:'Battleplan',text:'Operaciones y grafo de dependencias.'},
   {title:'Artillery + Objective',text:'Familia de capacidad y operación concreta.'},
   {title:'Munition + Tactics',text:'Parámetros y detalles declarados para la operación.'},
   {title:'FireControl → Handler Rust',text:'Capacidad registrada, validación y ejecución gobernada.'},
   {title:'Intelligence',text:'Resultado, datos derivados y actualización del estado.'}
  ]},
  {type:'prose',title:'Construction y los mundos certificados',paragraphs:[
   'Lifecycle puede solicitar una capacidad de workspace, por ejemplo boss.workspace_execution con el objetivo construction.step y la munición step que identifica el paso. Boss no interpreta una receta particular de Python, Qt o Git dentro de Lifecycle: resuelve una declaración Construction autenticada de CUSTOM V2.',
   'La declaración Construction identifica el runtime_authority, el world, el modo de ejecución, el requerimiento de sesión, los recursos de solo lectura y escribibles, el directorio de trabajo y los argumentos. Un paso puede ser foreground, cuando debe terminar antes de continuar, o persistent, cuando se inicia un proceso duradero y Lifecycle recupera el control.',
   'La identidad del módulo procede de Governor y del MaterialBinding activo, no de un nombre arbitrario enviado por una munición. Eso evita que un módulo solicite ejecutar una receta de otro consumidor simplemente cambiando una cadena.'
  ]},
  {type:'code',title:'Ejemplo real: ejecutar un paso de Construction',language:'json',code:`{
  "artillery": "boss.workspace_execution",
  "objective": "construction.step",
  "munition": {
    "step": "open-runtime"
  },
  "tactics": {},
  "intelligence": {}
}`,
  caption:'Ejemplo tomado del contrato Lifecycle de Test Module.'},
  {type:'prose',title:'MaterialBinding persistente y RuntimeLease efímero',paragraphs:[
   'Un módulo instalado necesita una identidad de material que se pueda verificar y reutilizar en operaciones futuras. MaterialBinding vincula el módulo con declaraciones y material autenticado; no es simplemente una carpeta de archivos arbitrarios.',
   'RuntimeLease responde a otro problema: preparar el entorno concreto de una ejecución. A partir de los paquetes certificados, el RootFS y el mundo seleccionado, Boss compone un espacio efímero asociado a la operación. La frontera del host y los recursos concedidos los proporcionan las autoridades OS correspondientes.',
   'Los dos mecanismos no son equivalentes. MaterialBinding conserva el vínculo persistente con el material instalado; RuntimeLease representa la preparación temporal necesaria para ejecutarlo. Su separación permite reconstruir entornos de ejecución sin perder la identidad certificada del material.'
  ]},
  {type:'flow',title:'Del material persistente al proceso efímero',nodes:[
   {title:'CUSTOM V2',text:'Manifiestos, paquetes, RootFS y Construction autenticados.'},
   {title:'Boss · MaterialBinding',text:'Persistencia de identidad y declaraciones asociadas al módulo.'},
   {title:'Boss · RuntimeLease',text:'Composición efímera del entorno solicitado.'},
   {title:'OS · frontera y sesión',text:'Recursos mínimos y permisos explícitos.'},
   {title:'Runtime del módulo',text:'Proceso ejecutado bajo condiciones gobernadas.'}
  ]},
  {type:'prose',title:'Nightmare: transformaciones declarativas',paragraphs:[
   'Nightmare es un motor genérico de transformación, implementado en Boss. Su diseño se apoya en fórmulas declarativas y contratos Reader/Writer para interpretar contenido lógico, preparar transformaciones y publicar sus resultados. No debe confundirse con el motor Lifecycle ni con la Construction de un módulo.',
   'La integración que actualmente interesa al ecosistema es Critical Update, es decir, las operaciones de actualización crítica donde Boss necesita coordinar cambios de contenido. Pero esa utilización no limita el objetivo arquitectónico de Nightmare: permitir reescrituras gobernadas de contenido en el equipo cliente cuando exista una fórmula y un mecanismo compatible.',
   'El código contiene carga y validación de catálogos y procedimientos de lectura, transformación y escritura. El catálogo base de Nightmare presente en la auditoría de OS aparece sin fórmulas activas, por lo que no vamos a presentar una lista ficticia de transformaciones productivas. Mostraremos su motor, su contrato y la relación actual con Critical Update, distinguiendo implementación y posibilidades futuras.'
  ]},
  {type:'flow',title:'Nightmare: de una fórmula a una transformación',nodes:[
   {title:'Solicitud gobernada',text:'Una operación autorizada requiere transformar contenido.'},
   {title:'Catálogo / fórmula',text:'Se identifica y valida la transformación declarativa.'},
   {title:'Reader',text:'Interpreta el documento lógico de entrada.'},
   {title:'Plan de transformación',text:'Evalúa acciones y condiciones de la fórmula.'},
   {title:'Writer',text:'Construye y publica el resultado de la transformación.'},
   {title:'Estado / resultado',text:'La operación reporta su desenlace al consumidor.'}
  ]},
  {type:'prose',title:'Transacciones, IPC e integración en el escritorio',paragraphs:[
   'El gobierno de módulos también exige instalación, actualización y desinstalación transaccionales. Boss diferencia las fases reversibles de los puntos de no retorno, y documenta cómo manejar errores, servicios y limpieza de recursos cuando una operación falla. No basta con ejecutar un script y asumir que el sistema quedó consistente.',
   'La comunicación entre módulos y Boss se realiza mediante IPC gobernado. Los sockets administrativos y de runtime tienen contratos y responsabilidades distintas; los módulos no adquieren automáticamente autorización para invocar cualquier endpoint. Los grants y las políticas se verifican de acuerdo con la identidad y el alcance de la solicitud.',
   'Las superficies de interfaz, las notificaciones, la bandeja del escritorio y la configuración también se integran mediante contratos. Boss proyecta esas capacidades sin exigir que todos los módulos compartan exactamente la misma implementación privada. Este es el punto donde la arquitectura interna se vuelve visible para quien utiliza NEEBLES OS.'
  ]},
  {type:'sources',links:[['Boss · README técnico',repository.boss+'/blob/main/README.md'],['Arquitectura implementada',repository.boss+'/blob/main/ARCHITECTURE_IMPLEMENTED.md'],['Lifecycle · Rust',repository.boss+'/blob/main/src/lifecycle.rs'],['Nightmare · Rust',repository.boss+'/blob/main/src/nightmare.rs'],['Test Module · Lifecycle',repository.test+'/blob/main/lifecycle.json'],['Proxy Client · Lifecycle',repository.client+'/blob/main/lifecycle.json']]}
 ]
}
];
