import Image from 'next/image'
import * as S from './styles'
import data from './data'

const Gallery = () => (
  <S.Wrapper>
    <S.GalleryContainer>
      {data.map((data) => (
        <li key={data.alt}>
          <Image src={data.src} alt={data.alt} width={620} height={415} />
        </li>
      ))}
    </S.GalleryContainer>
  </S.Wrapper>
)

export default Gallery
