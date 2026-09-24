# Formulários Interativos de Qualificação de Leads

Três formulários em etapas que qualificam leads e os levam ao WhatsApp comercial com o briefing pronto, disparando eventos do Meta Pixel para mensurar o funil de campanhas.

Projeto desenvolvido por Pedro Paulo Lacerda para três clientes: Be2B AI, Gazin Semijoias e Tecdisa.

| App | Cliente | Etapas do formulário | Documentação |
|---|---|---|---|
| [Be2bAi_form](Be2bAi_form) | Be2B AI | nome, cargo, gargalo, urgência | [README](Be2bAi_form/README.md) · [fluxo do form](Be2bAi_form/docs/form-flow.md) |
| [GazinSemijoias_form](GazinSemijoias_form) | Gazin Semijoias | nome, perfil, investimento, CNPJ | [guia visual](GazinSemijoias_form/estruturavisual.md) |
| [Tecdisa_form](Tecdisa_form) | Tecdisa | nome, cargo, segmento, gargalo, urgência | [README](Tecdisa_form/README.md) · [fluxo do form](Tecdisa_form/docs/form-flow.md) |

## Funcionalidades

- **Wizard em etapas** com barra de progresso, botões de voltar e avançar e transições animadas entre as telas.
- **Validação por etapa**: o lead só avança quando os campos da etapa atual são válidos, com mensagens de erro em português.
- **Progresso salvo no navegador** (`localStorage`), restaurado ao voltar à página e apagado após o envio.
- **Redirecionamento ao WhatsApp**: ao concluir, as respostas viram uma mensagem formatada e o WhatsApp comercial abre em nova aba com o texto preenchido.
- **Eventos do Meta Pixel** em cada ponto do funil: `PageView`, `CompleteRegistration`, `Lead` e o evento personalizado `WhatsAppLead`. Be2B AI e Gazin Semijoias também registram o início do preenchimento (`inicio_form`).
- **Lead qualificado no Be2B AI**: o evento `Lead` só dispara quando cargo e urgência atendem aos critérios definidos em `lib/pixel.ts`.
- **Identidade visual por cliente**: logo, paleta no Tailwind e tipografia próprias em cada app.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · React Hook Form · Zod · Framer Motion · lucide-react · Meta Pixel

## Estrutura

Os três apps são independentes e seguem a mesma organização:

```
formsinterativos/
├── Be2bAi_form/            # app Next.js do Be2B AI
├── GazinSemijoias_form/    # app Next.js da Gazin Semijoias
└── Tecdisa_form/           # app Next.js da Tecdisa
    ├── app/                # layout raiz (script do Pixel) e página única
    ├── components/form/    # FormWizard, barra de progresso e etapas
    ├── components/pixel/   # script base e noscript do Meta Pixel
    └── lib/                # validators (Zod), options, whatsapp e pixel
```

## Como rodar localmente

Pré-requisito: Node.js 20 ou superior. Cada formulário roda separadamente, a partir da própria pasta:

```bash
git clone https://github.com/pplacerda07/formsinterativos.git
cd formsinterativos/Tecdisa_form   # ou Be2bAi_form / GazinSemijoias_form
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para gerar o build de produção, use `npm run build` e depois `npm start`.

Não há variáveis de ambiente. O ID do Pixel e o número de destino do WhatsApp são constantes no código, em `lib/pixel.ts`, `components/pixel/MetaPixel.tsx` e `lib/whatsapp.ts`. Ajuste esses arquivos antes de reaproveitar um formulário em outro projeto.

## Decisões técnicas

- **Validação em duas camadas**: cada etapa tem seu próprio schema Zod, verificado antes de avançar, e o envio final valida o formulário completo (`fullFormSchema`) antes de montar a mensagem.
- **Pixel com deduplicação e fallback**: cada evento recebe um `eventID` único. Se o `fbq` não tiver carregado, o evento é enviado direto ao endpoint de rastreamento da Meta por `sendBeacon` (ou imagem), levando os cookies `_fbp` e `_fbc` ou o `fbclid` da URL.
- **Script base no layout raiz**: o Pixel é injetado no `<head>` com fallback em `<noscript>`, garantindo o `PageView` em todo carregamento.
- **Um app por cliente**: dependências, deploy, copy e identidade visual isolados, sem acoplamento entre os projetos.

## Autor

Pedro Paulo Lacerda · [github.com/pplacerda07](https://github.com/pplacerda07)
