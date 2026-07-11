'use client'
import Container from '@/patterns/Container'
import * as S from './styles'

type Props = {
  titlePrefix: string
  titleMiddle: string
  titleHighlight: string
  titleSuffix?: string
  description: string
  withContainer?: boolean
}

const PageHeading = ({
  titlePrefix,
  titleMiddle,
  titleHighlight,
  titleSuffix,
  description,
  withContainer = true
}: Props) => {
  const content = (
    <S.Wrapper>
      <S.Title>
        <span>{titlePrefix}</span> {titleMiddle} <i>{titleHighlight}</i>.
        {titleSuffix ? ` ${titleSuffix}` : ''}
      </S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )

  return (
    <S.Section>
      {withContainer ? <Container>{content}</Container> : content}
    </S.Section>
  )
}

export default PageHeading
