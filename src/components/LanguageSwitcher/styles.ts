'use client'
import { colors } from '@/styles/tokens'
import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Trigger = styled.button<{ $dark?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: ${({ $dark }) => ($dark ? colors.light : colors.dark)};
  font-family: inherit;
  padding: 0;
`

export const Flag = styled(Image)`
  width: 30px;
  height: 20px;
  border-radius: 2px;
  object-fit: cover;
`

export const Chevron = styled.span<{ $open: boolean; $dark?: boolean }>`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-right: 2px solid
    ${({ $dark }) => ($dark ? colors.light : colors.primary)};
  border-bottom: 2px solid
    ${({ $dark }) => ($dark ? colors.light : colors.primary)};
  transform: ${({ $open }) =>
    $open ? 'rotate(-135deg) translateY(3px)' : 'rotate(45deg)'};
  transition: transform 0.2s ease;
  margin-left: 2px;

  ${Trigger}:hover & {
    /* transform: rotate(-135deg) translateY(3px); */
  }
`

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  background: ${colors.light};
  border: 1px solid ${colors.border};
  min-width: 150px;
  list-style: none;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`

export const Option = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 14px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? '500' : '400')};
  border-bottom: 1px solid ${colors.border};
  transition: color 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover span {
    text-decoration: underline;
  }
`
