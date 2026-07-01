'use client'

import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Text = styled.p`
  font-size: 18px;
  line-height: 23.4px;
  font-style: normal;
  font-weight: 400;
`

export const TextSmall = styled(Text)`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.01em;

  ${media.desktopUp} {
    font-size: 15px;
  }
`
