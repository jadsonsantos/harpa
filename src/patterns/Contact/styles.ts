'use client'

import CustomLink from '@/components/CustomLink'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { css, keyframes, styled } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Wrapper = styled.section<{ $visible?: boolean }>`
  padding: 100px 0;
  text-align: center;
  opacity: 0;
  transform: translateY(48px);

  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeInUp} 1200ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
    `}

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

  .text {
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.8;
  }
`
