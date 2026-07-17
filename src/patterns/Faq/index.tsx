import Details from '@/components/Details'
import Container from '../Container'
import * as S from './styles'

type FaqItem = {
  id: string
  title: string
  description: string[]
}

type Props = {
  titlePrefix: string
  titleHighlight: string
  items: FaqItem[]
}

const Faq = ({ titlePrefix, titleHighlight, items }: Props) => (
  <S.Faq>
    <Container>
      <S.FaqWrapper>
        <S.FaqTitle>
          {titlePrefix} <strong>{titleHighlight}</strong>
        </S.FaqTitle>
        {items.map((item) => (
          <Details
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </S.FaqWrapper>
    </Container>
  </S.Faq>
)

export default Faq
