'use client'

import { Text } from '@/components/Text/styles'
import { Link } from '@/i18n/navigation'
import { hideOnMobile } from '@/styles/mixins'
import styled from 'styled-components'

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding: 12px 0;

  &:hover span {
    border-bottom-color: currentColor;
  }
`

export const BackLabel = styled(Text).attrs({ as: 'span' })`
  border-bottom: 1px solid transparent;
  ${hideOnMobile}
`
