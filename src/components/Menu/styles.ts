'use client'
import { media } from '@/styles/mediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.nav`
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

export const MenuItem = styled.li`
  &.active {
    display: none;
  }

  .link {
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.18px;

    &:after {
      content: '';
      border-bottom: 1px solid transparent;
      width: 100%;
    }

    &:hover {
      &:after {
        border-bottom: 1px solid currentColor;
      }
    }

    &.active {
      font-weight: 700;
    }
  }

  ${media.tabletUp} {
    padding: 30px 0;

    &.active {
      display: initial;
    }

    .link {
      transition: font-weight 0.3s ease;
    }
  }
`

export const MenuItemBar = styled.span`
  display: none;
  margin-right: 5px;

  ${media.tabletUp} {
    display: block;
  }
`
