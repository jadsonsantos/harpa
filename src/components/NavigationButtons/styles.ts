'use client'
import { flexCenter } from '@/styles/mixins'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  ${flexCenter}
  gap: ${spacings.xsmall};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${colors.gray};
  color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${colors.secondary};
    color: ${colors.light};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:disabled:hover {
    background: ${colors.border};
    color: ${colors.primary};
  }
`

export const PrevButton = styled(Button)``

export const NextButton = styled(Button)`
  svg {
    transform: rotate(180deg);
  }
`
