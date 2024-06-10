import { media } from '@/styles/mediaQueries'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;

  ${media.tabletUp} {
    padding: 0 64px;
  }

  ${media.largeDesktopUp} {
    padding: 0;
  }
`

export const SmallerContainer = styled(Wrapper)`
  max-width: 1290px;
`
