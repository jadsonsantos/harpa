import GoToSection from '@/components/GoToSection'
import Heading from '@/components/Heading'
import Container from '@/patterns/Container'
import Slider from './Slider'
import * as S from './styles'

interface HallProps {
  isHome?: boolean
}

const Hall = ({ isHome = false }: HallProps) => (
  <S.Wrapper id="galeria">
    <Container>
      <Heading>Hall da fama</Heading>
    </Container>
    <Slider isHome={isHome} />
    {isHome && (
      <Container>
        <GoToSection link="/a-expedicao#galeria">
          VER GALERIA DE FOTOS COMPLETA {'>'}
        </GoToSection>
      </Container>
    )}
  </S.Wrapper>
)

export default Hall
