'use client'
import { media } from '@/styles/mediaQueries'
import { flex } from '@/styles/mixins'
import { colors } from '@/styles/tokens'
import { keyframes, styled } from 'styled-components'

export const navbarEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const Header = styled.header<{ $dark?: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  background-color: ${({ $dark }) => ($dark ? colors.primary : colors.light)};
  height: 60px;
  ${flex}

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${media.tabletUp} {
    display: flex;
    height: 70px;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  animation: ${navbarEnter} 700ms cubic-bezier(0.22, 1, 0.36, 1) 0ms both;
`
