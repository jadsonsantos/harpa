'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import Hero from '../Hero'

export const HeroExpeditionWrapper = styled(Hero)`
  background-image: url('/images/hero/hero-expedition-mobile.jpg');

  ${media.tabletUp} {
    background-image: url('/images/hero/hero-expedition-tablet.jpg');
  }

  ${media.desktopUp} {
    background-image: url('/images/hero/hero-expedition.jpg');
  }
`
