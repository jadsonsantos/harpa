import { css } from 'styled-components'
import { media } from './mediaQueries'

export const hideOnMobile = css`
  ${media.mobileDown} {
    display: none;
  }
`

export const hideOnDesktop = css`
  ${media.tabletUp} {
    display: none;
  }
`

export const flex = css`
  display: flex;
  align-items: center;
`

export const flexCenter = css`
  ${flex}
  justify-content: center;
`

export const flexBetween = css`
  ${flex}
  justify-content: space-between;
`

// Desativa animações de entrada para quem pediu redução de movimento no SO,
// mantendo o layout final (sem opacity/transform de base para compensar).

export const reducedMotionOff = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

// Mesma coisa, mas para componentes que partem de um estado inicial
// escondido via opacity/transform fora do `animation` (ex: scroll-reveal) —
// além de desligar a animação, força o estado final visível.

export const reducedMotionVisible = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
`
