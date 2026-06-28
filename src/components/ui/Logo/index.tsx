'use client'
import * as S from './styles'

interface LogoProps {
  width?: number
  height?: number
  imgSrc?: string
  locale?: string
}

const Logo = ({
  width = 245,
  height = 40,
  imgSrc = 'harpa-logo',
  locale
}: LogoProps) => {
  return (
    <S.LogoLink href={`/${locale ?? 'pt'}`}>
      <S.LogoImage
        src={`/images/${imgSrc}.svg`}
        alt="Logo da Harpa"
        width={width}
        height={height}
        priority
      />
    </S.LogoLink>
  )
}

export default Logo
