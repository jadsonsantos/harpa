import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-top: 128px;
  text-align: center;

  ${media.desktopUp} {
    padding-top: 164px;
  }
`

export const Content = styled.div`
  padding: 164px 20px;
  border-radius: 32px;
  background-color: ${colors.dark};

  h3 {
    color: ${colors.light};
    margin: auto;
  }

  ${media.tabletUp} {
    h3 {
      max-width: 390px;
    }
  }

  ${media.desktopUp} {
    h3 {
      max-width: 1290px;
    }
  }
`