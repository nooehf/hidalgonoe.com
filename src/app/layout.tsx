import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ChatWidget from "@/components/ui/chat-widget";

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
  metadataBase: new URL("https://www.hidalgonoe.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Noé Hidalgo | ADE & Desarrollo Web",
    description:
      "Estudiante de ADE (Administración y Dirección de Empresas) y creador de sitios web a medida. Fusiono visión estratégica de negocio y desarrollo frontend de alto rendimiento.",
    url: "https://www.hidalgonoe.com",
    siteName: "Noé Hidalgo",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noé Hidalgo | ADE & Desarrollo Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noé Hidalgo | ADE & Desarrollo Web",
    description:
      "Estudiante de ADE (Administración y Dirección de Empresas) y creador de sitios web a medida. Fusiono visión estratégica de negocio y desarrollo frontend de alto rendimiento.",
    images: ["/og-image.png"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Noé Hidalgo",
              "url": "https://www.hidalgonoe.com",
              "jobTitle": "Desarrollador Web & Consultor de Negocio",
              "description": "Estudiante de ADE y creador de sitios web a medida. Fusiono visión estratégica de negocio y desarrollo frontend de alto rendimiento.",
              "sameAs": [
                "https://www.linkedin.com/in/no%C3%A9-hidalgo-fern%C3%A1ndez-67bb43231",
                "https://github.com/nooehf"
              ]
            })
          }}
        />
        <Navbar />
        {/* Generous top margin to prevent nav overlap, keeping asymmetry and clean breathing room */}
        <main className="flex-grow pt-24 md:pt-32 pb-16">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
