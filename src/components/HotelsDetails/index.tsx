import Hotel from '@/types/Hotel'
import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'

interface HotelsDetailsProps {
  title: string
  description: string[]
  hotels: Hotel[]
}

const HotelsDetails = ({ title, description, hotels }: HotelsDetailsProps) => (
  <S.Wrapper>
    <Heading>{title}</Heading>
    <S.HotelsDetailsContent>
      <S.Presentation>
        {description.map((desc) => (
          <Text key={desc}>{desc}</Text>
        ))}
      </S.Presentation>
      <S.Hotels>
        {hotels.map((hotel) => (
          <S.HotelItem key={hotel.name}>
            <Text>
              <S.HotelName href={hotel.link}>{hotel.name}</S.HotelName>
              <S.Star>{'★'.repeat(hotel.star)}</S.Star>
            </Text>
            <Text>{hotel.description}</Text>
          </S.HotelItem>
        ))}
      </S.Hotels>
    </S.HotelsDetailsContent>
  </S.Wrapper>
)

export default HotelsDetails
