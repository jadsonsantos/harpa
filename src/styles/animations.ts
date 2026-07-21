import { keyframes } from 'styled-components'

// Entrada da navbar (Header/HeaderMobile): fade in + deslocamento vertical.
export const navbarEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Entrada dos blocos "hero" de página (home, grupos, private): fade in +
// deslocamento vertical maior que o da navbar.
export const heroEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
