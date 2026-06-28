'use client'
import * as S from './styles'

interface LogoProps {
  width?: number
  height?: number
  imgSrc?: string
}

const Logo = ({
  width = 245,
  height = 40,
  imgSrc = 'harpa-logo'
}: LogoProps) => {
  return (
    <S.LogoLink href={`/`}>
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
