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
    category: "Fintech SaaS Platform",
    client: "Zenith Inc.",
    date: "Enero 2026",
    role: "Consultor Frontend Principal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    bannerBg: "bg-[#0b0f19]",
    bannerBorder: "border-white/10",
    tagline: "Rearquitectura técnica y rediseño de interfaz para una plataforma líder de analítica predictiva en tiempo real.",
    
    problemText: "El panel de control anterior de Zenith estaba construido sobre una arquitectura SPA monolítica envejecida. La hidratación del cliente tardaba más de 4.5 segundos debido a un bundle de JS de 12MB. Los gráficos interactivos procesaban miles de registros financieros en tiempo real directamente en el hilo principal del navegador, bloqueando la UI y frustrando a los analistas financieros de fondos de inversión corporativos.",
    problemDetails: [
      "Tiempo de carga inicial del panel de control de 4.8s en conexiones estándar.",
      "Cuello de botella de renderizado en gráficos debido a procesamiento masivo de JSON en el cliente.",
      "Inconsistencias visuales severas y falta de adaptabilidad responsiva en pantallas de menor tamaño."
    ],
    
    solutionText: "Estructuramos una migración progresiva hacia Next.js App Router (RSC). Implementamos streaming de datos en el servidor y bloques Suspense para renderizar el esqueleto del panel instantáneamente mientras las APIs financieras de fondo completaban su carga. Rediseñamos los gráficos interactivos usando librerías ligeras importadas de manera dinámica (lazy loading) solo cuando entraban en el viewport.",
    solutionDetails: [
      "Migración del 100% del núcleo de datos pesados al servidor para eliminar el bundle innecesario.",
      "Optimización y compresión de componentes de gráficos y uso de Web Workers para la computación analítica compleja.",
      "Establecimiento de un sistema de variables CSS dinámicas para un tema de alto contraste sutil y refinado."
    ],
    
    resultText: "La nueva arquitectura transformó por completo la experiencia de usuario y redujo drásticamente el consumo de recursos del cliente. Los Web Vitals pasaron de un rango mediocre a excelentes métricas estables.",
    resultStats: [
      { label: "Bundle Size Inicial", value: "80 KB" },
      { label: "Time to Interactive", value: "0.8 s" },
      { label: "Retención de Usuarios", value: "+35%" }
    ],
    resultDetails: [
      "Bundle size inicial reducido en un 99% (de 12MB a menos de 80KB).",
      "Puntuación perfecta del 100% en Lighthouse Performance en computadoras y móviles.",
      "Mejora del 40% en el rendimiento del renderizado en tiempo real de flujos de datos continuos."
    ]
  },
  aura: {
    slug: "aura",
    name: "AURA",
    category: "Luxury E-Commerce",
    client: "Aura Haute Couture",
    date: "Noviembre 2025",
    role: "Desarrollador Frontend Senior",
    tags: ["Next.js", "Shopify Buy SDK", "GraphQL", "Tailwind CSS", "Stripe"],
    bannerBg: "bg-[#f5f2eb]",
    bannerBorder: "border-brand-dark/10",
    tagline: "Diseño y desarrollo de una experiencia de compra de alta costura digital con navegación fluida y transiciones líquidas.",
    
    problemText: "Aura necesitaba trasladar la experiencia de exclusividad física de sus tiendas de moda a su plataforma web. Las plantillas predeterminadas de e-commerce convencionales se sentían rígidas, con tiempos de carga pesados entre páginas de productos que rompían el ambiente visual premium y generaban una tasa de rebote del 48%.",
    problemDetails: [
      "Tiempos de transición entre páginas de productos superiores a 1.2 segundos.",
      "Limitaciones severas en el diseño fluido y animaciones refinadas debido a la estructura rígida del CMS clásico.",
      "Bajas conversiones en dispositivos móviles por fricciones en el flujo de selección de tallas y pago."
    ],
    
    solutionText: "Propusimos una arquitectura headless desacoplada. Utilizamos Next.js como el motor de visualización de alta velocidad y conectamos el inventario de forma segura mediante GraphQL y la API de Shopify. Creamos transiciones de página suaves y persistentes con Framer Motion, permitiendo que las imágenes de alta resolución de las prendas fluyan visualmente de una vista a otra.",
    solutionDetails: [
      "Desarrollo de transiciones 'Shared Layout' para que el usuario sienta la navegación continua.",
      "Estrategias de pre-renderizado estático (SSG) e incremento de regeneración estática (ISR) para páginas de productos instantáneas.",
      "Flujo de pago integrado de una sola pantalla reduciendo los pasos de Stripe Checkout."
    ],
    
    resultText: "El nuevo diseño consolidó la presencia digital de Aura a la par de sus tiendas físicas. La fluidez de la interfaz generó un impacto económico directo e inmediato en las ventas del cliente.",
    resultStats: [
      { label: "Tiempo de Carga Promedio", value: "180 ms" },
      { label: "Tasa de Rebote", value: "-24%" },
      { label: "Aumento de Conversión", value: "+18%" }
    ],
    resultDetails: [
      "Reducción del tiempo de carga entre páginas a prácticamente cero (180ms promedio).",
      "Eliminación total del rebote por lentitud técnica.",
      "Optimización de la fidelidad del color y compresión web de imágenes de alta fidelidad sin pérdida de calidad."
    ]
  },
  pulse: {
    slug: "pulse",
    name: "PULSE",
    category: "Healthcare Technology",
    client: "Pulse MedTech",
    date: "Agosto 2025",
    role: "Líder de Frontend & UI",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion"],
    bannerBg: "bg-[#18181b]",
    bannerBorder: "border-white/10",
    tagline: "Desarrollo de un sistema de diseño accesible de grado médico y componentes interactivos para telemetría clínica en tiempo real.",
    
    problemText: "En Pulse MedTech, cinco equipos de desarrollo paralelos construían diferentes partes del software de telemetría médica. Al no contar con directrices visuales centralizadas ni componentes comunes, el software final presentaba inconsistencias UX graves que confundían al personal de salud en situaciones de emergencia. Adicionalmente, el panel no cumplía con normas de accesibilidad, dificultando su uso a profesionales con fatiga visual o discapacidades motrices temporales.",
    problemDetails: [
      "Inconsistencias visuales en botones, modales y tipografías en diferentes secciones del sistema médico.",
      "Falta de soporte de teclado y accesibilidad (WCAG 2.1 AA) para el uso rápido sin ratón en clínicas móviles.",
      "Duplicación de código frontend de hasta un 30% entre proyectos de la misma compañía."
    ],
    
    solutionText: "Lideramos la creación de un sistema de diseño agnóstico y robusto llamado 'Pulse UI'. Construimos componentes reutilizables sobre primitivas accesibles, documentando cada caso de uso y comportamiento dinámico en Storybook. Implementamos soporte completo para lectores de pantalla, modos de alto contraste y navegación fluida con teclado usando patrones semánticos rigurosos.",
    solutionDetails: [
      "Construcción de componentes interactivos con empaquetado TypeScript estricto y pruebas visuales automatizadas.",
      "Establecimiento de tokens de diseño para fuentes, colores semánticos, espaciados y micro-interacciones de feedback visual.",
      "Optimización de componentes de telemetría gráfica para asegurar 60 FPS estables al refrescar flujos de signos vitales."
    ],
    
    resultText: "Pulse UI se convirtió en la espina dorsal del software de la corporación. Unificó la experiencia del usuario final y agilizó radicalmente el ciclo de vida de desarrollo de los equipos internos.",
    resultStats: [
      { label: "Ahorro en Tiempos Dev", value: "40%" },
      { label: "Cumplimiento de Accesibilidad", value: "100%" },
      { label: "Reducción de Código Dupl.", value: "95%" }
    ],
    resultDetails: [
      "Aceleración del desarrollo de nuevas características frontend en un 40%.",
      "Aprobación total en las auditorías estatales de software clínico accesible de EE. UU.",
      "Adopción unánime por el 100% de los ingenieros de la compañía en menos de un mes."
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
                CASO DE ÉXITO DETALLADO
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
          {/* El Problema */}
          <TransitionView yOffset={20} className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text border-b border-brand-border pb-3">
              El Problema
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

          {/* La Solución */}
          <TransitionView yOffset={20} className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text border-b border-brand-border pb-3">
              La Solución
            </h2>
            <p className="text-brand-muted text-base sm:text-lg font-sans leading-relaxed text-pretty">
              {project.solutionText}
            </p>
            <ul className="space-y-3 pt-2">
              {project.solutionDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-muted font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
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
              Métricas de Impacto
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
              Logros Adicionales
            </h3>
            <ul className="space-y-3.5">
              {project.resultDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-muted font-sans leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
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
            Iniciar un Proyecto Similar
          </Button>
        </TransitionView>
      </section>
    </Container>
  );
}
