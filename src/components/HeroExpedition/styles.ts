'use client'
import styled from 'styled-components'
import Hero from '../Hero'
import { colors } from '@/styles/tokens'

export const HeroExpeditionWrapper = styled(Hero)`
  background-color: ${colors.light};
  padding: 225px 0 128px;

  h1 {
    color: ${colors.dark};
  }
`
