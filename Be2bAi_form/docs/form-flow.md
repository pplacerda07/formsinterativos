# 📋 Form Flow Be2B AI | Qualificação de Lead

> **Objetivo único:** entregar pra **IA do Be2B** um lead **pré-qualificado**, com todo o briefing comercial pronto. Quem atende, qualifica e fecha é a própria IA. O form é a porta de entrada da demo (dogfooding: o lead experimenta o produto sendo atendido por ele).
>
> **Princípio de design:** commitment escalado. Começa fácil (atrai), aprofunda no meio (filtra curiosos), aperta no fim (qualifica BANT). 5 etapas, nem corredor longo nem isca rasa.
>
> **Sacada de posicionamento:** o CTA final NÃO é "falar com vendedor". É **"falar com o robô"**. O lead vê a tecnologia funcionando na pele dele antes de comprar.

---

## 🎯 REGRAS DE NEGÓCIO GLOBAIS

| Regra | Definição |
|---|---|
| **Destino do form** | WhatsApp `+55 67 9177-6355` (número da IA Be2B, não é humano) |
| **Redirect** | Direto em `wa.me/...` ao concluir Etapa 5, sem tela intermediária |
| **Score** | ❌ Não usar. Mensagem limpa, a IA lê o briefing e conduz a conversa |
| **Validação** | Cada etapa valida antes de avançar (zod + react-hook-form) |
| **Persistência** | `localStorage` durante o preenchimento (não perde dado se fechar a aba) |
| **Voltar** | Permitido entre etapas, exceto após confirmar Etapa 5 |
| **Mobile-first** | 80%+ dos leads vão preencher no celular |
| **Tempo alvo** | 90s a 2min de ponta a ponta |

---

## 🧭 ETAPA 1: IDENTIFICAÇÃO

> **Intenção:** zero atrito. Só o primeiro nome pra IA conseguir tratar o lead pelo nome no WhatsApp. O número e o contato vêm de graça quando ele clica no `wa.me` (o WhatsApp já expõe pra IA).

| Campo | Tipo | Obrigatório | Validação |
|---|---|---|---|
| Nome | text | ✅ | 2 a 60 caracteres |

**Microcopy CTA:** *"Continuar →"*

**Headline da etapa:** *"Vamos começar pelo básico"*
**Subheadline:** *"2 minutos do seu tempo. Ao final, você vai conversar com a nossa IA, o mesmo robô que prospecta pros nossos clientes."*

**Label do campo:** *"Como podemos te chamar?"*  ·  **Placeholder:** *"Seu primeiro nome"*

---

## 🧭 ETAPA 2: PERFIL DA EMPRESA

> **Intenção:** ICP fit. Aqui já filtra quem não é cliente.

### Cargo (single select)
- 👑 Dono / Sócio
- 🎯 Diretor Comercial / CCO
- 📊 Gerente Comercial
- 💼 Vendedor / BDR
- 📣 Marketing
- 🧑‍💻 Outro

### Segmento da empresa (single select, alinhado ao ICP)
- 🏢 Agência Digital / Marketing
- 🎓 Consultoria
- ☁️ SaaS / Tecnologia
- 🏥 Clínica B2B / Saúde
- 🏠 Imobiliária
- 🏪 Franquia
- 📑 Contabilidade / Escritório
- 📦 Distribuidora / Indústria
- 🛠️ Serviços B2B
- 🧩 Outro

### Tamanho do time comercial (single select)
- 👤 Só eu
- 👥 2 a 5 pessoas
- 👥👥 6 a 10 pessoas
- 👥👥👥 11 a 20 pessoas
- 🏟️ 20+ pessoas

### Site da empresa (opcional)
- Campo livre. A IA abre antes de iniciar a conversa pra contextualizar.

**CTA:** *"Avançar →"*

---

## 🧭 ETAPA 3: CENÁRIO ATUAL

> **Intenção:** entender stack e maturidade. Aqui descobre se é educação (verde) ou upgrade (maduro).

