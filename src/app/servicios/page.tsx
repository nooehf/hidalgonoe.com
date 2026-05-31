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
    title: "Diseño & Desarrollo de Páginas Web",
    description:
      "Creación de sitios web personalizados desde cero. Código limpio, interfaces adaptadas perfectamente a dispositivos móviles y navegación intuitiva.",
    features: [
      "Estructuras modernas de navegación para una experiencia fluida",
      "Páginas totalmente responsivas que lucen perfectas en celulares y computadoras",
      "Código optimizado para que tu sitio cargue de forma instantánea",
    ],
  },
  {
    number: "02",
    title: "Landing Pages Claras y Directas",
    description:
      "Diseño de páginas de aterrizaje minimalistas pensadas para explicar tu proyecto o servicio sin rodeos, capturando el interés de tus visitantes de inmediato.",
    features: [
      "Micro-interacciones dinámicas y sutiles hechas a medida con Framer Motion",
      "Llamadas a la acción (CTA) claras y bien ubicadas para guiar la conversión",
      "SEO técnico y configuración de metadatos básicos para aparecer en Google",
    ],
  },
  {
    number: "03",
    title: "Diseño de Interfaces UX/UI",
    description:
      "Definición visual equilibrada para tu marca. Apuesto por diseños limpios con abundante espacio en blanco, tipografías elegantes y una paleta de colores coherente.",
    features: [
      "Diseño asimétrico y contemporáneo huyendo de plantillas prefabricadas",
      "Estructuras visuales pensadas para guiar la lectura y retener al usuario",
      "Controles interactivos accesibles e intuitivos para el visitante",
    ],
  },
  {
    number: "04",
    title: "Integración de Herramientas Básicas",
    description:
      "Conexión de tu sitio web con herramientas sencillas y seguras de cobro, almacenamiento de datos o gestión de contenidos básicos.",
    features: [
      "Configuración de formularios directos a tu bandeja de correo",
      "Vínculo de pasarelas de pago sencillas (botones de Stripe o PayPal)",
      "Conexiones de almacenamiento y bases de datos ligeras",
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
    role: "Estudiante de Grado en ADE & Creador Web Freelance",
    company: "Grado Universitario",
    description:
      "Combino mis estudios académicos diarios en administración de empresas con la programación y el diseño web a medida, ayudando a pequeños proyectos, marcas locales y emprendedores a tener presencia digital.",
    bullets: [
      "Aplicación de principios de marketing y análisis comercial al estructurar los contenidos web.",
      "Desarrollo de páginas web y landing pages minimalistas orientadas a explicar propuestas de valor de forma clara.",
      "Asesoramiento a proyectos en su fase inicial para digitalizar sus ideas de negocio sin complicaciones.",
    ],
  },
  {
    period: "2023 - Presente",
    role: "Aprendizaje de Programación Web & Proyectos Experimentales",
    company: "Estudio & Práctica Autodidacta",
    description:
      "Inicié de forma independiente mi camino en el diseño y la programación frontend. He estudiado de forma autónoma los estándares modernos de desarrollo y maquetación interactiva.",
    bullets: [
      "Estudio de lenguajes clave: HTML5, CSS3, JavaScript moderno y el framework React.",
      "Creación de prototipos funcionales y casos de estudio personales como e-commerce headless experimentales.",
      "Desarrollo de habilidades de diseño de interfaces basadas en la consistencia tipográfica y el uso del espacio.",
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
            Mi Enfoque
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mt-4">
            Estrategia de Negocio & Creación Web Premium
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Ofrezco soluciones web sencillas, sofisticadas y bien pensadas. Al estudiar Administración y Dirección de Empresas (ADE), entiendo que una página web no es solo código técnico, sino una herramienta para comunicar, vender y dar credibilidad a tu proyecto.
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
                En qué áreas puedo ayudarte a crecer
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
                    {services[index].features.map((feature, idx) => (
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

      {/* Technical Skill Matrix */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Herramientas
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Tecnologías con las que trabajo a diario
              </h2>
            </TransitionView>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <TransitionView yOffset={20} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-brand-muted" /> Desarrollo
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>HTML5 semántico</li>
                <li>CSS3 y PostCSS</li>
                <li>JavaScript moderno (ES6+)</li>
                <li>TypeScript básico</li>
              </ul>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.05} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-muted" /> Frameworks
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>React (RSC)</li>
                <li>Next.js (App Router)</li>
                <li>Astro (Páginas estáticas)</li>
                <li>Vite / Git</li>
              </ul>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.1} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-brand-muted" /> Estilo & Movimiento
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Radix UI</li>
                <li>CSS Modules</li>
              </ul>
            </TransitionView>
          </div>
        </div>
      </section>

      {/* CV Career Path Timeline */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Mi Historia
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Estudios y trayectoria digital
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
              ¿Quieres dar a conocer tu idea?
            </span>
          </TransitionView>
          
          <TransitionView yOffset={20} delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Construyamos tu espacio en internet
            </h2>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.2}>
            <p className="text-sm sm:text-base opacity-75 font-sans leading-relaxed text-pretty">
              Si buscas un sitio web que no solo sea visualmente sofisticado, sino que esté desarrollado bajo un criterio lógico, limpio y adaptado a tu presupuesto, hablemos hoy mismo.
            </p>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.3} className="pt-2">
            <Button href="/contacto" variant="primary" className="bg-white text-brand-dark hover:bg-transparent hover:text-white border-white">
              Ponte en contacto
            </Button>
          </TransitionView>
        </div>
      </section>
    </Container>
  );
}
