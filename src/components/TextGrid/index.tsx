import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'

interface TextGridProps {
  title: string
  description: string[]
}

const TextGrid = ({ title = '', description }: TextGridProps) => (
  <S.TextGrid>
    <Heading>{title}</Heading>
    {description.map((desc) => (
      <Text key={desc}>{desc}</Text>
    ))}
  </S.TextGrid>
)

export default TextGrid
