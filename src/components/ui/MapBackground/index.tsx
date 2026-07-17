import * as S from './styles'

type Props = {
  src: string
  width: number
  height: number
  // Aceita qualquer valor válido de CSS `background-position`
  // (ex: "top right", "bottom left", "80% 120px"). Default: "top left".
  position?: string
  zIndex?: number
}

const MapBackground = ({
  src,
  width,
  height,
  position = 'top left',
  zIndex
}: Props) => (
  <S.Wrapper
    $src={src}
    $width={width}
    $height={height}
    $position={position}
    $zIndex={zIndex}
    aria-hidden="true"
    className="map-background"
  />
)

export default MapBackground
