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
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="font-display text-xs font-medium tracking-tight text-brand-dark uppercase">
              Estudiante de ADE & Creador Web
            </span>
          </div>
        </TransitionView>

        <TransitionView delay={0.2} yOffset={25}>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text leading-[1.05] text-balance">
            Estudio negocio de día.<br />
            Diseño y programo<br />
            webs de noche.
          </h1>
        </TransitionView>

        <TransitionView delay={0.3} yOffset={25}>
          <p className="mt-8 text-lg sm:text-xl text-brand-muted font-sans leading-relaxed max-w-2xl text-pretty">
            Hola, soy Noé Hidalgo. Estudio Administración y Dirección de Empresas y me apasiona la tecnología. Creo páginas web minimalistas, funcionales y bien estructuradas para emprendedores, pequeños negocios y proyectos creativos.
          </p>
        </TransitionView>

        <TransitionView delay={0.4} yOffset={25} className="mt-10 sm:mt-12 flex flex-wrap gap-4">
          <Button href="/contacto" variant="primary" showArrow>
            ¿Hablamos?
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
              Un Caso de Estudio Personal
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
          {/* Typographic Visual Container */}
          <div className="lg:col-span-7 bg-brand-dark text-brand-bg aspect-video flex flex-col justify-between p-8 sm:p-12 relative overflow-hidden group select-none cursor-pointer">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10 flex justify-between items-start w-full">
              <span className="font-display text-xs tracking-widest uppercase opacity-60">
                PROYECTO PERSONAL / 01
              </span>
              <span className="font-display text-xs tracking-wider border border-white/20 px-2.5 py-0.5 rounded-full">
                SaaS MOCKUP
              </span>
            </div>

            <div className="relative z-10 my-auto py-8">
              <h3 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter mb-4 text-white leading-none">
                ZENITH.
              </h3>
              <p className="text-sm sm:text-base opacity-70 font-sans max-w-md">
                Rediseño visual y técnico de un panel financiero. Creado como ejercicio avanzado de programación para optimizar el rendimiento y la carga de datos.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-end w-full border-t border-white/10 pt-4">
              <div className="flex gap-4 text-xs font-mono opacity-50">
                <span>NEXT.JS</span>
                <span>TYPESCRIPT</span>
                <span>TAILWIND</span>
              </div>
              <span className="text-xs font-display font-medium tracking-tight border-b border-white/40 group-hover:border-white transition-colors">
                VER PROYECTO
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="flex gap-2">
              <span className="text-xs font-mono px-2.5 py-1 bg-brand-dark/5 text-brand-dark font-medium uppercase tracking-tight">
                Finanzas & UI
              </span>
              <span className="text-xs font-mono px-2.5 py-1 bg-indigo-50 text-indigo-700 font-medium uppercase tracking-tight">
                Caso de Estudio
              </span>
            </div>
            
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-text leading-tight">
              ZENITH: Mi reto de programación y optimización de datos
            </h3>
            
            <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
              Quería retarme a mí mismo construyendo un panel interactivo con flujos de datos rápidos. Investigué cómo usar la carga diferida en Next.js para mejorar la velocidad y lograr que la interfaz se sienta instantánea.
            </p>

            <div className="pt-2">
              <Button href="/proyectos/zenith" variant="secondary" showArrow>
                Ver Detalles del Proyecto
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
                Lo que hago
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-text mt-2 leading-tight">
                Cómo puedo ayudar a tu proyecto
              </h2>
            </TransitionView>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <TransitionView yOffset={20} delay={0.1} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                01 / Creación de Páginas Web
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Diseño y programo sitios web limpios y modernos usando Next.js, React o HTML clásico. Interfaces totalmente responsivas que lucen perfectas tanto en móviles como en computadoras.
              </p>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.2} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                02 / Landing Pages Claras
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Páginas de aterrizaje minimalistas diseñadas para explicar de forma directa qué hace tu proyecto o negocio, capturando la atención del visitante sin distracciones innecesarias.
              </p>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.3} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                03 / Visión de Negocio (ADE)
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                No veo las webs como simple código. Gracias a mis estudios de ADE, te ayudo a estructurar tus contenidos para que tu propuesta de valor se entienda comercialmente y atraiga clientes.
              </p>
            </TransitionView>

            <TransitionView yOffset={20} delay={0.4} className="space-y-3">
              <h3 className="font-display text-lg font-bold tracking-tight text-brand-text">
                04 / Integraciones Sencillas
              </h3>
              <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
                Configuro formularios de contacto que llegan directamente a tu email, pasarelas de pago básicas (Stripe) y gestores de contenido sencillos para que puedas actualizar tu web tú mismo.
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
              ¿Tienes una idea o negocio local?
            </span>
          </TransitionView>
          
          <TransitionView yOffset={20} delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Construyamos tu espacio en internet
            </h2>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.2}>
            <p className="text-sm sm:text-base opacity-75 font-sans leading-relaxed text-pretty">
              Si buscas una web limpia, hecha con cariño y dedicación por un estudiante que entiende tus necesidades de negocio, escríbeme y cuéntame tu proyecto sin ningún compromiso.
            </p>
          </TransitionView>

          <TransitionView yOffset={20} delay={0.3} className="pt-2">
            <Button href="/contacto" variant="primary" className="bg-white text-brand-dark hover:bg-transparent hover:text-white border-white">
              Escríbeme un mensaje
            </Button>
          </TransitionView>
        </div>
      </section>
    </Container>
  );
}
