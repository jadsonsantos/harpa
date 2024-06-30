'use client'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'
import styled from 'styled-components'
import CustomLink from '../CustomLink'

export const TextGrid = styled.article`
  &:not(:last-of-type) {
    margin-bottom: ${spacings.xlarge};
  }

  ${media.tabletUp} {
    &:not(:last-of-type) {
      margin-bottom: ${spacings.xxlarge};
    }
  }

  p {
    max-width: 414px;

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`

export const Link = styled(CustomLink)`
  text-decoration-line: underline;
`
