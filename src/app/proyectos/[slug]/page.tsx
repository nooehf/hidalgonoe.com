import React from "react";
import { notFound } from "next/navigation";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";
import { Check, ArrowLeft, Calendar, User, Eye } from "lucide-react";
import Link from "next/link";

interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  client: string;
  date: string;
  role: string;
  tags: string[];
  bannerBg: string;
  bannerBorder: string;
  tagline: string;
  liveUrl?: string;
  githubUrl?: string;
  inDevelopment?: boolean;
  
  problemText: string;
  problemDetails: string[];
  
  solutionText: string;
  solutionDetails: string[];
  
  resultText: string;
  resultStats: { label: string; value: string }[];
  resultDetails: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  energialeon: {
    slug: "energialeon",
    name: "ENERGÍA LEÓN",
    category: "Asesoría Energética & Digitalización",
    client: "Asesoría Energética León",
    date: "Marzo 2026",
    role: "Diseño Web & Automatización de Negocio",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Google Workspace", "CRM Integration", "SEO"],
    bannerBg: "bg-[#0d2a1b]",
    bannerBorder: "border-emerald-900/20",
    tagline: "Diseño web, configuración de correos corporativos e integración automatizada de cuestionario con CRM y Google Workspace.",
    liveUrl: "https://energialeon.com",
    
    problemText: "Asesoría Energética León necesitaba dar el salto al canal digital para captar clientes en España. Su flujo de trabajo diario era 100% manual: recibían facturas, anotaban datos en papel y analizaban los consumos de luz y gas uno a uno. El reto principal era crear una plataforma que automatizara la captación, recopilara la información de los clientes de forma estructurada y los posicionara localmente frente a competidores en buscadores.",
    problemDetails: [
      "Proceso de análisis manual propenso a errores al transcribir datos de consumo.",
      "Inexistencia de presencia digital corporativa, dominio propio o correos profesionales.",
      "Dificultad para recibir, organizar y archivar facturas de luz/gas enviadas por clientes."
    ],
    
    solutionText: "Diseñé y desarrollé un sitio web de alto rendimiento centrado en la conversión. Implementé un cuestionario interactivo optimizado para que los clientes adjunten sus datos de consumo de forma muy intuitiva. Conecté este formulario mediante automatizaciones directamente con el CRM y el entorno de Google Workspace (Google Drive/Sheets) del asesor para que cada solicitud entrante cree una ficha estructurada automáticamente. Además, configuré la infraestructura de dominios, emails corporativos y ejecuté una estrategia de SEO local localizando palabras clave altamente competitivas.",
    solutionDetails: [
      "Creación de un cuestionario digital paso a paso con validaciones en tiempo real.",
      "Automatización mediante conexiones webhooks para enviar respuestas al CRM y almacenar facturas en Google Drive.",
      "Optimización técnica de velocidad, metaetiquetas estructuradas y SEO On-Page local."
    ],
    
    resultText: "La integración digital transformó radicalmente la operativa diaria del negocio, liberando más de la mitad del tiempo de trabajo administrativo y automatizando el flujo de entrada de clientes. La web logró posicionarse de forma consistente en el Top 3 de los resultados locales de búsqueda en Google.",
    resultStats: [
      { label: "Posición en Google", value: "Top 3" },
      { label: "Tiempo Administrativo", value: "-60%" },
      { label: "Sistemas Conectados", value: "3" }
    ],
    resultDetails: [
      "Automatización total del 100% de las solicitudes entrantes directo al CRM.",
      "Configuración profesional de la identidad digital (emails corporativos con entregabilidad optimizada).",
      "Ahorro masivo de tiempo operativo y unificación del canal de comunicación con el cliente."
    ]
  },
  mylocalcommerce: {
    slug: "mylocalcommerce",
    name: "MY LOCAL COMMERCE",
    category: "Comunidad de Negocios (En Obras)",
    client: "Comercios locales",
    date: "En Desarrollo",
    role: "Arquitectura de Software & UI",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Fidelización", "Reservas", "Gestión Stock"],
    bannerBg: "bg-[#0c1524]",
    bannerBorder: "border-slate-900/20",
    tagline: "Construyendo una plataforma comunitaria para digitalizar comercios de barrio mediante programas de fidelización, reservas de servicios y gestión de stocks y clientes. (Proyecto en Obras).",
    inDevelopment: true,
    
    problemText: "El pequeño comercio de barrio compite en desventaja frente a las grandes plataformas globales, careciendo de herramientas sencillas de fidelización y reservas integradas. Para solucionar esto, estoy desarrollando un software comunitario que unifica los negocios locales bajo una sola plataforma. No es un e-commerce o tienda online convencional, sino un ecosistema donde los comercios gestionan su stock, reservas de servicios y clientes, permitiendo además a los usuarios acumular puntos y reservar en tiempo real.",
    problemDetails: [
      "Ausencia de sistemas locales de fidelización por puntos que incentiven el consumo de barrio repetido.",
      "Dificultad de los comercios pequeños para gestionar reservas y stock sin sistemas complejos e individuales.",
      "Necesidad de agrupar y digitalizar negocios locales bajo una comunidad interactiva y colaborativa."
    ],
    
    solutionText: "Estoy diseñando e implementando la arquitectura técnica y el frontend de la plataforma con Next.js, Tailwind CSS y TypeScript. El software ofrece dos áreas diferenciadas: un panel de administración para el comerciante (donde controla el stock en tiempo real, gestiona reservas y visualiza su cartera de clientes - CRM) y una interfaz intuitiva para el cliente final (donde descubre locales cercanos, agenda reservas de citas o servicios en su calendario y consulta su monedero de puntos de fidelización acumulados por reservar). Actualmente, el backend y la lógica de fidelización se encuentran en fase de desarrollo activo.",
    solutionDetails: [
      "Modelado y desarrollo en tiempo real de la billetera digital de fidelización y asignación de puntos.",
      "Diseño de calendarios y flujos para agendar reservas de citas o servicios directamente con el local.",
      "Estructuración del panel de administración del comercio para el control de inventario de stock y clientes."
    ],
    
    resultText: "El software está avanzando en su desarrollo a paso firme. La meta es consolidar una base modular ultra-rápida y limpia para integrar bases de datos distribuidas y pasarelas de canjes, ofreciendo a los comercios una herramienta de nivel profesional.",
    resultStats: [
      { label: "Estado actual", value: "En Obras" },
      { label: "Módulos Lógicos", value: "4" },
      { label: "Fase del Código", value: "Alpha" }
    ],
    resultDetails: [
      "Maquetado modular en progreso de la interfaz de cliente final e interacciones iniciales.",
      "Lógica de asignación de puntos y modelado de reservas/stock en construcción activa.",
      "Repositorio abierto en GitHub para asegurar un seguimiento público y transparente de los avances."
    ]
  },
  aura: {
    slug: "aura",
    name: "AURA",
    category: "Luxury E-Commerce Mockup",
    client: "Proyecto de Aprendizaje",
    date: "Noviembre 2025",
    role: "Diseño UX/UI & Desarrollo",
    tags: ["Next.js", "Shopify API", "GraphQL", "Tailwind CSS", "Framer Motion"],
    bannerBg: "bg-[#f5f2eb]",
    bannerBorder: "border-brand-dark/10",
    tagline: "Un e-commerce headless de alta moda creado para experimentar con transiciones fluidas de imágenes y navegación líquida.",
    
    problemText: "Me apasiona la moda y el diseño editorial. Quería comprobar si era posible crear un sitio web de comercio electrónico que se sintiera tan elegante y fluido como hojear una revista física. Las plantillas web tradicionales suelen ser rígidas y lentas, y quería retarme a lograr transiciones sin cortes visuales.",
    problemDetails: [
      "Reto de evitar saltos de pantalla bruscos al navegar entre productos.",
      "Búsqueda de una estética visual limpia y asimétrica de alto nivel.",
      "Optimización de imágenes pesadas de alta calidad sin perder resolución."
    ],
    
    solutionText: "Propuse una arquitectura de frontend independiente conectada a la API de Shopify mediante GraphQL. Diseñé transiciones de página dinámicas usando Framer Motion para que el usuario sienta una navegación continua, logrando que las imágenes se muevan suavemente de una vista a otra al seleccionarlas.",
    solutionDetails: [
      "Uso de animaciones de diseño compartido (Shared Layout) entre listas y detalles.",
      "Implementación de pre-carga inteligente para que las páginas de producto carguen al instante.",
      "Layout minimalista refinado con tipografías proporcionales y amplio espacio."
    ],
    
    resultText: "Logré crear un prototipo funcional precioso que se siente alive. Es el ejemplo ideal de cómo el diseño y el código pueden unirse para crear una experiencia memorable.",
    resultStats: [
      { label: "Transición de Páginas", value: "180 ms" },
      { label: "Tiempo de Carga", value: "<0.3s" },
      { label: "Optimización Visual", value: "100%" }
    ],
    resultDetails: [
      "Navegación instantánea eliminando esperas y pantallas en blanco.",
      "Puntuación perfecta de rendimiento en dispositivos móviles.",
      "Dominio práctico en la maquetación de layouts de alta gama estética."
    ]
  },
  pulse: {
    slug: "pulse",
    name: "PULSE",
    category: "Design System Experiment",
    client: "Investigación Personal",
    date: "Agosto 2025",
    role: "Diseño & Accesibilidad",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion"],
    bannerBg: "bg-[#18181b]",
    bannerBorder: "border-white/10",
    tagline: "Creación de un kit de componentes modulares y estructurados enfocado en la accesibilidad web (WCAG).",
    
    problemText: "Quería entender a fondo cómo las agencias y equipos de desarrollo profesional construyen sus librerías de componentes internos para mantener la coherencia en sus proyectos. Además, quería investigar cómo hacer que un panel de control interactivo fuera realmente accesible para usuarios que navegan bajo condiciones especiales.",
    problemDetails: [
      "Falta de coherencia visual al diseñar componentes de interfaz de forma aislada.",
      "Reto de integrar soporte de navegación fluido por teclado sin usar ratón.",
      "Investigar y cumplir normativas de contraste de color y lectores de pantalla."
    ],
    
    solutionText: "Construí 'Pulse UI', un conjunto de componentes reutilizables (botones, modales, alertas y menús) usando Tailwind CSS. Documenté todos los estados en Storybook e implementé patrones semánticos rigurosos de accesibilidad, asegurando un contraste perfecto y total usabilidad de teclado.",
    solutionDetails: [
      "Desarrollo modular de bloques tipados con TypeScript.",
      "Integración de pruebas visuales y documentación interactiva de interfaz.",
      "Optimización de animaciones de retroalimentación sutil para el usuario."
    ],
    
    resultText: "Un kit de componentes modular sumamente consistente que ahora utilizo como base sólida para acelerar el desarrollo de todas mis nuevas páginas web.",
    resultStats: [
      { label: "Componentes Creados", value: "25+" },
      { label: "Soporte de Teclado", value: "100%" },
      { label: "Normas WCAG AA", value: "Cumplidas" }
    ],
    resultDetails: [
      "Estructuración de componentes fáciles de reutilizar en múltiples proyectos.",
      "Accesibilidad nativa integrada desde el primer día.",
      "Flujo de trabajo unificado y limpio para maquetaciones veloces."
    ]
  }
};

