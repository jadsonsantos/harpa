'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  ${media.tabletUp} {
    padding: 64px 0 128px;
  }

  ${media.desktopUp} {
    padding: 164px 0;
  }
`

export const GalleryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.tabletUp} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    max-width: 100%;
    border-radius: 32px;
  }
`
