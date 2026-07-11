import GroupsPage from '@/patterns/GroupsPage'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'GroupsPage.metadata' })

  return {
    title: t('title')
  }
}

export default function Groups() {
  return <GroupsPage />
}
