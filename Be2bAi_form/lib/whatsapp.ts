import { FormData } from "./validators";
import { onlyDigits } from "./utils";

export const WHATSAPP_TARGET = "5567991776355";

export function buildWhatsAppUrl(data: FormData): string {
  const siteLine =
    data.site && data.site.trim().length > 0
      ? `\n🌐 ${data.site.trim()}`
      : "";

  const ferramentasStr =
    data.ferramentas.length > 0
      ? data.ferramentas.join(", ")
      : "Nenhuma informada";

  const message = [
    `🚀 Oi! Sou *${data.nome}* e acabei de preencher o form do site. Quero testar o Be2B AI.`,
    "",
    "Segue meu briefing pra você já entrar contextualizado 👇",
    `${siteLine ? siteLine + "\n" : ""}`,
    "━━━ PERFIL ━━━",
    `• Cargo: ${data.cargo}`,
    `• Segmento: ${data.segmento}`,
    `• Time comercial: ${data.tamanhoTime}`,
    "",
    "━━━ CENÁRIO ATUAL ━━━",
    `• Prospecção ativa: ${data.prospeccao}`,
    `• Volume/mês: ${data.volume}`,
    `• Stack: ${ferramentasStr}`,
    `• Canal principal: ${data.canal}`,
    "",
    "━━━ DOR & AMBIÇÃO ━━━",
    `• Maior gargalo: ${data.gargalo}`,
    `• Ticket médio: ${data.ticket}`,
    `• Meta 90d: "${data.meta}"`,
    "",
    "━━━ PRONTIDÃO ━━━",
    `• Investimento/mês: ${data.investimento}`,
    `• Decisor: ${data.decisor}`,
    `• Urgência: ${data.urgencia}`,
    "",
    "━━━━━━━━━━━━━━━━━",
    "Pode me explicar como o Be2B funciona pro meu caso? 🙌",
  ].join("\n");

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${onlyDigits(WHATSAPP_TARGET)}?text=${encoded}`;
}
