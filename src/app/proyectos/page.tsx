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
  cardTagline: string;
  caseStudyNumber: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const projects: Project[] = [
  {
    slug: "energialeon",
    title: "ENERGÍA LEÓN: Automatización de Asesoría Energética",
    name: "ENERGÍA LEÓN",
    category: "Automatización & Posicionamiento SEO",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "CRM Integration", "SEO"],
    description:
      "Diseño y desarrollo web corporativo para una asesoría de luz y gas. Implementación de un cuestionario interactivo integrado con su CRM y Google Workspace, configuración de emails y estrategia SEO con posicionamiento en el Top 3.",
    cardTagline: "Automatización comercial conectada a CRM y posicionamiento SEO local en el Top 3.",
    caseStudyNumber: "01",
    bgColor: "bg-[#0d2a1b]", // Deep Forest Green
    textColor: "text-white",
    borderColor: "border-emerald-950/20",
  },
  {
    slug: "aura",
    title: "AURA: E-commerce Headless de Práctica",
    name: "AURA",
    category: "Caso de Estudio / Prototipo",
    tags: ["Next.js", "Shopify API", "GraphQL", "Tailwind CSS", "Framer Motion"],
    description:
      "Un prototipo de tienda virtual de moda de lujo creado para lograr navegación instantánea y transiciones de pantalla totalmente fluidas conectando Next.js con la API de Shopify.",
    cardTagline: "Navegación instantánea de alta gama y transiciones de página fluidas mediante Shopify API.",
    caseStudyNumber: "02",
    bgColor: "bg-[#f5f2eb]", // Cream / Warm gray
    textColor: "text-brand-text",
    borderColor: "border-brand-dark/10",
  },
  {
    slug: "pulse",
    title: "PULSE: Biblioteca de Componentes Accesibles",
    name: "PULSE",
    category: "Investigación Personal / UI",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Framer Motion"],
    description:
      "Creación y documentación de un conjunto modular de componentes interactivos y accesibles (cumpliendo WCAG AA) desarrollados con Tailwind CSS para utilizarlos en mis futuros proyectos.",
    cardTagline: "Biblioteca modular interactiva y accesible bajo estándares normativos WCAG AA.",
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
            Proyectos & Experiencia
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Una selección de los proyectos y prototipos que he diseñado y desarrollado de forma independiente. Representan mi aprendizaje práctico combinando diseño de interfaces limpias con código moderno.
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

                  <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 w-full items-start">
                    <span className="font-display text-xs tracking-widest uppercase opacity-60">
                      PROYECTO / {project.caseStudyNumber}
                    </span>
                    <span className="font-display text-[10px] sm:text-xs tracking-wider border border-current/20 px-2.5 py-0.5 rounded-full uppercase max-w-fit">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative z-10 my-auto py-8">
                    <h3 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter mb-4 leading-none">
                      {project.name}.
                    </h3>
                    <p className="text-sm sm:text-base opacity-75 font-sans max-w-md">
                      {project.cardTagline}
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
                    Ver Detalles
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
            ¿Quieres que colaboremos en tu web?
          </h2>
          <p className="mt-3 text-sm text-brand-muted font-sans leading-relaxed text-pretty">
            Si tienes una idea, un pequeño negocio o un proyecto personal que necesite un espacio limpio en internet, ponte en contacto conmigo y lo construimos juntos.
          </p>
        </TransitionView>
        <TransitionView yOffset={15} delay={0.1} className="pt-2">
          <Button href="/contacto" variant="primary" showArrow>
            Ponte en Contacto
          </Button>
        </TransitionView>
      </section>
    </Container>
  );
}
