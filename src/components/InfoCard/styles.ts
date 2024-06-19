'use client'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import { PrimaryButton } from '../Button/styles'
import { media } from '@/styles/mediaQueries'

export const Card = styled.article`
  border-radius: 32px;
  border: 1px solid ${colors.primary};
  padding: 64px 24px;

  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 24px;
  }

  > p {
    margin-bottom: 25px;
  }

  ${media.desktopUp} {
    padding: 32px;
  }
`

export const Button = styled(PrimaryButton)`
  margin-top: auto;
`
