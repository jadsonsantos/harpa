'use client'

import CustomLink from '@/components/CustomLink'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 100px 0;
  text-align: center;

  ${media.tabletUp} {
    padding-top: 60px;
  }
`

export const Address = styled(Text).attrs({ as: 'address' })`
  font-style: normal;
  padding: 30px 0;
  max-width: 612px;
  margin: 0 auto;
`

export const Phone = styled(Text)`
  margin-bottom: 30px;
`

export const InstagramLink = styled(CustomLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.7;
  }
`
