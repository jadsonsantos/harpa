'use client'
import { heroEnter } from '@/styles/animations'
import { media } from '@/styles/mediaQueries'
import { flex, reducedMotionOff } from '@/styles/mixins'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  animation: ${heroEnter} 900ms cubic-bezier(0.22, 1, 0.36, 1) 250ms both;
  ${reducedMotionOff}
`

export const CardsGrid = styled.section`
  padding: 40px 0;

  .swiper-slide {
    width: fit-content;
    height: auto;
  }

  ${media.tabletUp} {
    .swiper-slide:first-child {
      margin-left: calc(max(0px, (100vw - 1418px) / 2) + 40px) !important;
    }

    .swiper-slide:last-child {
      margin-right: calc(max(0px, (100vw - 1418px) / 2) + 40px) !important;
    }
  }

  ${media.smallDesktopUp} {
    .swiper-slide:first-child {
      margin-left: calc(max(0px, (100vw - 1418px) / 2) + 64px) !important;
    }

    .swiper-slide:last-child {
      margin-right: calc(max(0px, (100vw - 1418px) / 2) + 64px) !important;
    }
  }

  ${media.desktopUp} {
    padding: 60px 0 112px;
  }
`

export const BackButtonSection = styled(Container)`
  margin: 32px auto 10px;
`

export const NavigationArrows = styled(Container)`
  ${flex}
  gap: ${spacings.xsmall};
  margin-top: 32px;
`
