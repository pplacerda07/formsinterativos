export type Option = { value: string; label: string; emoji?: string };

export const cargoOptions: Option[] = [
  { value: "Dono / Sócio", label: "Dono / Sócio da distribuidora", emoji: "👑" },
  { value: "Diretor / CEO", label: "Diretor / CEO", emoji: "🎯" },
  { value: "Gerente Comercial", label: "Gerente Comercial", emoji: "📊" },
  { value: "Gerente Operacional", label: "Gerente Operacional / Logística", emoji: "📦" },
  { value: "Gerente Financeiro", label: "Gerente Financeiro", emoji: "💰" },
  { value: "TI / Sistemas", label: "TI / Sistemas", emoji: "💻" },
  { value: "Outro", label: "Outro", emoji: "🧑‍💼" },
];

export const gargaloOptions: Option[] = [
  { value: "Estoque caotico", label: "Estoque caótico (perda, ruptura, divergência)", emoji: "📦" },
  { value: "Vendedor sem app", label: "Vendedores ainda anotam pedido na mão / planilha", emoji: "📝" },
  { value: "Financeiro no escuro", label: "Sem visibilidade do financeiro e inadimplência", emoji: "💸" },
  { value: "Separacao sem padrao", label: "Separação e conferência sem padronização", emoji: "🧹" },
  { value: "Sistema atual ruim", label: "Sistema atual trava / é lento / não atende mais", emoji: "🐌" },
  { value: "Sem e-commerce B2B", label: "Não tenho e-commerce B2B pros meus clientes", emoji: "🛒" },
  { value: "Decidir no escuro", label: "Falta relatório, decido tudo no feeling", emoji: "🎲" },
];

export const urgenciaOptions: Option[] = [
  { value: "Tô perdendo dinheiro", label: "Tô perdendo dinheiro com isso, preciso AGORA", emoji: "🔥" },
  { value: "Próximos 30 dias", label: "Quero implantar nos próximos 30 dias", emoji: "⚡" },
  { value: "60 a 90 dias", label: "Próximos 60 a 90 dias", emoji: "📅" },
  { value: "Só pesquisando", label: "Só estou pesquisando por enquanto", emoji: "🔍" },
];
