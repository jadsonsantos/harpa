# Design System — Tokens e fundações visuais

Toda estilização deve usar os tokens do design system. Nunca usar valores hardcoded de cor, espaçamento ou tipografia.

## Tokens disponíveis

Arquivo: `src/styles/tokens.ts`

```ts
import { colors, fonts, spacings, borders, effects } from '@/styles/tokens'
```

### Cores (`colors`)

- `colors.primary` — `#1F1F1F` — cor principal, botões, textos em destaque
- `colors.secondary` — `#818181` — textos secundários
- `colors.light` — `#ffffff` — fundos claros, texto sobre fundo escuro
- `colors.dark` — `#000000` — preto puro
- `colors.background` — `#fafafa` — fundo de página
- `colors.border` — `#DFDFDF` — bordas e divisores

### Tipografia (`fonts`)

- `fonts.sans` — Inter (variável CSS `--font-inter`)
- `fonts.serif` — Playfair Display (variável CSS `--font-playfair`)

### Espaçamentos (`spacings`)

- `spacings.xsmall` — `16px`
- `spacings.small` — `24px`
- `spacings.medium` — `32px`
- `spacings.large` — `64px`
- `spacings.xlarge` — `128px`
- `spacings.xxlarge` — `164px`

## Funções utilitárias para estilos que se repetem (display: flex, ocultar no desktop ou mobile etc)

Arquivo: `src/styles/mixins.ts`

### Efeitos (`effects`)

- `effects.primary` — gradiente hover padrão (teal → cinza)

## Media queries

Arquivo: `src/styles/mediaQueries.ts`

```ts
import { media } from '@/styles/mediaQueries'
```

Usar sempre via `media.desktopUp`, nunca escrever breakpoints manualmente em px.

## Regras obrigatórias

- Nunca hardcodar cores, fontes ou espaçamentos — sempre usar tokens
- Nunca escrever breakpoints em px diretamente — sempre usar `media.*`
- Nunca importar tokens com caminho relativo (`../../styles/tokens`) — sempre usar o alias `@/styles/tokens`
