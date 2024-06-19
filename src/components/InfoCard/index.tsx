import Heading from '../Heading'
import * as S from './styles'
import Text from '../Text'
import CustomLink from '../CustomLink'

interface InfoCardProps {
  title: string
  description: string[]
  link: { href: string; text: string }
}

const InfoCard = ({ title, description, link }: InfoCardProps) => (
  <S.Card key={title}>
    <Heading>{title}</Heading>
    {description.map((desc, index) => {
      return <Text key={index}>{desc}</Text>
    })}
    <S.Button>
      <CustomLink href={link.href}>{link.text}</CustomLink>
    </S.Button>
  </S.Card>
)

export default InfoCard
