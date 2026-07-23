'use client'
import { media } from '@/styles/mediaQueries'
import { flex, flexBetween } from '@/styles/mixins'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import { IconSlot, PrimaryButton, SecondaryButton } from '../Button/styles'
import { BaseCard } from '../ExpeditionCard/styles'
import { TextSmall } from '../Text/styles'

export const CardLight = styled(BaseCard)`
  background: ${colors.light};
  flex-direction: column;
  border: 1px solid currentColor;
  cursor: pointer;

  ${media.desktopUp} {
    &:hover {
      ${SecondaryButton} {
        background: ${colors.dark};
        color: ${colors.light};
      }

      ${IconSlot} {
        width: 16px;
        margin-left: 8px;
        opacity: 1;
      }
    }
  }
`

export const CardDark = styled(BaseCard)`
  background: ${colors.primary};
  flex-direction: column;
  cursor: pointer;

  p {
    color: ${colors.light};
  }

  ${media.desktopUp} {
    &:hover {
      ${PrimaryButton} {
        background-color: #f0f0f0;
      }

      ${IconSlot} {
        width: 16px;
        margin-left: 8px;
        opacity: 1;
      }
    }
  }
`

export const CardTop = styled.div`
  ${flexBetween}
`

export const CardSubTitle = styled(TextSmall)``

export const CardWrapper = styled.div`
  ${flexBetween}

  ${media.mobileDown} {
    .button-info {
      padding: 0 16px;
    }
  }
`

export const CardTags = styled.div`
  ${flex}
  gap: 8px;
`

export const CardTitle = styled.p`
  font-size: 36px;
  font-weight: 200;
  line-height: 1.3;

  ${CardLight} & {
    color: ${colors.primary};
  }

  ${CardDark} & {
    color: ${colors.light};
    font-style: italic;
  }

  ${media.desktopUp} {
    font-size: 60px;
  }
`
