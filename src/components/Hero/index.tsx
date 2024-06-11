import React from 'react'
import Container from '../Container'
import * as S from './styles'

interface HeroProps {
  title?: string | TrustedHTML
  subtitle?: string
}

export const Hero = ({ title = '', subtitle, ...rest }: HeroProps) => (
  <S.HeroWrapper {...rest}>
    <Container>
      <S.HeroTitle dangerouslySetInnerHTML={{ __html: title }} />
      <S.HeroSubTitle>{subtitle}</S.HeroSubTitle>
    </Container>
  </S.HeroWrapper>
)

export default Hero
