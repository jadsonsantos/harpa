import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Arrow = styled.svg`
  .circle,
  .path {
    transition: fill 0.5s ease-in-out;
  }

  &:hover {
    .circle {
      fill: ${colors.primary};
    }

    .path {
      fill: ${colors.light};
    }
  }
`
