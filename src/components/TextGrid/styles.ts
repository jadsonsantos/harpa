'use client'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'
import CustomLink from '../CustomLink'
import { Text } from '../Text/styles'

export const TextGrid = styled.article`
  &:not(:last-of-type) {
    margin-bottom: ${spacings.xlarge};
  }

  ${media.desktopUp} {
    &:not(:last-of-type) {
      margin-bottom: ${spacings.xxlarge};
    }
  }

  p {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`

export const ItemTitle = styled(Text)`
  font-weight: 700;
`

export const LinkContainer = styled(Text)`
  margin-top: 64px;
`

export const Link = styled(CustomLink)`
  text-decoration-line: underline;
`

export const Content = styled.div`
  ${media.tabletUp} {
    margin-bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 64px;
  }
`
