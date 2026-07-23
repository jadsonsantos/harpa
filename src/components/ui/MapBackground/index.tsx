import * as S from './styles'

type Props = {
  src: string
  width: number
  height: number
  // Aceita qualquer valor válido de CSS `background-position`
  // (ex: "top right", "bottom left", "80% 120px"). Default: "top left".
  position?: string
  zIndex?: number
  // Esconde o componente (display: none) na faixa mobile (< 768px)
  hideOnMobile?: boolean
  // Esconde o componente (display: none) na faixa tablet (768px–1023px)
  hideOnTablet?: boolean
}

const MapBackground = ({
  src,
  width,
  height,
  position = 'top left',
  zIndex,
  hideOnMobile,
  hideOnTablet
}: Props) => (
  <S.Wrapper
    $src={src}
    $width={width}
    $height={height}
    $position={position}
    $zIndex={zIndex}
    $hideOnMobile={hideOnMobile}
    $hideOnTablet={hideOnTablet}
    aria-hidden="true"
    className="map-background"
  />
)

export default MapBackground
