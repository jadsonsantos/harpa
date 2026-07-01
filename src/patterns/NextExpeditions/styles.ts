'use client'
import { Heading } from '@/components/Heading/styles'
import { TextSmall } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { flex, hideOnMobile } from '@/styles/mixins'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 40px;
  padding-bottom: ${spacings.medium};
  position: relative;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 1;
  }
`

export const ExpeditionHeading = styled(Heading)`
  max-width: 670px;
  margin: auto;
`

export const NextExpeditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;

  ${media.desktopUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const TagWrapper = styled.div`
  ${flex}
  margin-bottom: ${spacings.xsmall};

  ${media.desktopUp} {
    justify-content: center;
  }
`

export const Coordinates = styled(TextSmall)`
  margin: 16px 0 32px;
  text-align: right;

  ${media.desktopUp} {
    margin: 0 0 48px;
  }
`

export const MapBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;

  img {
    ${hideOnMobile}
  }
`
