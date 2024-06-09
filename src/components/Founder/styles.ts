import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 128px 0;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }

  ${media.tabletUp} {
    > div {
      flex-direction: row;
      align-items: flex-start;
      gap: 24px;
    }
  }

  ${media.desktopUp} {
    > div {
      gap: 120px;
    }
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

  ${media.desktopUp} {
    font-size: 48px;
    letter-spacing: -0.48px;
  }
`
