'use client'
import styled from 'styled-components'
import { SmallerContainer } from '../Container/styles'
import { colors } from '@/styles/tokens'
import { media } from '@/styles/mediaQueries'

export const Wrapper = styled.section`
  background: ${colors.background};
  padding: 164px 0;

  strong {
    display: block;
    margin-bottom: 20px;
  }

  p {
    max-width: 414px;
  }
`

export const Container = styled(SmallerContainer)``

export const InvestmentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 64px;

  ${media.tabletUp} {
    flex-direction: row;
  }
`
