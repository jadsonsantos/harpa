'use client'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;

  border-radius: 60px;
  height: 60px;
  cursor: pointer;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;

  padding: 20px ${spacings.small};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  * {
    padding: inherit;
  }
`

export const PrimaryButton = styled(Wrapper)`
  background-color: ${colors.light};
  color: ${colors.primary};

  &:hover {
    background-color: #f0f0f0;
  }
`

export const SecondaryButton = styled(Wrapper)`
  background-color: ${colors.primary};
  color: ${colors.light};

  &:hover {
    background: ${colors.dark};
    color: ${colors.light};
  }
`

export const TertiaryButton = styled(Wrapper)`
  color: ${colors.light};
`
