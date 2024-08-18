import Image from 'next/image'
import data from './data'
import * as S from './styles'

const Gallery = () => (
  <S.Wrapper>
    <S.GalleryContainer>
      {data.map((data) => (
        <li key={data.alt}>
          <Image
            src={`/images/gallery/${data.src}`}
            alt={data.alt}
            width={620}
            height={415}
            quality={100}
          />
        </li>
      ))}
    </S.GalleryContainer>
  </S.Wrapper>
)

export default Gallery
