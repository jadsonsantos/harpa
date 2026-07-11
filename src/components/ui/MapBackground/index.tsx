'use client'
import * as S from './styles'

type Props = {
  src: string
  width: number
  height: number
}

const MapBackground = ({ src, width, height }: Props) => (
  <S.Wrapper $src={src} $width={width} $height={height} aria-hidden="true" />
)

export default MapBackground
