'use client'
import { ComponentProps } from 'react'
import * as S from './styles'

type HeadingProps = ComponentProps<'h3'>

const Heading = ({ children }: HeadingProps) => {
  if (typeof children !== 'string') {
    return <S.Heading> {children} </S.Heading>
  }

  const htmlString =
    typeof children === 'string' && children !== null && children !== undefined
      ? children
      : ''

  return (
    <S.Heading
      className="heading"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  )
}

export default Heading
