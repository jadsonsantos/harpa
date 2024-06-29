'use client'
import { Container } from '@/patterns/Container/styles'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-top: ${spacings.xlarge};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${spacings.small};
  }

  ${media.tabletUp} {
    > div {
      flex-direction: row;
    }
  }

  ${media.desktopUp} {
    padding-top: ${spacings.xxlarge};
  }
`

export const CardsContainer = styled(Container)``
