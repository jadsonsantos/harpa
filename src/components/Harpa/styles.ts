import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 128px 0;

  h3 {
    margin: auto;
    text-align: center;
  }

  ${media.tabletUp} {
    h3 {
      max-width: 522px;
    }
  }

  ${media.desktopUp} {
    padding: 264px 0;

    h3 {
      max-width: 852px;
    }
  }
`
