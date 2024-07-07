'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  a {
    font-size: 18px;
    line-height: 130%; /* 23.4px */
    letter-spacing: -0.18px;
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  ${media.tabletUp} {
    flex-direction: row;
    gap: 24px;
  }

  ${media.desktopUp} {
    gap: 58px;
  }
`