### Hoje vocês fazem prospecção ativa? (single)
- ✅ Sim, temos time dedicado pra isso
- 🤝 Sim, eu mesmo prospecto
- 📥 Não, só recebemos leads por inbound/indicação
- ❌ Não fazemos prospecção ainda

### Quantos leads vocês geram por mês hoje? (single)
- 📉 0 a 50
- 📊 50 a 200
- 📈 200 a 500
- 🚀 500+
- 🤷 Não tenho ideia / não medimos

### Ferramentas que usa hoje (multi-select)
- 📋 Planilha (Excel / Google Sheets)
- 📱 WhatsApp manual
- 🎯 Apollo / Hunter / Lusha
- 🔵 LinkedIn Sales Navigator
- 🟠 HubSpot
- 🟢 RD Station
- 🔴 Pipedrive
- 🤖 Outra automação
- 🚫 Nada estruturado

### Canal principal de abordagem (single)
- 💬 WhatsApp
- 📞 Cold call (telefone)
- 📧 E-mail
- 💼 LinkedIn
- 🔀 Mix de canais

**CTA:** *"Continuar →"*

---

## 🧭 ETAPA 4: DOR E AMBIÇÃO

> **Intenção:** gatilho emocional. A IA usa essa resposta como abertura do WhatsApp ("vi que seu maior gargalo é X, posso te mostrar como a gente resolve isso?").

### Qual seu MAIOR gargalo em vendas hoje? (single, radio card grande)
- 🕳️ Não gero leads suficientes
- 🎯 Gero leads, mas não convertem
- ⏰ Meu time não faz follow-up consistente
- 👁️ Não tenho visibilidade do funil
- 💸 Custo de aquisição muito alto
- 🧹 Leads chegam desorganizados / sem padrão

### Qual o ticket médio do SEU cliente? (single)
- 💵 Até R$ 500
- 💰 R$ 500 a R$ 2.000
- 💎 R$ 2.000 a R$ 10.000
- 🏆 R$ 10.000+
- 📐 Recorrência mensal (SaaS / assinatura)

### Onde você quer chegar nos próximos 90 dias? (textarea curto)
- Placeholder: *"Ex: triplicar agendamentos sem contratar mais BDR / sair da planilha / abrir nova praça em SP..."*
- Min 10 / max 240 caracteres

**CTA:** *"Quase lá →"*

---

## 🧭 ETAPA 5: PRONTIDÃO COMERCIAL

> **Intenção:** BANT puro. Aqui separa MQL de SQL.

### Quanto vocês investem hoje em prospecção/mês? (single)
- 🫥 Nada (não temos verba alocada)
- 🪙 Até R$ 1.000
- 💵 R$ 1.000 a R$ 3.000
- 💰 R$ 3.000 a R$ 10.000
- 💎 R$ 10.000+

### Quem decide a contratação? (single)
- 🙋 Eu mesmo
- 🤝 Eu + sócio/diretoria
- 👔 Diretoria / superior
- 🧑‍💼 Outra área (financeiro, etc.)

### Qual a urgência? (single, radio card)
- 🔥 Tô perdendo deal por isso, preciso AGORA
- ⚡ Quero começar nos próximos 30 dias
- 📅 Próximos 60 a 90 dias
- 🔍 Só estou pesquisando por enquanto

---

### 🤖 CTA FINAL: "Fala com a IA"

**Botão principal:** *"Quer testar o produto? É só falar com ele →"*

**Microcopy de apoio (acima do botão):**
> *"Você está prestes a conversar com a nossa IA, o mesmo agente que prospecta pros nossos clientes 24/7. Ele já recebeu seu briefing. Manda 'oi' que ele assume daqui."*

**Subtexto (abaixo do botão, pequeno):**
> *"Atendimento 100% por IA · Sem espera · Resposta na hora"*

---

## 💬 MENSAGEM FINAL: TEMPLATE PRO WHATSAPP (briefing pra IA)

Ao clicar no CTA final, montar **uma única string** URL-encoded e abrir `https://wa.me/5567991776355?text=...`.

A mensagem é escrita em **primeira pessoa do lead** (porque é ele quem "envia") e funciona como briefing completo pra IA assumir a conversa já contextualizada.

