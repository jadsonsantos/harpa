'use client'
import { media } from '@/styles/mediaQueries'
import { borders, colors, spacings } from '@/styles/tokens'
import styled from 'styled-components'

const colorGray = 'rgba(255, 255, 255, 0.3)'
const backgroundSuccess = 'linear-gradient(99deg, #2a8181 8.9%, #858b8e 108.6%)'
const backgroundError =
  'linear-gradient(103deg, #c6285e -27.04%, #8e2734 78.84%)'

const activeCardStyle = () => `
  color: ${colors.light};

  .expedition-month {
    background-color: ${colors.light};
    color: ${colors.primary};
  }

  .expedition-status {
    display: flex;
  }
`

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  border-radius: ${borders.xsmall};
  border: 1px solid ${colors.primary};
  padding: ${spacings.small};
  height: 160px;

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
    border-radius: ${borders.medium};
    padding: ${spacings.medium};
    height: 290px;

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
    }
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
    font-size: 54px;
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
