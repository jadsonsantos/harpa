'use client'
import { media } from '@/styles/mediaQueries'
import { borders, colors, spacings } from '@/styles/tokens'
import { keyframes, styled } from 'styled-components'

const overlayBackground = 'rgba(0, 0, 0, 0.7)'
const closeButtonBackground = 'rgba(255, 255, 255, 0.8)'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-color: ${overlayBackground};
  animation: ${fadeIn} 0.25s ease;

  ${media.desktopUp} {
    align-items: center;
    padding: ${spacings.medium};
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: min(80vh, 640px);
  overflow: hidden;

  background-color: ${colors.light};
  border-radius: ${borders.medium} ${borders.medium} 0 0;
  animation: ${slideUp} 0.4s cubic-bezier(0.32, 0.72, 0, 1);

  &:focus {
    outline: none;
  }

  ${media.desktopUp} {
    width: 100%;
    max-width: 500px;
    max-height: 680px;
    border-radius: ${borders.medium};
    animation: ${scaleIn} 0.25s ease-out;
  }
`

export const Media = styled.div`
  flex-shrink: 0;
`

export const Scroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`

export const CloseButton = styled.button`
  position: absolute;
  top: ${spacings.xsmall};
  right: ${spacings.xsmall};
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  background-color: ${closeButtonBackground};
  color: ${colors.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.light};
  }
`
