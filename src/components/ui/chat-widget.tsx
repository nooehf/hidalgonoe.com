"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const formatMessageContent = (content: string) => {
  if (!content) return "";
  // Split by '**' patterns to toggle bold formatting
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-brand-text dark:text-zinc-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting only on client mount to avoid hydration mismatch
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: "¡Hola! Escribe sobre tu idea de negocio o hazme cualquier pregunta sobre Noé. Estaré encantado de resolver tus dudas al instante.",
      },
    ]);

    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("open-nh-chat", handleOpenChat);
    return () => window.removeEventListener("open-nh-chat", handleOpenChat);
  }, []);

  // Auto-scroll to the bottom of the chat log when messages list changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText || isLoading) return;

    if (!textToSend) setInput("");

    // Add user message
    const userMsg: Message = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Lo siento, ha ocurrido un error al conectar con mis sistemas. Por favor, inténtalo de nuevo más tarde.",
          },
        ]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Vaya, parece que hay un problema de conexión. ¿Quieres intentar escribirme directamente por email o WhatsApp?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const quickSuggestions = [
    { text: "¿Quién es Noé?", action: "¿Quién es Noé y qué estudia?" },
    { text: "¿Qué servicios ofrece?", action: "¿Qué servicios ofrece Noé y cómo trabaja?" },
    { text: "Tengo un negocio/idea", action: "Tengo una idea de negocio/proyecto. ¿Cómo me puede ayudar Noé?" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[310px] sm:w-[360px] h-[480px] bg-white border border-brand-dark/15 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-dark text-white p-4 flex justify-between items-center relative">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse" />
                  <span className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 block scale-150 opacity-40 animate-ping" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-tight">noé-assistant</h3>
                  <span className="text-[10px] text-zinc-400 font-mono">nh-ai v1.0.0</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white p-1 transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-brand-bg/50 custom-scrollbar select-text">
              {messages.map((msg, index) => {
                const isAI = msg.role === "assistant";
                return (
                  <div
                    key={index}
                    className={`flex ${isAI ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 text-xs sm:text-sm leading-relaxed ${
                        isAI
                          ? "bg-white text-brand-text border border-brand-dark/5"
                          : "bg-brand-dark text-white"
                      }`}
                    >
                      <p className="whitespace-pre-line">{formatMessageContent(msg.content)}</p>
                    </div>
                  </div>
                );
              })}

              {/* Loader indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-brand-dark/5 p-3 text-zinc-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Suggestions & Input */}
            <div className="p-3 border-t border-brand-border bg-white space-y-3">
              {/* Quick suggestions when conversation starts */}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-wrap gap-1.5 pb-1">
                  {quickSuggestions.map((sug, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(sug.action)}
                      className="text-[10px] font-display px-2.5 py-1 border border-brand-dark/10 hover:border-brand-dark hover:bg-zinc-50 transition-all rounded-none text-brand-muted hover:text-brand-text"
                    >
                      {sug.text}
                    </button>
                  ))}
                </div>
              )}

              {/* Chat Input form */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Pregúntame algo sobre Noé..."
                  disabled={isLoading}
                  className="flex-grow bg-zinc-50 border border-brand-dark/10 py-2 px-3 text-xs sm:text-sm font-sans focus:outline-hidden focus:border-brand-dark text-brand-text placeholder-brand-muted/60 rounded-none transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="bg-brand-dark text-white p-2 hover:bg-zinc-800 disabled:bg-zinc-100 disabled:text-zinc-300 transition-colors shrink-0 rounded-none flex items-center justify-center"
                  aria-label="Enviar mensaje"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button bubble */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-dark text-white shadow-2xl flex items-center justify-center relative cursor-pointer"
        aria-label="Asistente de IA"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              {/* Pulse Online Indicator on the bubble */}
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-brand-dark" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
