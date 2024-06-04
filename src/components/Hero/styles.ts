import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  background-image: url('/images/hero-home.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  min-height: -webkit-fill-available;
  padding: 0 0 164px;

  ${media.tabletUp} {
  }

  ${media.desktopUp} {
    padding: 343px 220px 164px;
  }
`

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 90%; /* 57.6px */
  letter-spacing: -0.64px;

  ${media.tabletUp} {
    font-size: 124px;
    letter-spacing: -1.24px;
  }

  ${media.desktopUp} {
    font-size: 198px;
    letter-spacing: -1.98px;
  }
`

export const HeroSubTitle = styled(HeroTitle).attrs({
  as: 'h2'
})`
  font-weight: 100;
  max-width: 1326px;
`
