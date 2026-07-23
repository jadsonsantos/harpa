import { Metadata } from 'next'
import ExpeditionPage from '@/components/ExpeditionPage'

export const metadata: Metadata = {
  title: 'A expedição | HÁRPÁ'
}

export default function Expedition() {
  return <ExpeditionPage />
}
