'use client'
import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Header = styled.header`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  height: 82px;
  background-color: ${colors.light};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${media.tabletUp} {
    display: flex;
  }
`
