import styled from 'styled-components'
import { colors } from '@/styles/tokens'
import { media } from '@/styles/mediaQueries'

export const Wrapper = styled.footer`
  padding: 30px 0 30px;
  color: ${colors.secondary};
  text-align: center;
  font-size: 12px;
  line-height: 130%; /* 15.6px */
  letter-spacing: -0.12px;

  ${media.tabletUp} {
    font-size: 16px;
    letter-spacing: -0.16px;
  }

  ${media.desktopUp} {
    font-size: 18px;
    letter-spacing: -0.18px;
  }
`
