'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import { keyframes, styled } from 'styled-components'
import { Container } from '../Container/styles'

const heroEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Backdrop = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${colors.primary};
  color: ${colors.light};
  padding-bottom: ${spacings.large};

  ${media.desktopUp} {
    padding-bottom: 80px;
  }
`

export const Wrapper = styled.div`
  animation: ${heroEnter} 900ms cubic-bezier(0.22, 1, 0.36, 1) 250ms both;
`

export const MainWrapper = styled.div`
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    ${media.desktopUp} {
      flex-direction: row;
      gap: 152px;
    }
  }
`

export const BackButtonSection = styled(Container)`
  position: relative;
  z-index: 1;
  margin-top: 32px;

  ${media.desktopUp} {
    margin-top: 40px;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.medium};

  ${media.desktopUp} {
    margin-top: 24px;
    gap: ${spacings.large};
  }
`

export const HeroImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 800 / 371;
  overflow: hidden;

  ${media.desktopUp} {
    width: 500px;
  }
`
