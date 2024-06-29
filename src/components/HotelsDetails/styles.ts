'use client'
import { media } from '@/styles/mediaQueries'
import { colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import CustomLink from '../CustomLink'

export const Wrapper = styled.article``

export const HotelsDetailsContent = styled.div`
  ${media.desktopUp} {
    display: flex;
    gap: ${spacings.gap};
  }
`

export const Presentation = styled.section`
  flex: 1;

  p {
    margin-bottom: 20px;
  }
`

export const Hotels = styled.ul`
  flex: 1;
`

export const HotelName = styled(CustomLink)`
  text-decoration-line: underline;
`

export const HotelItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`

export const Star = styled.span`
  margin-left: 5px;
  color: ${colors.primary};
`
