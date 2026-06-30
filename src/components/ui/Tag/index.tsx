'use client'
import * as S from './styles'

interface TagProps {
  children?: React.ReactNode
  variant?: 'dark' | 'light'
}

export function Tag({ children, variant = 'dark' }: TagProps) {
  return <S.Tag $variant={variant}>{children}</S.Tag>
}
