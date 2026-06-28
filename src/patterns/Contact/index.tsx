import { getLocale } from 'next-intl/server'
import { ContactClient } from './ContactClient'

export default async function Contact() {
  const locale = await getLocale()

  return <ContactClient locale={locale} />
}
