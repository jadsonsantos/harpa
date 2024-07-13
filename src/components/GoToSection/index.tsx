import { HoverEffectComponent } from '../HoverEffect'
import Text from '../Text'
import * as S from './styles'

interface GoToSectionProps {
  children: React.ReactNode
  link: string
}

const GoToSection = ({ children, link }: GoToSectionProps) => (
  <Text>
    <S.StyledLink href={link}>
      <HoverEffectComponent>{children}</HoverEffectComponent>
    </S.StyledLink>
  </Text>
)

export default GoToSection
