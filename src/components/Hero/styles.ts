'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const HeroWrapper = styled.section`
  padding: 170px 0 128px;

  ${media.desktopUp} {
    min-height: -webkit-fill-available;
    padding: 343px 0 164px;
  }
`

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 64px;
  font-style: normal;
  font-weight: 100;
  line-height: 90%; /* 57.6px */
  letter-spacing: -0.64px;
  max-width: 1116px;

  ${media.tabletUp} {
    font-size: 124px;
    letter-spacing: -1.24px;
  }

  ${media.largeDesktopUp} {
    font-size: 198px;
    letter-spacing: -1.98px;
  }

  span {
    font-weight: 400;
  }
`

export const HeroSubTitle = styled(HeroTitle).attrs({
  as: 'h2'
})`
  font-weight: 100;
`
