# Geração de páginas — Processo obrigatório

Siga esta sequência sempre que criar uma página nova.

## 1. Verificar componentes existentes

Antes de escrever qualquer código:

1. Leia `docs/ai/components.md` e identifique quais componentes já cobrem o que a página precisa
2. Nunca criar um componente novo se um equivalente já existe
3. Nunca usar elementos HTML brutos quando existe componente: não usar `<button>`, `<a>`, `<h1>`–`<h6>`, `<p>` diretamente

## 2. Estrutura de arquivos

Cada página deve ter exatamente estes dois arquivos:

```text
src/app/[locale]/nome-da-pagina/
  page.tsx     # componente de página (Server Component por padrão)
  styles.ts    # Styled Components da página
```

Se a página exigir seções complexas e reutilizáveis, criar componentes em `src/components/NomeDoComponente/` seguindo a mesma estrutura (index.tsx + styles.ts).

## 3. Internacionalização (obrigatório)

Todo texto visível ao usuário deve ser internacionalizado nos três idiomas (pt, en, nl).

```tsx
import { useTranslations } from 'next-intl'

export default function MinhaPage() {
  const t = useTranslations('MinhaPage')
  return <Heading>{t('titulo')}</Heading>
}
```

Adicionar as chaves nos três arquivos de mensagens:

- `src/messages/pt.json`
- `src/messages/en.json`
- `src/messages/nl.json`

Nunca deixar string solta no JSX sem passar pelo `t(...)`.

Para metadata (title/description da página), usar `generateMetadata` + `getTranslations`.

## 4. Estilização

- Sempre usar Styled Components no arquivo `styles.ts`
- Nunca usar CSS Modules, Tailwind ou estilos inline
- Sempre usar tokens de `@/styles/tokens` e breakpoints de `@/styles/mediaQueries`
- Seguir as convenções de `docs/ai/styled-components.md`

## 5. Checklist antes de finalizar

- [ ] Nenhum elemento HTML bruto onde existe componente equivalente (`<button>`, `<a>`, `<p>`, `<h*>`)
- [ ] Todos os componentes vieram do catálogo em `docs/ai/components.md`
- [ ] Nenhum componente duplicado criado
- [ ] Todos os textos visíveis internacionalizados nos três idiomas
- [ ] Estilos em `styles.ts` usando tokens e `media.*`, sem valores hardcoded
<!-- - [ ] `npm run lint && npm run build` passou sem erros -->
