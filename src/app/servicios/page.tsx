import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";
import { Check, Briefcase, GraduationCap, Code } from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    number: "01",
    title: "Desarrollo Frontend con Next.js & React",
    description:
      "Arquitecturas modernas, seguras y de alto rendimiento adaptadas a productos digitales y aplicaciones complejas. Escalabilidad garantizada bajo TypeScript estricto.",
    features: [
      "Estructuración de Server Components (RSC) para cargas instantáneas",
      "Modelado de estado global eficiente y modular (Zustand, Context API)",
      "Código robusto, completamente tipado y fácil de mantener por equipos internos",
    ],
  },
  {
    number: "02",
    title: "Landing Pages de Alta Conversión",
    description:
      "Páginas de aterrizaje de altísima gama técnica y visual para startups y campañas corporativas exigentes. Foco absoluto en rendimiento de carga y pulcritud de UI.",
    features: [
      "Micro-interacciones interactivas diseñadas a medida con Framer Motion",
      "Estructuras de embudo optimizadas con flujos de carga ultra-rápidos",
      "SEO técnico y etiquetas open-graph impecables para indexación orgánica",
    ],
  },
  {
    number: "03",
    title: "Sistemas de Diseño & Componentes UI",
    description:
      "Construcción de bibliotecas de interfaces sólidas, accesibles y consistentes para unificar la identidad visual de todos los productos frontend de una compañía.",
    features: [
      "Cumplimiento riguroso de accesibilidad y estándares de contraste WCAG AA",
      "Documentación detallada en Storybook para facilitar la adopción del equipo",
      "Fácil integración con Tailwind CSS para personalizaciones ágiles",
    ],
  },
  {
    number: "04",
    title: "Integración de Headless CMS & Pasarelas",
    description:
      "Conexión fluida de interfaces desacopladas de alto rendimiento con backends modernos, servicios de comercio headless y herramientas de negocio líderes.",
    features: [
      "Integraciones con CMS Headless (Sanity, Contentful, Strapi)",
      "Flujos de facturación e integraciones robustas con Stripe",
      "Sincronización automatizada con plataformas analíticas e integraciones CRM (HubSpot)",
    ],
  },
];

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
}

const history: TimelineItem[] = [
  {
    period: "2024 - Presente",
    role: "Desarrollador Frontend Senior & Consultor Independiente",
    company: "Startups & Empresas Globales",
    description:
      "Ayudo de forma externa a startups tecnológicas y marcas consolidadas a rediseñar y reconstruir su stack de frontend, optimizando el rendimiento web y unificando su sistema de diseño.",
    bullets: [
      "Rearquitectura completa del panel de administración Zenith, reduciendo bundle size en un 99%.",
      "Desarrollo del headless e-commerce para Aura Haute Couture, logrando un 100% en Lighthouse móvil.",
      "Asesoramiento técnico en optimización SEO y estrategias avanzadas de almacenamiento en caché.",
    ],
  },
  {
    period: "2022 - 2024",
    role: "Líder Frontend / Lead Developer",
    company: "InnovaTech Labs",
    description:
      "Lideré un equipo de 6 ingenieros enfocado en la modernización de los paneles SaaS internos de la empresa. Establecí estándares de calidad de código e inicié la migración a arquitecturas modernas.",
    bullets: [
      "Lideré el diseño e implementación de 'Pulse UI', reduciendo los tiempos de maquetado en un 40%.",
      "Establecí flujos de testing visual en Storybook y flujos automatizados de CI/CD.",
      "Reduje la tasa de errores de producción en un 28% gracias a la adopción de tipos estrictos en TypeScript.",
    ],
  },
  {
    period: "2020 - 2022",
    role: "Ingeniero de Software Frontend",
    company: "Skyward Media",
    description:
      "Desarrollé y mantuve interfaces interactivas para plataformas de streaming y medios digitales con alto tráfico diario. Optimicé recursos y animaciones dinámicas.",
    bullets: [
      "Implementé flujos de reproducción interactivos y paneles de estadísticas avanzados.",
      "Reduje el tiempo de carga interactiva en un 35% en dispositivos móviles de gama media.",
      "Colaboré estrechamente con el equipo de diseño UI/UX para pulir las interacciones clave de usuario.",
    ],
  },
];

