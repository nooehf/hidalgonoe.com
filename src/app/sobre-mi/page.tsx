import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";
import { Code, Briefcase, Globe, Trophy } from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
}

const history: TimelineItem[] = [
  {
    period: "sept. 2023 – Actualidad",
    role: "Grado en Administración y Dirección de Empresas (ADE)",
    company: "Universidad de Sevilla",
    description:
      "Formación académica enfocada en marketing estratégico, análisis financiero, economía y gestión organizativa. Combino estos conocimientos comerciales para planificar webs lógicas y estructuradas orientadas al negocio y la conversión.",
    bullets: [
      "Desarrollo de habilidades de análisis de viabilidad, marketing de conversión y comportamiento del consumidor.",
      "Enfoque estratégico para estructurar contenidos web que comuniquen valor de forma clara y directa.",
      "Gestión de proyectos aplicando principios de organización, optimización administrativa y análisis financiero.",
    ],
  },
  {
    period: "jun. 2026",
    role: "Certificación en Facturación Electrónica y Sistemas Verifactu",
    company: "Acelera pyme",
    description:
      "Formación especializada en la implantación práctica de la nueva facturación electrónica obligatoria para PYMEs y autónomos. Capacitación centrada en los requisitos legales de la Ley Antifraude y las especificaciones técnicas del entorno Verifactu, adquiriendo una visión integral para adaptar la gestión empresarial y el desarrollo de software local a las normativas vigentes.",
    bullets: [
      "Requisitos legales de la Ley Antifraude y especificaciones del entorno técnico Verifactu.",
      "Adaptación y desarrollo de software local de facturación a la nueva normativa obligatoria.",
      "Implantación y digitalización de procesos de facturación en PYMEs y autónomos.",
    ],
  },
  {
    period: "abr. 2026 – may. 2026",
    role: "BIP Enhance Skills in International Business, Business Administration and Management, General",
    company: "Haaga-Helia University of Applied Sciences",
    description:
      "Participación en el Programa Intensivo Combinado (BIP) de movilidad presencial en Helsinki, Finlandia, especializándome en negociación internacional, ventas y gestión de operaciones globales.",
    bullets: [
      "Simulaciones de negociación y gestión estratégica de marcas en mercados internacionales.",
      "Colaboración activa y resolución de retos empresariales en equipos globales en idioma inglés.",
      "Enfoque práctico en habilidades de liderazgo internacional e innovación aplicable a negocios locales.",
    ],
  },
  {
    period: "abr. 2025 – may. 2025",
    role: "BIP Technology Enhanced Experience in the Hospitality Industry, Business Administration and Management, General",
    company: "Haaga-Helia University of Applied Sciences",
    description:
      "Programa Intensivo de movilidad en Finlandia centrado en la aplicación y diseño de soluciones tecnológicas innovadoras para optimizar la experiencia del consumidor y la eficiencia operativa.",
    bullets: [
      "Investigación sobre la integración de herramientas disruptivas y automatizaciones en el sector servicios.",
      "Desarrollo de proyectos colaborativos en idioma inglés con equipos procedentes de universidades europeas.",
      "Análisis técnico de flujos de experiencia de cliente y diseño de interfaces intuitivas orientadas a la tecnología.",
    ],
  },
];

