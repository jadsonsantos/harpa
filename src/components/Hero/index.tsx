import Container from '@/patterns/Container'
import AnimatedIllustration from '../AnimatedIllustration'
import * as S from './styles'

interface HeroProps {
  title?: string | TrustedHTML
  subtitle?: string
  animationId?: string
}

export const Hero = ({
  title = '',
  subtitle,
  animationId,
  ...rest
}: HeroProps) => (
  <S.HeroWrapper {...rest}>
    <Container>
      <S.HeroTitle
        className="hero-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && <S.HeroSubTitle>{subtitle}</S.HeroSubTitle>}
      {animationId && <AnimatedIllustration name={animationId} />}
    </Container>
  </S.HeroWrapper>
)

export default Hero
