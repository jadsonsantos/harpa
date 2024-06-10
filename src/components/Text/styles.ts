import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Text = styled.p`
  line-height: 130%;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.16px;

  ${media.desktopUp} {
    font-size: 18px;
    letter-spacing: -0.18px;
  }
`
