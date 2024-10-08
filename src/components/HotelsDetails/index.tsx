import Hotel from '@/types/Hotel'
import Heading from '../Heading'
import Text from '../Text'
import * as S from './styles'
import Button from '../Button'
import CustomLink from '../CustomLink'

interface HotelsDetailsProps {
  title: string
  description: string[]
  hotels: Hotel[]
}

const HotelsDetails = ({ title, description, hotels }: HotelsDetailsProps) => (
  <S.Wrapper>
    <Heading>{title}</Heading>
    <Button>
      <CustomLink href="https://drive.google.com/file/d/1S5cNwJ-d7SrFRlulMsJTGgXVZ9kOCFvY/view">
        Confira →
      </CustomLink>
    </Button>
    <S.HotelsDetailsContent style={{ display: 'none' }}>
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
