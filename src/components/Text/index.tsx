'use client'
import { ComponentProps } from 'react'
import * as S from './styles'

type TextProps = ComponentProps<'p'> & {
  children: React.ReactNode
  selector?: string
  className?: string
}

const Text = ({ children, selector, className, ...rest }: TextProps) => {
  const combinedClassName = `text ${selector ?? ''} ${className ?? ''}`.trim()

  if (typeof children !== 'string') {
    return (
      <S.Text {...rest} className={combinedClassName}>
        {children}
      </S.Text>
    )
  }

  const htmlString =
    typeof children === 'string' && children !== null && children !== undefined
      ? children
      : ''

  return (
    <S.Text
      {...rest}
      className={combinedClassName}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  )
}

export default Text
