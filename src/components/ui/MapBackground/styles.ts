'use client'
import { hideOnMobile } from '@/styles/mixins'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;

  img {
    ${hideOnMobile}
  }
`
