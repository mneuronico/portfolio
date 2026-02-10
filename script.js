/* ==========================================
   PORTFOLIO — Nicolás Martorell
   3D Interactive Solar System
   ========================================== */

// ============ DATA ============

const WORLDS = [
  {
    id: 'research',
    color: '#22d3ee',
    title: { en: 'Research', es: 'Investigación' },
    subtitle: { en: 'Neuroscience & AI', es: 'Neurociencia & IA' },
    description: {
      en: 'Doctoral-level research bridging neuroscience and artificial intelligence. Calcium imaging studies of multisensory integration in zebrafish neural circuits. Interpretability research on large language models — probing abstract spatial representations and hallucinations. Published in Scientific Reports and at the XAI World Conference.',
      es: 'Investigación doctoral entre neurociencia e inteligencia artificial. Estudios de imágenes de calcio sobre integración multisensorial en circuitos neuronales del pez cebra. Investigación en interpretabilidad de modelos de lenguaje — sondeo de representaciones espaciales abstractas y alucinaciones. Publicado en Scientific Reports y en la XAI World Conference.'
    },
    projects: [
      {
        id: 'zebrafish',
        color: '#00ff41',
        title: { en: 'Zebrafish — PhD Thesis', es: 'Pez Cebra — Tesis Doctoral' },
        desc: {
          en: 'Interactive exploration of multisensory integration in the zebrafish brain. Calcium imaging, neural circuits, and behavior analysis from a PhD thesis at UBA-CONICET. Published in Scientific Reports and presented at SfN.',
          es: 'Exploración interactiva de la integración multisensorial en el cerebro del pez cebra. Imágenes de calcio, circuitos neuronales y análisis de comportamiento de una tesis doctoral en UBA-CONICET. Publicado en Scientific Reports y presentado en SfN.'
        },
        url: 'https://mneuronico.github.io/zebrafish/'
      },
      {
        id: 'llm-prober-r',
        color: '#a78bfa',
        title: { en: 'LLM Prober', es: 'LLM Prober' },
        desc: {
          en: 'Research on LLM interpretability: probing abstract spatial models and hallucinations in open-source language models. Published at XAI World Conference 2025. Concept direction training, layer sweeps, and steering with learned vectors.',
          es: 'Investigación en interpretabilidad de LLMs: sondeo de modelos espaciales abstractos y alucinaciones en modelos de lenguaje open-source. Publicado en XAI World Conference 2025. Entrenamiento de direcciones conceptuales, barridos de capas y control con vectores aprendidos.'
        },
        url: 'https://mneuronico.github.io/llm-prober/'
      },
      {
        id: 'mas-r',
        color: '#2dd4bf',
        title: { en: 'MAS Library', es: 'Librería MAS' },
        desc: {
          en: 'Open-source Python framework for multi-agent systems. Supports OpenAI, Google, Groq, Anthropic, DeepSeek, and local models for building complex AI pipelines and decision-making architectures.',
          es: 'Framework Python de código abierto para sistemas multi-agente. Soporta OpenAI, Google, Groq, Anthropic, DeepSeek y modelos locales para construir pipelines de IA y arquitecturas de decisión complejas.'
        },
        url: 'https://mneuronico.github.io/mas/'
      }
    ]
  },
  {
    id: 'development',
    color: '#60a5fa',
    title: { en: 'Development', es: 'Desarrollo' },
    subtitle: { en: 'Software & Open Source', es: 'Software & Código Abierto' },
    description: {
      en: 'Full-stack software engineering across Python, JavaScript, and modern web frameworks. Creator of open-source libraries for multi-agent AI systems. Desktop applications, AI-powered web experiences, immersive 3D environments with photogrammetry, and computer vision applications.',
      es: 'Ingeniería de software full-stack en Python, JavaScript y frameworks web modernos. Creador de librerías open-source para sistemas multi-agente de IA. Aplicaciones de escritorio, experiencias web con IA, entornos 3D inmersivos con fotogrametría y aplicaciones de visión por computadora.'
    },
    projects: [
      {
        id: 'mas-d',
        color: '#2dd4bf',
        title: { en: 'MAS Library', es: 'Librería MAS' },
        desc: {
          en: 'A powerful open-source Python library for creating multi-agent systems — chatbots, API orchestrators, data pipelines, and decision-making systems. Supports multiple LLM providers.',
          es: 'Una poderosa librería Python de código abierto para crear sistemas multi-agente — chatbots, orquestadores de API, pipelines de datos y sistemas de decisión. Soporta múltiples proveedores de LLM.'
        },
        url: 'https://mneuronico.github.io/mas/'
      },
      {
        id: 'toxi-finance',
        color: '#14b8a6',
        title: { en: 'TOXI Finance', es: 'TOXI Finance' },
        desc: {
          en: 'Finance management desktop app for freelance teams. Track projects, distribute earnings with smart algorithms, manage multi-currency debts — all encrypted and open source.',
          es: 'App de escritorio para gestión financiera de equipos freelance. Seguimiento de proyectos, distribución inteligente de ganancias, deudas multi-moneda — todo encriptado y open source.'
        },
        url: 'https://mneuronico.github.io/toxi-finance/'
      },
      {
        id: 'llm-prober-d',
        color: '#a78bfa',
        title: { en: 'concept-probe', es: 'concept-probe' },
        desc: {
          en: 'Config-driven Python library for training, evaluating, and using concept probes in LLMs. Layer sweeps, token-level scoring, and steering with learned concept vectors.',
          es: 'Librería Python basada en configuración para entrenar, evaluar y usar sondas conceptuales en LLMs. Barridos de capas, puntuación a nivel de token y control con vectores conceptuales.'
        },
        url: 'https://mneuronico.github.io/llm-prober/'
      },
      {
        id: 'delta-d',
        color: '#FBFE5E',
        title: { en: 'Delta+', es: 'Delta+' },
        desc: {
          en: 'Immersive web experience to explore a 3D-scanned portion of the Delta ecosystem in Entre Ríos, Argentina. Photogrammetry, Blender, and web technologies.',
          es: 'Experiencia web inmersiva para explorar una porción escaneada en 3D del ecosistema del Delta en Entre Ríos, Argentina. Fotogrametría, Blender y tecnologías web.'
        },
        url: 'https://deltagrande.com/'
      },
      {
        id: 'lookiate-d',
        color: '#E6007E',
        title: { en: 'Look-IA-te', es: 'Look-IA-te' },
        desc: {
          en: 'AI-powered beauty tech application for Sedal (Unilever). Fine-tuned diffusion models (Stable Diffusion + LoRAs) for realistic hair-transfer experiences.',
          es: 'Aplicación de tecnología de belleza con IA para Sedal (Unilever). Modelos de difusión ajustados (Stable Diffusion + LoRAs) para experiencias de transferencia de cabello.'
        },
        url: 'https://mneuronico.github.io/lookiate/'
      }
    ]
  },
  {
    id: 'industry',
    color: '#f97316',
    title: { en: 'Industry', es: 'Empresas' },
    subtitle: { en: 'Client Projects', es: 'Proyectos para Clientes' },
    description: {
      en: 'AI solutions and creative technology for leading brands. Multimodal virtual assistants, beauty tech with fine-tuned diffusion models, immersive 3D-scanned environments, and AI video production. Clients include Unilever (Sedal), CasanCrem, El Perro en la Luna, and more.',
      es: 'Soluciones de IA y tecnología creativa para marcas líderes. Asistentes virtuales multimodales, beauty tech con modelos de difusión ajustados, entornos inmersivos escaneados en 3D y producción de video con IA. Clientes incluyen Unilever (Sedal), CasanCrem, El Perro en la Luna, y más.'
    },
    projects: [
      {
        id: 'casanchef',
        color: '#0057B8',
        title: { en: 'CasanChef (CasanCrem)', es: 'CasanChef (CasanCrem)' },
        desc: {
          en: 'AI-powered multimodal virtual assistant for CasanCrem. Multi-agent system that finds personalized recipes from user ingredients using a tailored database and natural conversation.',
          es: 'Asistente virtual multimodal con IA para CasanCrem. Sistema multi-agente que encuentra recetas personalizadas a partir de los ingredientes del usuario usando una base de datos y conversación natural.'
        },
        url: 'https://mneuronico.github.io/casanchef/'
      },
      {
        id: 'lookiate-i',
        color: '#E6007E',
        title: { en: 'Look-IA-te (Sedal)', es: 'Look-IA-te (Sedal)' },
        desc: {
          en: 'AI Magic Mirror for Sedal (Unilever) — the first Beauty Tech experience in Argentina. Computer vision and fine-tuned diffusion models for instant, personalized hair solutions.',
          es: 'Espejo Mágico con IA para Sedal (Unilever) — la primera experiencia Beauty Tech en Argentina. Visión por computadora y modelos de difusión ajustados para soluciones capilares personalizadas.'
        },
        url: 'https://mneuronico.github.io/lookiate/'
      },
      {
        id: 'pauli-bakes',
        color: '#D4A373',
        title: { en: 'Pauli Bakes', es: 'Pauli Bakes' },
        desc: {
          en: 'Professional bakery website and catalog system for a custom cake business in Buenos Aires. Full-stack web development with product showcase and contact features.',
          es: 'Sitio web profesional y catálogo para una pastelería personalizada en Buenos Aires. Desarrollo web full-stack con exhibición de productos y sistema de contacto.'
        },
        url: 'https://mneuronico.github.io/pauli-bakes/'
      },
      {
        id: 'delta-i',
        color: '#FBFE5E',
        title: { en: 'Delta+ (El Perro en la Luna)', es: 'Delta+ (El Perro en la Luna)' },
        desc: {
          en: 'Immersive 3D-scanned exploration of the Delta ecosystem for El Perro en la Luna. Photogrammetry, Blender, Unity, and web technologies for a natural environment experience.',
          es: 'Exploración inmersiva del ecosistema del Delta escaneado en 3D para El Perro en la Luna. Fotogrametría, Blender, Unity y tecnologías web para una experiencia de entorno natural.'
        },
        url: 'https://deltagrande.com/'
      },
      {
        id: 'via-i',
        color: '#ff0080',
        title: { en: 'VIA', es: 'VIA' },
        desc: {
          en: 'AI Video Production Agency — a new breed of production company where human artistry meets generative intelligence for professional video creation.',
          es: 'Agencia de Producción de Video con IA — una nueva generación de productora donde el arte humano se encuentra con la inteligencia generativa para creación profesional de video.'
        },
        url: 'https://mneuronico.github.io/via/'
      }
    ]
  },
  {
    id: 'scicomm',
    color: '#4ecdc4',
    title: { en: 'Science Communication', es: 'Comunicación Científica' },
    subtitle: { en: 'Outreach & Media', es: 'Divulgación & Medios' },
    description: {
      en: 'Award-winning science outreach across podcasts, books, and video. Creator of A Todo Neuro — a neuroscience podcast for the Argentine Society of Neuroscience, winner of the SfN Next Generation Award. Author of "What is AI?" published by Siglo XXI. Co-founder of Xplora, with content for C5N, Canal Encuentro, and government recognition.',
      es: 'Divulgación científica premiada en podcasts, libros y video. Creador de A Todo Neuro — podcast de neurociencia de la Sociedad Argentina de Neurociencia, ganador del premio Next Generation de SfN. Autor de "¿Qué es la IA?" publicado por Siglo XXI. Co-fundador de Xplora, con contenido para C5N, Canal Encuentro y reconocimiento gubernamental.'
    },
    projects: [
      {
        id: 'atodoneuro',
        color: '#4ecdc4',
        title: { en: 'A Todo Neuro', es: 'A Todo Neuro' },
        desc: {
          en: 'Award-winning neuroscience podcast for the Argentine Society of Neuroscience (SAN). Winner of the Next Generation Award from the Society for Neuroscience (2024). Conversations with leading researchers.',
          es: 'Podcast de neurociencia premiado de la Sociedad Argentina de Neurociencia (SAN). Ganador del premio Next Generation de la Society for Neuroscience (2024). Conversaciones con investigadores destacados.'
        },
        url: 'https://mneuronico.github.io/a-todo-neuro/'
      },
      {
        id: 'ai-book',
        color: '#c0392b',
        title: { en: 'What is AI? — Book', es: '¿Qué es la IA? — Libro' },
        desc: {
          en: 'A science outreach book about the societal impact of AI, published by Ciencia que Ladra (Siglo XXI). A guide to understand, question, and get ahead of the future of artificial intelligence.',
          es: 'Libro de divulgación sobre el impacto social de la IA, publicado por Ciencia que Ladra (Siglo XXI). Una guía para entender, cuestionar y adelantarse al futuro de la inteligencia artificial.'
        },
        url: 'https://mneuronico.github.io/what-is-ai-book/'
      },
      {
        id: 'xplora',
        color: '#e91e8c',
        title: { en: 'Xplora', es: 'Xplora' },
        desc: {
          en: 'Award-winning science communication channel. Weekly videos for C5N, animated shorts for Canal Encuentro, and content awarded by the Argentine Ministry of Science. Co-founded in 2017.',
          es: 'Canal de comunicación científica premiado. Videos semanales para C5N, cortos animados para Canal Encuentro, y contenido premiado por el Ministerio de Ciencia argentino. Co-fundado en 2017.'
        },
        url: 'https://mneuronico.github.io/xplora/'
      }
    ]
  },
  {
    id: 'art',
    color: '#ec4899',
    title: { en: 'Artistic Production', es: 'Producción Artística' },
    subtitle: { en: 'Music, Video & Animation', es: 'Música, Video & Animación' },
    description: {
      en: 'Original music composition across multiple genres and albums. AI-assisted video production — music videos, animated content, and experimental audiovisual pieces. From electronic and cinematic music to character-driven animation for children\'s content.',
      es: 'Composición musical original en múltiples géneros y álbumes. Producción de video asistida por IA — videoclips, contenido animado y piezas audiovisuales experimentales. Desde música electrónica y cinematográfica hasta animación de personajes para contenido infantil.'
    },
    projects: [
      {
        id: 'via-a',
        color: '#ff0080',
        title: { en: 'VIA', es: 'VIA' },
        desc: {
          en: 'AI Video Production Agency where human artistry meets generative intelligence. Music videos, commercials, and experimental audiovisual content using cutting-edge AI tools.',
          es: 'Agencia de producción de video con IA donde el arte humano se encuentra con la inteligencia generativa. Videoclips, publicidades y contenido audiovisual experimental con herramientas de IA.'
        },
        url: 'https://mneuronico.github.io/via/'
      },
      {
        id: 'spotifai',
        color: '#7dd3fc',
        title: { en: 'SpotifAI', es: 'SpotifAI' },
        desc: {
          en: 'AI Music, by humans — a curated collection of AI-assisted music compositions with an interactive player, album showcase, and sorting features.',
          es: 'Música con IA, por humanos — una colección curada de composiciones musicales asistidas por IA con reproductor interactivo, galería de álbumes y filtros.'
        },
        url: 'https://mneuronico.github.io/spotifai/'
      },
      {
        id: 'music',
        color: '#bb86fc',
        title: { en: 'Music Portfolio', es: 'Portfolio Musical' },
        desc: {
          en: 'Original music compositions across multiple genres and albums. A personal musical journey from electronic to acoustic, experimental, and cinematic music.',
          es: 'Composiciones musicales originales en múltiples géneros y álbumes. Un viaje musical personal desde lo electrónico hasta lo acústico, experimental y cinematográfico.'
        },
        url: 'https://mneuronico.github.io/music/'
      },
      {
        id: 'kabradepata',
        color: '#fbbf24',
        title: { en: 'Kabradepata', es: 'Kabradepata' },
        desc: {
          en: "Production of 8 animated music videos for a children's music album. Character design, storyboarding, AI-assisted image and video generation, editing in Adobe Premiere.",
          es: 'Producción de 8 videoclips animados para un álbum de música infantil. Diseño de personajes, storyboarding, generación de imágenes y video con IA, edición en Adobe Premiere.'
        },
        url: 'https://mneuronico.github.io/via/'
      },
      {
        id: 'anda-calabaza',
        color: '#fb923c',
        title: { en: 'Anda Calabaza', es: 'Anda Calabaza' },
        desc: {
          en: 'Fully animated music video of the Argentine national anthem for kids. Character design, scripting, storyboarding, and AI-assisted animation and video editing.',
          es: 'Videoclip completamente animado del himno nacional argentino para niños. Diseño de personajes, guión, storyboarding y animación y edición de video asistida por IA.'
        },
        url: 'https://mneuronico.github.io/via/'
      }
    ]
  },
  {
    id: 'teaching',
    color: '#fbbf24',
    title: { en: 'Teaching', es: 'Enseñanza' },
    subtitle: { en: 'Education & Training', es: 'Educación & Formación' },
    description: {
      en: 'Teaching and training worldwide — from Neuromatch Academy\'s computational neuroscience courses to corporate generative AI workshops. Advisor for the Buenos Aires Education Ministry on AI curriculum development. Educator trainer across 16 curricular areas.',
      es: 'Enseñanza y formación a nivel mundial — desde los cursos de neurociencia computacional de Neuromatch Academy hasta talleres corporativos de IA generativa. Asesor del Ministerio de Educación de Buenos Aires en desarrollo curricular de IA. Formador de docentes en 16 áreas curriculares.'
    },
    projects: [
      {
        id: 'neuromatch',
        color: '#22d3ee',
        title: { en: 'Neuromatch Academy', es: 'Neuromatch Academy' },
        desc: {
          en: 'Teaching Assistant and Lead TA for Computational Neuroscience and Deep Learning courses (2020–2024). Python-based instruction for students worldwide. Co-authored publication in JOSE.',
          es: 'Asistente y Líder de asistentes para cursos de Neurociencia Computacional y Deep Learning (2020–2024). Enseñanza basada en Python para estudiantes de todo el mundo. Publicación co-autorada en JOSE.'
        },
        url: 'https://neuromatch.io/'
      },
      {
        id: 'genai-workshops',
        color: '#a78bfa',
        title: { en: 'GenAI Workshops', es: 'Talleres de IA Generativa' },
        desc: {
          en: 'Developer and leader of talks and workshops on generative AI for corporations, schools, teachers, and government employees. Practical approaches to LLMs and image generation models.',
          es: 'Desarrollador y líder de charlas y talleres sobre IA generativa para empresas, escuelas, docentes y empleados del gobierno. Enfoque práctico en LLMs y modelos de generación de imágenes.'
        },
        url: null
      },
      {
        id: 'bsas-education',
        color: '#fbbf24',
        title: { en: 'AI in Education — Buenos Aires', es: 'IA en Educación — Buenos Aires' },
        desc: {
          en: 'Advisor for the Education Ministry of Buenos Aires to include AI in the primary school curriculum. Educator trainer in natural sciences and AI across 16 curricular areas (2021–2024).',
          es: 'Asesor del Ministerio de Educación de Buenos Aires para incluir IA en el currículo de primaria. Formador de docentes en ciencias naturales e IA en 16 áreas curriculares (2021–2024).'
        },
        url: null
      }
    ]
  }
];

