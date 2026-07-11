import Image from 'next/image'
import * as S from './styles'

type Props = {
  src: string
  width: number
  height: number
}

const MapBackground = ({ src, width, height }: Props) => (
  <S.Wrapper>
    <Image src={src} alt="" aria-hidden="true" width={width} height={height} priority />
  </S.Wrapper>
)

export default MapBackground
