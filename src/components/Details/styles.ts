'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Details = styled.details`
  margin: 0 -${spacings.small};
  padding: ${spacings.small};
  border-bottom: 1px solid ${colors.secondary};

  &[open] .summary:after {
    content: url('/images/icons/minus.svg');
  }
`

export const Summary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:-webkit-details-marker {
    display: none;
  }

  &:after {
    content: url('/images/icons/plus.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  .text {
    font-weight: 700;
  }

  ${media.desktopUp} {
    gap: ${spacings.small};
  }
`

export const Content = styled.div`
  margin-top: 24px;

  .text {
    max-width: 240px;
  }
`
