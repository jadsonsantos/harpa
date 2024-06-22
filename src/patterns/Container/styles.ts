'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1290px;

  margin: 0 auto;
  padding: 0 24px;

  ${media.tabletUp} {
    padding: 0 64px;
  }

  ${media.largeDesktopUp} {
    padding: 0;
  }
`

export const LargeContainer = styled(Container)`
  max-width: 1600px;
`