// ============ TRANSLATIONS ============

const i18n = {
  en: {
    heroName: 'Nicolás Martorell',
    heroTagline: 'Software Engineer · Neuroscientist · Researcher · Content Creator',
    heroDesc: 'Welcome to my portfolio universe. Each planet represents a domain of my work. Click a planet to explore the projects within, or click the sun to learn more about me.',
    brandsLabel: "Brands I've Worked With",
    backBtn: 'All Worlds',
    clickMoon: 'Click a moon to explore a project',
    visitBtn: 'Visit Project',
    noLink: 'No external page yet — stay tuned!',
    aboutTagline: 'Software Engineer · Neuroscientist · Researcher · Content Creator',
    aboutBio: 'Based in Buenos Aires, I hold a PhD in Neuroscience from UBA-CONICET and work as a postdoctoral researcher at the Applied AI Laboratory (LIAA). My work bridges neuroscience, AI, and software engineering — from studying neural circuits in zebrafish to probing hallucinations in large language models, from building multi-agent AI systems to creating award-winning science content. I am passionate about applying technical skills and creativity to solve complex problems across research, industry, and education.',
    statPhd: 'Neuroscience',
    statPubs: 'Publications',
    statLangs: 'Code Languages',
    statAwards: 'Awards',
    sunLabel: 'About Me',
    loading: 'Loading universe…'
  },
  es: {
    heroName: 'Nicolás Martorell',
    heroTagline: 'Ingeniero de Software · Neurocientífico · Investigador · Creador de Contenido',
    heroDesc: 'Bienvenido a mi universo de portfolio. Cada planeta representa un dominio de mi trabajo. Hacé click en un planeta para explorar los proyectos dentro, o en el sol para saber más sobre mí.',
    brandsLabel: 'Marcas con las que Trabajé',
    backBtn: 'Todos los Mundos',
    clickMoon: 'Hacé click en una luna para explorar un proyecto',
    visitBtn: 'Visitar Proyecto',
    noLink: 'Aún sin página externa — ¡próximamente!',
    aboutTagline: 'Ingeniero de Software · Neurocientífico · Investigador · Creador de Contenido',
    aboutBio: 'Desde Buenos Aires, tengo un Doctorado en Neurociencia por UBA-CONICET y trabajo como investigador postdoctoral en el Laboratorio de IA Aplicada (LIAA). Mi trabajo conecta neurociencia, IA e ingeniería de software — desde estudiar circuitos neuronales en pez cebra hasta sondear alucinaciones en modelos de lenguaje, desde construir sistemas multi-agente de IA hasta crear contenido científico premiado. Me apasiona aplicar habilidades técnicas y creatividad para resolver problemas complejos en investigación, industria y educación.',
    statPhd: 'Neurociencia',
    statPubs: 'Publicaciones',
    statLangs: 'Lenguajes',
    statAwards: 'Premios',
    sunLabel: 'Sobre Mí',
    loading: 'Cargando universo…'
  }
};

