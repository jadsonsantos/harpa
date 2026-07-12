'use client'
import type { LogoVariant } from './styles'
import * as S from './styles'

interface LogoProps {
  variant?: LogoVariant
  imgSrc?: string
  dark?: boolean
}

const Logo = ({
  variant = 'header',
  imgSrc = 'harpa-logo',
  dark = false
}: LogoProps) => {
  return (
    <S.LogoLink href="/">
      <S.LogoImage
        src={`/images/${imgSrc}.svg`}
        alt="Logo da Harpa"
        width={245}
        height={40}
        $variant={variant}
        $dark={dark}
        priority
      />
    </S.LogoLink>
  )
}

export default Logo
