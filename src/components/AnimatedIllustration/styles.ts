'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: none;

  ${media.desktopUp} {
    display: block;
  }
`
