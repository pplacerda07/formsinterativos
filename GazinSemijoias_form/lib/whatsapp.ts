import { FormData } from "./validators";
import { onlyDigits } from "./utils";

// GazinSemijoias: numero comercial
export const WHATSAPP_TARGET = "5567992487358"; // 55 + 67 + 992487358

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
  return `https://api.whatsapp.com/send?phone=${onlyDigits(WHATSAPP_TARGET)}&text=${encoded}`;
}