const PROJECT_LOGOS = {
  zebrafish: 'assets/logos/zebrafish.png',
  'llm-prober-r': 'assets/logos/llm-prober.png',
  'llm-prober-d': 'assets/logos/llm-prober.png',
  'mas-r': 'assets/logos/mas.png',
  'mas-d': 'assets/logos/mas.png',
  'toxi-finance': 'assets/logos/toxi-finance.png',
  'delta-d': 'assets/logos/delta-plus.png',
  'delta-i': 'assets/logos/delta-plus.png',
  'lookiate-d': 'assets/logos/lookiate.png',
  'lookiate-i': 'assets/logos/lookiate.png',
  casanchef: 'assets/logos/casanchef.png',
  'pauli-bakes': 'assets/logos/pauli-bakes.png',
  'via-i': 'assets/logos/via.png',
  'via-a': 'assets/logos/via.png',
  atodoneuro: 'assets/logos/a-todo-neuro.jpg',
  'ai-book': 'assets/logos/what-is-ai.png',
  xplora: 'assets/logos/xplora.png',
  spotifai: 'assets/logos/spotifai.png',
  music: 'assets/logos/music.png',
  kabradepata: 'assets/logos/kabradepata.png',
  'anda-calabaza': 'assets/logos/anda-calabaza.png',
  neuromatch: 'assets/logos/neuromatch.svg',
  'genai-workshops': 'assets/logos/genai.svg',
  'bsas-education': 'assets/logos/edu-bsas.svg'
};

