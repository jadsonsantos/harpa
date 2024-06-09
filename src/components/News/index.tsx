import Container from '../Container'
import CustomLink from '../CustomLink'
import Heading from '../Heading'
import * as S from './styles'

const News = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <Heading>Fique por dentro de datas e novidades em primeira mão</Heading>
        <CustomLink href="https://www.instagram.com/harpa.me/">
          Conheça nosso Instagram
        </CustomLink>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default News
