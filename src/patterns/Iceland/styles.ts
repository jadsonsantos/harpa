'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: ${spacings.xlarge} 0;
  background-color: ${colors.background};

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;
  }

  swiper-slide,
  img {
    border-radius: ${spacings.medium};
    max-width: 100%;
  }
`

export const IcelandText = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${spacings.medium};
  margin: ${spacings.large} 0;

  ${media.largeTabletUp} {
    flex-direction: row;
    gap: ${spacings.small};
  }
`
