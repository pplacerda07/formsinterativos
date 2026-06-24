import { FormData } from "./validators";
import { onlyDigits } from "./utils";

export const WHATSAPP_TARGET = "5567991776355";

export function buildWhatsAppUrl(data: FormData): string {
  const message = [
    `Oi! Sou *${data.nome}* e acabei de preencher o form do site. Quero testar o Be2B AI.`,
    "",
    "Resumo rápido:",
    `• Cargo: ${data.cargo}`,
    `• Maior gargalo: ${data.gargalo}`,
    `• Urgência: ${data.urgencia}`,
    "",
    "Pode me explicar como o Be2B funciona pro meu caso?",
  ].join("\n");

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${onlyDigits(WHATSAPP_TARGET)}?text=${encoded}`;
}
