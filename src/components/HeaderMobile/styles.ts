'use client'
import { navbarEnter } from '@/styles/animations'
import { media } from '@/styles/mediaQueries'
import { reducedMotionOff } from '@/styles/mixins'
import styled from 'styled-components'
import { Header } from '../Header/styles'

export const HeaderMobile = styled(Header)`
  display: flex;
  animation: ${navbarEnter} 700ms cubic-bezier(0.22, 1, 0.36, 1) 0ms both;
  ${reducedMotionOff}

  ${media.tabletUp} {
    display: none;
  }
`

export const MenuWrapper = styled.div`
  > .text {
    font-weight: 700;
  }
`
