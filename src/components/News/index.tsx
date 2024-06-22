'use client'
import CustomLink from '../CustomLink'
import Heading from '../Heading'
import * as S from './styles'

const News = () => (
  <S.Wrapper>
    <S.Container>
      <S.Content>
        <Heading>Fique por dentro de datas e novidades em primeira mão</Heading>
        <S.Button>
          <CustomLink href="https://www.instagram.com/harpa.me/">
            Conheça nosso Instagram
          </CustomLink>
        </S.Button>
      </S.Content>
    </S.Container>
  </S.Wrapper>
)

export default News
