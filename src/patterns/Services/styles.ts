import { Heading } from '@/components/Heading/styles'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { borders, colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Services = styled.section`
  background: ${colors.background};
  padding: ${spacings.xlarge} 0;

  .swiper-container {
    border-radius: ${borders.medium};
    border: 1px solid ${colors.primary};
    background: ${colors.light};
    padding: ${spacings.large} ${spacings.small};
  }

  .swiper-slide {
    display: flex;
    justify-content: space-between;
    gap: ${spacings.small};
    height: auto;
    transition:
      opacity,
      visibility 0.3s ease;

    &:not(.swiper-slide-active) {
      opacity: 0 !important;
      visibility: hidden;
    }

    &.swiper-slide-active {
      opacity: 1 !important;
      visibility: visible;
    }
  }

  .swiper-button-prev,
  .image {
    display: none;
  }

  ${media.tabletUp} {
    .image {
      display: block;
      border-radius: ${borders.small};
    }
  }

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;

    .swiper-container {
      padding: ${spacings.large};
    }

    .swiper-slide {
      gap: 120px;
    }

    .image {
      border-radius: ${borders.medium};
    }
  }
`

export const ServicesHeading = styled(Heading)`
  margin-bottom: ${spacings.medium};
`

export const ServicesSubHeading = styled(Text)`
  max-width: 341px;
  margin-bottom: ${spacings.large};

  ${media.desktopUp} {
    max-width: 417px;
  }
`

export const ServicesContainer = styled.div`
  max-width: 408px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .navigation-buttons {
    margin-top: auto;
  }

  ${media.desktopUp} {
    max-width: 570px;
  }
`

export const ServicesText = styled.div`
  margin-bottom: ${spacings.medium};

  .text:not(:last-of-type) {
    margin-bottom: 20px;
  }
`