export default function Servicios() {
  return (
    <Container className="space-y-24 md:space-y-36">
      {/* Page Header */}
      <section className="max-w-3xl pt-10 md:pt-16">
        <TransitionView delay={0.1} yOffset={15}>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Servicios & CV
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mt-4">
            Especialización Frontend & Trayectoria Profesional
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Ofrezco soluciones de desarrollo que combinan sofisticación estética y excelencia de ingeniería. Mi enfoque está orientado a generar un retorno de inversión real para tu negocio a través de la velocidad y el refinamiento de la interfaz.
          </p>
        </TransitionView>
      </section>

      {/* Commercial Services Section */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Mis Servicios
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Problemas reales que soluciono para tu empresa
              </h2>
            </TransitionView>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {services.map((service, index) => (
              <TransitionView
                key={service.number}
                yOffset={25}
                delay={index * 0.05}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 border-b border-brand-border/60 pb-12"
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-display text-lg font-semibold text-brand-muted font-mono block">
                    {service.number} /
                  </span>
                </div>
                
                {/* Description and Features */}
                <div className="md:col-span-10 space-y-4">
                  <h3 className="font-display text-xl font-bold text-brand-text">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed text-pretty">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-muted">
                        <Check className="w-3.5 h-3.5 text-brand-text shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TransitionView>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skill Matrix (No percentage bars, just premium textual lists) */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Stack Tecnológico
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Herramientas que domino con soltura
              </h2>
            </TransitionView>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <TransitionView yOffset={20} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-brand-muted" /> Lenguajes
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>TypeScript (Avanzado)</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 semántico</li>
                <li>CSS3 y PostCSS</li>
                <li>GraphQL / REST APIs</li>
              </ul>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.05} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-muted" /> Frameworks
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>React (RSC, Server Actions)</li>
                <li>Next.js (App Router)</li>
                <li>Vite / Turbopack</li>
                <li>Astro (SSG minimalista)</li>
                <li>Node.js (Básico)</li>
              </ul>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.1} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-muted" /> Estilos & Animación
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Radix UI Primitives</li>
                <li>CSS Modules / Vanilla CSS</li>
                <li>Tailwind CSS v4 Engine</li>
              </ul>
            </TransitionView>
          </div>
        </div>
      </section>

      {/* CV Career Path Timeline (Integrated & Minimalist) */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Historial Profesional
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Trayectoria laboral y logros clave
              </h2>
            </TransitionView>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {history.map((job, index) => (
              <TransitionView
                key={job.period}
                yOffset={25}
                delay={index * 0.05}
                className="relative border-l border-brand-border pl-6 sm:pl-8 space-y-4"
              >
                {/* Small indicator circle */}
                <div className="absolute -left-[4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-text" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-mono text-xs text-brand-muted font-medium">
                    {job.period}
                  </span>
                  <span className="text-xs font-semibold font-display px-2 py-0.5 bg-brand-dark/5 text-brand-dark max-w-fit">
                    {job.company}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-brand-text">
                    {job.role}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed text-pretty">
                    {job.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-1.5">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-brand-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-muted mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </TransitionView>
            ))}
          </div>
        </div>
      </section>

      {/* Services Call to Action */}
      <section className="bg-brand-dark text-brand-bg p-8 sm:p-16 lg:p-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          <TransitionView yOffset={20}>
            <span className="font-display text-xs font-semibold uppercase tracking-widest opacity-60">
              ¿Listo para potenciar tu equipo o producto?
            </span>
          </TransitionView>
          
          <TransitionView yOffset={20} delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Llevemos tu frontend al siguiente nivel técnico
            </h2>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.2}>
            <p className="text-sm sm:text-base opacity-75 font-sans leading-relaxed text-pretty">
              Tanto si necesitas una consultoría técnica específica como un desarrollo integral desde cero, puedo aportarte la experiencia necesaria para garantizar un resultado de clase mundial.
            </p>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.3} className="pt-2">
            <Button href="/contacto" variant="primary" className="bg-white text-brand-dark hover:bg-transparent hover:text-white border-white">
              Agendar Entrevista
            </Button>
          </TransitionView>
        </div>
      </section>
    </Container>
  );
}
