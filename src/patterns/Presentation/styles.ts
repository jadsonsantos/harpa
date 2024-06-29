'use client'
import { Heading } from '@/components/Heading/styles'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  padding: 128px 0;

  ${media.desktopUp} {
    padding: 164px 0;
  }
`

export const LocalContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  ${media.tabletUp} {
    flex-direction: row;
    gap: 24px;
  }

  ${media.desktopUp} {
    gap: 120px;
  }
`

export const Title = styled(Heading)`
  margin-bottom: ${spacings.large};
`
