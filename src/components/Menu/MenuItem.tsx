import Link from 'next/link'
import React from 'react'
import * as S from './styles'

interface MenuItemProps {
  children: React.ReactNode
  href: string
}

const MenuItem = ({ children, href }: MenuItemProps) => {
  return (
    <S.MenuItem>
      <Link href={href} className="link">
        <S.MenuItemBar>/ </S.MenuItemBar>
        {children}
      </Link>
    </S.MenuItem>
  )
}

export default MenuItem
