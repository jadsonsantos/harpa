import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;

  ${media.tabletUp} {
    padding: 0 64px;
  }

  ${media.desktopUp} {
    /* padding: 0 128px; */
  }
`
