import Link from 'next/link'
import { HoverEffectComponent } from '../HoverEffect'
import * as S from './styles'

interface GoToSectionProps {
  children: React.ReactNode
  link: string
}

const GoToSection = ({ children, link }: GoToSectionProps) => (
  <S.GoToSection className="go-to-section">
    <Link href={link}>
      <HoverEffectComponent>{children}</HoverEffectComponent>
    </Link>
  </S.GoToSection>
)

export default GoToSection
