'use client'
import { media } from '@/styles/mediaQueries'
import { borders, colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  border-radius: ${borders.xsmall};
  border: 1px solid ${colors.primary};
  padding: ${spacings.small};
  height: 160px;

  ${media.desktopUp} {
    border-radius: ${borders.medium};
    padding: ${spacings.medium};
    height: 290px;
  }
`

export const ExpeditionMonth = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;

  height: 34px;
  padding: 9px 16px;
  border-radius: 100px;
  border: 1px solid ${colors.primary};

  font-size: 12px;
  line-height: 130%; /* 15.6px */
  letter-spacing: -0.12px;

  ${media.desktopUp} {
    padding: 0 32px;
    height: 40px;

    font-size: 18px;
    letter-spacing: -0.18px;
  }
`

export const ExpeditionStatus = styled.div`
  display: none;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.24px;

  ${media.desktopUp} {
    font-size: 54px;
    letter-spacing: -0.54px;
  }
`

export const ExpeditionDate = styled.h4`
  font-size: 24px;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.24px;

  ${media.desktopUp} {
    font-size: 64px;
    letter-spacing: -0.64px;
  }
`
