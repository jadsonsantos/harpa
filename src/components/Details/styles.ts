'use client'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Details = styled.details`
  margin: ${spacings.small} 0;

  ${media.tabletUp} {
    margin-bottom: 0;
  }

  summary:after {
    content: url('/images/icons/plus.svg');
    width: 18px;
    height: 18px;
  }

  &[open] summary:after {
    content: url('/images/icons/minus.svg');
  }
`

export const Summary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  p {
    font-weight: 700;
  }

  ${media.desktopUp} {
    gap: ${spacings.small};
  }
`

export const Content = styled.div`
  margin-top: 24px;
`
