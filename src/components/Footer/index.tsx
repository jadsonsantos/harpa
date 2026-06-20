'use client'
import Container from '@/patterns/Container'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <Container>
        <p>
          Copyright © {currentYear} HÁRPÁ • Todos os direitos reservados •{' '}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </p>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
