'use client'
import Container from '@/patterns/Container'
import * as S from './styles'

type Props = {
  titlePrefix: string
  titleMiddle: string
  titleHighlight: string
  titleSuffix?: string
  description: string
}

const PageHeading = ({
  titlePrefix,
  titleMiddle,
  titleHighlight,
  titleSuffix,
  description
}: Props) => (
  <S.Section>
    <Container>
      <S.Wrapper>
        <S.Title>
          <span>{titlePrefix}</span> {titleMiddle} <i>{titleHighlight}</i>.
          {titleSuffix ? ` ${titleSuffix}` : ''}
        </S.Title>
        <S.Description>{description}</S.Description>
      </S.Wrapper>
    </Container>
  </S.Section>
)

export default PageHeading
