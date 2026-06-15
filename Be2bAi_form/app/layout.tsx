import type { Metadata } from "next";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
