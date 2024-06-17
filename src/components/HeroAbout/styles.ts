'use client'
import styled from 'styled-components'
import Hero from '../Hero'
import { colors } from '@/styles/tokens'

export const AboutHeroWrapper = styled(Hero)`
  background-color: ${colors.dark};
  color: ${colors.light};
  border-radius: 0px 0px 32px 32px;
`
