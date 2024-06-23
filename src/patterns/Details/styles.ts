'use client'
import TextGrid from '@/components/TextGrid'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  background-color: ${colors.background};
  padding: 128px 0;

  ${media.desktopUp} {
    padding: ${spacings.large} 0;
  }
`

export const DetailsContainer = styled(Container)`
  article:not(:last-of-type) {
    margin-bottom: ${spacings.medium};
  }

  h3 {
    margin-bottom: ${spacings.small};
  }

  ${media.tabletUp} {
    display: flex;
    gap: 120px;
  }

  ${media.desktopUp} {
    article:not(:last-of-type) {
      margin-bottom: 128px;
    }

    h3 {
      margin-bottom: ${spacings.medium};
    }
  }
`

export const DetailsTextGrid = styled(TextGrid)``
