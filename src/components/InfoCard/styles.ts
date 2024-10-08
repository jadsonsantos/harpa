'use client'
import { media } from '@/styles/mediaQueries'
import { colors, effects, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { PrimaryButton } from '../Button/styles'

export const Card = styled.article`
  border-radius: 32px;
  border: 1px solid ${colors.primary};
  padding: 64px 24px;

  flex: 1;
  display: flex;
  flex-direction: column;

  .heading {
    margin-bottom: 24px;
  }

  > .text {
    margin-bottom: ${spacings.small};

    &:last-of-type {
      margin-bottom: ${spacings.large};
    }
  }

  ${media.desktopUp} {
    padding: 32px;

    > .text:last-of-type {
      margin-bottom: ${spacings.medium};
    }
  }
`

export const Button = styled(PrimaryButton)`
  margin-top: auto;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.16px;

  .custom-link {
    width: 100%;
    color: ${colors.light};
    border-radius: 60px;
    background: ${effects.primary};
    padding-left: 15px;
    padding-right: 15px;

    &:hover {
      color: ${colors.light};
    }
  }

  ${media.desktopUp} {
    width: fit-content;
    font-size: 18px;
    letter-spacing: -0.18px;

    .custom-link {
      background: none;
      color: ${colors.primary};
    }
  }
`
