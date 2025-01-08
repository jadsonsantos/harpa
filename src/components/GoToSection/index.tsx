import Link from 'next/link'
import { HoverEffectComponent } from '../HoverEffect'
import * as S from './styles'

interface GoToSectionProps {
  children: React.ReactNode
  link: string
  isExternal?: boolean
  selector?: string
}

const GoToSection = ({
  children,
  link,
  isExternal,
  selector
}: GoToSectionProps) => {
  const CustomLink = () => {
    if (isExternal) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <HoverEffectComponent>{children}</HoverEffectComponent>
        </a>
      )
    }

    return (
      <Link href={link}>
        <HoverEffectComponent>{children}</HoverEffectComponent>
      </Link>
    )
  }

  return (
    <S.GoToSection className={`go-to-section ${selector}`}>
      <CustomLink />
    </S.GoToSection>
  )
}

export default GoToSection
