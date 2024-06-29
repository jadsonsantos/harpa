import CustomLink from '../CustomLink'
import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'

interface InfoCardProps {
  title: string
  description: string[]
  link: { href: string; text: string }
}

const InfoCard = ({ title, description, link }: InfoCardProps) => (
  <S.Card key={title}>
    <Heading>{title}</Heading>
    {description.map((desc) => {
      return <Text key={desc}>{desc}</Text>
    })}
    <S.Button>
      <CustomLink href={link.href}>{link.text}</CustomLink>
    </S.Button>
  </S.Card>
)

export default InfoCard
