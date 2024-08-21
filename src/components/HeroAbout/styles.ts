'use client'
import styled from 'styled-components'
import Hero from '../Hero'
import { media } from '@/styles/mediaQueries'

export const AboutHeroWrapper = styled(Hero)`
  background-image: url('/images/hero/hero-about-mobile.jpg');

  ${media.tabletUp} {
    background-image: url('/images/hero/hero-about-tablet.jpg');
  }

  ${media.desktopUp} {
    background-image: url('/images/hero/hero-about.jpg');
  }
`
