import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";

export default function Home() {
  return (
    <Container className="space-y-24 md:space-y-36">
      {/* Hero Section */}
      <section className="relative flex flex-col items-start pt-10 md:pt-16 max-w-4xl">
        <TransitionView delay={0.1} yOffset={25}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-dark/5 border border-brand-dark/10 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-display text-xs font-medium tracking-tight text-brand-dark uppercase">
              Disponible para proyectos seleccionados
            </span>
          </div>
        </TransitionView>

        <TransitionView delay={0.2} yOffset={25}>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text leading-[1.05] text-balance">
            Interfaces sofisticadas.<br />
            Código impecable.<br />
            Rendimiento extremo.
          </h1>
        </TransitionView>

        <TransitionView delay={0.3} yOffset={25}>
          <p className="mt-8 text-lg sm:text-xl text-brand-muted font-sans leading-relaxed max-w-2xl text-pretty">
            Soy Noé Hidalgo, desarrollador frontend senior. Traduzco visiones complejas de producto en experiencias web de alta gama que combinan diseño de vanguardia con arquitectura técnica escalable.
          </p>
        </TransitionView>

        <TransitionView delay={0.4} yOffset={25} className="mt-10 sm:mt-12 flex flex-wrap gap-4">
          <Button href="/contacto" variant="primary" showArrow>
            Trabajemos juntos
          </Button>
          <Button href="/proyectos" variant="secondary">
            Ver Proyectos
          </Button>
        </TransitionView>
      </section>

      {/* Featured Selection (Asymmetric Layout) */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-16">
          <TransitionView yOffset={15}>
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Proyecto Destacado
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-text mt-2">
              Selección de Alta Calidad
            </h2>
          </TransitionView>
          <TransitionView yOffset={15} delay={0.1}>
            <Button href="/proyectos" variant="minimal" showArrow>
              Ver todos los proyectos
            </Button>
          </TransitionView>
        </div>

        {/* Asymmetric Case Card */}
        <TransitionView yOffset={30} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Typographic Visual Container (Replacing generic IA mockups with architectural design) */}
          <div className="lg:col-span-7 bg-brand-dark text-brand-bg aspect-video flex flex-col justify-between p-8 sm:p-12 relative overflow-hidden group select-none cursor-pointer">
            {/* Grid overlay for aesthetic details */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-display text-xs tracking-widest uppercase opacity-60">
                CASE STUDY / 01
              </span>
              <span className="font-display text-xs tracking-wider border border-white/20 px-2.5 py-0.5 rounded-full">
                SaaS PLATFORM
              </span>
            </div>

            <div className="relative z-10 my-auto py-8">
              <h3 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter mb-4 text-white leading-none">
                ZENITH.
              </h3>
              <p className="text-sm sm:text-base opacity-70 font-sans max-w-md">
                Plataforma SaaS en tiempo real de analítica predictiva. Rearquitectura completa reduciendo el bundle size en un 55%.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-end w-full border-t border-white/10 pt-4">
              <div className="flex gap-4 text-xs font-mono opacity-50">
                <span>NEXT.JS</span>
                <span>TYPESCRIPT</span>
                <span>TAILWIND</span>
              </div>
              <span className="text-xs font-display font-medium tracking-tight border-b border-white/40 group-hover:border-white transition-colors">
                EXPLORAR CASO
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="flex gap-2">
              <span className="text-xs font-mono px-2.5 py-1 bg-brand-dark/5 text-brand-dark font-medium uppercase tracking-tight">
                Fintech
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-brand-dark/5 text-brand-dark font-medium uppercase tracking-tight">
                Rendimiento Extremo
              </span>
            </div>
            
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text leading-tight">
              ZENITH: Rediseño técnico y visual para un gigante de analítica
            </h3>
            
            <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
              Colaboramos con el equipo de producto de Zenith para reconstruir desde cero su panel de control interactivo. Implementamos carga de datos optimizada mediante streaming en el servidor de Next.js, reduciendo el Time-to-Interactive a solo 0.8s.
            </p>

            <div className="pt-2">
              <Button href="/proyectos/zenith" variant="secondary" showArrow>
                Ver Caso de Éxito
              </Button>
            </div>
          </div>
        </TransitionView>
      </section>

      {/* Services Snippet */}
      <section className="border-t border-brand-border pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <TransitionView yOffset={15}>
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Servicios & Impacto
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Cómo aporto valor real a tu negocio
              </h2>
            </TransitionView>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <TransitionView yOffset={20} delay={0.1} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                01 / Desarrollo Frontend de Vanguardia
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Arquitecturas modernas basadas en Next.js y React. Código robusto, modular, tipado estrictamente y listo para producciones que requieran alta escalabilidad.
              </p>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.2} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                02 / Landing Pages de Alta Conversión
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Diseño minimalista premium alineado con animaciones interactivas fluidas que capturan la atención del cliente y guían las llamadas a la acción con sutileza y elegancia.
              </p>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.3} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                03 / Optimización de Rendimiento
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Auditorías técnicas exhaustivas para llevar los Web Vitals a 100%. Optimización de carga, bundle size, hidratación y estrategias avanzadas de almacenamiento en caché.
              </p>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.4} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                04 / Integraciones & Headless CMS
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Vínculo de frontend fluido con backends desacoplados (Headless), pasarelas de pago (Stripe), CRMs (HubSpot) y CMSs headless (Sanity, Contentful) para autonomía total.
              </p>
            </TransitionView>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-dark text-brand-bg p-8 sm:p-16 lg:p-20 relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          <TransitionView yOffset={20}>
            <span className="font-display text-xs font-semibold uppercase tracking-widest opacity-60">
              ¿Listo para el siguiente nivel?
            </span>
          </TransitionView>
          
          <TransitionView yOffset={20} delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Creemos algo memorable juntos
            </h2>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.2}>
            <p className="text-sm sm:text-base opacity-75 font-sans leading-relaxed text-pretty">
              Si buscas un desarrollador frontend que comprenda el valor de la estética del diseño y el rigor técnico, conversemos sobre cómo puedo sumarme a tu proyecto o startup.
            </p>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.3} className="pt-2">
            <Button href="/contacto" variant="primary" className="bg-white text-brand-dark hover:bg-transparent hover:text-white border-white">
              Iniciar Conversación
            </Button>
          </TransitionView>
        </div>
      </section>
    </Container>
  );
}
