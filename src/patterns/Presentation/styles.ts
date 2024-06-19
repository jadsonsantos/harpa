'use client'
import styled from 'styled-components'
import { SmallerContainer } from '../Container/styles'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import { Heading } from '@/components/Heading/styles'

export const Wrapper = styled.section`
  padding: 128px 0;

  ${media.desktopUp} {
    padding: 164px 0;
  }
`

export const Container = styled(SmallerContainer)`
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
  margin-bottom: ${spacings.medium};
`
