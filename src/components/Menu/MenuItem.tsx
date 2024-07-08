import Link from 'next/link'
import * as S from './styles'

interface MenuItemProps {
  children: string
  href: string
}

const MenuItem = ({ children, href }: MenuItemProps) => {
  return (
    <S.MenuItem>
      <Link href={href} className="link">
        {children}
      </Link>
    </S.MenuItem>
  )
}

export default MenuItem
