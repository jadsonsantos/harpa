'use client'
import { media } from '@/styles/mediaQueries'
import { flex, flexBetween } from '@/styles/mixins'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import { BaseCard } from '../ExpeditionCard/styles'
import { TextSmall } from '../Text/styles'

export const CardLight = styled(BaseCard)`
  background: ${colors.light};
  flex-direction: column;
  border: 1px solid currentColor;
`

export const CardDark = styled(BaseCard)`
  background: ${colors.primary};
  flex-direction: column;

  p {
    color: ${colors.light};
  }
`

export const CardTop = styled.div`
  ${flexBetween}
`

export const CardSubTitle = styled(TextSmall)``

export const CardWrapper = styled.div`
  ${flexBetween}
`

export const CardTags = styled.div`
  ${flex}
  gap: 8px;
`

export const CardTitle = styled.p`
  font-size: 40px;
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
