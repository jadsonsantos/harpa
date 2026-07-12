'use client'
import { playfairDisplay } from '@/styles/fonts'
import { colors, fonts, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: ${spacings.large};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacings.medium};
`

export const Title = styled.h1`
  font-family: ${fonts.sans};
  font-size: 64px;
  font-weight: 100;
  line-height: 104%;
  letter-spacing: -1%;

  em {
    font-family: ${playfairDisplay.style.fontFamily};
    font-style: italic;
    font-weight: 400;
  }

  span {
    font-weight: 300;
  }

  strong {
    font-weight: 700;
  }
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${colors.secondary};
  line-height: 160%;
`

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  border: 1px solid ${colors.primary};
  border-radius: 60px;
  font-size: 16px;
  color: ${colors.primary};
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.light};
  }
`
