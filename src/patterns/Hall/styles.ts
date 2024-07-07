'use client'
import { media } from '@/styles/mediaQueries'
import { borders, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  padding: ${spacings.xlarge} 0;

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;
  }

  .image {
    border-radius: ${borders.medium};
  }

  .heading {
    margin-bottom: ${spacings.medium};
  }

  .text {
    max-width: 414px;
  }

  .hall-swiper {
    margin-top: ${spacings.large};
  }

  swiper-container::part(button-prev),
  swiper-container::part(button-next) {
    border-radius: 100%;
    display: none;

    ${media.desktopUp} {
      display: block;
    }
  }
`

export const HallNavigation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavigationWrapper = styled.div`
  display: flex;
  gap: ${spacings.medium};
`
