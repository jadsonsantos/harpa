'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

// Não existe variante "outline" (fundo transparente + borda). Se precisar
// desse estilo num componente específico, estenda o Primary/Secondary com
// styled(PrimaryButton) no styles.ts do componente-pai — ver exemplo em
// src/styles/not-found.styles.ts (ButtonLink).

// Slot do ícone de seta que aparece ao lado do texto no hover (Primary/
// Secondary). Fica colapsado por padrão (width 0, opacity 0) e expande no
// hover do botão — ver regra `&:hover` no Wrapper abaixo.
export const IconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0;
  min-width: 0;
  margin-left: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  color: inherit;
  transition:
    width 0.3s ease,
    margin-left 0.3s ease,
    opacity 0.3s ease;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: inherit;
    transform: rotate(180deg);
  }
`

// Base compartilhada: formato pílula (border-radius 60px), altura 60px.
// Não usar diretamente — sempre estender via Primary/Secondary/Tertiary.
export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;

  border-radius: 60px;
  height: 60px;
  cursor: pointer;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;

  padding: 20px ${spacings.xsmall};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  ${media.tabletUp} {
    padding: 20px ${spacings.small};
  }

  ${media.desktopUp} {
    &:hover ${IconSlot} {
      width: 16px;
      margin-left: 8px;
      opacity: 1;
    }
  }
`

// Fundo BRANCO sólido + texto escuro. Hover: cinza claro (#f0f0f0).
// Usar sobre fundos escuros/coloridos (ex: card do GroupCard, que tem foto
// de fundo escura — botão "Tenho interesse" ali é primary; botão "Saiba
// mais" do card Private no fundo preto também é primary).
// Em fundo claro/branco ele quase some, evitar nesse caso.
export const PrimaryButton = styled(Wrapper)`
  background-color: ${colors.light};
  color: ${colors.primary};

  ${media.desktopUp} {
    &:hover {
      background-color: #f0f0f0;
    }
  }
`

// Fundo ESCURO sólido + texto claro. Hover: fica ainda mais escuro (preto).
// Usar como CTA principal sobre fundo claro/branco (ex: "Tenho interesse"
// dentro do modal do GroupCard, que tem fundo branco; botão da página
// Private).
export const SecondaryButton = styled(Wrapper)`
  background-color: ${colors.primary};
  color: ${colors.light};

  ${media.desktopUp} {
    &:hover {
      background: ${colors.dark};
      color: ${colors.light};
    }
  }
`

// Sem fundo, sem borda — só texto claro, sem "cara" de botão (fica como um
// link de texto ao lado de um Primary/Secondary). Ex: "Saiba mais" ao lado
// de "Tenho interesse" no card do GroupCard; botões +/- do Stepper no
// PrivateForm. Assume que já está sobre um fundo escuro — em fundo claro o
// texto fica invisível.
export const TertiaryButton = styled(Wrapper)`
  padding: 0;
  color: ${colors.light};
`
