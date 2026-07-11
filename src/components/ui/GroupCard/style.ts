'use client'
import { flex, flexBetween } from '@/styles/mixins'
import styled from 'styled-components'

export const Card = styled.article`
  position: relative;
  min-width: 330px;
  max-width: 414px;
  height: 500px;
  border-radius: 32px;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardTags = styled.div`
  ${flex}
  gap: 8px;
`

export const CardInfos = styled.div``

export const CardTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 52px;
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: -0.52px;
`

export const CardSubtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 23.4px;
`

export const CardActions = styled.div`
  ${flexBetween}
  margin-top: 24px;
`
