import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { company } from "@/data/company";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "JAHU Máquinas | Lixadeiras, lapidadoras e politrizes de pisos desde 1988",
    template: "%s | JAHU Máquinas",
  },
  description:
    "Fabricante brasileira de máquinas para pisos desde 1988: politrizes, lixadeiras, lapidadoras, raspadoras e fresadoras de pisos para construção civil. Compre com o Cartão BNDES.",
  applicationName: "JAHU Máquinas e Ferramentas",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "JAHU Máquinas e Ferramentas",
    title: "JAHU Máquinas | 100% brasileira desde 1988",
    description:
      "Politrizes, lixadeiras, lapidadoras, raspadoras e fresadoras de pisos para construção civil.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${ubuntu.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
