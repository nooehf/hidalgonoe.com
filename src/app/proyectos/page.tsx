import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";

interface Project {
  slug: string;
  title: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  caseStudyNumber: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const projects: Project[] = [
  {
    slug: "zenith",
    title: "ZENITH: Rediseño Técnico y Dashboard Analítico",
    name: "ZENITH",
    category: "Fintech SaaS Platform",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    description:
      "Completa rearquitectura y rediseño de interfaz de un panel analítico en tiempo real. Carga de datos optimizada reduciendo el bundle size en un 55% y acelerando el Time-to-Interactive (TTI) a 0.8 segundos.",
    caseStudyNumber: "01",
    bgColor: "bg-[#0b0f19]", // Deep navy/slate
    textColor: "text-white",
    borderColor: "border-white/10",
  },
  {
    slug: "aura",
    title: "AURA: E-commerce Headless para Alta Costura",
    name: "AURA",
    category: "Luxury E-Commerce",
    tags: ["Next.js", "Shopify Buy SDK", "GraphQL", "Tailwind CSS", "Stripe"],
    description:
      "Una experiencia de compra de alta costura digital con transiciones líquidas y carga instantánea. Conectada con headless Shopify, alcanzando un score de rendimiento móvil perfecto del 100% en Lighthouse.",
    caseStudyNumber: "02",
    bgColor: "bg-[#f5f2eb]", // Cream / Warm gray
    textColor: "text-brand-text",
    borderColor: "border-brand-dark/10",
  },
  {
    slug: "pulse",
    title: "PULSE: Sistema de Diseño e Interfaces de Monitoreo",
    name: "PULSE",
    category: "Healthcare Technology",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion"],
    description:
      "Creación e integración de un sistema de diseño modular de alta accesibilidad (WCAG AA) para visualización de métricas de pacientes críticos. Utilizado por más de 50 desarrolladores internos.",
    caseStudyNumber: "03",
    bgColor: "bg-[#18181b]", // Pure Zinc Dark
    textColor: "text-white",
    borderColor: "border-white/10",
  },
];

export default function Proyectos() {
  return (
    <Container className="space-y-16 sm:space-y-24">
      {/* Page Header */}
      <section className="max-w-3xl pt-10 md:pt-16">
        <TransitionView delay={0.1} yOffset={15}>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Mi Portafolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mt-4">
            Casos de Éxito Seleccionados
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Proyectos elegidos minuciosamente por su alto grado de refinamiento técnico, excelencia visual y valor comercial medible. Sin relleno: solo trabajos reales que resolvieron desafíos complejos.
          </p>
        </TransitionView>
      </section>

      {/* Projects List (Asymmetrical layout) */}
      <section className="space-y-24 sm:space-y-36 pb-12">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
            >
              {/* Image / Card Block - Dynamic Asymmetric ordering */}
              <TransitionView
                yOffset={40}
                className={`lg:col-span-7 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div
                  className={`${project.bgColor} ${project.textColor} aspect-[16/10] flex flex-col justify-between p-8 sm:p-12 relative overflow-hidden group select-none cursor-pointer border ${project.borderColor}`}
                >
                  {/* Grid Background details */}
                  <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:28px_28px]" />

                  <div className="relative z-10 flex justify-between items-start w-full">
                    <span className="font-display text-xs tracking-widest uppercase opacity-60">
                      CASE STUDY / {project.caseStudyNumber}
                    </span>
                    <span className="font-display text-xs tracking-wider border border-current/20 px-2.5 py-0.5 rounded-full uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative z-10 my-auto py-8">
                    <h3 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter mb-4 leading-none">
                      {project.name}.
                    </h3>
                    <p className="text-sm sm:text-base opacity-75 font-sans max-w-md">
                      {project.description.slice(0, 120)}...
                    </p>
                  </div>

                  <div className="relative z-10 flex justify-between items-end w-full border-t border-current/10 pt-4">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] sm:text-xs font-mono opacity-50">
                      {project.tags.slice(0, 3).map((t) => (
                        <span key={t}>{t.toUpperCase()}</span>
                      ))}
                    </div>
                    <span className="text-xs font-display font-medium tracking-tight border-b border-current/30 group-hover:border-current transition-colors">
                      VER DETALLES
                    </span>
                  </div>
                </div>
              </TransitionView>

              {/* Text Description Block */}
              <TransitionView
                yOffset={40}
                className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="space-y-2">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 bg-brand-dark/5 text-brand-dark rounded-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button href={`/proyectos/${project.slug}`} variant="secondary" showArrow>
                    Ver Caso de Éxito
                  </Button>
                </div>
              </TransitionView>
            </div>
          );
        })}
      </section>

      {/* Sutil Footer CTA inside Section */}
      <section className="border-t border-brand-border py-16 sm:py-24 text-center max-w-xl mx-auto space-y-6">
        <TransitionView yOffset={15}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text">
            ¿Quieres ver tu producto digital aquí?
          </h2>
          <p className="mt-3 text-sm text-brand-muted font-sans leading-relaxed text-pretty">
            Analicemos los requerimientos de tu empresa o startup para estructurar una interfaz a medida que impulse conversiones de manera limpia y veloz.
          </p>
        </TransitionView>
        <TransitionView yOffset={15} delay={0.1} className="pt-2">
          <Button href="/contacto" variant="primary" showArrow>
            Agendar una Consulta
          </Button>
        </TransitionView>
      </section>
    </Container>
  );
}
