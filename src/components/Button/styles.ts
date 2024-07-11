import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;

  border-radius: 60px;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  letter-spacing: -0.18px;

  * {
    padding: 20px 32px;
  }
`

export const PrimaryButton = styled(Wrapper)`
  background-color: ${colors.light};
  color: ${colors.primary};

  &:hover {
    background: linear-gradient(100deg, #2a8181 8.45%, #858b8e 110.48%);
    color: ${colors.light};
  }
`
