export type Option = { value: string; label: string; emoji?: string };

export const perfilOptions: Option[] = [
  { value: "Já revendo", label: "Sim, já revendo e busco fornecedores", emoji: "💎" },
  { value: "Loja física/online", label: "Sim, tenho loja física ou online", emoji: "🏪" },
  { value: "Quero começar", label: "Não, mas quero começar a revender", emoji: "🚀" },
  { value: "Uso pessoal", label: "Não, procuro apenas para uso pessoal", emoji: "🎁" },
];

export const investimentoOptions: Option[] = [
  { value: "Ainda não invisto", label: "Ainda não invisto (estou começando)", emoji: "🌱" },
  { value: "Até R$ 1.000", label: "Até R$ 1.000 por mês", emoji: "💵" },
  { value: "De R$ 1.000 a R$ 5.000", label: "De R$ 1.000 a R$ 5.000 por mês", emoji: "💰" },
  { value: "Acima de R$ 5.000", label: "Acima de R$ 5.000 por mês", emoji: "👑" },
];

export const cnpjOptions: Option[] = [
  { value: "Sim", label: "Sim, já possuo CNPJ", emoji: "🏢" },
  { value: "Não, mas vou abrir", label: "Não, mas vou abrir em breve", emoji: "📝" },
  { value: "Compro no CPF", label: "Não, prefiro comprar no CPF", emoji: "👤" },
];
