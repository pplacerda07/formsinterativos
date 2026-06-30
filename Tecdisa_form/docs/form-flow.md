# 📋 Form Flow Tecdisa | Qualificação de Lead

> **Objetivo único:** entregar pro time comercial da Tecdisa um lead **pré-qualificado** com o mínimo de atrito. O form é a porta de entrada da demo do ADS ERP.
>
> **Princípio de design:** 4 etapas, 1 campo de texto (nome) e 3 seleções. Tempo alvo: 30 a 60 segundos.
>
> **Estrutura clonada de:** `Be2bAi_form` (mesma stack, mesma UX, copy adaptada pro nicho de distribuidoras).

---

## 🎯 REGRAS DE NEGÓCIO GLOBAIS

| Regra | Definição |
|---|---|
| **Destino do form** | WhatsApp `+55 67 9943-1174` (comercial da Tecdisa) |
| **Redirect** | `window.open` em nova aba ao concluir Etapa 4 |
| **Pixel da Meta** | `1916465765462262` (WPP Tecdisa Teste) |
| **Eventos disparados** | `CompleteRegistration`, `Lead`, `WhatsAppLead` (custom) |
| **Validação** | zod + react-hook-form, por etapa |
| **Persistência** | `localStorage` (`tecdisa_form_v1`) |
| **Mobile-first** | 80%+ dos leads vão preencher no celular |

---

## 🧭 ETAPA 1: IDENTIFICAÇÃO

| Campo | Tipo | Obrigatório | Validação |
|---|---|---|---|
| Nome | text | ✅ | 2 a 60 caracteres |

**Label:** *"Como podemos te chamar?"*

---

## 🧭 ETAPA 2: CARGO

Adaptado pra realidade de uma distribuidora.

- 👑 Dono / Sócio da distribuidora
- 🎯 Diretor / CEO
- 📊 Gerente Comercial
- 📦 Gerente Operacional / Logística
- 💰 Gerente Financeiro
- 💻 TI / Sistemas
- 🧑‍💼 Outro

---

## 🧭 ETAPA 3: MAIOR GARGALO

Dores específicas de quem opera distribuidora e precisa de um ERP melhor.

- 📦 Estoque caótico (perda, ruptura, divergência)
- 📝 Vendedores ainda anotam pedido na mão / planilha
- 💸 Sem visibilidade do financeiro e inadimplência
- 🧹 Separação e conferência sem padronização
- 📞 Cobrança manual / WhatsApp desorganizado
- 🐌 Sistema atual trava / é lento / não atende mais
- 🛒 Não tenho e-commerce B2B pros meus clientes
- 🎲 Falta relatório, decido tudo no feeling

---

## 🧭 ETAPA 4: URGÊNCIA

- 🔥 Tô perdendo dinheiro com isso, preciso AGORA
- ⚡ Quero implantar nos próximos 30 dias
- 📅 Próximos 60 a 90 dias
- 🔍 Só estou pesquisando por enquanto

---

### 🎯 CTA FINAL

**Botão principal:** *"Quero ver o ADS ERP funcionando →"*

**Microcopy de apoio:**
> *"Em segundos você cai no WhatsApp do nosso time comercial. Eles já recebem seu briefing pronto e te mostram o ADS ERP rodando no cenário da sua distribuidora."*

---

## 💬 MENSAGEM FINAL: TEMPLATE PRO WHATSAPP

```
Oi! Sou *{nome}* e acabei de preencher o form do site. Quero conhecer o ERP da Tecdisa pra minha distribuidora.

Resumo rápido:
• Cargo: {cargo}
• Maior gargalo: {gargalo}
• Urgência: {urgencia}

Pode me explicar como o ADS ERP funciona pro meu caso?
```

---

## 📊 EVENTOS DO PIXEL

| Evento | Tipo | Quando |
|---|---|---|
| `CompleteRegistration` | Standard | Form completo (lead bruto) |
| `Lead` | Standard | Lead qualificado |
| `WhatsAppLead` | Custom | Lead que vai pro WhatsApp |

Todos com:
- `content_name`: diferenciador (`Tecdisa Form`, `Tecdisa Form - Qualified`, `Tecdisa Form - WhatsApp`)
- `content_category`: cargo
- `content_id`: `urgencia-<slug>`

---

## ⚠️ TODO ANTES DE PUBLICAR EM PRODUÇÃO

1. ✅ **Pixel da Meta**: já configurado (`1916465765462262` em `lib/pixel.ts` + `components/pixel/MetaPixel.tsx`)
2. **Verificar o domínio** no Business Manager e colar a meta tag em `app/layout.tsx` (`metadata.other`)
3. **Criar logo PNG** em `public/logo.png` se quiser substituir o texto do componente `Logo`
4. **Deploy na Vercel** com Root Directory apontando pra `Tecdisa_form/`
5. Depois de subir, **configurar evento prioritário (AEM)** no Events Manager com `Lead` ou `CompleteRegistration` no slot 1
