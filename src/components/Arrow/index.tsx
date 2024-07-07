import * as S from './styles'

const Arrow = () => {
  return (
    <S.Arrow
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow"
    >
      <circle
        cx="32.5"
        cy="32"
        r="31.5"
        transform="rotate(-180 32.5 32)"
        fill="white"
        stroke="black"
        className="circle"
      />
      <path
        d="M44.5 33.5C45.3284 33.5 46 32.8284 46 32C46 31.1716 45.3284 30.5 44.5 30.5L44.5 33.5ZM19.4393 30.9393C18.8536 31.5251 18.8536 32.4749 19.4393 33.0607L28.9853 42.6066C29.5711 43.1924 30.5208 43.1924 31.1066 42.6066C31.6924 42.0208 31.6924 41.0711 31.1066 40.4853L22.6213 32L31.1066 23.5147C31.6924 22.9289 31.6924 21.9792 31.1066 21.3934C30.5208 20.8076 29.5711 20.8076 28.9853 21.3934L19.4393 30.9393ZM44.5 30.5L20.5 30.5L20.5 33.5L44.5 33.5L44.5 30.5Z"
        fill="black"
        className="path"
      />
    </S.Arrow>
  )
}

export default Arrow
