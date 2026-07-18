'use client'
import Button from '@/components/Button'
import Text from '@/components/Text'
import IncludedList from '@/components/ui/IncludedList'
import Modal from '@/components/ui/Modal'
import { WHATSAPP_NUMBER } from '@/constants'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Tag } from '../Tag'
import * as S from './style'

interface GroupDate {
  tag: string
  range: string
  year: string
}

interface GroupCardProps {
  title: string
  subtitle: string
  description: string
  imageSrc: string
  images: string[]
  dates: GroupDate[]
  investment: string
}

export default function GroupCard({
  title,
  subtitle,
  description,
  imageSrc,
  images,
  dates,
  investment
}: GroupCardProps) {
  const t = useTranslations('GroupCard')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleInterestClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    const message = t('whatsappMessage', { destino: title })
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <S.Card
        role="button"
        tabIndex={0}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsModalOpen(true)
          }
        }}
      >
        <Image
          src={imageSrc}
          alt={title + ' - ' + subtitle}
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <S.CardTags>
          <Tag variant="light">{t('tagGroups')}</Tag>
          <Tag variant="light">{t('tagLimited')}</Tag>
        </S.CardTags>
        <S.CardInfos>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardSubtitle>{subtitle}</S.CardSubtitle>
          <S.CardActions>
            <Button variant="primary" onClick={handleInterestClick}>
              {t('interested')}
            </Button>
            <Button
              variant="tertiary"
              onClick={(event) => {
                event.stopPropagation()
                setIsModalOpen(true)
              }}
            >
              {t('learnMore')}
            </Button>
          </S.CardActions>
        </S.CardInfos>
      </S.Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        media={
          <S.Carousel>
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              modules={[Autoplay, Pagination]}
            >
              {images.map((image, index) => (
                <SwiperSlide key={image} style={{ position: 'relative' }}>
                  <Image
                    src={image}
                    alt={`${title} - ${subtitle} (${index + 1})`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 470px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.Carousel>
        }
      >
        <S.ModalBody>
          <S.CardTags>
            <Tag variant="dark">{t('tagGroups')}</Tag>
            <Tag variant="dark">{t('tagLimited')}</Tag>
          </S.CardTags>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalSubtitle>{subtitle}</S.ModalSubtitle>
          <Text selector="modal-description">{description}</Text>
          <S.DatesSection>
            <Text selector="dates-label">{t('availableDates')}</Text>
            <S.DateList>
              {Array.isArray(dates) &&
                dates.map((date, index) => (
                  <S.DateCard key={`${date.tag}-${index}`}>
                    <S.DateTag>{date.tag}</S.DateTag>
                    <S.DateBody>
                      <S.DateRange>{date.range}</S.DateRange>
                      <S.DateYear>{date.year}</S.DateYear>
                    </S.DateBody>
                  </S.DateCard>
                ))}
            </S.DateList>
          </S.DatesSection>
          <IncludedList />
          <S.InvestmentSection>
            <S.InvestmentInfo>
              <S.InvestmentLabel>{t('investment')}</S.InvestmentLabel>
              <S.InvestmentValue>{investment}</S.InvestmentValue>
            </S.InvestmentInfo>
            <Button variant="secondary" onClick={handleInterestClick}>
              {t('interested')}
            </Button>
          </S.InvestmentSection>
        </S.ModalBody>
      </Modal>
    </>
  )
}
