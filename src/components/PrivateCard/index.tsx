'use client'
import { WHATSSAPP_URL } from '@/constants'
import CustomLink from '../CustomLink'
import * as S from './styles'

const PrivateCard = () => {
  return (
    <S.PrivateCard>
      <S.PrivateCardText>Private</S.PrivateCardText>
      <S.PrivateCardButton>
        <CustomLink href={WHATSSAPP_URL}>Saiba mais →</CustomLink>
      </S.PrivateCardButton>
    </S.PrivateCard>
  )
}

export default PrivateCard
