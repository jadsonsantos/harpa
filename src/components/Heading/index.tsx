'use client'
import { ComponentProps } from 'react'
import * as S from './styles'

type HeadingProps = ComponentProps<'h3'>

const Heading = ({ children }: HeadingProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Heading
