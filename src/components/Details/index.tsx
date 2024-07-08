import Text from '../Text'
import * as S from './styles'

interface DetailsProps {
  title: string
  description: string[]
}

const Details = ({ title, description }: DetailsProps) => (
  <S.Details>
    <S.Summary>
      <Text>{title}</Text>
    </S.Summary>
    <S.Content>
      {description.map((desc) => (
        <Text key={desc}>{desc}</Text>
      ))}
    </S.Content>
  </S.Details>
)

export default Details