// ============ STATE ============

let currentLang = 'en';
let currentView = 'main'; // 'main', 'world', 'transitioning'
let selectedWorld = null;
let hoveredMesh = null;

// ============ THREE.JS GLOBALS ============

let scene, camera, renderer, clock;
let starsScene, starsRenderer;
let raycaster, mouse;
let currentLookAt;
let sunGroup, sunMesh, sunGlow;
const worlds3D = [];
let starField;

// Camera control
let mainCameraTheta = Math.PI * 0.25;
let mainCameraPhi = Math.PI / 3.2;
let mainCameraRadius = 85;
let worldCameraTheta = 0;
let worldCameraRadius = 24;
let worldCameraPhi = Math.PI / 3.15;
let orbitsActive = true;
const MAIN_VIEW_OFFSET = new THREE.Vector3(-10, 0, 0);
const WORLD_VIEW_OFFSET = new THREE.Vector3(-6, 0, 0);
const MAIN_START_OFFSET = 0.6;

// Drag
let pointerDownPos = null;
let isDragging = false;
let isPointerOverUI = false;
let uiFocusCount = 0;
let activePointerId = null;
let pointerDownTime = 0;

// Camera animation
const cameraAnim = {
  active: false,
  startPos: new THREE.Vector3(),
  targetPos: new THREE.Vector3(),
  startLookAt: new THREE.Vector3(),
  targetLookAt: new THREE.Vector3(),
  progress: 0,
  duration: 2.0,
  onComplete: null
};

// Shared geometries
let worldGeometry, moonGeometry, sunGeometry;
const MOON_RADIUS = 0.8;

// Texture loader
const textureLoader = new THREE.TextureLoader();

// ============ UTILITY ============

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function updateLayoutTargets() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const aspect = w / h;
  const isPortrait = aspect < 0.95 || w < 900;

  if (isPortrait) {
    MAIN_VIEW_OFFSET.set(0, 10, 0);
    WORLD_VIEW_OFFSET.set(0, 0, 0);
    mainCameraRadius = 112;
    worldCameraRadius = 32;
    mainCameraPhi = Math.PI / 3.05;
    worldCameraPhi = Math.PI / 2.25;
  } else {
    MAIN_VIEW_OFFSET.set(-16, 0.6, 0);
    WORLD_VIEW_OFFSET.set(-10, -0.5, 0);
    mainCameraRadius = 102;
    worldCameraRadius = 30;
    mainCameraPhi = Math.PI / 3.2;
    worldCameraPhi = Math.PI / 2.3;
  }

  if (camera) {
    camera.fov = isPortrait ? 54 : 52;
    camera.updateProjectionMatrix();
  }
}

// ============ SCENE SETUP ============

function createScene() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 40, 75);

  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('scene3d'),
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.setClearColor(0x000000, 0);

  clock = new THREE.Clock();
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2(-999, -999);
  currentLookAt = new THREE.Vector3(0, 0, 0);

  // Shared geometries
  sunGeometry = new THREE.IcosahedronGeometry(4, 4);
  worldGeometry = new THREE.SphereGeometry(2, 40, 40);
  moonGeometry = new THREE.SphereGeometry(MOON_RADIUS, 28, 28);
}

function createLights() {
  const ambient = new THREE.AmbientLight(0x334466, 0.4);
  scene.add(ambient);

  // Dim directional for subtle highlight on planets
  const dir = new THREE.DirectionalLight(0xffffff, 0.15);
  dir.position.set(5, 10, 5);
  scene.add(dir);
}

// ============ STAR FIELD ============

function createStars() {
  starsScene = new THREE.Scene();
  starsRenderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('stars3d'),
    antialias: true,
    alpha: false
  });
  starsRenderer.setSize(window.innerWidth, window.innerHeight);
  starsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  starsRenderer.setClearColor(0x050510, 1);

  const count = 4000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 400 + Math.random() * 400;

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    // Slight color variation
    const brightness = 0.5 + Math.random() * 0.5;
    const warmth = Math.random();
    colors[i * 3] = brightness * (0.8 + warmth * 0.2);
    colors[i * 3 + 1] = brightness * (0.8 + warmth * 0.1);
    colors[i * 3 + 2] = brightness;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 1.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true
  });

  starField = new THREE.Points(geometry, material);
  starsScene.add(starField);
}

// ============ GLOW TEXTURES ============

function createGlowTexture(color, softness) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const rgb = hexToRgb(color);

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${softness || 0.5})`);
  gradient.addColorStop(0.3, `rgba(${rgb.r},${rgb.g},${rgb.b},${(softness || 0.5) * 0.5})`);
  gradient.addColorStop(0.6, `rgba(${rgb.r},${rgb.g},${rgb.b},${(softness || 0.5) * 0.15})`);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  return new THREE.CanvasTexture(canvas);
}

function createGlowSprite(color, size, softness) {
  const texture = createGlowTexture(color, softness);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(size, size, 1);
  return sprite;
}

// ============ PLANET TEXTURES ============

function createPlanetTexture(hexColor) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const rgb = hexToRgb(hexColor);

  // Base gradient (equirectangular bands)
  const grad = ctx.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, `rgb(${Math.max(0, rgb.r - 40)},${Math.max(0, rgb.g - 40)},${Math.max(0, rgb.b - 40)})`);
  grad.addColorStop(0.25, hexColor);
  grad.addColorStop(0.45, `rgb(${Math.min(255, rgb.r + 30)},${Math.min(255, rgb.g + 30)},${Math.min(255, rgb.b + 30)})`);
  grad.addColorStop(0.55, hexColor);
  grad.addColorStop(0.75, `rgb(${Math.max(0, rgb.r - 20)},${Math.max(0, rgb.g - 20)},${Math.max(0, rgb.b - 20)})`);
  grad.addColorStop(1, `rgb(${Math.max(0, rgb.r - 50)},${Math.max(0, rgb.g - 50)},${Math.max(0, rgb.b - 50)})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 128);

  // Subtle noise bands
  for (let y = 0; y < 128; y++) {
    const alpha = Math.sin(y * 0.4) * 0.06 + Math.random() * 0.03;
    ctx.fillStyle = `rgba(255,255,255,${Math.abs(alpha)})`;
    ctx.fillRect(0, y, 256, 1);
  }

  // Horizontal variation
  for (let x = 0; x < 256; x += 4) {
    const alpha = Math.random() * 0.02;
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.fillRect(x, 0, 4, 128);
  }

  return new THREE.CanvasTexture(canvas);
}

