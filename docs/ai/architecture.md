# Arquitetura — Regras de estrutura

## Estrutura por componente

```text
src/components/NomeDoComponente/
  index.tsx   # lógica e JSX
  styles.ts   # Styled Components
```

## Estrutura por página

```text
src/app/[locale]/nome-da-pagina/
  page.tsx
  styles.ts
```

Se a página tiver seções complexas, extrair para `src/components/` seguindo a mesma estrutura.

## O que nunca fazer

- Usar `<div>` como container genérico sem nome semântico — dar nome ao wrapper no `styles.ts`
- Usar `<h1>`–`<h6>` diretamente — usar `Heading`
- Usar `<p>` diretamente — usar `Text`
- Usar `<a>` diretamente — usar `CustomLink` (externo) ou `Link` do `next-intl` (interno)
- Usar `<button>` diretamente — usar `Button`
- Criar estilos fora do `styles.ts` do componente
- Duplicar um componente que já existe em `src/components/`

## O que sempre fazer

- Reutilizar componentes de `src/components/` antes de criar um novo
- Reutilizar tokens de `@/styles/tokens` antes de escrever valores em px/hex
- Usar `media.*` de `@/styles/mediaQueries` para todos os breakpoints
- Criar `styles.ts` separado, nunca estilizar inline ou no `index.tsx`
- Nomear o elemento raiz do `styles.ts` como `Wrapper`
