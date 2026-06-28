import { css } from 'styled-components'
import { media } from './mediaQueries'

export const hideOnMobile = css`
  ${media.mobileDown} {
    display: none;
  }
`

export const hideOnDesktop = css`
  ${media.tabletUp} {
    display: none;
  }
`

export const flexCenter = css`
  display: flex;
  align-items: center;
`
