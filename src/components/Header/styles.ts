'use client'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  height: 82px;
  display: flex;
  background-color: ${colors.light};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const MenuWrapper = styled.div`
  > .text {
    font-weight: 700;
  }
`
