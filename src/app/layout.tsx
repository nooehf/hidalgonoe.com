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
  title: "Noé Hidalgo | Desarrollador Frontend Senior",
  description:
    "Desarrollador Frontend Senior y consultor independiente. Diseño y desarrollo experiencias web minimalistas y de altísimo rendimiento para empresas y startups globales.",
  keywords: [
    "Desarrollador Frontend",
    "Senior React Developer",
    "Next.js Consultant",
    "Freelance Web Developer",
    "Tailwind CSS Specialist",
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
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-bg text-brand-text">
        <Navbar />
        {/* Generous top margin to prevent nav overlap, keeping asymmetry and clean breathing room */}
        <main className="flex-grow pt-24 md:pt-32 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
