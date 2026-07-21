'use client'
import { Heading } from '@/components/Heading/styles'
import { TextSmall } from '@/components/Text/styles'
import { heroEnter } from '@/styles/animations'
import { media } from '@/styles/mediaQueries'
import { flex, reducedMotionOff } from '@/styles/mixins'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 40px;
  padding-bottom: ${spacings.medium};
  position: relative;
  overflow: hidden;
  animation: ${heroEnter} 900ms cubic-bezier(0.22, 1, 0.36, 1) 250ms both;
  ${reducedMotionOff}

  .container {
    position: relative;
    z-index: 1;
  }
`

export const ExpeditionHeading = styled(Heading)`
  max-width: 670px;
  margin: 0 auto 16px;

  ${media.tabletUp} {
    margin-bottom: 80px;
    text-align: center;
  }

  ${media.desktopUp} {
    margin-bottom: 0;
  }
`

export const NextExpeditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;

  ${media.desktopUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TagWrapper = styled.div`
  ${flex}
  margin-bottom: ${spacings.xsmall};

  ${media.tabletUp} {
    justify-content: center;
  }
`

export const Coordinates = styled(TextSmall)`
  text-align: right;

  ${media.tabletUp} {
    display: none;
  }

  ${media.desktopUp} {
    margin: 0 0 48px;
    display: block;
  }
`
