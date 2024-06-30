import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'

interface TextGridProps {
  title: string
  description: string[]
  cta?: { href: string; text: string }
}

const TextGrid = ({ title = '', description, cta }: TextGridProps) => (
  <S.TextGrid>
    <Heading>{title}</Heading>
    {description.map((desc) => (
      <Text key={desc}>{desc}</Text>
    ))}
    {cta && (
      <Text>
        <S.Link href={cta.href}>{cta.text}</S.Link>
      </Text>
    )}
  </S.TextGrid>
)

export default TextGrid
