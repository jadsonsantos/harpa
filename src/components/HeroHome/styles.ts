'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import Hero from '../Hero'

export const HomeHeroWrapper = styled(Hero)`
  background-image: url('/images/hero-home-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  ${media.tabletUp} {
    background-image: url('/images/hero-home-tablet.jpg');
  }

  ${media.desktopUp} {
    background-image: url('/images/hero-home.jpg');
  }

  h1 {
    max-width: 1326px;
  }
`
