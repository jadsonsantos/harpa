import Image from 'next/image'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import Container from '@/patterns/Container'
import * as S from './styles'
import images from './data'

const Collab = () => (
  <S.Wrapper>
    <Container>
      <S.CollabTextContainer>
        <Heading>Collab</Heading>
        <Text selector="collab-text">
          Clientes HÁRPÁ ganham descontos incríveis com nossos parceiros e
          desfrutam das melhores condições do mercado.
        </Text>
      </S.CollabTextContainer>
      <S.CollabList>
        {images.map((item) => (
          <S.CollabItem key={item.alt}>
            <Image
              src={`/images/collab/collab-${item.src}`}
              alt={item.alt}
              width={item.width}
              height={item.height}
              quality={100}
              className="collab-image"
            />
          </S.CollabItem>
        ))}
      </S.CollabList>
    </Container>
  </S.Wrapper>
)

export default Collab
