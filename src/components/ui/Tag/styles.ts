'use client'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Tag = styled.span<{ $variant: 'dark' | 'light' }>`
  width: fit-content;
  display: inline-block;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px;
  text-transform: uppercase;
  border: 1px solid currentColor;
  border-radius: 100px;
  padding: 6px 10px;
  color: ${({ $variant }) =>
    $variant === 'dark' ? colors.primary : colors.light};
`
