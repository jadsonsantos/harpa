'use client'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'
import Hero from '../Hero'

export const HeroExpeditionWrapper = styled(Hero)`
  background-color: ${colors.light};
  padding: 225px 0 128px;

  .hero-title {
    color: ${colors.dark};
  }

  .container {
    display: flex;
    align-items: flex-end;
    max-width: fit-content;
  }
`
