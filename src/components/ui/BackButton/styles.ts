'use client'

import { Text } from '@/components/Text/styles'
import { Link } from '@/i18n/navigation'
import { hideOnMobile } from '@/styles/mixins'
import styled, { css } from 'styled-components'

const backButtonLayout = css`
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding: 12px 0;

  &:hover span {
    border-bottom-color: currentColor;
  }
`

export const BackLink = styled(Link)`
  ${backButtonLayout}
`

export const BackButtonEl = styled.button`
  ${backButtonLayout}
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
`

export const BackLabel = styled(Text).attrs({ as: 'span' })`
  border-bottom: 1px solid transparent;
  ${hideOnMobile}
`
