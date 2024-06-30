'use client'
import { Container } from '@/patterns/Container/styles'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${colors.background};
  padding: ${spacings.xlarge} 0;

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;
  }
`

export const InitiativesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  ${media.tabletUp} {
    flex-direction: row;
    gap: 120px;
  }
`

export const InitiativesText = styled.div`
  flex: 1;
`