// ============ ORBIT RING ============

function createOrbitRing(radius, color, opacity) {
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    ));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity: opacity || 0.1
  });
  return new THREE.LineLoop(geometry, material);
}

// ============ SUN ============

function createSun() {
  sunGroup = new THREE.Group();

  // Sun mesh
  const material = new THREE.MeshBasicMaterial({
    color: 0xffd700
  });
  sunMesh = new THREE.Mesh(sunGeometry, material);
  sunMesh.userData = { type: 'sun' };
  sunGroup.add(sunMesh);

  // Inner warm glow
  sunGlow = createGlowSprite('#ffd700', 20, 0.6);
  sunGroup.add(sunGlow);

  // Outer soft glow
  const outerGlow = createGlowSprite('#ff9500', 35, 0.15);
  sunGroup.add(outerGlow);
  sunGroup.userData.outerGlow = outerGlow;

  // Point light
  const light = new THREE.PointLight(0xffd700, 1.8, 250, 1.5);
  light.userData.originalIntensity = 1.8;
  sunGroup.add(light);

  // Second softer warm light
  const light2 = new THREE.PointLight(0xff8800, 0.5, 150, 2);
  light2.userData.originalIntensity = 0.5;
  sunGroup.add(light2);

  scene.add(sunGroup);

  // Sun label
  const label = document.createElement('div');
  label.className = 'sun-label';
  label.innerHTML = `<span class="label-name">${i18n[currentLang].sunLabel}</span>`;
  $('#labels-container').appendChild(label);
  sunGroup.userData.label = label;
}

// ============ WORLDS ============

function createWorlds() {
  const orbitParams = [
    { radius: 20, speed: 0.046, tilt: 1.6, startAngle: 0.2 },
    { radius: 26, speed: 0.038, tilt: -1.3, startAngle: 1.3 },
    { radius: 33, speed: 0.032, tilt: 2.1, startAngle: 2.4 },
    { radius: 39, speed: 0.026, tilt: -0.9, startAngle: 3.5 },
    { radius: 45, speed: 0.021, tilt: 1.7, startAngle: 4.6 },
    { radius: 51, speed: 0.017, tilt: -1.4, startAngle: 5.7 }
  ];

  WORLDS.forEach((world, i) => {
    const params = orbitParams[i];
    const group = new THREE.Group();

    // Planet texture
    const texture = createPlanetTexture(world.color);

    // Planet mesh
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.65,
      metalness: 0.15,
      emissive: new THREE.Color(world.color),
      emissiveIntensity: 0.12
    });
    const mesh = new THREE.Mesh(worldGeometry, material);
    mesh.userData = { type: 'world', worldId: world.id };
    group.add(mesh);

    // Atmospheric glow
    const glow = createGlowSprite(world.color, 7, 0.35);
    group.add(glow);

    // Initial position
    const angle = params.startAngle;
    group.position.set(
      Math.cos(angle) * params.radius,
      Math.sin(angle * 0.5) * params.tilt,
      Math.sin(angle) * params.radius
    );

    // Orbit ring in main scene
    const ring = createOrbitRing(params.radius, world.color, 0.08);
    scene.add(ring);

    // Moon system (hidden initially)
    const moonGroup = new THREE.Group();
    moonGroup.visible = false;
    group.add(moonGroup);

    // World data object
    const world3D = {
      data: world,
      group: group,
      mesh: mesh,
      glow: glow,
      orbitRadius: params.radius,
      orbitSpeed: params.speed,
      orbitTilt: params.tilt,
      angle: angle,
      moons: [],
      moonGroup: moonGroup,
      label: null,
      orbitRing: ring,
      originalOpacity: 1,
      fadeTarget: 1
    };

    // Create moons
    createMoonsForWorld(world3D);

    // Create label
    const label = document.createElement('div');
    label.className = 'world-label';
    label.innerHTML = `
      <span class="label-name" style="color:${world.color}">${world.title[currentLang]}</span>
      <span class="label-sub">${world.subtitle[currentLang]}</span>
    `;
    $('#labels-container').appendChild(label);
    world3D.label = label;

    scene.add(group);
    worlds3D.push(world3D);
  });
}

// ============ MOONS ============

function createMoonsForWorld(world3D) {
  const projects = world3D.data.projects;
  const moonOrbitBase = 5;
  const moonOrbitSpacing = 2.2;

  projects.forEach((project, i) => {
    const orbitRadius = moonOrbitBase + i * moonOrbitSpacing;
    const orbitSpeed = 0.25 + Math.random() * 0.15;
    const startAngle = (i / projects.length) * Math.PI * 2 + Math.random() * 0.5;
    const orbitTilt = (Math.random() - 0.5) * 0.8;

    const moonGroupWrapper = new THREE.Group();

    // Moon sphere
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(project.color),
      roughness: 0.35,
      metalness: 0.25,
      emissive: new THREE.Color(project.color),
      emissiveIntensity: 0.15
    });
    const mesh = new THREE.Mesh(moonGeometry, material);
    mesh.userData = { type: 'moon', project: project, worldId: world3D.data.id };
    moonGroupWrapper.add(mesh);

    // Logo sprite
    const logoPath = PROJECT_LOGOS[project.id];
    if (logoPath) {
      textureLoader.load(logoPath, (texture) => {
        const spriteMaterial = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          depthTest: true,
          depthWrite: false,
          sizeAttenuation: true
        });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(0.85, 0.85, 1);
        moonGroupWrapper.add(sprite);
        moonGroupWrapper.userData.logoSprite = sprite;
      });
    }

    // Moon glow
    const glow = createGlowSprite(project.color, 2.5, 0.3);
    moonGroupWrapper.add(glow);

    // Position on orbit
    moonGroupWrapper.position.set(
      Math.cos(startAngle) * orbitRadius,
      Math.sin(startAngle * 1.3) * orbitTilt,
      Math.sin(startAngle) * orbitRadius
    );

    // Store orbit data
    moonGroupWrapper.userData.orbitRadius = orbitRadius;
    moonGroupWrapper.userData.orbitSpeed = orbitSpeed;
    moonGroupWrapper.userData.angle = startAngle;
    moonGroupWrapper.userData.orbitTilt = orbitTilt;
    moonGroupWrapper.userData.type = 'moon-group';
    moonGroupWrapper.userData.logoOffset = MOON_RADIUS * 1.05;

    // Moon orbit ring
    const moonRing = createOrbitRing(orbitRadius, project.color, 0.06);
    world3D.moonGroup.add(moonRing);

    world3D.moonGroup.add(moonGroupWrapper);

    // Moon label
    const label = document.createElement('div');
    label.className = 'moon-label';
    label.innerHTML = `<span class="label-name">${project.title[currentLang]}</span>`;
    label.style.display = 'none';
    $('#labels-container').appendChild(label);

    world3D.moons.push({
      group: moonGroupWrapper,
      mesh: mesh,
      glow: glow,
      data: project,
      label: label
    });
  });
}

// ============ INTERACTION ============

