'use client'
import Image from 'next/image'
import * as S from './styles'
import useIsMobile from '@/hooks/isMobile'

const Founder = () => {
  const isMobile = useIsMobile()

  const image = {
    width: isMobile ? 250 : 317,
    height: isMobile ? 320 : 408
  }

  return (
    <S.Wrapper>
      <S.FounderContainer>
        <S.FounderImage>
          <Image
            src="/images/founder/founder.jpg"
            alt="Arthur Godoi, fundador da HÁRPÁ"
            width={image.width}
            height={image.height}
            quality={100}
          />
        </S.FounderImage>
        <div>
          <S.FounderName>Arthur Godoi, fundador da HÁRPÁ</S.FounderName>
          <S.FounderTestimony>
            “A Islândia é a maior representação de poder da natureza que já
            vivi. Ela tem uma influência externa como nenhuma outra, com seu
            clima, paisagens, cheiros e texturas. Mas, também, tem um poder
            absoluto sobre mudanças internas. Ninguém volta da islândia a mesma
            pessoa que foi. E isso é lindo.”
          </S.FounderTestimony>
        </div>
      </S.FounderContainer>
    </S.Wrapper>
  )
}

export default Founder
