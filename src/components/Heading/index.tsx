'use client'
import { ComponentProps } from 'react'
import * as S from './styles'

type HeadingProps = ComponentProps<'h3'> & {
  selector?: string
  children: React.ReactNode
  className?: string
}

const Heading = ({ children, selector, className }: HeadingProps) => {
  const customClass = `heading ${selector ?? ''} ${className ?? ''}`.trim()

  if (typeof children !== 'string') {
    return <S.Heading className={customClass}> {children} </S.Heading>
  }

  const htmlString =
    typeof children === 'string' && children !== null && children !== undefined
      ? children
      : ''

  return (
    <S.Heading
      className={customClass}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  )
}

export default Heading
