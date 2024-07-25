'use client'
import { media } from '@/styles/mediaQueries'
import { borders, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: ${spacings.xlarge} 0;

  .image {
    border-radius: ${borders.xsmall};
  }

  .heading {
    margin-bottom: ${spacings.medium};
  }

  .text {
    max-width: 414px;
  }

  .hall-swiper {
    display: flex;
    flex-direction: column-reverse;
  }

  .go-to-section {
    margin-top: ${spacings.large};
  }

  .swiper-slide {
    position: relative;
  }

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;

    .image {
      border-radius: ${borders.medium};
    }
  }
`
