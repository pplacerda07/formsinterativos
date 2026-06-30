# Tecdisa · Form de Qualificação

Form interativo de 4 etapas que coleta o briefing do lead e redireciona direto pro WhatsApp comercial da Tecdisa.

Mesma stack e estrutura do `Be2bAi_form`, com copy adaptada pro nicho de distribuidoras (ERP, força de vendas, B2B e-commerce).

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · react-hook-form · zod · framer-motion · lucide-react · Meta Pixel

## Rodando local

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
Tecdisa_form/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── brand/Logo.tsx
│   ├── ui/{Button, Input, RadioCard}.tsx
│   ├── pixel/MetaPixel.tsx
│   └── form/
│       ├── FormWizard.tsx
│       ├── ProgressBar.tsx
│       ├── StepShell.tsx
│       └── steps/Step{1..4}.tsx
├── lib/
│   ├── validators.ts   (zod schemas + tipos)
│   ├── options.ts      (opções de cargo, gargalo, urgência adaptadas pro nicho)
│   ├── whatsapp.ts     (builder do link wa.me)
│   ├── pixel.ts        (Meta Pixel: trackCompleteRegistration, trackLead, trackWhatsAppLead)
│   └── utils.ts        (cn, máscara de telefone)
├── docs/
│   └── form-flow.md    (documento mestre do form)
└── public/
    └── logo.png        (opcional, drop o arquivo aqui pra usar logo em imagem)
```

## Como funciona

1. Lead acessa, vê landing curta com 3 badges (Estoque sob controle · Força de vendas mobile · BI integrado).
2. Preenche 4 etapas: Nome + Cargo + Gargalo + Urgência.
3. Ao clicar no CTA final, é redirecionado pro WhatsApp `+55 67 9943-1174` em nova aba com a mensagem já pronta.
4. O time comercial recebe o briefing completo formatado e dá sequência na conversa.

O form salva progresso em `localStorage` (`tecdisa_form_v1`) e limpa após o envio.

## ⚠️ ANTES DE COLOCAR EM PRODUÇÃO

### 1. Pixel da Meta (configurado)

Pixel `WPP Tecdisa Teste` · ID `1916465765462262`. Já está nos 2 arquivos:

- `lib/pixel.ts` (constante `META_PIXEL_ID` no topo)
- `components/pixel/MetaPixel.tsx` (constante `META_PIXEL_ID`)

Se precisar trocar pra outro Pixel no futuro, é só editar esses 2 arquivos.

### 2. Verificar o domínio (após deploy)

Depois que tiver a URL final da Vercel:

1. Vai em Business Manager → Domínios
2. Adiciona o domínio
3. Pega o código `<meta name="facebook-domain-verification" content="..." />`
4. Em `app/layout.tsx`, descomenta o bloco `other:` e cola o valor

### 3. Configurar evento prioritário (AEM)

No Events Manager, após eventos chegarem:
1. Configurar Eventos da Web → adiciona o domínio
2. Slot 1: `Lead` (ou `CompleteRegistration` pra warmup inicial)

## Onde mudar coisas

- **Número do WhatsApp:** `lib/whatsapp.ts` (constante `WHATSAPP_TARGET`).
- **Template da mensagem:** `lib/whatsapp.ts` (função `buildWhatsAppUrl`).
- **Perguntas e opções:** `lib/options.ts` + steps em `components/form/steps/`.
- **Validação:** `lib/validators.ts`.
- **Paleta:** `tailwind.config.ts` + `app/globals.css`.
- **Doc mestre:** `docs/form-flow.md`.
