'use client'
import styled from 'styled-components'
import { media } from '@/styles/mediaQueries'
import { spacings } from '@/styles/tokens'

export const Wrapper = styled.section`
  padding: ${spacings.xlarge} 0;

  .collab-text {
    margin: ${spacings.large} 0;
  }

  .collab-image {
    max-width: 100%;
  }

  ${media.desktopUp} {
    padding: ${spacings.xxlarge} 0;

    .container {
      display: flex;
      align-items: flex-end;
      gap: 64px;
    }
  }
`

export const CollabTextContainer = styled.div`
  ${media.tabletUp} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${spacings.large};
    margin-bottom: 32px;

    .heading,
    .collab-text {
      margin: 0;
    }
  }

  ${media.desktopUp} {
    display: revert;
    margin: 0;
    max-width: 414px;

    .collab-text {
      margin-top: 64px;
    }
  }
`

export const CollabList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 32px;
  grid-column-gap: 42px;

  ${media.tabletUp} {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 56px;
  }

  ${media.desktopUp} {
    flex: 1;
  }
`

export const CollabItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`
