import React from "react";
import Link from "next/link";
import Container from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-border py-16 mt-auto">
      <Container className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-md">
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-brand-text">
            noé hidalgo.
          </Link>
          <p className="mt-4 text-sm text-brand-muted font-sans leading-relaxed text-pretty">
            Desarrollador Frontend Senior. Creo experiencias web sofisticadas, minimalistas y de alto rendimiento que transforman ideas de negocio en productos digitales de calidad mundial.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:gap-20">
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-brand-text mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                  Servicios & CV
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-brand-text mb-4">
              Contacto & Redes
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nhidfer2711@gmail.com"
                  className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                >
                  nhidfer2711@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nooehf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container className="pt-8 mt-12 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-brand-muted font-sans">
          &copy; {currentYear} Noé Hidalgo. Todos los derechos reservados.
        </p>
        <p className="text-xs text-brand-muted font-sans">
          Diseñado y desarrollado a mano con Next.js y Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
