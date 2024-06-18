'use client'

import { media } from '@/styles/mediaQueries'
import { fonts } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.h3`
  margin-bottom: 32px;
  font-family: ${fonts.sans};
  font-size: 28px;
  font-weight: normal;
  line-height: 130%;
  letter-spacing: -0.28px;

  ${media.desktopUp} {
    font-size: 48px;
    letter-spacing: -0.48px;
  }
`