export async function generateStaticParams() {
  return [
    { slug: "energialeon" },
    { slug: "mylocalcommerce" },
    { slug: "aura" },
    { slug: "pulse" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProyectoDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudies[slug];

  if (!project) {
    notFound();
  }

  const isLight = project.bannerBg === "bg-[#f5f2eb]";

  return (
    <Container className="space-y-16 md:space-y-24">
      {/* Back to projects & Header link */}
      <div className="pt-4">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-text transition-colors font-display"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Proyectos</span>
        </Link>
      </div>

      {/* Hero Showcase Block */}
      <section>
        <TransitionView yOffset={30}>
          <div
            className={`${project.bannerBg} ${
              isLight ? "text-brand-text" : "text-white"
            } border ${
              project.bannerBorder
            } p-6 sm:p-16 lg:p-24 aspect-[1.1/1] sm:aspect-[16/9] md:aspect-[21/9] flex flex-col justify-between relative overflow-hidden select-none`}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-display text-xs tracking-widest uppercase opacity-60">
                PROYECTO DETALLADO
              </span>
              <span className="font-display text-xs tracking-wider border border-current/20 px-2.5 py-0.5 rounded-full uppercase">
                {project.category}
              </span>
            </div>

            <div className="relative z-10 py-4 sm:py-0">
              <h1 className="font-display text-3xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-none">
                {project.name}.
              </h1>
              <p className="text-xs sm:text-lg max-w-xl opacity-80 leading-relaxed font-sans text-pretty">
                {project.tagline}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-between items-end gap-4 w-full border-t border-current/10 pt-6">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono opacity-60">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> {project.role}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {project.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono border border-current/20 px-2.5 py-0.5"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TransitionView>
      </section>

      {/* Case Study Desglose Editorial */}
      {project.inDevelopment && (
        <TransitionView yOffset={20}>
          <div className="bg-brand-dark/3 border border-brand-dark/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-none mb-12">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-500 text-[10px] font-mono font-semibold uppercase tracking-wider rounded-none mb-1">
                Proyecto en Construcción
              </span>
              <h4 className="font-display text-base font-bold text-brand-text">
                Este software se encuentra actualmente en fase activa de desarrollo.
              </h4>
              <p className="text-xs text-brand-muted font-sans leading-relaxed max-w-2xl text-pretty">
                Estoy construyendo y afinando los módulos de reservas de servicios, gestión de stock, clientes (CRM) y programas de fidelización por puntos. El repositorio se actualiza constantemente a medida que avanzo la lógica y el backend.
              </p>
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-tight border border-brand-text bg-brand-text text-brand-bg px-4 py-2 hover:bg-transparent hover:text-brand-text transition-all duration-300 rounded-none uppercase"
              >
                Ver Código en GitHub →
              </a>
            )}
          </div>
        </TransitionView>
      )}

      {/* Case Study Desglose Editorial */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-4">
        {/* Left Column: Problem & Solution (Editorial focus) */}
        <div className="lg:col-span-8 space-y-16">
          {/* El Reto */}
          <TransitionView yOffset={20} className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text border-b border-brand-border pb-3">
              El Reto del Proyecto
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans leading-relaxed text-pretty">
              {project.problemText}
            </p>
            <ul className="space-y-3 pt-2">
              {project.problemDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-muted font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </TransitionView>

          {/* Cómo lo hice */}
          <TransitionView yOffset={20} className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text border-b border-brand-border pb-3">
              Cómo lo Desarrollé
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans leading-relaxed text-pretty">
              {project.solutionText}
            </p>
            <ul className="space-y-3 pt-2">
              {project.solutionDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-muted font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </TransitionView>
        </div>

        {/* Right Column: Results and Stats Sidebar */}
        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 h-fit">
          <TransitionView yOffset={20} className="bg-brand-dark/3 border border-brand-dark/5 p-8 space-y-8">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-brand-text">
              Resultados
            </h2>
            
            {/* Stats Block */}
            <div className="grid grid-cols-1 gap-6 divide-y divide-brand-border">
              {project.resultStats.map((stat, idx) => (
                <div key={idx} className={`${idx > 0 ? "pt-5" : ""} space-y-1`}>
                  <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-text leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="pt-6 border-t border-brand-border/40 flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center font-display text-xs sm:text-sm font-semibold tracking-tight bg-brand-text text-brand-bg px-6 py-3 hover:bg-transparent hover:text-brand-text border border-brand-text transition-all duration-300 rounded-none uppercase"
                  >
                    Visitar Sitio Web
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center font-display text-xs sm:text-sm font-semibold tracking-tight bg-transparent text-brand-text hover:bg-brand-text hover:text-brand-bg px-6 py-3 border border-brand-text transition-all duration-300 rounded-none uppercase"
                  >
                    Ver Código en GitHub
                  </a>
                )}
              </div>
            )}
          </TransitionView>

          {/* Impact summary list */}
          <TransitionView yOffset={20} delay={0.1} className="space-y-4 px-2">
            <h3 className="font-display text-sm font-bold text-brand-text">
              Logros & Conclusiones
            </h3>
            <ul className="space-y-3.5">
              {project.resultDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-muted font-sans leading-relaxed">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </TransitionView>
        </div>
      </section>

      {/* Case Studies Navigation bar */}
      <section className="border-t border-brand-border pt-16 mt-16 flex flex-col sm:flex-row justify-between items-center gap-6">
        <TransitionView yOffset={10}>
          <Link
            href="/proyectos"
            className="group inline-flex items-center gap-2 font-display text-sm text-brand-muted hover:text-brand-text transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver al Portafolio</span>
          </Link>
        </TransitionView>
        <TransitionView yOffset={10} delay={0.1}>
          <Button href="/contacto" variant="primary" showArrow>
            Hablemos de tu idea
          </Button>
        </TransitionView>
      </section>
    </Container>
  );
}
