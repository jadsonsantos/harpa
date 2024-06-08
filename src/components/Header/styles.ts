import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  height: 82px;
  display: flex;
  background-color: ${colors.light};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
