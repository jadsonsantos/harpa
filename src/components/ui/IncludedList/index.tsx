import {
  CheckIcon,
  CloseIcon,
  GuideIcon,
  HotelIcon,
  PlaneIcon,
  RouteIcon,
  SuitcaseIcon,
  TransportIcon
} from '@/components/icons'
import Text from '@/components/Text'
import { useTranslations } from 'next-intl'
import * as S from './styles'

interface IncludedItem {
  key: 'route' | 'guide' | 'hotel' | 'transport' | 'advisory' | 'flight'
  icon: React.ReactNode
  included: boolean
}

const items: IncludedItem[] = [
  { key: 'route', icon: <RouteIcon />, included: true },
  { key: 'guide', icon: <GuideIcon />, included: true },
  { key: 'hotel', icon: <HotelIcon />, included: true },
  { key: 'transport', icon: <TransportIcon />, included: true },
  { key: 'advisory', icon: <SuitcaseIcon />, included: true },
  { key: 'flight', icon: <PlaneIcon />, included: false }
]

export default function IncludedList() {
  const t = useTranslations('IncludedList')

  return (
    <S.Wrapper>
      <Text selector="included-list-title">{t('title')}</Text>
      <S.List>
        {items.map((item) => (
          <S.Item key={item.key}>
            <S.IconWrapper>{item.icon}</S.IconWrapper>
            <S.Label>{t(item.key)}</S.Label>
            <S.StatusIcon $included={item.included}>
              {item.included ? <CheckIcon /> : <CloseIcon />}
            </S.StatusIcon>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}