```
🚀 Oi! Sou *{nome}* e acabei de preencher o form do site. Quero testar o Be2B AI.

Segue meu briefing pra você já entrar contextualizado 👇
{siteSeExistir}
━━━ PERFIL ━━━
• Cargo: {cargo}
• Segmento: {segmento}
• Time comercial: {tamanhoTime}

━━━ CENÁRIO ATUAL ━━━
• Prospecção ativa: {prospeccao}
• Volume/mês: {volume}
• Stack: {ferramentas}
• Canal principal: {canal}

━━━ DOR & AMBIÇÃO ━━━
• Maior gargalo: {gargalo}
• Ticket médio: {ticket}
• Meta 90d: "{meta}"

━━━ PRONTIDÃO ━━━
• Investimento/mês: {investimento}
• Decisor: {decisor}
• Urgência: {urgencia}

━━━━━━━━━━━━━━━━━
Pode me explicar como o Be2B funciona pro meu caso? 🙌
```

> **Nota pra IA (configurar no agente):** quando receber uma mensagem com esse padrão de cabeçalho `🚀 Oi! Acabei de preencher o form`, assumir que é um lead da campanha, parsear os campos e começar a conversa já personalizada pelo segmento e dor declarada.

**Observação técnica:**
- Cada `\n` vira `%0A` no URL.
- `encodeURIComponent()` na string inteira antes de injetar no link.
- Telefone sem máscara no link: `5567991776355` (DDI + DDD + número, sem `+` nem espaços).

---

## 🚦 RESUMO DAS PERGUNTAS (16 ao total)

| Etapa | Qtd campos | Foco |
|---|---|---|
| 1. Identificação | 1 | Só primeiro nome |
| 2. Perfil | 4 (1 opcional) | ICP fit |
| 3. Cenário | 4 | Maturidade / stack |
| 4. Dor | 3 | Gatilho emocional |
| 5. Prontidão | 3 | BANT |
| **Total** | **15 obrigatórios + 1 opcional** | · |

16 perguntas distribuídas em 5 telas. Etapa 1 é só pra quebrar o gelo, as outras 4 carregam o peso do briefing. WhatsApp e e-mail saem de graça quando ele abre o `wa.me`.

---

## ✅ DEFINIÇÕES DE DESIGN (entrarão no Tailwind)

### Paleta Be2B Indigo
```
--bg-base       #0A0B1E   /* fundo escuro premium */
--bg-surface    #14152B   /* cards / inputs */
--bg-elevated   #1C1E3D   /* hover / focus */
--primary       #4F46E5   /* indigo CTA */
--primary-hover #6366F1
--accent        #8B5CF6   /* violeta, destaques e progresso */
--accent-soft   #A78BFA
--silver-1      #C0C5CE   /* logo metálico, sombra */
--silver-2      #E8EAF0   /* logo metálico, brilho */
--text-primary  #F4F4F8
--text-muted    #8B8FA8
--border        #2A2D4A
--success       #10B981
--danger        #EF4444
```

### Tipografia
- **Display/Headings:** Geist Sans (ou Inter como fallback), peso 600/700
- **Body:** Geist Sans, peso 400/500
- **Acento metálico (logo)**: gradient linear `silver-1 → silver-2 → silver-1`

### Tom visual
- Glass cards sutis (`backdrop-blur` + borda 1px `--border`)
- Cantos arredondados generosos (`rounded-2xl`)
- Sombra suave indigo (`shadow-[0_0_40px_rgba(79,70,229,0.15)]`)
- Progress bar gradient indigo→violeta no topo

---

## 📦 PRÓXIMOS ARTEFATOS

1. `tailwind.config.ts` com a paleta acima
2. `lib/whatsapp.ts`: função `buildWhatsAppUrl(payload)`
3. `lib/validators.ts`: zod schema por etapa
4. `components/form/FormWizard.tsx` + 5 steps
5. `app/page.tsx`: landing + wizard
6. Logo Be2B AI em `public/logo-be2b.png`
