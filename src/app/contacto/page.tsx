"use client";

import React, { useState } from "react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import TransitionView from "@/components/ui/transition-view";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import OpenChatButton from "@/components/ui/open-chat-button";

export default function Contacto() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate brief API loading (frontend-only logic)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Container className="space-y-16 md:space-y-24">
      {/* Page Header */}
      <section className="max-w-3xl pt-10 md:pt-16">
        <TransitionView delay={0.1} yOffset={15}>
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Contacto
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-text mt-4">
            Hablemos sobre tu próximo proyecto
          </h1>
        </TransitionView>
        <TransitionView delay={0.2} yOffset={15}>
          <p className="mt-6 text-base sm:text-lg text-brand-muted font-sans leading-relaxed text-pretty">
            ¿Tienes una idea que quieras hacer realidad o buscas una página web premium diseñada bajo criterios estratégicos de negocio? Rellena el formulario o envíame un correo directo. Responderé en menos de 24 horas hábiles.
          </p>
        </TransitionView>
      </section>

      {/* Grid Layout for Info & Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-10">
          <TransitionView yOffset={20} className="space-y-6">
            <h2 className="font-display text-lg font-bold text-brand-text">
              Información de Contacto
            </h2>
            <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed text-pretty">
              Siempre estoy interesado en escuchar sobre nuevos proyectos de diseño web, digitalización comercial, lanzamientos de startups e ideas de negocio innovadoras.
            </p>
            <div className="pt-2">
              <OpenChatButton variant="secondary" className="w-full sm:w-auto border-indigo-500/20 text-indigo-700 hover:border-indigo-500 hover:text-indigo-900 bg-indigo-500/5">
                Hablar con mi Asistente de IA
              </OpenChatButton>
            </div>
          </TransitionView>

          {/* Details list card */}
          <TransitionView yOffset={20} delay={0.05} className="space-y-6 border-t border-brand-border pt-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-brand-muted shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                  Email Directo
                </p>
                <a
                  href="mailto:noehidalgofernandez@gmail.com"
                  className="font-display text-sm font-semibold text-brand-text hover:underline transition-all"
                >
                  noehidalgofernandez@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-muted shrink-0 mt-0.5">
                <path d="M22 12c0 5.52-4.48 10-10 10-1.72 0-3.34-.44-4.78-1.21L2 22l1.25-5.02C2.47 15.54 2 13.82 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10z"/>
                <path d="M8.5 8.5c.3.8 1.1 2.3 2.5 3.7 1.4 1.4 2.9 2.2 3.7 2.5.4.1.8-.1 1-.4l.7-1c.2-.3.1-.7-.2-.8l-2-1c-.3-.1-.7 0-.9.3l-.4.5c-.2.3-.6.3-.9.1-.4-.3-1.1-1-1.4-1.4-.2-.3-.2-.7.1-.9l.5-.4c.3-.2.4-.6.3-.9l-1-2c-.1-.3-.5-.4-.8-.2l-1 .7c-.3.2-.5.6-.4 1z"/>
              </svg>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/34644215725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-semibold text-brand-text hover:underline transition-all"
                >
                  +34 644 21 57 25
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-brand-muted shrink-0 mt-0.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/no%C3%A9-hidalgo-fern%C3%A1ndez-67bb43231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-semibold text-brand-text hover:underline transition-all block truncate max-w-[200px] sm:max-w-none"
                >
                  noé-hidalgo-fernández
                </a>
              </div>
            </div>
          </TransitionView>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <TransitionView yOffset={25} className="bg-brand-dark/3 border border-brand-dark/5 p-8 sm:p-12 relative">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 stroke-[1.5]" />
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-brand-text">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-brand-muted text-sm font-sans max-w-sm leading-relaxed text-pretty">
                    Gracias por ponerte en contacto. He recibido tus detalles y me comunicaré contigo lo antes posible para agendar una sesión.
                  </p>
                </div>
                <Button onClick={() => setIsSubmitted(false)} variant="secondary">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-display text-xs font-semibold uppercase tracking-wider text-brand-text"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm text-brand-text placeholder-brand-muted/50 focus:outline-hidden focus:border-brand-text transition-colors rounded-none font-sans"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-display text-xs font-semibold uppercase tracking-wider text-brand-text"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Ej. juan@empresa.com"
                    className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm text-brand-text placeholder-brand-muted/50 focus:outline-hidden focus:border-brand-text transition-colors rounded-none font-sans"
                  />
                </div>

                {/* Company field */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="font-display text-xs font-semibold uppercase tracking-wider text-brand-text"
                  >
                    Empresa / Organización (Opcional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Ej. Acme Corp"
                    className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm text-brand-text placeholder-brand-muted/50 focus:outline-hidden focus:border-brand-text transition-colors rounded-none font-sans"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-display text-xs font-semibold uppercase tracking-wider text-brand-text"
                  >
                    Tu Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Cuéntame brevemente sobre tu proyecto, objetivos y plazos..."
                    className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-sm text-brand-text placeholder-brand-muted/50 focus:outline-hidden focus:border-brand-text transition-colors rounded-none font-sans resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    showArrow={!isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 animate-bounce" /> Enviando...
                      </span>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </TransitionView>
        </div>
      </section>
    </Container>
  );
}
