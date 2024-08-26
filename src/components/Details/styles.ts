'use client'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Text } from '../Text/styles'
import { media } from '@/styles/mediaQueries'

export const Details = styled.details`
  margin: 0 -${spacings.small};
  padding: ${spacings.small};
  border-bottom: 1px solid ${colors.secondary};

  &.active {
    .summary-title:after {
      content: url('/images/icons/minus.svg');
    }
  }

  ${media.tabletUp} {
    margin: revert;
    padding-left: 0;
  }
`

export const Summary = styled.summary`
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`

export const SummaryTitle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  &:after {
    content: url('/images/icons/plus.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`

export const Content = styled.div`
  margin-top: 24px;

  .text {
    max-width: 240px;

    &:not(:last-of-type) {
      margin: 0 0 20px;
    }
  }

  ${media.tabletUp} {
    .text {
      max-width: 582px;
      font-size: 16px;
      letter-spacing: -0.16px;
    }
  }

  ${media.desktopUp} {
    .text {
      max-width: 716px;
    }
  }
`
