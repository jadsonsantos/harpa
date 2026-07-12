'use client'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.xsmall};

  .included-list-title {
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.16px;
    color: ${colors.dark};
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid ${colors.border};

  &:first-child {
    border-top: none;
  }
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: ${colors.primary};
`

export const Label = styled.span`
  flex: 1;
  font-size: 17px;
  font-weight: 400;
  line-height: 110%;
  color: ${colors.dark};
`

export const StatusIcon = styled.span<{ $included: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: ${({ $included }) => ($included ? colors.dark : colors.primary)};
`
