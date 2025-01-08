'use client'
import { ComponentProps } from 'react'
import * as S from './styles'

type HeadingProps = ComponentProps<'h3'> & {
  selector?: string
}

const Heading = ({ children, selector }: HeadingProps) => {
  const customClass = `heading ${selector}`

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
