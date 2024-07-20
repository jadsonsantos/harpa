'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'
import { Header } from '../Header/styles'

export const HeaderMobile = styled(Header)`
  display: flex;

  ${media.tabletUp} {
    display: none;
  }
`

export const MenuWrapper = styled.div`
  > .text {
    font-weight: 700;
  }
`
