import React from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";
import { Check } from "lucide-react";

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
    title: "Integración de Herramientas & Automatización",
    description:
      "Conexión de tu sitio web con herramientas sencillas y seguras de cobro, almacenamiento de datos, automatizaciones mediante webhooks y CRM.",
    features: [
      "Configuración de formularios directos a tu CRM y email",
      "Integraciones con Google Drive, Sheets y Workspace corporativo",
      "Conexiones de botones de Stripe o PayPal para pasarelas de pago",
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
            Mis Servicios
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mt-4">
            Soluciones Web Hechas a Medida
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            Ofrezco soluciones sencillas, sofisticadas y bien estructuradas. Al estudiar Administración y Dirección de Empresas (ADE), entiendo que una web no es solo código técnico, sino una herramienta comercial estratégica para comunicar tu propuesta de valor, generar confianza y atraer clientes.
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
