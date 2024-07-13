'use client'
import Container from '../Container'
import Slider from './Slider'
import * as S from './styles'

const Services = () => {
  return (
    <S.Services>
      <Container>
        <S.ServicesHeading>Nossos serviços</S.ServicesHeading>
        <S.ServicesSubHeading>
          Dentre os destaques do nosso serviço, os mais procurados por nossos
          clientes são:
        </S.ServicesSubHeading>
        <Slider />
      </Container>
    </S.Services>
  )
}

export default Services