function setupEvents() {
  const pointerTarget = renderer.domElement;

  const setUIFocus = (enabled) => {
    isPointerOverUI = enabled;
    if (enabled) {
      document.body.classList.add('ui-focus');
    } else {
      document.body.classList.remove('ui-focus');
    }
  };

  $$('.overlay-panel, #brands-footer').forEach(el => {
    el.addEventListener('mouseenter', () => {
      uiFocusCount += 1;
      setUIFocus(true);
    });
    el.addEventListener('mouseleave', () => {
      uiFocusCount = Math.max(0, uiFocusCount - 1);
      setUIFocus(uiFocusCount > 0);
    });

    el.addEventListener('pointerdown', () => {
      uiFocusCount += 1;
      setUIFocus(true);
    });
    el.addEventListener('pointerup', () => {
      uiFocusCount = Math.max(0, uiFocusCount - 1);
      setUIFocus(uiFocusCount > 0);
    });
    el.addEventListener('pointercancel', () => {
      uiFocusCount = Math.max(0, uiFocusCount - 1);
      setUIFocus(uiFocusCount > 0);
    });
  });

  const setMouseFromEvent = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  pointerTarget.addEventListener('pointerdown', (e) => {
    if (isPointerOverUI) return;
    if (activePointerId !== null) return;
    activePointerId = e.pointerId;
    pointerDownPos = { x: e.clientX, y: e.clientY };
    pointerDownTime = performance.now();
    isDragging = false;
    setMouseFromEvent(e);
    updateHover();
    if (pointerTarget.setPointerCapture) {
      pointerTarget.setPointerCapture(e.pointerId);
    }
  });

  pointerTarget.addEventListener('pointermove', (e) => {
    if (activePointerId !== e.pointerId && activePointerId !== null) return;
    setMouseFromEvent(e);

    if (isPointerOverUI) {
      clearHover();
      return;
    }

    if (pointerDownPos) {
      const dx = e.clientX - pointerDownPos.x;
      const dy = e.clientY - pointerDownPos.y;
      const dragThreshold = e.pointerType === 'touch' ? 6 : 3;
      if (Math.abs(dx) > dragThreshold || Math.abs(dy) > dragThreshold) {
        isDragging = true;
      }
      if (isDragging) {
        if (currentView === 'main' && !cameraAnim.active) {
          mainCameraTheta -= dx * 0.004;
        } else if (currentView === 'world' && !cameraAnim.active) {
          worldCameraTheta -= dx * 0.004;
        }
        pointerDownPos = { x: e.clientX, y: e.clientY };
      }
    }

    updateHover();
  });

  pointerTarget.addEventListener('pointerup', (e) => {
    if (activePointerId !== e.pointerId && activePointerId !== null) return;
    setMouseFromEvent(e);
    const tapDuration = performance.now() - pointerDownTime;
    if (pointerDownPos && !isDragging && tapDuration < 350) {
      handleClick();
    }
    pointerDownPos = null;
    isDragging = false;
    activePointerId = null;
    if (pointerTarget.releasePointerCapture) {
      pointerTarget.releasePointerCapture(e.pointerId);
    }
  });

  pointerTarget.addEventListener('pointercancel', () => {
    pointerDownPos = null;
    isDragging = false;
    activePointerId = null;
    mouse.set(-999, -999);
    clearHover();
  });

  pointerTarget.addEventListener('pointerleave', () => {
    pointerDownPos = null;
    isDragging = false;
    activePointerId = null;
    mouse.set(-999, -999);
    clearHover();
  });

  window.addEventListener('pointermove', (e) => {
    if (activePointerId !== null) return;
    const x = e.clientX;
    const y = e.clientY;
    const uiElements = Array.from($$('.overlay-panel, #brands-footer'));
    const over = uiElements.some((el) => {
      const rect = el.getBoundingClientRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    });
    if (over !== isPointerOverUI) {
      isPointerOverUI = over;
      if (over) {
        document.body.classList.add('ui-focus');
      } else {
        document.body.classList.remove('ui-focus');
      }
    }
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = $('.modal.active');
      if (modal) {
        closeModal(modal);
      } else if (currentView === 'world') {
        exitWorld();
      }
    }
  });

  // Resize
  window.addEventListener('resize', onResize);

  // Back button
  $('#back-btn').addEventListener('click', () => {
    if (currentView === 'world') exitWorld();
  });

  // Logo → home
  $('#logo-link').addEventListener('click', (e) => {
    e.preventDefault();
    $$('.modal.active').forEach(m => closeModal(m));
    if (currentView === 'world') exitWorld();
  });

  // Language toggle
  $$('.lang-opt').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(el.dataset.lang);
    });
  });

  // Modal close buttons
  $$('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
  });

  // Modal backdrop click
  $$('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => closeModal(backdrop.closest('.modal')));
  });
}

function updateHover() {
  if (cameraAnim.active || currentView === 'transitioning' || isPointerOverUI) return;

  raycaster.setFromCamera(mouse, camera);

  let clickables = [];
  if (currentView === 'main') {
    clickables = worlds3D.map(w => w.mesh);
    clickables.push(sunMesh);
  } else if (currentView === 'world' && selectedWorld) {
    clickables = selectedWorld.moons.map(m => m.mesh);
  }

  const intersects = raycaster.intersectObjects(clickables);

  if (intersects.length > 0) {
    const obj = intersects[0].object;
    if (obj !== hoveredMesh) {
      hoveredMesh = obj;
      renderer.domElement.style.cursor = 'pointer';
    }
  } else {
    if (hoveredMesh) {
      hoveredMesh = null;
      renderer.domElement.style.cursor = 'default';
    }
  }
}

function clearHover() {
  if (hoveredMesh) {
    renderer.domElement.style.cursor = 'default';
    hoveredMesh = null;
  }
}

function handleClick() {
  if (cameraAnim.active || currentView === 'transitioning' || isPointerOverUI) return;

  raycaster.setFromCamera(mouse, camera);

  if (currentView === 'main') {
    // Check sun
    const sunHit = raycaster.intersectObject(sunMesh);
    if (sunHit.length > 0) {
      openAbout();
      return;
    }

    // Check worlds
    const worldMeshes = worlds3D.map(w => w.mesh);
    const worldHit = raycaster.intersectObjects(worldMeshes);
    if (worldHit.length > 0) {
      const worldId = worldHit[0].object.userData.worldId;
      enterWorld(worldId);
    }
  } else if (currentView === 'world' && selectedWorld) {
    const moonMeshes = selectedWorld.moons.map(m => m.mesh);
    const moonHit = raycaster.intersectObjects(moonMeshes);
    if (moonHit.length > 0) {
      const project = moonHit[0].object.userData.project;
      openProjectModal(project);
    }
  }
}

// ============ VIEW TRANSITIONS ============

function enterWorld(worldId) {
  const world3D = worlds3D.find(w => w.data.id === worldId);
  if (!world3D || cameraAnim.active) return;

  currentView = 'transitioning';
  selectedWorld = world3D;
  orbitsActive = false;
  clearHover();

  // Fade out main overlay
  $('#main-overlay').classList.remove('active');

  // Fade out other worlds
  worlds3D.forEach(w => {
    if (w !== world3D) {
      w.fadeTarget = 0;
      w.label.style.opacity = '0';
    } else {
      w.label.style.opacity = '0'; // Hide entering world label too
    }
    w.orbitRing.material.opacity = 0;
  });

  // Fade out sun
  sunMesh.material.opacity = 0;
  sunMesh.material.transparent = true;
  sunGlow.material.opacity = 0;
  sunGroup.userData.outerGlow.material.opacity = 0;
  sunGroup.userData.label.style.opacity = '0';
  sunGroup.children.forEach(child => {
    if (child.isPointLight) child.intensity = 0;
  });

  // Calculate camera target: must match the spherical formula in updateCamera for worldCameraTheta=0
  const worldPos = world3D.group.position.clone();
  worldCameraTheta = 0;
  const r = worldCameraRadius;
  const phi = worldCameraPhi;
  const camOffset = new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(worldCameraTheta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(worldCameraTheta)
  );
  const worldCenter = worldPos.clone().add(WORLD_VIEW_OFFSET);

  // Start camera animation
  cameraAnim.startPos.copy(camera.position);
  cameraAnim.targetPos.copy(worldCenter.clone().add(camOffset));
  cameraAnim.startLookAt.copy(currentLookAt);
  cameraAnim.targetLookAt.copy(worldCenter);
  cameraAnim.progress = 0;
  cameraAnim.duration = 2.0;
  cameraAnim.active = true;
  cameraAnim.onComplete = () => {
    currentView = 'world';

    // Show moons
    world3D.moonGroup.visible = true;

    // Show world overlay
    const lang = currentLang;
    $('#world-name').textContent = world3D.data.title[lang];
    $('#world-name').style.color = world3D.data.color;
    $('#world-description').textContent = world3D.data.description[lang];
    $('#world-instruction').textContent = i18n[lang].clickMoon;
    $('#back-btn-text').textContent = i18n[lang].backBtn;
    $('#world-overlay').classList.add('active');

    // Show moon labels
    world3D.moons.forEach(m => { m.label.style.display = ''; });
  };
}

