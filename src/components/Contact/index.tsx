'use client'
import { WHATSSAPP_URL } from '@/constants'
import Container from '../../patterns/Container'
import CustomLink from '../CustomLink'
import Logo from '../Logo'
import Text from '../Text'
import * as S from './styles'

const Contact = () => (
  <S.Wrapper>
    <Container>
      <Logo width={245} height={40} />
      <S.Address>
        <Text>São Paulo/Reykjavik</Text>
      </S.Address>
      <Text>
        <CustomLink href={WHATSSAPP_URL}>+55 (11) 9 9584-2594</CustomLink>
      </Text>
    </Container>
  </S.Wrapper>
)

export default Contact
