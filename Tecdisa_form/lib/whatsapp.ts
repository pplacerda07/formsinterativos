import { FormData } from "./validators";
import { onlyDigits } from "./utils";

// Tecdisa: numero comercial oficial (https://tecdisa.com.br)
export const WHATSAPP_TARGET = "5567999431174";

export function buildWhatsAppUrl(data: FormData): string {
  const message = [
    `Oi! Sou *${data.nome}* e acabei de preencher o form do site. Quero conhecer o ERP da Tecdisa pra minha distribuidora.`,
    "",
    "Resumo rápido:",
    `• Cargo: ${data.cargo}`,
    `• Maior gargalo: ${data.gargalo}`,
    `• Urgência: ${data.urgencia}`,
    "",
    "Pode me explicar como o ADS ERP funciona pro meu caso?",
  ].join("\n");

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${onlyDigits(WHATSAPP_TARGET)}?text=${encoded}`;
}
