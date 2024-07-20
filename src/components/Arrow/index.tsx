import * as S from './styles'

const Arrow = () => {
  return (
    <S.Arrow
      width="64"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow"
    >
      <circle cx="32" cy="32" r="32" fill="#000" className="circle" />
      <path
        d="M20 30.5a1.5 1.5 0 0 0 0 3v-3Zm25.06 2.56a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L41.88 32l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM20 33.5h24v-3H20v3Z"
        fill="#fff"
        className="path"
      />
      <defs>
        <linearGradient
          id="a"
          x1="7"
          y1="4"
          x2="72.5"
          y2="43.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#46A86D" />
          <stop offset="1" stopColor="#ED3F7A" />
        </linearGradient>
      </defs>
    </S.Arrow>
  )
}

export default Arrow
