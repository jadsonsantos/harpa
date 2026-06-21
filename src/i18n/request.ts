import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

const messageLoaders = {
  en: () => import('../messages/en.json'),
  pt: () => import('../messages/pt.json'),
  nl: () => import('../messages/nl.json')
} as const

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale
  }

  const loadMessages =
    messageLoaders[locale as keyof typeof messageLoaders] ??
    messageLoaders[routing.defaultLocale as keyof typeof messageLoaders]

  return {
    locale,
    messages: (await loadMessages()).default
  }
})
