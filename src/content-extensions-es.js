// Ampliaciones editoriales F07, basadas en los README y el código de la auditoría.
// Las propuestas futuras se etiquetan como tales; no se convierten en funciones publicadas.
const P = (title, ...paragraphs) => ({type:'prose',title,paragraphs});
const F = (title, nodes, caption='') => ({type:'flow',title,nodes:nodes.map(([title,text])=>({title,text})),caption});
const N = (title, items) => ({type:'concepts',title,items});

export function enhanceDocumentation(original){
  const docs = original.map(doc=>({...doc,blocks:[...doc.blocks]}));
  const find = id => docs.find(d=>d.id===id);
  const overview=find('overview');
  overview.title='NEEBLES OS: conservar, gobernar y compartir el software';
  overview.lead='Una distribución gratuita nacida de una necesidad concreta: que el trabajo de desarrollar software y preparar sus dependencias no se pierda por los cambios de la distribución anfitriona. Esta visión se materializa en BUILD, OS, CUSTOM, Esbirro, Boss y una arquitectura modular que separa materiales, autoridad y ejecución.';
  overview.blocks.unshift(
    P('Primero la necesidad, después la tecnología',
      'Un repositorio de código no conserva por sí solo el compilador, las bibliotecas, los intérpretes, los paquetes y las condiciones que permitían ejecutarlo. NEEBLES OS busca preservar esa segunda mitad del trabajo: el entorno material que acompaña a una aplicación.',
      'La propuesta no es congelar Linux para siempre. Es conservar materiales certificados, poder reconstruir mundos definidos y elegir cuándo evolucionarlos. Eso reduce el acoplamiento entre el ciclo de vida del software y el de la distribución base; no elimina la obligación de atender seguridad, interfaces de kernel o cambios de hardware.',
      'La filosofía «gratuidad con gratuidad, para todos» conecta esta autonomía individual con una visión comunitaria: conservar tus módulos y, si decides compartirlos bajo licencias compatibles, aportar a otros desarrolladores algo que puedan estudiar y reutilizar. La futura red NEEBLES es una aspiración, no un servicio de distribución pública ya implementado.'),
    F('Tres recorridos para comprender el ecosistema',[
      ['Nace la distribución','BUILD reúne Debian, OS, CUSTOM clásico y el inyector. La ISO entrega un punto de partida controlado.'],
      ['Se instala el gobernador','El bootstrap consulta la última release estable de Boss, valida sus artefactos y ejecuta la instalación inicial.'],
      ['Nacen y evolucionan los módulos','Esbirro certifica mundos; CUSTOM V2 conserva DEB y contratos; Boss interpreta manifiestos y gobierna operaciones.'],
      ['La comunidad puede estudiar el trabajo','Los repositorios públicos permiten examinar código y contratos. Una red comunitaria de módulos es una visión futura.']
    ],'Es un mapa editorial de etapas, no una cadena de llamadas ejecutada íntegramente en cada operación.'),
    P('Por qué no basta con decir «otra distribución modular»',
      'La modularidad, el aislamiento y la preservación de dependencias no son conceptos exclusivos de NEEBLES. Existen otros proyectos que trabajan problemas relacionados. La singularidad que esta documentación expone es el diseño integrado de sus mecanismos propios: Esbirro como disciplina de certificación, CUSTOM como verdad material, Boss como gobernador agnóstico, Lifecycle como motor de operaciones declarativas y OS como proveedor de autoridad.',
      'La prueba de esa propuesta no es una frase publicitaria: son los contratos, los repositorios, los manifiestos, las rutas de ejecución y los casos de ingeniería. Por eso cada artículo termina con enlaces a fuentes reales.')
  );
  const build=find('build');
  build.blocks.splice(1,0,
    P('La ISO ya trae los materiales: Boss llega después',
      'La imagen preparada por BUILD incorpora los paquetes y el material certificado de CUSTOM clásico necesarios para el entorno inicial de Boss. Esa decisión evita que la primera instalación de Boss dependa de improvisar dependencias del host o de reconstruir Qt en el equipo del usuario.',
      'El bootstrap de OS no equivale a Boss ya instalado. Primero consulta el manifiesto bootstrap.json de la última release estable en GitHub, compara versiones y, si falta Boss o requiere actualización, pide autorización para materializar los artefactos correspondientes. Solo después de completar esa operación existe un Boss instalado y operativo.',
      'Esto separa dos tipos de dependencia: el material doméstico de base incluido en la ISO y los artefactos de la release estable que se consultan en línea. No afirmamos que la primera instalación sea offline ni que el inyector sea un administrador de paquetes genérico.'),
    F('Dos momentos diferentes: ISO y primera instalación',[
      ['Durante BUILD','Se integran Debian, OS, CUSTOM clásico y los archivos del bootstrap.'],
      ['La ISO queda lista','Los DEB y materiales de base ya forman parte de la distribución.'],
      ['Primera ejecución del bootstrap','Consulta la release estable de Boss en GitHub y valida bootstrap.json.'],
      ['Materializador autorizado','Descarga y verifica artefactos de la release; prepara el staging.'],
      ['Boss instalado','A partir de aquí se habilita la gobernanza del ciclo de módulos.']
    ])
  );
  const os=find('os');
  os.blocks.splice(1,0,P('La libertad del módulo requiere fronteras reales',
    'Conservar dependencias no es suficiente si la ejecución vuelve a resolver bibliotecas del host sin control. La plataforma OS aporta proveedores y descriptores de autoridad que permiten materializar fronteras, recursos y sesiones concretas para los mundos certificados.',
    'OS no necesita conocer el significado funcional de Secrets, Connect o Proxy. Suministra mecanismos de plataforma a Boss; Boss decide qué contrato y qué identidad tienen permiso de solicitarlos. Una aplicación puede necesitar pantalla, D-Bus, un archivo o un recurso privilegiado, pero la necesidad declarada no equivale a autorización concedida.',
    'Esa separación es la base para que los guetos de Esbirro no se conviertan en una metáfora vacía. Sus barrotes tienen una traducción concreta en fronteras de sistema de archivos y acceso autorizado a recursos exteriores.'));
  const custom=find('custom');
  custom.lead='Esbirro es la ley de construcción y certificación: una arquitectura pensada para crear y preservar mundos de software heterogéneos sin repetir desde cero el trabajo de integración para cada módulo. CUSTOM clásico prepara el origen de Boss; CUSTOM V2 conserva materiales reutilizables, contratos y RootFS de los módulos.';
  custom.blocks.splice(0,0,
    P('El problema de ingeniería: ¿y si mañana hay mil módulos?',
      'Una aplicación es manejable. Diez aplicaciones con herramientas distintas ya exigen disciplina. Cientos o miles de módulos escritos con diferentes lenguajes, bibliotecas, compiladores y versiones convertirían un Linux convencional en un problema enorme de compatibilidad, trazabilidad y mantenimiento si cada módulo dependiera implícitamente del host.',
      'Esbirro ataca precisamente la repetición de ese problema. En vez de inventar un procedimiento distinto para cada tecnología, define mundos controlados, materiales identificados, laboratorios restaurables, reglas de observación ELF, auditorías de integridad y certificación. CUSTOM V2 conserva los paquetes compartidos y deltas; Boss consume contratos sin convertirse en una colección de excepciones por lenguaje.',
      'Decir «mil módulos» describe una meta de escalabilidad arquitectónica, no una prueba de rendimiento que ya haya certificado mil instalaciones simultáneas. La ganancia defendible es la reutilización del procedimiento, de las dependencias y de las leyes de integración.'),
    F('Qué evita repetir Esbirro cuando crece el ecosistema',[
      ['Una nueva necesidad','El desarrollador elige una tecnología y determina las dependencias reales.'],
      ['Buscar mundo y materiales existentes','Antes de duplicar paquetes o reglas, se revisan Essential, deltas y mundos ya certificados.'],
      ['Domesticar solo lo que falta','Esbirro prepara herramientas, DEB o mundos nuevos bajo leyes generales.'],
      ['Certificar y publicar identidad','El material queda asociado a hashes, contratos, pruebas y autoridad.'],
      ['Reutilizar en otros módulos','CUSTOM V2 permite que nuevos consumidores aprovechen material ya certificado.'],
      ['Boss sigue siendo genérico','El gobernador no incorpora una rama específica por cada nueva aplicación o lenguaje.']
    ],'Proceso conceptual de crecimiento. No equivale a una promesa de compatibilidad automática con cualquier paquete.'),
    N('El lore es una herramienta de ingeniería',[
      {name:'Elfo',meaning:'Un objeto ELF concreto: ejecutable o biblioteca que debe investigarse.'},
      {name:'Casa',meaning:'El root materializado que contiene el mobiliario de ejecución.'},
      {name:'Muebles',meaning:'Bibliotecas, intérpretes, helpers, ejecutables, datos y rutas necesarias.'},
      {name:'Ghetto',meaning:'Mundo controlado que evita depender silenciosamente del Linux anfitrión.'},
      {name:'Barrotes',meaning:'Fronteras y reglas de contención que impiden escapes no declarados.'},
      {name:'Prófugo',meaning:'Dependencia ausente o referencia que intenta escapar del mundo.'},
      {name:'Ventanilla',meaning:'Interfaz explícita hacia recursos exteriores.'},
      {name:'Llave',meaning:'Autorización específica para usar esa ventanilla; no nace por existir.'},
      {name:'Poder',meaning:'Capacidad genérica que el Goblin sabe aplicar.'},
      {name:'Hechizo',meaning:'Invocación declarativa de un poder bajo una ley.'},
      {name:'Grimorio',meaning:'Catálogo declarativo de mundos y reglas de resolución.'},
      {name:'Penqueo',meaning:'Rechazo de una operación inválida con evidencia y contrato.'}
    ]),
    P('«Guetos indestructibles»: la promesa de preservación, no de magia',
      'El Ghetto no es simplemente una carpeta con bibliotecas copiadas. Es un mundo con su Casa, sus Muebles, sus Barrotes y, cuando corresponde, Ventanillas y Llaves. El Goblin interroga a los Elfos, examina sus dependencias transitivas y rechaza los escapes al host que contradicen el contrato.',
      'Esa disciplina permite aspirar a conservar un módulo incluso cuando la distribución anfitriona evoluciona. «Indestructible» pertenece al lore y a la ambición del proyecto: no significa que el software sea inmune a vulnerabilidades, incompatibilidades de kernel, cambios de hardware o licencias de terceros.',
      'La distinción importa porque una solución seria no se vende diciendo que nunca fallará, sino demostrando qué controla, qué verifica y qué debe recertificarse cuando cambian las condiciones.'),
    P('Un caso de ingeniería, no una promesa abstracta: Connect',
      'La documentación de Esbirro recoge el recorrido de Connect con LibVNCClient: fuente Debian controlada, adaptación versionada, DEB autenticado, delta de CUSTOM V2, compilación Qt bajo el laboratorio, auditoría física ELF, runtime Rust y pins de Construction/Registry. Es una muestra concreta de cómo una necesidad nueva se integra sin perder la procedencia del material.',
      'El README documenta para esa fase un cierre ELF físico de 89 objetos y cero dependencias irresueltas. Ese dato corresponde al caso auditado, no es una cifra general de todos los mundos ni una garantía de versiones futuras.'),
  );
  const boss=find('boss');
  boss.title='Boss: el gobernador que manda sin conocer tu código';
  boss.lead='Boss gobierna el ecosistema modular. Lee identidades y manifiestos, interpreta contratos, decide qué operaciones pueden ejecutarse y coordina su resultado. No necesita conocer si un módulo está escrito en Rust, Python, Qt, C++ o cualquier otra tecnología compatible con sus mundos y capacidades.';
  boss.blocks.splice(0,0,
    P('El jefe no necesita aprender el oficio de cada módulo',
      'Un gobernador no necesita saber cómo fabrica sus herramientas cada habitante de su territorio. Necesita saber quién es, qué declara, qué solicita, qué autoridad posee y cómo debe gobernarse la operación. Esa es la idea detrás de Boss: el conocimiento privado del módulo no se filtra al núcleo del gobierno.',
      'Boss lee los manifiestos y contratos seleccionados. Governor resuelve acciones y transiciones; Preinstall autentica materiales; Lifecycle interpreta operaciones; MaterialBinding mantiene la identidad persistente; RuntimeLease prepara ejecuciones temporales; OS suministra autoridad de plataforma. Cada pieza cumple una responsabilidad sin enseñar a Boss una tecnología específica.',
      'Por eso el nombre Boss tiene sentido: manda sobre el ciclo de los módulos, pero no necesita reprogramarse para conocer los detalles internos de cada nuevo módulo. Sus límites no son caprichos de un módulo: son contratos, autoridades y capacidades disponibles.'),
    F('Gobierno por contrato, no por conocimiento privado',[
      ['El módulo se presenta','Manifiesto, identidad, contratos, superficies, Lifecycle y referencias de material.'],
      ['Boss interpreta','Valida identidad, versión, estado, dependencias y solicitudes declaradas.'],
      ['Governor decide','Vincula la acción pública con la transición autorizada.'],
      ['Lifecycle organiza','Construye el plan, resuelve dependencias y solicita capacidades registradas.'],
      ['OS y CUSTOM aportan sus verdades','Autoridad de plataforma y material certificado, sin que Boss suplante sus responsabilidades.'],
      ['Boss ejecuta y registra','Resultados, estado, errores y eventos vuelven al gobierno.']
    ]),
    P('La diferencia entre «lo sabe» y «lo gobierna»',
      'Boss no tiene que saber qué es un túnel Tailscale para gobernar Proxy Client. Tampoco necesita conocer las bibliotecas gráficas particulares de Connect o el modelo interno de las bóvedas de Secrets. Lo que conoce son los contratos que esos módulos publican y las capacidades genéricas que puede conceder o ejecutar.',
      'Si mañana aparece un módulo para una función inspirada en otro sistema operativo, el objetivo no es añadir un if nuevo a Boss. Se certifica su mundo, se declaran sus materiales y operaciones, y se reutilizan o extienden capacidades generales cuando realmente sea necesario.',
      'Esa separación permite que un sistema modular crezca sin convertir su gobernador en una aplicación monolítica que acumula el conocimiento privado de cada consumidor.')
  );
  // La sección del arsenal se ubica justo después de la introducción Lifecycle existente.
  const lifeIdx=boss.blocks.findIndex(b=>b.type==='prose'&&b.title.startsWith('Lifecycle:'));
  boss.blocks.splice(lifeIdx+1,0,
    {type:'arsenal',title:'Artillerías productivas: el arsenal disponible hoy',caption:'Inventario fundamentado en src/lifecycle_available_capabilities.rs de la auditoría. Las artillerías son cadenas registradas; cada una valida sus objetivos y municiones.',items:[
      {id:'boss.workspace_execution',objective:'construction.step',munition:'step',purpose:'Resuelve un paso Construction autenticado de CUSTOM V2 en el mundo del módulo. La identidad del consumidor la aporta Governor.'},
      {id:'boss.module_ipc',objective:'Contrato declarado por el módulo (string)',munition:'endpoint',purpose:'Invoca una operación IPC del módulo gobernado; el Objective identifica su contrato, no una función privada de Boss.'},
      {id:'boss.user_service',objective:'install',munition:'resource',purpose:'Instala un recurso de servicio de usuario declarado; valida identidad y munición exacta.'},
      {id:'boss.platform_operation',objective:'execute',munition:'operation + require_privilege=true',purpose:'Solicita una operación a un proveedor OS privilegiado y autenticado; el módulo no escoge un binario root arbitrario.'}
    ]},
    P('Por qué usar strings cambia la arquitectura',
      'En el catálogo Rust de Lifecycle, la Artillery se registra mediante un identificador de tipo String y se resuelve mediante ese mismo identificador. Los Objectives también forman parte del vocabulario declarado, y las Municiones se reciben como datos estructurados. No existe una ley del motor que exija enumerar todos los futuros nombres de artillería como variantes fijas de un enum.',
      'La prueba catalog_accepts_arbitrary_artillery registra explícitamente el identificador future.tool, mientras otra prueba demuestra que el identificador privado de implementación puede ser diferente del nombre público. Eso acredita extensibilidad del catálogo, no que future.tool esté habilitado en producción.',
      'El valor de esta abstracción es que un módulo declara una intención y Boss busca una capacidad registrada. Una nueva capacidad puede apoyarse en bibliotecas Rust existentes o en una implementación nueva. La cadena que la identifica no determina el lenguaje del software que finalmente se ejecuta.'),
    {type:'code',title:'Prueba real de extensibilidad del arsenal',language:'rust',code:`#[test]
fn catalog_accepts_arbitrary_artillery() {
    let mut catalog = AvailableCapabilityCatalog::new();

    catalog
        .register("future.tool", capability("rust.future.tool"))
        .unwrap();

    assert!(catalog.contains("future.tool"));
}`,caption:'Fragmento real de una prueba unitaria en src/lifecycle_available_capabilities.rs. future.tool es una capacidad de prueba, no parte del arsenal productivo.'},
    P('Un Objective no es un comando de shell sin restricciones',
      'La abstracción permite trabajar con software de cualquier lenguaje compatible, pero no convierte una cadena arbitraria en permiso para ejecutar código del host. El catálogo debe registrar una capacidad, FireControl debe resolverla, el handler debe validar Objective y Munition, y el acceso a recursos debe respetar Governor y OS.',
      'Por ejemplo, boss.workspace_execution admite el Objective construction.step y exige exactamente munition.step. No acepta que el módulo envíe un ejecutable libre o se atribuya la identidad de otro módulo. Boss toma el paso desde una declaración Construction autenticada y el sujeto desde Governor.',
      'Esa combinación es la fuerza de Lifecycle: vocabulario abierto para describir operaciones, implementación explícita para realizarlas y fronteras que impiden que la flexibilidad se convierta en ejecución arbitraria.'),
    F('Cómo una tecnología externa cabe sin enseñar su lenguaje a Boss',[
      ['Nuevo módulo','Su autor programa con una tecnología compatible y declara la transición que necesita.'],
      ['Esbirro / CUSTOM V2','Certifican el mundo, los paquetes y el paso Construction correspondiente.'],
      ['Lifecycle','Recibe strings de Artillery y Objective, Munition y dependencias declaradas.'],
      ['FireControl','Resuelve una capacidad realmente registrada, no un comando inventado.'],
      ['Handler Rust / Construction','Valida y conduce la operación al ejecutable correspondiente bajo el mundo y permisos definidos.'],
      ['Resultado','Intelligence y estado vuelven a Boss, que conserva el gobierno de la operación.']
    ],'Ejemplo de extensibilidad del modelo, no una declaración de compatibilidad automática con cualquier lenguaje.'),
    N('El lenguaje militar de Lifecycle tiene correspondencia técnica',[
      {name:'Battlefield',meaning:'Contexto, datos y resolución de valores declarados para la misión.'},
      {name:'Battleplan',meaning:'Plan de operaciones con dependencias y orden de ejecución.'},
      {name:'Artillery',meaning:'Identificador String de una familia de capacidades registrada.'},
      {name:'Objective',meaning:'Acción o contrato concreto solicitado dentro de esa familia.'},
      {name:'Munition',meaning:'Argumentos declarativos que la capacidad valida y consume.'},
      {name:'Tactics',meaning:'Datos tácticos admitidos por el contrato de la operación.'},
      {name:'FireControl',meaning:'Resuelve la capacidad solicitada y su implementación registrada.'},
      {name:'Intelligence',meaning:'Datos de resultado que pueden alimentar el estado y los eventos.'}
    ]),
  );
  const nightmareIdx=boss.blocks.findIndex(b=>b.type==='prose'&&b.title.startsWith('Nightmare:'));
  boss.blocks.splice(nightmareIdx,0,
    P('Nightmare no pertenece conceptualmente a Lifecycle ni a Critical Update',
      'Nightmare es otro motor abstracto de Boss. Critical Update es un consumidor actual de ese diseño, pero la idea de Nightmare es mucho más amplia: interpretar un documento mediante un Reader, aplicar una fórmula declarada y producir un nuevo contenido mediante un Writer, con validaciones y publicación controlada.',
      'Su propósito es separar la transformación de contenido de la lógica específica del consumidor. En lugar de codificar una reescritura particular para cada operación, una fórmula puede expresar cómo leer, qué cambiar y cómo escribir, siempre dentro de los formatos y transformaciones que el motor realmente soporte.',
      'El código auditado incluye validación de catálogos, resolución de fórmulas, contratos Reader/Writer y mecanismos de tratamiento de documentos. No equivale a afirmar que hoy soporte cualquier formato de archivo o lenguaje de scripting. La abstracción permite ampliar usos sin que Nightmare se convierta en una función exclusiva de actualizaciones.'),
    F('Nightmare como motor transversal de transformación',[
      ['Un consumidor necesita cambiar contenido','Puede ser Critical Update hoy u otro procedimiento autorizado en el futuro.'],
      ['Fórmula identificada','Se selecciona una definición existente en un catálogo válido.'],
      ['Reader','Interpreta el contenido de entrada bajo el contrato del formato soportado.'],
      ['Transformación declarada','Opera sobre la representación lógica de los datos.'],
      ['Writer','Genera el documento resultante según las reglas de salida.'],
      ['Publicación gobernada','Se valida y reporta el resultado; el consumidor decide cómo integrarlo.']
    ],'Flujo abstracto. Las transformaciones concretas requieren fórmulas y compatibilidad implementadas.'),
    P('Un ejemplo de su potencial, sin confundirlo con una función publicada',
      'Imagina que un módulo necesita migrar una configuración del equipo cliente: cambiar una clave, preservar otras y producir un documento nuevo sin introducir un script ad hoc dentro del gobernador. Nightmare es una arquitectura apta para expresar ese tipo de problema mediante Reader, fórmula y Writer cuando el formato y las operaciones estén implementados.',
      'La auditoría identifica un catálogo base con formulas vacío. Por eso esta migración es un escenario de uso posible, no una transformación concreta que ya podamos ofrecer como función productiva. La documentación pública debe ser ambiciosa sin atribuir al software capacidades no verificadas.',
      'La relación correcta es: Critical Update coordina instrucciones de actualización; Nightmare aporta un motor de reescritura genérica; Lifecycle gobierna transiciones de módulos; Construction prepara ejecuciones. Ninguno sustituye a los demás.')
  );
  return docs;
}
