'use client'
import { ComponentProps } from 'react'
import * as S from './styles'

type TextProps = ComponentProps<'p'> & {
  children: React.ReactNode
}

const Text = ({ children }: TextProps) => {
  if (typeof children !== 'string') {
    return <S.Text> {children} </S.Text>
  }

  const htmlString =
    typeof children === 'string' && children !== null && children !== undefined
      ? children
      : ''

  return (
    <S.Text className="text" dangerouslySetInnerHTML={{ __html: htmlString }} />
  )
}

export default Text
