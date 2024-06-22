'use client'
import { media } from '@/styles/mediaQueries'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import { PrimaryButton } from '../Button/styles'
import { LargeContainer } from '@/patterns/Container/styles'

export const Wrapper = styled.section`
  padding-top: 128px;
  text-align: center;

  ${media.desktopUp} {
    padding-top: 164px;
  }
`

export const Container = styled(LargeContainer)``

export const Content = styled.div`
  padding: 164px 20px;
  border-radius: 32px;
  background-color: ${colors.dark};

  h3 {
    color: ${colors.light};
    margin: 0 auto 64px;
  }

  ${media.tabletUp} {
    padding: 164px 155px;
  }

  ${media.desktopUp} {
  }
`

export const Button = styled(PrimaryButton)``
