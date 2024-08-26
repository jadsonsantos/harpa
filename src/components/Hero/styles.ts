'use client'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const HeroWrapper = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  border-radius: 0 0 32px 32px;
  padding: 98px 0 128px;

  .container {
    height: 300px;
    display: flex;
    align-items: flex-end;
  }

  ${media.tabletUp} {
    padding: 382px 0 ${spacings.xxlarge};

    .container {
      height: revert;
      display: revert;
    }
  }

  ${media.desktopUp} {
    min-height: -webkit-fill-available;
    padding: 410px 0 164px;
  }
`

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 54px;
  font-style: normal;
  font-weight: 100;
  line-height: 90%;
  letter-spacing: -0.54px;
  max-width: 1116px;

  ${media.tabletUp} {
    max-width: 706px;
    font-size: 124px;
    letter-spacing: -1.24px;
  }

  ${media.largeDesktopUp} {
    max-width: 1326px;
    font-size: 172px;
    letter-spacing: -1.72px;
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