function exitWorld() {
  if (!selectedWorld || cameraAnim.active) return;

  currentView = 'transitioning';
  clearHover();

  // Hide world overlay
  $('#world-overlay').classList.remove('active');

  // Hide moons
  selectedWorld.moonGroup.visible = false;
  selectedWorld.moons.forEach(m => { m.label.style.display = 'none'; });

  // Calculate target camera position for main view
  const targetTheta = mainCameraTheta;
  const targetPhi = mainCameraPhi;
  const r = mainCameraRadius;
  const targetPos = new THREE.Vector3(
    r * Math.sin(targetPhi) * Math.cos(targetTheta),
    r * Math.cos(targetPhi),
    r * Math.sin(targetPhi) * Math.sin(targetTheta)
  ).add(MAIN_VIEW_OFFSET);

  // Start camera animation
  cameraAnim.startPos.copy(camera.position);
  cameraAnim.targetPos.copy(targetPos);
  cameraAnim.startLookAt.copy(currentLookAt);
  cameraAnim.targetLookAt.copy(MAIN_VIEW_OFFSET);
  cameraAnim.progress = 0;
  cameraAnim.duration = 1.8;
  cameraAnim.active = true;
  cameraAnim.onComplete = () => {
    currentView = 'main';
    selectedWorld = null;
    orbitsActive = true;

    // Restore worlds
    worlds3D.forEach(w => {
      w.fadeTarget = 1;
      w.label.style.opacity = '1';
      w.orbitRing.material.opacity = 0.08;
    });

    // Restore sun
    sunMesh.material.opacity = 1;
    sunMesh.material.transparent = false;
    sunGlow.material.opacity = 1;
    sunGroup.userData.outerGlow.material.opacity = 1;
    sunGroup.userData.label.style.opacity = '1';
    sunGroup.children.forEach(child => {
      if (child.isPointLight) {
        child.intensity = child.userData.originalIntensity || 1;
      }
    });

    // Show main overlay
    $('#main-overlay').classList.add('active');
  };
}

// ============ MODALS ============

function openProjectModal(project) {
  const modal = $('#project-modal');
  const lang = currentLang;

  $('#modal-accent').style.backgroundColor = project.color;
  const modalLogo = $('#modal-logo');
  modalLogo.src = PROJECT_LOGOS[project.id] || '';
  modalLogo.alt = `${project.title[lang]} logo`;
  $('#modal-title').textContent = project.title[lang];
  $('#modal-desc').textContent = project.desc[lang];

  const link = $('#modal-link');
  const nolink = $('#modal-nolink');

  if (project.url) {
    link.href = project.url;
    link.style.display = '';
    $('#modal-visit-text').textContent = i18n[lang].visitBtn;
    nolink.style.display = 'none';
  } else {
    link.style.display = 'none';
    nolink.style.display = '';
    nolink.textContent = i18n[lang].noLink;
  }

  modal.classList.add('active');
}

