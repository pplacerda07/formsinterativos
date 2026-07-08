import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MetaPixelHead, MetaPixelNoscript } from "@/components/pixel/MetaPixel";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gazin Semijoias · Revenda semijoias com qualidade",
  description:
    "Conheça as semijoias Gazin. Peças sofisticadas com garantia e qualidade. Fale com nosso time comercial pelo WhatsApp.",
  openGraph: {
    title: "Gazin Semijoias · Revenda semijoias com qualidade",
    description:
      "Semijoias sofisticadas com garantia e qualidade. Fale com nosso time comercial.",
    type: "website",
  },
  // TODO GazinSemijoias: depois de verificar o domínio no Business Manager, colar aqui o valor da meta tag.
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
      <body className={`${montserrat.variable} ${playfair.variable} min-h-screen font-sans antialiased`}>
        <MetaPixelNoscript />
        {children}
      </body>
    </html>
  );
}
