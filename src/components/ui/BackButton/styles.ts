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
`

export const BackLabel = styled(Text).attrs({ as: 'span' })`
  ${hideOnMobile}
`
