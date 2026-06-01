"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";
import OpenChatButton from "./open-chat-button";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Servicios", href: "/servicios" },
  { name: "Sobre mí & CV", href: "/sobre-mi" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-brand-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group font-display text-lg font-bold tracking-tight text-brand-text">
          <span className="relative">
            noé hidalgo.
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-text transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-sm tracking-tight transition-colors duration-300 ${
                  isActive ? "text-brand-text font-semibold" : "text-brand-muted hover:text-brand-text"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brand-text"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <OpenChatButton
            variant="secondary"
            className="text-[11px] sm:text-xs border-indigo-500/20 text-indigo-700 hover:border-indigo-500 hover:text-indigo-900 hover:bg-indigo-500/10 bg-indigo-500/5 py-1.5 px-3 flex items-center gap-1.5 rounded-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Preguntar a mi IA
          </OpenChatButton>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-brand-text hover:opacity-80 transition-opacity z-50 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-brand-bg border-b border-brand-border absolute top-full left-0 right-0 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-5 border-t border-brand-border">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display text-lg tracking-tight transition-colors ${
                      isActive ? "text-brand-text font-bold" : "text-brand-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <OpenChatButton
                  variant="secondary"
                  className="w-full justify-center border-indigo-500/20 text-indigo-700 hover:border-indigo-500 hover:text-indigo-900 bg-indigo-500/5 py-2.5 px-4 flex items-center gap-2 rounded-none"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  Preguntar a mi IA
                </OpenChatButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
