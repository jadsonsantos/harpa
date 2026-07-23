'use client'
import { PrimaryButton } from '@/components/Button/styles'
import { media } from '@/styles/mediaQueries'
import { colors, fonts, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: ${spacings.medium};
  padding: ${spacings.medium} 0;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacings.small};

  ${media.desktopUp} {
    gap: ${spacings.medium};
  }
`

export const Title = styled.h1`
  max-width: 620px;
  font-family: ${fonts.sans};
  font-size: 40px;
  font-weight: 100;
  line-height: 1.15;
  letter-spacing: -0.01em;

  em {
    font-family: ${fonts.serif};
    font-style: italic;
    font-weight: 400;
  }

  span {
    font-weight: 300;
  }

  strong {
    font-weight: 700;
  }

  ${media.desktopUp} {
    max-width: 820px;
    font-size: 64px;
    line-height: 104%;
  }
`

export const Subtitle = styled.p`
  max-width: 360px;
  font-size: 18px;
  color: ${colors.dark};
  line-height: 130%;

  ${media.desktopUp} {
    max-width: 540px;
  }
`

export const ButtonLink = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.light};
  }
`
