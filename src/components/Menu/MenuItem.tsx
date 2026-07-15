'use client'
import { Link, usePathname } from '@/i18n/navigation'
import { ComponentProps, ReactNode } from 'react'
import * as S from './styles'

type MenuItemProps = ComponentProps<typeof Link> & {
  children: ReactNode
}

const MenuItem = ({ children, href, ...props }: MenuItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href.toString() ? true : false
  const isActiveClass = isActive ? 'active' : ''

  return (
    <S.MenuItem className={isActiveClass}>
      <Link href={href} className={`link ${isActiveClass}`} {...props}>
        <S.MenuItemBar>/ </S.MenuItemBar>
        {children}
      </Link>
    </S.MenuItem>
  )
}

export default MenuItem
