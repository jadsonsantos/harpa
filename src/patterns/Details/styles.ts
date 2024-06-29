'use client'
import TextGrid from '@/components/TextGrid'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  background-color: ${colors.background};
  padding: ${spacings.large} 0;

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;
  }
`

export const DetailsContainer = styled(Container)`
  article:not(:last-of-type) {
    margin-bottom: ${spacings.large};
  }

  h3 {
    margin-bottom: ${spacings.medium};
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
      margin-bottom: ${spacings.large};
    }
  }
`

export const DetailsTextGrid = styled(TextGrid)``
