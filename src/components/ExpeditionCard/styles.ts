'use client'
import { media } from '@/styles/mediaQueries'
import { borders, colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

const colorGray = 'rgba(255, 255, 255, 0.3)'
const backgroundSuccess = 'linear-gradient(99deg, #2a8181 8.9%, #858b8e 108.6%)'
const backgroundError =
  'linear-gradient(103deg, #c6285e -27.04%, #8e2734 78.84%)'

const activeCardStyle = () => `
  .expedition-status {
    display: flex;
  }

  .expedition-date {
    color: ${colors.light};
  }
`

export const BaseCard = styled.article`
  display: flex;
  justify-content: space-between;

  border-radius: ${borders.xsmall};
  padding: ${spacings.small};
  height: 160px;

  ${media.desktopUp} {
    border-radius: ${borders.medium};
    padding: ${spacings.medium};
    height: 290px;
  }
`

export const ExpeditionCard = styled(BaseCard)`
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${colors.primary};
  transition: background 0.3s ease;

  ${media.smallDesktopBelow} {
    ${activeCardStyle()};

    &.open {
      background: ${backgroundSuccess};
    }

    &.closed {
      background: ${backgroundError};
    }
  }

  ${media.desktopUp} {
    &.open:hover {
      background: ${backgroundSuccess};
    }

    &.closed:hover {
      background: ${backgroundError};

      .expedition-month {
        background-color: ${colorGray};
      }

      .expedition-date {
        color: ${colorGray};
      }

      .arrow {
        display: none;
      }
    }

    &:hover {
      ${activeCardStyle()};

      .expedition-country {
        display: none;
      }
    }
  }
`

export const ExpeditionCountry = styled.h3`
  display: none;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.16px;
  color: ${colors.dark};

  ${media.desktopUp} {
    display: block;
    font-size: 48px;
    line-height: 62.4px;
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
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);

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
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.24px;
  color: ${colors.light};

  .custom-link {
    display: none;
  }

  .arrow:hover {
    .circle {
      fill: ${colors.light};
    }

    .path {
      fill: ${colors.primary};
    }
  }

  ${media.desktopUp} {
    font-size: 46px;
    letter-spacing: -0.54px;

    .custom-link {
      display: flex;
      align-items: center;
    }
  }
`

export const ExpeditionDate = styled.h4`
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.24px;

  ${media.desktopUp} {
    font-size: 64px;
    letter-spacing: -0.64px;
  }
`
