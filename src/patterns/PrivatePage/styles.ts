'use client'
import { heroEnter } from '@/styles/animations'
import { media } from '@/styles/mediaQueries'
import { reducedMotionOff } from '@/styles/mixins'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

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
  ${reducedMotionOff}
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
