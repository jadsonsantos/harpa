'use client'
import { media } from '@/styles/mediaQueries'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`

export const LogoImage = styled(Image)`
  object-fit: contain;

  ${media.mobileDown} {
    width: 147px;
    height: 24px;
  }
`
