'use client'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Text } from '../Text/styles'

export const Details = styled.details`
  margin: 0 -${spacings.small};
  padding: ${spacings.small};
  border-bottom: 1px solid ${colors.secondary};

  &[open] .summary .text:after {
    content: url('/images/icons/minus.svg');
  }
`

export const Summary = styled.summary`
  cursor: pointer;
  list-style: none;
`

export const SummaryTitle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  &:after {
    content: url('/images/icons/plus.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`

export const Content = styled.div`
  margin-top: 24px;

  .text {
    max-width: 240px;
  }
`
