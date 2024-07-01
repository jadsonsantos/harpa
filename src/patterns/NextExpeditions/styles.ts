'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${colors.background};
  padding: ${spacings.xlarge} 0;

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;
  }
`

export const NextExpeditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;

  ${media.tabletUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
