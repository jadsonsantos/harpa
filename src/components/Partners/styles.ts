'use client'

import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import { Text } from '../Text/styles'
import { Container } from '../../patterns/Container/styles'
import { media } from '@/styles/mediaQueries'

export const PartnersWrapper = styled.section`
  padding: 128px 0;
  background-color: ${colors.primary};
  color: ${colors.light};

  ${media.largeDesktopUp} {
    padding: 164px 0;
  }
`

export const PartnersContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${media.tabletUp} {
    gap: 142px;
    justify-content: center;
  }

  ${media.largeDesktopUp} {
    gap: 275px;
  }
`

export const PartnersContent = styled.div`
  max-width: 432px;

  ${media.desktopUp} {
    max-width: 852px;
  }
`

export const PartnersText = styled(Text)`
  margin: 64px 0;
`
