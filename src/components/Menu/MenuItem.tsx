import Link from 'next/link'

interface MenuItemProps {
  children: string
  href: string
}

const MenuItem = ({ children, href }: MenuItemProps) => {
  return (
    <li key={children}>
      <Link href={href} className="link">
        {children}
      </Link>
    </li>
  )
}

export default MenuItem
