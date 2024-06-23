import * as S from './styles'
import Image from 'next/image'
import useIsMobile from '@/hooks/isMobile'

const AnimatedIllustration = () => {
  const isMobile = useIsMobile()

  return (
    <S.Wrapper>
      {!isMobile && (
        <Image
          src="/images/animations/animation-1.png"
          width={317}
          height={350}
          alt="Hárpá"
        />
      )}
    </S.Wrapper>
  )
}

export default AnimatedIllustration
