'use client'

export const colors = {
  primary: '#000000',
  secondary: '#818181',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#ffffff',
  dark: '#000000',
  background: '#fafafa',
  text: '#333333'
} as const

export const fonts = {
  sans: 'Roboto, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif'
} as const

export const spacings = {
  xsmall: '16px', // Extra Small spacing
  small: '24px', // Small spacing, typically used for gaps between elements
  medium: '32px', // Medium spacing
  large: '64px', // Large spacing
  xlarge: '128px', // Extra Large spacing
  xxlarge: '164px' // Double Extra Large spacing
} as const

export const borders = {
  radius: '8px',
  width: '2px',
  style: 'solid',
  color: colors.primary,
  xsmall: '16px',
  small: '24px',
  medium: '32px',
  large: '64px',
  xlarge: '128px',
  xxlarge: '164px'
} as const

export const effects = {
  primary: 'linear-gradient(100deg, #2a8181 8.45%, #858b8e 110.48%)'
} as const
