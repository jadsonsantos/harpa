'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.nav`
  .link {
    font-size: 18px;
    line-height: 130%; /* 23.4px */
    letter-spacing: -0.18px;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 82px;
    right: 0;
    width: 155px;

    border-radius: 0px 0px 16px 16px;
    background: #fff;

    .link {
      padding: 12px 24px;
    }
  }

  ${media.tabletUp} {
    .link:before {
      content: '/ ';
    }
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tabletUp} {
    flex-direction: row;
    gap: 24px;
  }

  ${media.desktopUp} {
    gap: 58px;
  }
`