function openAbout() {
  const lang = currentLang;

  $('#about-tagline').textContent = i18n[lang].aboutTagline;
  $('#about-bio').textContent = i18n[lang].aboutBio;

  const stats = [
    { value: 'PhD', label: i18n[lang].statPhd },
    { value: '15+', label: i18n[lang].statPubs },
    { value: '8+', label: i18n[lang].statLangs },
    { value: '5+', label: i18n[lang].statAwards }
  ];
  $('#about-stats').innerHTML = stats.map(s => `
    <div class="stat">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');

  $('#about-modal').classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
}

// ============ LANGUAGE ============

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Update toggle UI
  $$('.lang-opt').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  // Update main overlay
  $('#hero-name').textContent = i18n[lang].heroName;
  $('#hero-tagline').textContent = i18n[lang].heroTagline;
  $('#hero-desc').textContent = i18n[lang].heroDesc;
  $('#brands-label').textContent = i18n[lang].brandsLabel;

  // Update world overlay if active
  if (selectedWorld) {
    $('#world-name').textContent = selectedWorld.data.title[lang];
    $('#world-description').textContent = selectedWorld.data.description[lang];
    $('#world-instruction').textContent = i18n[lang].clickMoon;
    $('#back-btn-text').textContent = i18n[lang].backBtn;
  }

  // Update world labels
  worlds3D.forEach(w => {
    w.label.querySelector('.label-name').textContent = w.data.title[lang];
    w.label.querySelector('.label-sub').textContent = w.data.subtitle[lang];

    // Moon labels
    w.moons.forEach(m => {
      m.label.querySelector('.label-name').textContent = m.data.title[lang];
    });
  });

  // Sun label
  if (sunGroup && sunGroup.userData.label) {
    sunGroup.userData.label.querySelector('.label-name').textContent = i18n[lang].sunLabel;
  }
}

// ============ LABEL POSITIONING ============

function updateLabels() {
  const halfW = window.innerWidth / 2;
  const halfH = window.innerHeight / 2;

  // Sun label
  if (sunGroup && sunGroup.userData.label) {
    const sunLabel = sunGroup.userData.label;
    if (currentView === 'main' || currentView === 'transitioning') {
      const pos = new THREE.Vector3(0, -5.5, 0);
      pos.project(camera);
      if (pos.z < 1) {
        const x = pos.x * halfW + halfW;
        const y = -pos.y * halfH + halfH;
        sunLabel.style.left = x + 'px';
        sunLabel.style.top = y + 'px';
        sunLabel.style.display = currentView === 'main' ? '' : 'none';
      } else {
        sunLabel.style.display = 'none';
      }
    } else {
      sunLabel.style.display = 'none';
    }
  }

  // World labels
  worlds3D.forEach(world => {
    if (!world.label) return;

    if (currentView === 'main') {
      const pos = world.group.position.clone();
      pos.y -= 3.5;
      pos.project(camera);
      if (pos.z < 1) {
        const x = pos.x * halfW + halfW;
        const y = -pos.y * halfH + halfH;
        world.label.style.left = x + 'px';
        world.label.style.top = y + 'px';
        world.label.style.display = '';
      } else {
        world.label.style.display = 'none';
      }
    } else {
      world.label.style.display = 'none';
    }
  });

  // Moon labels
  if ((currentView === 'world') && selectedWorld) {
    selectedWorld.moons.forEach(moon => {
      if (!moon.label) return;
      const worldPos = new THREE.Vector3();
      moon.group.getWorldPosition(worldPos);
      worldPos.y -= 1.5;
      worldPos.project(camera);

      if (worldPos.z < 1) {
        const x = worldPos.x * halfW + halfW;
        const y = -worldPos.y * halfH + halfH;
        moon.label.style.left = x + 'px';
        moon.label.style.top = y + 'px';
        moon.label.style.display = '';
      } else {
        moon.label.style.display = 'none';
      }
    });
  }
}

// ============ UPDATE FUNCTIONS ============

function updateOrbits(delta) {
  // World orbits
  if (orbitsActive) {
    worlds3D.forEach(world => {
      world.angle += world.orbitSpeed * delta;
      world.group.position.x = Math.cos(world.angle) * world.orbitRadius;
      world.group.position.z = Math.sin(world.angle) * world.orbitRadius;
      world.group.position.y = Math.sin(world.angle * 0.7) * world.orbitTilt;

      // Slow self-rotation
      world.mesh.rotation.y += delta * 0.15;
    });
  }

  // Moon orbits
  if (selectedWorld && selectedWorld.moonGroup.visible) {
    selectedWorld.moons.forEach(moon => {
      const ud = moon.group.userData;
      ud.angle += ud.orbitSpeed * delta;
      moon.group.position.x = Math.cos(ud.angle) * ud.orbitRadius;
      moon.group.position.z = Math.sin(ud.angle) * ud.orbitRadius;
      moon.group.position.y = Math.sin(ud.angle * 1.3) * ud.orbitTilt;

      // Self-rotation
      moon.mesh.rotation.y += delta * 0.25;
    });
  }
}

function updateFading(delta) {
  worlds3D.forEach(w => {
    const current = w.mesh.material.opacity === undefined ? 1 : w.mesh.material.opacity;
    const target = w.fadeTarget;
    if (Math.abs(current - target) > 0.01) {
      const newVal = current + (target - current) * Math.min(1, delta * 3);
      w.mesh.material.transparent = newVal < 0.99;
      w.mesh.material.opacity = newVal;
      w.glow.material.opacity = newVal;
      w.group.visible = newVal > 0.01;
    }
  });
}

function updateSun(time, delta) {
  if (!sunMesh) return;

  // Gentle pulsing
  const pulse = 1 + Math.sin(time * 1.5) * 0.025;
  sunMesh.scale.set(pulse, pulse, pulse);

  const glowPulse = 1 + Math.sin(time * 1.2) * 0.05;
  sunGlow.scale.set(20 * glowPulse, 20 * glowPulse, 1);

  // Slow rotation
  sunMesh.rotation.y += delta * 0.08;
  sunMesh.rotation.x += delta * 0.03;
}

function updateCamera(delta) {
  if (cameraAnim.active) {
    // Animated transition
    cameraAnim.progress += delta / cameraAnim.duration;
    const t = Math.min(1, cameraAnim.progress);
    const et = easeInOutCubic(t);

    camera.position.lerpVectors(cameraAnim.startPos, cameraAnim.targetPos, et);
    currentLookAt.lerpVectors(cameraAnim.startLookAt, cameraAnim.targetLookAt, et);
    camera.lookAt(currentLookAt);

    if (t >= 1) {
      cameraAnim.active = false;
      if (cameraAnim.onComplete) cameraAnim.onComplete();
    }
    return;
  }

  if (currentView === 'main') {
    // Auto-rotate slowly
    mainCameraTheta += delta * 0.04;

    const r = mainCameraRadius;
    const phi = mainCameraPhi;
    camera.position.x = r * Math.sin(phi) * Math.cos(mainCameraTheta) + MAIN_VIEW_OFFSET.x;
    camera.position.y = r * Math.cos(phi) + MAIN_VIEW_OFFSET.y;
    camera.position.z = r * Math.sin(phi) * Math.sin(mainCameraTheta) + MAIN_VIEW_OFFSET.z;
    currentLookAt.copy(MAIN_VIEW_OFFSET);
    camera.lookAt(currentLookAt);
  } else if (currentView === 'world' && selectedWorld) {
    // Orbit around selected world
    worldCameraTheta += delta * 0.08;

    const worldPos = selectedWorld.group.position;
    const worldCenter = worldPos.clone().add(WORLD_VIEW_OFFSET);
    const r = worldCameraRadius;
    const phi = worldCameraPhi;

    camera.position.x = worldCenter.x + r * Math.sin(phi) * Math.cos(worldCameraTheta);
    camera.position.y = worldCenter.y + r * Math.cos(phi);
    camera.position.z = worldCenter.z + r * Math.sin(phi) * Math.sin(worldCameraTheta);

    currentLookAt.copy(worldCenter);
    camera.lookAt(currentLookAt);
  }
}

function updateHoverAnimation(delta) {
  // Smooth scale interpolation for all world meshes
  worlds3D.forEach(w => {
    const target = (hoveredMesh === w.mesh) ? 1.15 : 1;
    const current = w.group.scale.x;
    const newScale = current + (target - current) * Math.min(1, delta * 8);
    w.group.scale.setScalar(newScale);
  });

  // Moon hover
  if (selectedWorld) {
    selectedWorld.moons.forEach(m => {
      const target = (hoveredMesh === m.mesh) ? 1.2 : 1;
      const current = m.group.scale.x;
      const newScale = current + (target - current) * Math.min(1, delta * 8);
      m.group.scale.setScalar(newScale);
    });
  }

  // Sun hover
  if (sunGroup) {
    const target = (hoveredMesh === sunMesh) ? 1.1 : 1;
    const current = sunGroup.scale.x;
    const s = current + (target - current) * Math.min(1, delta * 8);
    sunGroup.scale.setScalar(s);
  }
}

function updateMoonLogos() {
  if (!selectedWorld || !selectedWorld.moonGroup.visible) return;

  selectedWorld.moons.forEach(moon => {
    const sprite = moon.group.userData.logoSprite;
    if (!sprite) return;

    const moonPos = new THREE.Vector3();
    moon.group.getWorldPosition(moonPos);
    const dir = camera.position.clone().sub(moonPos).normalize();
    const offset = dir.multiplyScalar(moon.group.userData.logoOffset || MOON_RADIUS * 1.05);
    sprite.position.copy(offset);
  });
}

// ============ RESIZE ============

function onResize() {
  updateLayoutTargets();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  if (starsRenderer) {
    starsRenderer.setSize(window.innerWidth, window.innerHeight);
    starsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}

// ============ ANIMATION LOOP ============

function animate() {
  requestAnimationFrame(animate);

  const delta = Math.min(clock.getDelta(), 0.1);
  const time = clock.elapsedTime;

  updateOrbits(delta);
  updateFading(delta);
  updateSun(time, delta);
  updateCamera(delta);
  updateHoverAnimation(delta);
  updateMoonLogos();
  updateLabels();

  // Slow star rotation
  if (starField) {
    starField.rotation.y += delta * 0.003;
  }

  if (starsRenderer && starsScene) {
    starsRenderer.render(starsScene, camera);
  }
  renderer.render(scene, camera);
}

// ============ INIT ============

function init() {
  createScene();
  updateLayoutTargets();
  createLights();
  createStars();
  createSun();
  createWorlds();
  setupEvents();

  mainCameraTheta += MAIN_START_OFFSET;

  // Start animation loop
  animate();

  // Set default language
  setLanguage('en');

  // Hide loading screen after a short delay
  setTimeout(() => {
    const loading = $('#loading');
    loading.classList.add('hidden');
    setTimeout(() => { loading.style.display = 'none'; }, 800);
  }, 800);
}

document.addEventListener('DOMContentLoaded', init);
