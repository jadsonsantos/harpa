# CLAUDE.md

Contexto do projeto HÁRPÁ — site de viagens e expedições de luxo para a Islândia.

## Instruções do projeto

Sempre siga as regras deste projeto antes de gerar código.

## Documentação obrigatória

Leia os seguintes documentos antes de implementar qualquer funcionalidade:

- docs/ai/design-system.md
- docs/ai/components.md
- docs/ai/page-generation.md
- docs/ai/styled-components.md

Caso exista conflito entre a solicitação do usuário e estas regras, priorize as regras do projeto.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Styled Components (com SSR registry)
- next-intl (internacionalização)

## Comandos

- `npm run dev` — sobe o servidor local
- `npm run lint` — roda eslint
- `npm run build` — build de produção (rodar sempre antes de abrir PR)

⚠️ CI usa Node 18.x. Se o ambiente local estiver em outra versão (ex: Node 24), pode haver divergência entre passar local e passar no CI. Considerar `nvm use 18` antes de testar se houver dúvida.

## Internacionalização (next-intl)

- **Locales suportados**: `pt`, `en`, `nl` (sempre minúsculo, sem sufixo de região tipo `-BR`)
- **Locale padrão**: `pt`
- Arquivos de tradução ficam em `src/messages/pt.json`, `src/messages/en.json`, `src/messages/nl.json`
- Config do next-intl fica em `src/i18n/routing.ts` e `src/i18n/request.ts`
- O `src/middleware.ts` **precisa estar dentro de `src/`**, não na raiz do projeto (o projeto usa a convenção de pasta `src/`, e o Next.js exige que o middleware acompanhe essa convenção)

### Regra obrigatória para novos componentes

**Sempre que um componente novo tiver texto visível ao usuário (labels, títulos, botões, mensagens, etc.), o texto deve ser internacionalizado nos três idiomas (pt, en, nl) — nunca hardcoded.**

Padrão a seguir:

1. Usar `useTranslations` (client/server components) do `next-intl` para puxar o texto:

   ```tsx
   import { useTranslations } from 'next-intl'

   export default function MeuComponente() {
     const t = useTranslations('MeuComponente')
     return <Heading>{t('titulo')}</Heading>
   }
   ```

2. Adicionar a chave correspondente nos **três** arquivos de mensagens, com o namespace batendo o nome do componente:

   ```json
   // src/messages/pt.json
   {
     "MeuComponente": {
       "titulo": "Texto em português"
     }
   }
   ```

   ```json
   // src/messages/en.json
   {
     "MeuComponente": {
       "titulo": "Text in English"
     }
   }
   ```

   ```json
   // src/messages/nl.json
   {
     "MeuComponente": {
       "titulo": "Tekst in het Nederlands"
     }
   }
   ```

3. Para metadata de página (title/description), usar `generateMetadata` + `getTranslations` com namespace `Metadata`, seguindo o padrão já implementado em `src/app/[locale]/layout.tsx`.

4. Nunca deixar string de texto visível solta direto no JSX sem passar pelo `t(...)`, mesmo que seja só pra um idioma "por enquanto" — sempre criar a entrada nos três arquivos desde o início.

5. Se a tradução em `nl` (holandês) não for óbvia ou o nível de confiança for baixo, sinalizar explicitamente que aquela tradução é um rascunho e precisa de revisão humana (ex: comentário ou aviso na resposta), em vez de apresentar como definitiva.

## Estrutura de pastas relevante

```
src/
  app/
    [locale]/
      layout.tsx       # layout com NextIntlClientProvider, Header, Footer etc.
      page.tsx
      .../page.tsx
    layout.tsx          # root layout — só <html>/<body>, fontes (next/font), Providers, StyledComponentsRegistry
    providers.tsx        # GlobalStyles, SwiperStyles
  i18n/
    routing.ts
    request.ts
  messages/
    pt.json
    en.json
    nl.json
  middleware.ts           # tem que ficar aqui dentro, não na raiz
  styles/
    fonts.ts              # next/font (Inter, Playfair Display)
    tokens.ts             # colors, fonts, spacings, borders, effects
    global.ts             # GlobalStyle do styled-components
  lib/
    registry.tsx           # StyledComponentsRegistry (SSR, evita FOUC)
```

## Convenções gerais

- Comunicação em português, tom profissional mas conversacional
- Sempre rodar `npm run lint && npm run build` antes de abrir PR

## Pegadinhas já resolvidas (não repetir)

- `next.config.ts` não é suportado no Next 14 — usar `.mjs` ou `.js`
- `next.config.mjs` precisa apontar explicitamente o path do `request.ts` quando o projeto usa `src/`: `createNextIntlPlugin('./src/i18n/request.ts')`
- Root layout (`app/layout.tsx`) precisa ter `<html>`/`<body>`; o layout de `[locale]` não pode ter
- Path relativo de import das mensagens em `request.ts` precisa bater com a localização real de `src/messages/`
- Case do locale deve ser consistente em todo lugar (routing.ts, nome dos arquivos JSON, LanguageSwitcher) — usar sempre minúsculo
- `Providers` (GlobalStyles/SwiperStyles) e `StyledComponentsRegistry` precisam estar no root layout, ou a estilização quebra/pisca (FOUC)
- Fontes via `next/font` precisam ter a `.variable` aplicada na tag `<html>` do root layout, senão as variáveis CSS (`--font-inter`, `--font-playfair`) não resolvem

## Eficiência

Antes de procurar componentes no projeto:

1. Consulte docs/ai/components.md.
2. Utilize os caminhos descritos nesse documento.
3. Evite percorrer todo o diretório src/components.
4. Só faça buscas adicionais quando o componente necessário não estiver documentado.
