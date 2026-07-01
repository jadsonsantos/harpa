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

export const flex = css`
  display: flex;
  align-items: center;
`

export const flexCenter = css`
  ${flex}
  justify-content: center;
`

export const flexBetween = css`
  ${flex}
  justify-content: space-between;
`
