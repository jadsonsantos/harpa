'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`

export const CardsGrid = styled.section`
  padding: 40px 0;
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    overflow-x: auto;

    ${media.mobileDown} {
      gap: 16px;
    }
  }
  ${media.desktopUp} {
    padding: 60px 0 112px;
  }
`
