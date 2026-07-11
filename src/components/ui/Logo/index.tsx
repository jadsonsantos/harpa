'use client'
import type { LogoVariant } from './styles'
import * as S from './styles'

interface LogoProps {
  variant?: LogoVariant
  imgSrc?: string
}

const Logo = ({ variant = 'header', imgSrc = 'harpa-logo' }: LogoProps) => {
  return (
    <S.LogoLink href="/">
      <S.LogoImage
        src={`/images/${imgSrc}.svg`}
        alt="Logo da Harpa"
        width={245}
        height={40}
        $variant={variant}
        priority
      />
    </S.LogoLink>
  )
}

export default Logo
