import type { Metadata } from "next";
import "./globals.css";
import { MetaPixelHead, MetaPixelNoscript } from "@/components/pixel/MetaPixel";

export const metadata: Metadata = {
  title: "Tecdisa · ERP para distribuidoras",
  description:
    "Conheça o ADS ERP da Tecdisa. Estoque, força de vendas, financeiro e e-commerce B2B em um único sistema. Solicite uma demonstração ao vivo.",
  openGraph: {
    title: "Tecdisa · ERP para distribuidoras",
    description:
      "ERP completo pra distribuidora: estoque, força de vendas, financeiro e e-commerce B2B. Demo ao vivo no WhatsApp.",
    type: "website",
  },
  // TODO Tecdisa: depois de verificar o dominio no Business Manager, colar aqui o valor da meta tag.
  // other: {
  //   "facebook-domain-verification": "COLE_AQUI_O_CODIGO",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <MetaPixelHead />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <MetaPixelNoscript />
        {children}
      </body>
    </html>
  );
}
