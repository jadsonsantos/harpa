'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import * as S from './styles'

type MenuItemProps = LinkProps & {
  children: React.ReactNode
}

const MenuItem = ({ children, href, ...props }: MenuItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href.toString() ? true : false

  const combinedClasses = `link ${isActive ? 'active' : ''}`

  return (
    <S.MenuItem>
      <Link href={href} className={combinedClasses} {...props}>
        <S.MenuItemBar>/ </S.MenuItemBar>
        {children}
      </Link>
    </S.MenuItem>
  )
}

export default MenuItem
