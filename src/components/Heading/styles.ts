'use client'

import { media } from '@/styles/mediaQueries'
import { fonts, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Heading = styled.h3`
  margin-bottom: ${spacings.medium};
  font-family: ${fonts.sans};
  font-size: 28px;
  font-weight: normal;
  line-height: 130%;
  letter-spacing: -0.28px;

  ${media.desktopUp} {
    margin-bottom: ${spacings.large};
    font-size: 48px;
    letter-spacing: -0.48px;
  }
`
