# Componentes disponíveis

Antes de criar qualquer componente, verifique se um equivalente já existe aqui.
Nunca criar duplicatas. Nunca usar elementos HTML brutos quando existe um componente equivalente.

---

## Button

**Caminho:** `src/components/Button`

Usar para qualquer ação interativa. Nunca usar `<button>` diretamente.

```tsx
import Button from '@/components/Button'
;<Button onClick={handleClick}>Reservar expedição</Button>
```

> O `Button` envolve o conteúdo em `<S.Wrapper>`. Se precisar de estilo invertido (fundo claro), use o `PrimaryButton` exportado de `./styles` diretamente via Styled Components no arquivo `styles.ts` do componente pai.

---

## CustomLink

**Caminho:** `src/components/CustomLink`

Usar para links externos (abre em nova aba por padrão). Nunca usar `<a>` diretamente.
Para navegação interna entre rotas, usar o `<Link>` do `next-intl`.

```tsx
import CustomLink from '@/components/CustomLink'
;<CustomLink href="https://wa.me/...">Fale conosco</CustomLink>
```

Props:

- `href` — URL de destino
- `target` — padrão `_blank`; passar `_self` para abrir na mesma aba

---

## Heading

**Caminho:** `src/components/Heading`

Usar para títulos e subtítulos. Nunca usar `<h1>`, `<h2>`, `<h3>` diretamente.
Renderiza como `<h3>` com estilos responsivos já aplicados.

```tsx
import Heading from '@/components/Heading'
;<Heading>Expedições para a Islândia</Heading>
```

Props:

- `selector` — classe CSS extra para sobrescrever estilos via Styled Components no contexto do pai

Aceita HTML como string via `dangerouslySetInnerHTML` (útil para textos com `<strong>`, `<em>`, etc.).

---

## Text

**Caminho:** `src/components/Text`

Usar para parágrafos e textos de corpo. Nunca usar `<p>` diretamente.
Renderiza como `<p>` com estilos de tipografia responsivos.

```tsx
import Text from '@/components/Text'
;<Text>Conheça as expedições exclusivas para a Islândia.</Text>
```

Props:

- `selector` — classe CSS extra para sobrescrever estilos via Styled Components no contexto do pai

Aceita HTML como string via `dangerouslySetInnerHTML`.

---

## InfoCard

**Caminho:** `src/components/InfoCard`

Usar para exibir um bloco informativo com título, lista de descrições e link.

```tsx
import InfoCard from '@/components/InfoCard'
;<InfoCard
  title="Expedição Aurora"
  description={['10 dias', 'Máximo 8 pessoas']}
  link={{ href: 'https://wa.me/...', text: 'Saiba mais' }}
/>
```

---

## PageHeading

**Caminho:** `src/components/PageHeading`

Usar para o bloco de título + descrição no topo de uma página interna (ex: Grupos, Private). Não inclui o `BackButton` — combine os dois manualmente quando a página precisar de navegação de volta.

O título renderiza como: `{titlePrefix} {titleMiddle} <i>{titleHighlight}</i>. {titleSuffix}`. `titleSuffix` é opcional, usado quando o título tem uma frase adicional depois do trecho em itálico (ex: Private).

```tsx
import PageHeading from '@/components/PageHeading'
;<PageHeading
  titlePrefix="Grupos:"
  titleMiddle="Jornadas compartilhadas. Experiências"
  titleHighlight="únicas"
  description="Jornadas em grupo para quem busca..."
/>
```

---

## ExpeditionCard

**Caminho:** `src/components/ExpeditionCard`

Usar para exibir um card de expedição com data, status e país.
Recebe uma prop do tipo `Expedition` (`src/types/Expedition`).

---

## PrivateCard

**Caminho:** `src/components/PrivateCard`

Usar para exibir opções de expedições privadas.

---

## Arrow

**Caminho:** `src/components/Arrow`

Ícone de seta. Usar quando precisar de um indicador visual de direção ou navegação.

---

## Componentes de layout de página

Estes componentes estruturam seções inteiras de página. Reutilize-os em vez de criar wrappers novos.

- `src/components/Hero` — hero genérico
- `src/components/HeroHome` — hero da página inicial
- `src/components/HeroAbout` — hero da página sobre
- `src/components/HeroExpedition` — hero da página de expedição
- `src/components/Footer` — rodapé global
- `src/components/Header` — cabeçalho desktop
- `src/components/HeaderMobile` — cabeçalho mobile

---

## Componentes que NÃO devem ser reutilizados

- `src/components/Main` — boilerplate de template de projeto, não usar em páginas reais
