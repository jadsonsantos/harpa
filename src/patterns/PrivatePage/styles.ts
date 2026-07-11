'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`

export const MainWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    ${media.desktopUp} {
      flex-direction: row;
      gap: 152px;
    }
  }
`
