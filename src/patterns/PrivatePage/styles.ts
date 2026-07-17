'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import { Container } from '../Container/styles'

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${colors.primary};
  color: ${colors.light};
  padding-bottom: ${spacings.large};

  ${media.desktopUp} {
    padding-bottom: 80px;
  }
`

export const MainWrapper = styled.div`
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
