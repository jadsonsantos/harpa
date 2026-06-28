'use client'

import { Text } from '@/components/Text/styles'
import { hideOnMobile } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 40px;
  padding: 12px 0;
`

export const BackLabel = styled(Text).attrs({ as: 'span' })`
  ${hideOnMobile}
`
