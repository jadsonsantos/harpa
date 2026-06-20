import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  border-top: 1px solid ${colors.border};
  padding: 20px 0;
  color: ${colors.primary};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  ${media.tabletUp} {
    padding: 20px 0 32px;
  }

  ${media.desktopUp} {
    padding: 20px 0 14px;
  }
`
