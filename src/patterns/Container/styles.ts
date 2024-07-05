'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1418px;

  margin: 0 auto;
  padding: 0 24px;

  ${media.tabletUp} {
    padding: 0 64px;
  }
`

export const LargeContainer = styled(Container)`
  max-width: 1728px;
`
