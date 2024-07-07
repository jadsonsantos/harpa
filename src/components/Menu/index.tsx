'use client'
import MenuItem from './MenuItem'
import menu from './data'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.MenuList>
      {menu.map(({ href, children }) => (
        <MenuItem key={children} href={href}>
          {children}
        </MenuItem>
      ))}
    </S.MenuList>
  </S.Wrapper>
)

export default Menu
