'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import { SmallerContainer } from '../Container/styles'

export const Wrapper = styled.section`
  ${media.tabletUp} {
    padding: 64px 0 128px;
  }

  ${media.desktopUp} {
    padding: 164px 0;
  }
`

export const GalleryContainer = styled(SmallerContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.tabletUp} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    border-radius: 32px;
  }
`
