# Styled Components — Convenções

## Padrão de importação

Sempre importar os estilos do componente com o alias `S`:

```ts
import * as S from './styles'
```

Nunca importar estilos com nomes individuais (`import { Wrapper } from './styles'`).
Nunca usar CSS Modules, Tailwind ou estilos inline.

## Estrutura de um arquivo `styles.ts`

```ts
import styled from 'styled-components'
import { colors, fonts, spacings } from '@/styles/tokens'
import { media } from '@/styles/mediaQueries'

export const Wrapper = styled.div`
  padding: ${spacings.medium};
  background-color: ${colors.background};

  ${media.desktopUp} {
    padding: ${spacings.large};
  }
`
```

Regras:

- O wrapper raiz do componente se chama sempre `Wrapper`
- Seções de layout se chamam `Section`, `Inner`, `Content` ou similar — nunca `div1`, `div2`
- Sempre usar tokens de `@/styles/tokens` e breakpoints de `@/styles/mediaQueries`
- Nunca usar `px` hardcoded para cores, espaçamentos ou fontes quando existe token equivalente

## Sobrescrever estilos via `selector`

Os componentes `Heading` e `Text` aceitam uma prop `selector` que adiciona uma classe CSS ao elemento.
Use isso para aplicar estilos contextuais sem criar componentes novos:

```tsx
// no componente pai
<Heading selector="hero-title">Islândia</Heading>
<Text selector="hero-description">Expedição de luxo</Text>
```

```ts
// no styles.ts do componente pai
export const Wrapper = styled.div`
  .hero-title {
    font-size: 64px;
    color: ${colors.light};
  }

  .hero-description {
    color: ${colors.secondary};
  }
`
```

Prefira esta abordagem a criar um novo componente styled que duplique `Heading` ou `Text`.

## Estrutura de arquivos por componente

Cada componente deve ter:

```text
src/components/MeuComponente/
  index.tsx   # lógica e JSX
  styles.ts   # Styled Components
```

Nunca colocar estilos no `index.tsx`. Nunca criar arquivos `.css`, `.scss` ou `.module.css`.

## Extensão de componentes styled

Ao precisar de uma variação de um componente styled existente, estenda-o com `styled(Base)`:

```ts
export const Wrapper = styled.button`
  background: ${colors.primary};
`

export const OutlineWrapper = styled(Wrapper)`
  background: transparent;
  border: 2px solid ${colors.primary};
`
```

Nunca duplicar todo o CSS — estenda e sobrescreva apenas o que muda.
