'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

type WrapperProps = {
  $src: string
  $width: number
  $height: number
  $position: string
  $zIndex?: number
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $height }) => `${$height}px`};
  z-index: ${({ $zIndex }) => $zIndex ?? -1};
  pointer-events: none;
  display: none;

  ${media.mobileUp} {
    display: block;
    background-image: url(${({ $src }) => $src});
    background-repeat: no-repeat;
    background-position: ${({ $position }) => $position};
    background-size: ${({ $width, $height }) => `${$width}px ${$height}px`};
  }
`
