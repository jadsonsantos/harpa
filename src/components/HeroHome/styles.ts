'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import Hero from '../Hero'

export const HomeHeroWrapper = styled(Hero)`
  background-image: url('/images/hero/hero-home-mobile.jpg');

  .hero-title {
    font-size: 64px;
    letter-spacing: -0.64px;
  }

  ${media.tabletUp} {
    background-image: url('/images/hero/hero-home-tablet.jpg');

    .hero-title {
      font-size: 124px;
      letter-spacing: -1.24px;
    }
  }

  ${media.desktopUp} {
    background-image: url('/images/hero/hero-home.jpg');
    padding-top: 343px;

    .hero-title {
      font-size: 198px;
      letter-spacing: -1.98px;
    }
  }
`
