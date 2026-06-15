export type Option = { value: string; label: string; emoji?: string };

export const cargoOptions: Option[] = [
  { value: "Dono / Sócio", label: "Dono / Sócio", emoji: "👑" },
  { value: "Diretor Comercial / CCO", label: "Diretor Comercial / CCO", emoji: "🎯" },
  { value: "Gerente Comercial", label: "Gerente Comercial", emoji: "📊" },
  { value: "Vendedor / BDR", label: "Vendedor / BDR", emoji: "💼" },
  { value: "Marketing", label: "Marketing", emoji: "📣" },
  { value: "Outro", label: "Outro", emoji: "🧑‍💻" },
];

export const segmentoOptions: Option[] = [
  { value: "Agência Digital / Marketing", label: "Agência Digital / Marketing", emoji: "🏢" },
  { value: "Consultoria", label: "Consultoria", emoji: "🎓" },
  { value: "SaaS / Tecnologia", label: "SaaS / Tecnologia", emoji: "☁️" },
  { value: "Clínica B2B / Saúde", label: "Clínica B2B / Saúde", emoji: "🏥" },
  { value: "Imobiliária", label: "Imobiliária", emoji: "🏠" },
  { value: "Franquia", label: "Franquia", emoji: "🏪" },
  { value: "Contabilidade / Escritório", label: "Contabilidade / Escritório", emoji: "📑" },
  { value: "Distribuidora / Indústria", label: "Distribuidora / Indústria", emoji: "📦" },
  { value: "Serviços B2B", label: "Serviços B2B", emoji: "🛠️" },
  { value: "Outro", label: "Outro", emoji: "🧩" },
];

export const tamanhoTimeOptions: Option[] = [
  { value: "Só eu", label: "Só eu", emoji: "👤" },
  { value: "2 a 5 pessoas", label: "2 a 5 pessoas", emoji: "👥" },
  { value: "6 a 10 pessoas", label: "6 a 10 pessoas", emoji: "👥👥" },
  { value: "11 a 20 pessoas", label: "11 a 20 pessoas", emoji: "👥👥👥" },
  { value: "20+ pessoas", label: "20+ pessoas", emoji: "🏟️" },
];

export const prospeccaoOptions: Option[] = [
  { value: "Sim, temos time dedicado", label: "Sim, temos time dedicado pra isso", emoji: "✅" },
  { value: "Sim, eu mesmo prospecto", label: "Sim, eu mesmo prospecto", emoji: "🤝" },
  { value: "Não, só recebemos inbound", label: "Não, só recebemos leads por inbound/indicação", emoji: "📥" },
  { value: "Não fazemos prospecção", label: "Não fazemos prospecção ainda", emoji: "❌" },
];

export const volumeOptions: Option[] = [
  { value: "0 a 50", label: "0 a 50 leads/mês", emoji: "📉" },
  { value: "50 a 200", label: "50 a 200 leads/mês", emoji: "📊" },
  { value: "200 a 500", label: "200 a 500 leads/mês", emoji: "📈" },
  { value: "500+", label: "500+ leads/mês", emoji: "🚀" },
  { value: "Não medimos", label: "Não tenho ideia / não medimos", emoji: "🤷" },
];

export const ferramentasOptions: Option[] = [
  { value: "Planilha (Excel / Sheets)", label: "Planilha (Excel / Google Sheets)", emoji: "📋" },
  { value: "WhatsApp manual", label: "WhatsApp manual", emoji: "📱" },
  { value: "Apollo / Hunter / Lusha", label: "Apollo / Hunter / Lusha", emoji: "🎯" },
  { value: "LinkedIn Sales Navigator", label: "LinkedIn Sales Navigator", emoji: "🔵" },
  { value: "HubSpot", label: "HubSpot", emoji: "🟠" },
  { value: "RD Station", label: "RD Station", emoji: "🟢" },
  { value: "Pipedrive", label: "Pipedrive", emoji: "🔴" },
  { value: "Outra automação", label: "Outra automação", emoji: "🤖" },
  { value: "Nada estruturado", label: "Nada estruturado", emoji: "🚫" },
];

export const canalOptions: Option[] = [
  { value: "WhatsApp", label: "WhatsApp", emoji: "💬" },
  { value: "Cold call", label: "Cold call (telefone)", emoji: "📞" },
  { value: "E-mail", label: "E-mail", emoji: "📧" },
  { value: "LinkedIn", label: "LinkedIn", emoji: "💼" },
  { value: "Mix de canais", label: "Mix de canais", emoji: "🔀" },
];

export const gargaloOptions: Option[] = [
  { value: "Não gero leads suficientes", label: "Não gero leads suficientes", emoji: "🕳️" },
  { value: "Gero leads, mas não convertem", label: "Gero leads, mas não convertem", emoji: "🎯" },
  { value: "Time não faz follow-up", label: "Meu time não faz follow-up consistente", emoji: "⏰" },
  { value: "Sem visibilidade do funil", label: "Não tenho visibilidade do funil", emoji: "👁️" },
  { value: "Custo de aquisição alto", label: "Custo de aquisição muito alto", emoji: "💸" },
  { value: "Leads desorganizados", label: "Leads chegam desorganizados / sem padrão", emoji: "🧹" },
];

export const ticketOptions: Option[] = [
  { value: "Até R$ 500", label: "Até R$ 500", emoji: "💵" },
  { value: "R$ 500 a R$ 2.000", label: "R$ 500 a R$ 2.000", emoji: "💰" },
  { value: "R$ 2.000 a R$ 10.000", label: "R$ 2.000 a R$ 10.000", emoji: "💎" },
  { value: "R$ 10.000+", label: "R$ 10.000+", emoji: "🏆" },
  { value: "Recorrência mensal (SaaS)", label: "Recorrência mensal (SaaS / assinatura)", emoji: "📐" },
];

export const investimentoOptions: Option[] = [
  { value: "Nada", label: "Nada (não temos verba alocada)", emoji: "🫥" },
  { value: "Até R$ 1.000", label: "Até R$ 1.000/mês", emoji: "🪙" },
  { value: "R$ 1.000 a R$ 3.000", label: "R$ 1.000 a R$ 3.000/mês", emoji: "💵" },
  { value: "R$ 3.000 a R$ 10.000", label: "R$ 3.000 a R$ 10.000/mês", emoji: "💰" },
  { value: "R$ 10.000+", label: "R$ 10.000+/mês", emoji: "💎" },
];

export const decisorOptions: Option[] = [
  { value: "Eu mesmo", label: "Eu mesmo", emoji: "🙋" },
  { value: "Eu + sócio/diretoria", label: "Eu + sócio/diretoria", emoji: "🤝" },
  { value: "Diretoria / superior", label: "Diretoria / superior", emoji: "👔" },
  { value: "Outra área", label: "Outra área (financeiro, etc.)", emoji: "🧑‍💼" },
];

export const urgenciaOptions: Option[] = [
  { value: "Tô perdendo deal, preciso agora", label: "Tô perdendo deal por isso, preciso AGORA", emoji: "🔥" },
  { value: "Próximos 30 dias", label: "Quero começar nos próximos 30 dias", emoji: "⚡" },
  { value: "60 a 90 dias", label: "Próximos 60 a 90 dias", emoji: "📅" },
  { value: "Só pesquisando", label: "Só estou pesquisando por enquanto", emoji: "🔍" },
];
