'use client'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import { BaseCard } from '../ExpeditionCard/styles'
import { media } from '@/styles/mediaQueries'
import { PrimaryButton } from '../Button/styles'

export const PrivateCard = styled(BaseCard)`
  align-items: flex-end;
  background: ${colors.primary};
`

export const PrivateCardText = styled.p`
  color: ${colors.light};
  font-size: 28px;
  font-style: italic;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.28px;
  text-transform: uppercase;

  ${media.tabletUp} {
    font-weight: 300;
    letter-spacing: 1.12px;
  }

  ${media.desktopUp} {
    font-size: 64px;
    font-weight: 200;
    /* letter-spacing: 2.56px; */
  }
`

export const PrivateCardButton = styled(PrimaryButton)`
  display: none;

  ${media.desktopUp} {
    display: inline-flex;
  }
`
