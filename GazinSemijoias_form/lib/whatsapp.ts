import { FormData } from "./validators";
import { onlyDigits } from "./utils";

// GazinSemijoias: numero comercial (TODO: preencher o número real)
export const WHATSAPP_TARGET = "5500000000000";

export function buildWhatsAppUrl(data: FormData): string {
  const message = [
    `Oi! Sou *${data.nome}* e acabei de preencher o form do site. Quero conhecer o atacado da Gazin Semijoias!`,
    "",
    "Meu perfil:",
    `• Atuação: ${data.perfil}`,
    `• Investimento: ${data.investimento}`,
    `• CNPJ: ${data.cnpj}`,
    "",
    "Podemos conversar sobre a revenda?",
  ].join("\n");

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${onlyDigits(WHATSAPP_TARGET)}?text=${encoded}`;
}
