import { colors, effects, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;

  border-radius: 60px;

  font-size: 18px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.18px;

  background-color: ${colors.primary};
  color: ${colors.light};
  transition:
    background-color,
    color 0.3s ease;

  &:hover {
    background: ${effects.primary};
  }

  * {
    padding: 20px ${spacings.medium};
  }
`

export const PrimaryButton = styled(Wrapper)`
  background-color: ${colors.light};
  color: ${colors.primary};

  &:hover {
    background: ${effects.primary};
    color: ${colors.light};
  }
`
