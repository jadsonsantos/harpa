import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import { Container } from '../../patterns/Container/styles'

export const Wrapper = styled.section`
  padding: 128px 0;
`

export const FounderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  ${media.tabletUp} {
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }

  ${media.desktopUp} {
    gap: 120px;
  }
`

export const FounderImage = styled.figure`
  img {
    border-radius: 16px;
  }
`

export const FounderName = styled.h4`
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.16px;
`

export const FounderTestimony = styled.p`
  font-size: 28px;
  font-style: italic;
  line-height: 130%; /* 36.4px */
  letter-spacing: -0.28px;

  ${media.largeDesktopUp} {
    font-size: 48px;
    letter-spacing: -0.48px;
  }
`
