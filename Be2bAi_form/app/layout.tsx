import type { Metadata } from "next";
import "./globals.css";
import { MetaPixel } from "@/components/pixel/MetaPixel";

export const metadata: Metadata = {
  title: "Be2B AI · Fale com a IA que prospecta pra você",
  description:
    "Preencha 2 minutos e converse direto com a IA do Be2B, o mesmo agente que prospecta pros nossos clientes 24/7.",
  openGraph: {
    title: "Be2B AI · Fale com a IA que prospecta pra você",
    description:
      "Preencha 2 minutos e converse direto com a IA do Be2B.",
    type: "website",
  },
  other: {
    "facebook-domain-verification": "27cq8pkzzgkbrtmswv2v0rv0lobe4y",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen font-sans antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
