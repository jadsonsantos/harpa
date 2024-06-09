import { media } from '@/styles/mediaQueries'
import styled from '@emotion/styled'

interface ContainerProps {
  hasCustomWidth?: boolean
}

export const Wrapper = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${(props) => (props.hasCustomWidth ? '1290px' : '1600px')};
  margin: 0 auto;
  padding: 0 24px;

  ${media.tabletUp} {
    padding: 0 64px;
  }

  ${media.largeDesktopUp} {
    padding: ${(props) => (props.hasCustomWidth ? '0' : '0 64px')};
  }
`
