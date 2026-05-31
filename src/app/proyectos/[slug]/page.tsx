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
  
  problemText: string;
  problemDetails: string[];
  
  solutionText: string;
  solutionDetails: string[];
  
  resultText: string;
  resultStats: { label: string; value: string }[];
  resultDetails: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  zenith: {
    slug: "zenith",
    name: "ZENITH",
    category: "Fintech Interface Design",
    client: "Caso de Estudio Personal",
    date: "Enero 2026",
    role: "Diseño & Programación Frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    bannerBg: "bg-[#0b0f19]",
    bannerBorder: "border-white/10",
    tagline: "Rediseño visual y técnico de un panel analítico interactivo con flujo de datos simulados.",
    
    problemText: "Me propuse el reto personal de construir un panel interactivo complejo. Quería entender de forma práctica cómo los programadores profesionales optimizan el procesamiento de flujos pesados de información en la web sin congelar la pantalla ni bloquear el navegador debido a códigos JS masivos.",
    problemDetails: [
      "Reto de cargar gráficos interactivos detallados de forma rápida y responsive.",
      "Necesidad de mantener la UI fluida al renderizar simulaciones continuas.",
      "Aprender a organizar componentes dinámicos en una jerarquía limpia."
    ],
    
    solutionText: "Estructuré el proyecto en Next.js usando Server Components para minimizar el peso inicial del código. Investigué cómo usar la carga diferida (lazy loading) e implementé la renderización asíncrona de gráficos interactivos, permitiendo que la interfaz cargue instantáneamente y los datos aparezcan con animaciones de entrada suaves.",
    solutionDetails: [
      "Estructuración de componentes de servidor para reducir el bundle inicial.",
      "Uso de librerías de gráficos ligeras y modularizadas.",
      "Diseño de un tema visual de alto contraste minimalista y sofisticado."
    ],
    
    resultText: "Este proyecto me brindó una profunda comprensión sobre el rendimiento web y la optimización en Next.js. El panel se siente increíblemente rápido al navegar.",
    resultStats: [
      { label: "Código de Carga Inicial", value: "80 KB" },
      { label: "Tiempo de Respuesta UI", value: "0.8 s" },
      { label: "Puntuación Lighthouse", value: "100" }
    ],
    resultDetails: [
      "Optimización extrema de componentes reduciendo el peso de carga inicial.",
      "Puntuación técnica perfecta en los reportes de rendimiento de Lighthouse.",
      "Aprendizaje práctico sobre flujos de estado dinámicos."
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
      { label: "Rendimiento Móvil", value: "100/100" },
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
    { slug: "zenith" },
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
            } p-8 sm:p-16 lg:p-24 aspect-[21/9] flex flex-col justify-between relative overflow-hidden select-none`}
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

            <div className="relative z-10 py-6 sm:py-0">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-none">
                {project.name}.
              </h1>
              <p className="text-sm sm:text-lg max-w-xl opacity-80 leading-relaxed font-sans text-pretty">
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
              Resultados de Aprendizaje
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
