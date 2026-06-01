import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noé Hidalgo | ADE & Desarrollo Web",
  description:
    "Estudiante de ADE (Administración y Dirección de Empresas) y creador de sitios web a medida. Fusiono visión estratégica de negocio y desarrollo frontend de alto rendimiento.",
  keywords: [
    "Estudiante ADE",
    "Desarrollador Web Independiente",
    "Estrategia Digital",
    "Diseño Web Premium",
    "Next.js Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased overflow-x-hidden max-w-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-bg text-brand-text overflow-x-hidden max-w-full">
        <Navbar />
        {/* Generous top margin to prevent nav overlap, keeping asymmetry and clean breathing room */}
        <main className="flex-grow pt-24 md:pt-32 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
