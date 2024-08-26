'use client'

export const media = {
  largeDesktopUp: '@media (min-width: 1440px)',
  desktopUp: '@media (min-width: 1200px)',
  smallDesktopUp: '@media (min-width: 1024px)',
  smallDesktopBelow: '@media (max-width: 1023px)',
  largeTabletUp: '@media (min-width: 834px)',
  tabletUp: '@media (min-width: 768px)',
  mobileUp: '@media (min-width: 480px)',
  mobileDown: '@media (max-width: 479px)'
} as const
