'use client'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { borders, colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const SlideDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${spacings.small};
  border-radius: 0 0 ${borders.small} ${borders.small};
  color: ${colors.light};
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 41.67%,
    rgba(0, 0, 0, 0) 100%
  );
  /* mix-blend-mode: multiply; */

  & > .text {
    margin-top: auto;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: -0.12px;
  }

  ${media.tabletUp} {
    border-radius: 0 0 ${borders.medium} ${borders.medium};
  }

  ${media.desktopUp} {
    padding: ${spacings.large};

    & > .text {
      font-size: 18px;
      letter-spacing: -0.18px;
    }
  }
`

export const SlideContent = styled(Text)`
  margin-top: ${spacings.xsmall};
  font-style: italic;
  font-size: 12px;
  letter-spacing: -0.12px;

  ${media.desktopUp} {
    font-size: 18px;
    letter-spacing: -0.18px;
  }
`

export const HallNavigation = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacings.large};
`
