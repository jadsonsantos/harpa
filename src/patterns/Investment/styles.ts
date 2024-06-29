'use client'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  background: ${colors.background};
  padding: 128px 0;

  p {
    margin-bottom: 20px;
    max-width: 414px;
  }

  ${media.desktopUp} {
    padding: 164px 0;
  }
`

export const InvestmentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 64px;

  ${media.tabletUp} {
    flex-direction: row;
  }
`

export const InvestmentTitle = styled(Text)`
  font-weight: 700;
  margin-bottom: 20px;
`

export const InvestmentIcon = styled.p`
  margin-bottom: ${spacings.xsmall};
  font-size: 30px;
`
