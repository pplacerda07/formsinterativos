# Be2B AI · Form de Qualificação

Form interativo de 5 etapas que coleta o briefing do lead e redireciona direto pro WhatsApp da IA Be2B.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · react-hook-form · zod · framer-motion · lucide-react

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
Be2bAi_form/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── brand/Logo.tsx
│   ├── ui/{Button, Input, Textarea, RadioCard, CheckboxCard}.tsx
│   └── form/
│       ├── FormWizard.tsx
│       ├── ProgressBar.tsx
│       ├── StepShell.tsx
│       └── steps/Step{1..5}.tsx
├── lib/
│   ├── validators.ts   (zod schemas + tipos)
│   ├── options.ts      (opções de cada campo)
│   ├── whatsapp.ts     (builder do link wa.me)
│   └── utils.ts        (cn, máscara de telefone)
├── docs/
│   └── form-flow.md    (documento mestre do form)
└── public/
    └── logo-be2b.png   (drop aqui se quiser usar logo em imagem)
```

## Como funciona

1. Lead acessa, vê landing curta com 3 badges (100% IA · Resposta na hora · Sem vendedor chato).
2. Preenche 5 etapas com transição animada e validação em tempo real.
3. Ao clicar no CTA final, é redirecionado pro WhatsApp `+55 67 9177-6355` com a mensagem já pronta.
4. A IA recebe o briefing completo formatado e assume a conversa.

O form salva progresso em `localStorage` (`be2b_form_v1`) e limpa após o envio.

## Onde mudar coisas

- **Número do WhatsApp:** `lib/whatsapp.ts` (constante `WHATSAPP_TARGET`).
- **Template da mensagem:** `lib/whatsapp.ts` (função `buildWhatsAppUrl`).
- **Perguntas e opções:** `lib/options.ts` + steps em `components/form/steps/`.
- **Validação:** `lib/validators.ts`.
- **Paleta:** `tailwind.config.ts` + `app/globals.css`.
- **Doc mestre do form:** `docs/form-flow.md`.

## Logo

Atualmente a logo é renderizada via texto (`components/brand/Logo.tsx`) com efeito metálico CSS. Para usar a versão em imagem, coloque o arquivo em `public/logo-be2b.png` e troque o `Logo` por `<Image src="/logo-be2b.png" .../>`.
