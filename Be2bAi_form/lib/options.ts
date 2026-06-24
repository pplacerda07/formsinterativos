export type Option = { value: string; label: string; emoji?: string };

export const cargoOptions: Option[] = [
  { value: "Dono / Sócio", label: "Dono / Sócio", emoji: "👑" },
  { value: "Diretor Comercial / CCO", label: "Diretor Comercial / CCO", emoji: "🎯" },
  { value: "Gerente Comercial", label: "Gerente Comercial", emoji: "📊" },
  { value: "Vendedor / BDR", label: "Vendedor / BDR", emoji: "💼" },
  { value: "Marketing", label: "Marketing", emoji: "📣" },
  { value: "Outro", label: "Outro", emoji: "🧑‍💻" },
];

export const gargaloOptions: Option[] = [
  { value: "Não gero leads suficientes", label: "Não gero leads suficientes", emoji: "🕳️" },
  { value: "Gero leads, mas não convertem", label: "Gero leads, mas não convertem", emoji: "🎯" },
  { value: "Time não faz follow-up", label: "Meu time não faz follow-up consistente", emoji: "⏰" },
  { value: "Sem visibilidade do funil", label: "Não tenho visibilidade do funil", emoji: "👁️" },
  { value: "Custo de aquisição alto", label: "Custo de aquisição muito alto", emoji: "💸" },
  { value: "Leads desorganizados", label: "Leads chegam desorganizados / sem padrão", emoji: "🧹" },
];

export const urgenciaOptions: Option[] = [
  { value: "Tô perdendo deal, preciso agora", label: "Tô perdendo deal por isso, preciso AGORA", emoji: "🔥" },
  { value: "Próximos 30 dias", label: "Quero começar nos próximos 30 dias", emoji: "⚡" },
  { value: "60 a 90 dias", label: "Próximos 60 a 90 dias", emoji: "📅" },
  { value: "Só pesquisando", label: "Só estou pesquisando por enquanto", emoji: "🔍" },
];
