'use client'
import { media } from '@/styles/mediaQueries'
import { borders, colors, fonts, spacings } from '@/styles/tokens'
import styled from 'styled-components'
import {
  Wrapper as ButtonDark,
  PrimaryButton
} from '../../components/Button/styles'

export const Wrapper = styled.div`
  background-color: ${colors.background};
`

export const HeroSection = styled.section`
  padding: ${spacings.small} ${spacings.xsmall} ${spacings.medium};

  .hero-title {
    font-size: 40px;
    font-weight: 700;
    line-height: 105%;
    letter-spacing: -1.2px;
    margin-top: ${spacings.xsmall};
    margin-bottom: ${spacings.xsmall};

    em {
      font-family: ${fonts.serif};
      font-style: italic;
      font-weight: 400;
    }
  }

  .hero-coordinates {
    font-size: 11px;
    line-height: 150%;
    color: ${colors.secondary};
    text-align: right;
    display: block;
    margin-bottom: 0;
  }

  ${media.tabletUp} {
    padding: ${spacings.large} ${spacings.medium};

    .hero-title {
      font-size: 64px;
    }
  }

  ${media.desktopUp} {
    .hero-title {
      font-size: 96px;
      letter-spacing: -2px;
    }
  }
`

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid ${colors.primary};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.primary};
  line-height: 1;
`

export const TagDark = styled(Tag)`
  border-color: rgba(255, 255, 255, 0.5);
  color: ${colors.light};
`

export const TagGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const CardGrid = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacings.xsmall};
  padding: 0 ${spacings.xsmall} ${spacings.medium};

  ${media.tabletUp} {
    flex-direction: row;
    padding: 0 ${spacings.medium} ${spacings.large};
  }
`

const BaseCard = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: ${borders.xsmall};
  overflow: hidden;

  ${media.tabletUp} {
    flex: 1;
    border-radius: ${borders.medium};
  }
`

export const GroupCard = styled(BaseCard)`
  border: 1px solid ${colors.border};
`

export const DarkCard = styled(BaseCard)`
  background-color: ${colors.primary};
`

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.xsmall};
  padding: ${spacings.xsmall};

  .card-meta {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 130%;
    margin-bottom: 0;
  }
`

export const CardImageArea = styled.div`
  flex: 1;
  min-height: 110px;

  ${media.tabletUp} {
    min-height: 240px;
  }
`

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacings.xsmall};
  gap: ${spacings.xsmall};

  .card-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.28px;
    margin-bottom: 0;
    line-height: 130%;
  }

  .private-title {
    font-size: 28px;
    font-family: ${fonts.serif};
    font-style: italic;
    font-weight: 400;
    color: ${colors.light};
    margin-bottom: 0;
    line-height: 130%;
  }
`

export const GroupCardBtn = styled(ButtonDark)`
  flex-shrink: 0;
`

export const PrivateCardBtn = styled(PrimaryButton)`
  flex-shrink: 0;
`
