'use client'
import { TextSmall } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { flex, flexBetween } from '@/styles/mixins'
import { borders, colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

const dateTagBackground = '#A03434'
const paginationBackground = 'rgba(0, 0, 0, 0.5)'

export const Card = styled.div`
  position: relative;
  width: 330px;
  flex-shrink: 0;
  height: 500px;
  border-radius: 32px;
  overflow: hidden;
  padding: 24px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  img {
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  ${media.tabletUp} {
    width: 414px;
    padding: 24px;
  }
`

export const CardTags = styled.div`
  ${flex}
  gap: 8px;
`

export const CardInfos = styled.div``

export const CardTitle = styled.h3`
  margin-bottom: 4px;
  font-size: clamp(36px, 12vw, 52px);
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: -0.52px;
`

export const CardSubtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 23.4px;
`

export const CardActions = styled.div`
  ${flexBetween}
  margin-top: 24px;
`

export const Carousel = styled.div`
  width: 100%;
  height: 200px;

  .swiper,
  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .swiper {
    --swiper-pagination-color: ${colors.light};
    --swiper-pagination-bullet-inactive-color: ${colors.light};
    --swiper-pagination-bullet-inactive-opacity: 0.5;
    --swiper-pagination-bullet-size: 5px;
    --swiper-pagination-bullet-horizontal-gap: 2px;
  }

  .swiper-pagination {
    left: 50%;
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 40px;
    background-color: ${paginationBackground};
    transform: translateX(-50%);
  }

  ${media.desktopUp} {
    height: 240px;
  }
`

export const ModalBody = styled.div`
  padding: 20px;

  .modal-description {
    margin-bottom: 40px;
    color: ${colors.dark};
  }

  ${media.desktopUp} {
    padding: 0 ${spacings.medium} ${spacings.medium};
  }
`

export const ModalTitle = styled(CardTitle)`
  margin: 20px 0 4px;
  color: ${colors.dark};
`

export const ModalSubtitle = styled(TextSmall)`
  margin: 0 0 24px;
  color: ${colors.dark};
  font-size: 15px;
`

export const DatesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.xsmall};
  margin-bottom: 40px;

  .dates-label {
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.16px;
    color: ${colors.dark};
  }
`

export const DateList = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const DateCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 90px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  border-radius: ${borders.small};
`

export const DateTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 8px;
  background: ${dateTagBackground};
  color: ${colors.light};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`

export const DateBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 8px 16px;
`

export const DateRange = styled.span`
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.24px;
  text-align: center;
  color: ${colors.dark};
`

export const DateYear = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.48px;
  color: ${colors.secondary};
`

export const InvestmentSection = styled.div`
  ${flexBetween}
  gap: ${spacings.xsmall};
`

export const InvestmentInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const InvestmentLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.14px;
  color: rgba(0, 0, 0, 0.7);
`

export const InvestmentValue = styled.span`
  font-size: 28px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.34px;
  text-align: center;
  color: ${colors.dark};

  ${media.desktopUp} {
    font-size: 34px;
  }
`
