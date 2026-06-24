# 📋 Form Flow Be2B AI | Qualificação de Lead (v2 enxuto)

> **Objetivo único:** entregar pra **IA do Be2B** um lead **pré-qualificado** com o mínimo de atrito. Quem atende, qualifica e fecha é a própria IA. O form é a porta de entrada da demo.
>
> **Princípio de design v2:** o menos possível. 4 etapas, 1 campo de texto (nome) e 3 seleções. Tempo alvo: 45 segundos.

---

## 🎯 REGRAS DE NEGÓCIO GLOBAIS

| Regra | Definição |
|---|---|
| **Destino do form** | WhatsApp `+55 67 9177-6355` (número da IA Be2B) |
| **Redirect** | `window.open` em nova aba ao concluir Etapa 4, mantendo o form vivo pra garantir o disparo dos eventos do Pixel |
| **Score** | ❌ Não usar |
| **Validação** | Cada etapa valida antes de avançar (zod + react-hook-form) |
| **Persistência** | `localStorage` durante o preenchimento |
| **Voltar** | Permitido entre etapas |
| **Mobile-first** | 80%+ dos leads vão preencher no celular |
| **Tempo alvo** | 30 a 60 segundos |

---

## 🧭 ETAPA 1: IDENTIFICAÇÃO

> Zero atrito. Só o primeiro nome.

| Campo | Tipo | Obrigatório | Validação |
|---|---|---|---|
| Nome | text | ✅ | 2 a 60 caracteres |

**Label:** *"Como podemos te chamar?"*
**Placeholder:** *"Seu primeiro nome"*
**Headline:** *"Vamos começar pelo básico"*

---

## 🧭 ETAPA 2: CARGO

> Authority no BANT. A IA adapta o pitch dependendo de quem está do outro lado.

### Qual seu cargo? (single select)
- 👑 Dono / Sócio
- 🎯 Diretor Comercial / CCO
- 📊 Gerente Comercial
- 💼 Vendedor / BDR
- 📣 Marketing
- 🧑‍💻 Outro

---

## 🧭 ETAPA 3: MAIOR GARGALO

> Need no BANT. Gatilho emocional. A IA abre a conversa direto no problema declarado.

### Onde tá doendo de verdade? (single select)
- 🕳️ Não gero leads suficientes
- 🎯 Gero leads, mas não convertem
- ⏰ Meu time não faz follow-up consistente
- 👁️ Não tenho visibilidade do funil
- 💸 Custo de aquisição muito alto
- 🧹 Leads chegam desorganizados / sem padrão

---

## 🧭 ETAPA 4: URGÊNCIA

> Timing no BANT. Define se o lead é hot, warm ou cold.

### Qual a urgência? (single select)
- 🔥 Tô perdendo deal por isso, preciso AGORA
- ⚡ Quero começar nos próximos 30 dias
- 📅 Próximos 60 a 90 dias
- 🔍 Só estou pesquisando por enquanto

---

### 🤖 CTA FINAL: "Fala com a IA"

**Botão principal:** *"Quer testar o produto? É só falar com ele →"*

**Microcopy de apoio:**
> *"Você está prestes a conversar com a nossa IA, o mesmo agente que prospecta pros nossos clientes 24/7. Ele já recebeu seu briefing. Manda 'oi' que ele assume daqui."*

**Após o clique:** abre o WhatsApp em nova aba (`target="_blank"`), o form continua vivo na aba original mostrando link de fallback.

---

## 💬 MENSAGEM FINAL: TEMPLATE PRO WHATSAPP

```
Oi! Sou *{nome}* e acabei de preencher o form do site. Quero testar o Be2B AI.

Resumo rápido:
• Cargo: {cargo}
• Maior gargalo: {gargalo}
• Urgência: {urgencia}

Pode me explicar como o Be2B funciona pro meu caso?
```

> **Nota pra IA:** quando receber uma mensagem com cabeçalho `Oi! Sou *{nome}* e acabei de preencher o form do site`, assumir que é um lead da campanha e parsear os 3 campos abaixo (Cargo, Maior gargalo, Urgência) pra contextualizar a conversa.

---

## 📊 EVENTOS DO META PIXEL DISPARADOS

Ao clicar no CTA final da Etapa 4, disparam em paralelo:

| Evento | Tipo | Quando |
|---|---|---|
| `CompleteRegistration` | Standard | Form completo (lead bruto) |
| `Lead` | Standard | Lead qualificado |
| `WhatsAppLead` | Custom | Lead que vai pro WhatsApp |

Cada um com:
- `content_name`: diferenciador entre eventos
- `content_category`: cargo do lead
- `content_id`: `urgencia-<slug>`

---

## 🚦 RESUMO

| Etapa | Campo | Tipo |
|---|---|---|
| 1 | Nome | Texto |
| 2 | Cargo | Select |
| 3 | Maior gargalo | Select |
| 4 | Urgência | Select |
| **Total** | **4 perguntas (1 texto + 3 selects)** | · |

BANT cobre: Authority (cargo), Need (gargalo), Timing (urgência). Budget a IA pergunta na conversa.
