'use client'

import { media } from '@/styles/mediaQueries'
import { fonts, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Heading = styled.h3`
  margin-bottom: ${spacings.medium};
  font-family: ${fonts.sans};
  font-size: 40px;
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.02em;

  span {
    font-weight: 400;
  }

  i {
    font-family: ${fonts.serif};
  }

  ${media.desktopUp} {
    margin-bottom: ${spacings.large};
    font-size: 64px;
    text-align: center;
  }
`
