'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

const locales = [
  { code: 'pt', label: 'PT-BR', flag: '🇧🇷' },
  { code: 'en', label: 'EN-USA', flag: '🇺🇸' },
  { code: 'nl', label: 'NL-NL', flag: '🇳🇱' }
]

const LanguageSwitcher = () => {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.startsWith(`/${locale}`)
      ? pathname.slice(`/${locale}`.length) || '/'
      : pathname
    const newPath = `/${newLocale}${
      pathWithoutLocale === '/' ? '' : pathWithoutLocale
    }`
    router.push(newPath, { scroll: false })
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <S.Wrapper ref={ref}>
      <S.Trigger onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{current.label}</span>
        <S.Flag>{current.flag}</S.Flag>
        <S.Chevron $open={open} />
      </S.Trigger>
      {open && (
        <S.Dropdown>
          {locales.map((l) => (
            <S.Option
              key={l.code}
              onClick={() => switchLocale(l.code)}
              $active={l.code === locale}
            >
              <span>{l.label}</span>
              <S.Flag>{l.flag}</S.Flag>
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.Wrapper>
  )
}

export default LanguageSwitcher
