'use client'
import { Link } from '@/i18n/navigation'
import { media } from '@/styles/mediaQueries'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export type LogoVariant = 'header' | 'footer'

const variantStyles: Record<LogoVariant, ReturnType<typeof css>> = {
  header: css`
    width: 147px;
    height: 24px;

    ${media.mobileDown} {
      width: 110px;
      height: 18px;
    }
  `,
  footer: css`
    width: 245px;
    height: 40px;

    ${media.mobileDown} {
      width: 147px;
      height: 24px;
    }
  `
}

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`

export const LogoImage = styled(Image)<{
  $variant: LogoVariant
  $dark?: boolean
}>`
  object-fit: contain;
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $dark }) =>
    $dark &&
    css`
      filter: brightness(0) invert(1);
    `}
`
