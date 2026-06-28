'use client'
import { colors } from '@/styles/tokens'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -1%;
  color: ${colors.dark};
  font-family: inherit;
  padding: 0;
`

export const Flag = styled.span`
  font-size: 22px;
  line-height: 1;
`

export const Chevron = styled.span<{ $open: boolean }>`
  display: inline-block;
  width: 7px;
  height: 7px;
  border-right: 2px solid ${colors.primary};
  border-bottom: 2px solid ${colors.primary};
  transform: ${({ $open }) =>
    $open ? 'rotate(-135deg) translateY(3px)' : 'rotate(45deg)'};
  transition: transform 0.2s ease;
  margin-left: 2px;
`

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  background: ${colors.light};
  border: 1px solid ${colors.border};
  min-width: 140px;
  list-style: none;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`

export const Option = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  border-bottom: 1px solid ${colors.border};
  transition: background 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${colors.background};
  }
`
