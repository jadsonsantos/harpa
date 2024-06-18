'use client'
import { SmallerContainer } from '@/components/Container/styles'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-top: 164px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${media.desktopUp} {
    > div {
      flex-direction: row;
    }
  }
`

export const CardsContainer = styled(SmallerContainer)``
