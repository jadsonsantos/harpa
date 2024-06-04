import Link from 'next/link'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.MenuList>
      <li>
        <Link href="/">/ Página inicial</Link>
      </li>
      <li>
        <Link href="/a-expedicao">/ A expedição</Link>
      </li>
      <li>
        <Link href="/quem-somos">/ Quem somos</Link>
      </li>
    </S.MenuList>
  </S.Wrapper>
)

export default Menu
