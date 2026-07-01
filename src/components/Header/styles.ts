'use client'
import { media } from '@/styles/mediaQueries'
import { flex } from '@/styles/mixins'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  background-color: ${colors.light};
  height: 60px;
  ${flex}

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${media.tabletUp} {
    display: flex;
    height: 82px;
  }
`
