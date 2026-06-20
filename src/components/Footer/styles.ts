import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  color: ${colors.primary};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;

  p {
    padding: 20px 0;
    border-top: 1px solid ${colors.border};
  }

  ${media.tabletUp} {
    p {
      padding: 20px 0 32px;
    }
  }

  ${media.desktopUp} {
    p {
      padding: 20px 0 14px;
    }
  }
`
