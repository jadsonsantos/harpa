'use client'
import { Text } from '@/components/Text/styles'
import { media } from '@/styles/mediaQueries'
import { colors, fonts } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.main`
  padding: 40px 0 80px;

  ${media.tabletUp} {
    padding: 64px 0 120px;

    .container {
      max-width: 720px;
      padding: 0;
    }
  }
`

export const Title = styled.h1`
  font-family: ${fonts.sans};
  font-size: 40px;
  font-weight: 100;
  line-height: 1.1;
  color: ${colors.primary};
  margin-bottom: 56px;

  em {
    display: block;
    font-family: ${fonts.serif};
    font-style: italic;
    font-weight: 200;
  }

  ${media.tabletUp} {
    font-size: 64px;
    margin-bottom: 72px;

    em {
      display: inline;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Section = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${media.tabletUp} {
    /* margin-bottom: 48px; */
  }
`

export const SectionTitle = styled.h2`
  font-family: ${fonts.sans};
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  color: ${colors.primary};
  margin-bottom: 16px;

  ${media.tabletUp} {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

export const Paragraph = styled(Text)`
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.primary};
  opacity: 0.75;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tabletUp} {
    font-size: 16px;
  }
`

export const List = styled.ul`
  margin: 8px 0 16px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ListItem = styled.li`
  font-family: ${fonts.sans};
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: ${colors.primary};
  opacity: 0.75;
  padding-left: 16px;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    opacity: 1;
  }

  ${media.tabletUp} {
    font-size: 16px;
  }
`