export default function SobreMi() {
  return (
    <Container className="space-y-24 md:space-y-36">
      {/* Page Header / Bio Intro */}
      <section className="max-w-3xl pt-10 md:pt-16">
        <TransitionView delay={0.1} yOffset={15}>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Sobre Mí
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mt-4 text-pretty">
            ADE de Día, Creador Web de Noche
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Hola, soy <strong>Noé Hidalgo</strong>. Estudio Administración y Dirección de Empresas (ADE) en la Universidad de Sevilla y me apasiona la creación de productos digitales. No veo las páginas web únicamente como líneas de código, sino como un engranaje estratégico clave para potenciar negocios, automatizar tareas repetitivas y comunicar ideas de forma impactante.
          </p>
          <p className="mt-4 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Mi enfoque radica en fusionar el criterio analítico y comercial de mis estudios universitarios con mi dominio autodidacta del desarrollo full-stack moderno y la digitalización, garantizando sistemas robustos, rápidos, elegantes y orientados a la conversión.
          </p>
        </TransitionView>
        <TransitionView delay={0.3} yOffset={15} className="mt-8">
          <Button
            href="https://www.linkedin.com/in/no%C3%A9-hidalgo-fern%C3%A1ndez-67bb43231"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="group hover:!text-white hover:!border-[#0a66c2] hover:bg-[#0a66c2] transition-all duration-300"
          >
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-brand-muted group-hover:text-white transition-colors"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>Ver mi perfil de LinkedIn</span>
            </span>
          </Button>
        </TransitionView>
      </section>

      {/* Skill, Language and Trophy Matrix (Structured 2x2 Grid) */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Perfil Completo
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Habilidades, idiomas y reconocimientos
              </h2>
            </TransitionView>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-12">
            {/* Column 1: Tech */}
            <TransitionView yOffset={20} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-brand-muted" /> Creación Web & Tecnología
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li>React (RSC) & Next.js (App Router)</li>
                <li>JavaScript moderno (ES6+) & TypeScript</li>
                <li>HTML5 semántico / CSS3 / Tailwind CSS</li>
                <li>Integración de sistemas CRM y Webhooks</li>
                <li>Automatizaciones con Google Workspace (Sheets/Drive)</li>
                <li>Posicionamiento SEO On-Page (Top 3 en Google)</li>
                <li>Integración de Facturación Electrónica (Estándar Verifactu)</li>
              </ul>
            </TransitionView>

            {/* Column 2: Business (ADE) */}
            <TransitionView yOffset={20} delay={0.05} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-brand-muted" /> Habilidades de Negocio (ADE)
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li><strong>Marketing Estratégico:</strong> Conversión y comportamiento del consumidor</li>
                <li><strong>Contabilidad y Finanzas:</strong> Análisis de balances, costes y viabilidad</li>
                <li><strong>Dirección de Operaciones:</strong> Optimización y automatización de procesos</li>
                <li><strong>Investigación de Mercados:</strong> Análisis de datos y competencia local</li>
                <li><strong>Planificación Comercial:</strong> Estructuración lógica de propuestas de valor</li>
                <li><strong>Cumplimiento Normativo:</strong> Adaptación de procesos a la Ley Antifraude y Verifactu</li>
              </ul>
            </TransitionView>

            {/* Column 3: Languages */}
            <TransitionView yOffset={20} delay={0.1} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-muted" /> Idiomas & Certificados
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li><strong>B2 FIRST</strong> - University of Cambridge</li>
                <li>Español (Competencia bilingüe o nativa)</li>
                <li>Inglés (Competencia básica profesional)</li>
                <li>Francés (Competencia básica)</li>
              </ul>
            </TransitionView>

            {/* Column 4: Rugby */}
            <TransitionView yOffset={20} delay={0.15} className="space-y-3">
              <h3 className="font-display text-sm font-bold text-brand-text uppercase tracking-wider flex items-center gap-2">
                <Trophy className="w-4 h-4 text-brand-muted" /> Premios & Valores Deportivos
              </h3>
              <ul className="space-y-1.5 text-sm text-brand-muted font-sans">
                <li><strong>Campeón 1ª Territorial Senior</strong> (Federación Andaluza de Rugby - 2025)</li>
                <li><strong>Campeón Nacional Copa Plata M18</strong> (Real Federación Española de Rugby - 2023)</li>
                <li>Valores del Rugby: disciplina, sinergia grupal, resiliencia y compromiso diario.</li>
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
                Formación académica e internacional
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

      {/* Subtle CV Page CTA */}
      <section className="border-t border-brand-border py-16 sm:py-24 text-center max-w-xl mx-auto space-y-6">
        <TransitionView yOffset={15}>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text">
            ¿Te gustaría que trabajemos juntos?
          </h2>
          <p className="mt-3 text-sm text-brand-muted font-sans leading-relaxed text-pretty">
            Si tienes en mente una idea o buscas una web profesional desarrollada con criterio estratégico comercial, no dudes en escribirme.
          </p>
        </TransitionView>
        <TransitionView yOffset={15} delay={0.1} className="pt-2">
          <Button href="/contacto" variant="primary" showArrow>
            Ponerse en Contacto
          </Button>
        </TransitionView>
      </section>
    </Container>
  );
}
