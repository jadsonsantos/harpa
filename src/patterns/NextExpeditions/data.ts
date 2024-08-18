import Expedition from '@/types/Expedition'

const expeditions: Expedition[] = [
  {
    id: 1,
    date: {
      startDate: 10,
      endDate: 20,
      month: 'Setembro',
      year: 2024
    },
    isClosed: true
  },
  {
    id: 2,
    date: {
      startDate: 10,
      endDate: 20,
      month: 'Novembro',
      year: 2024
    },
    isClosed: true
  },
  {
    id: 3,
    date: {
      startDate: '01',
      endDate: 10,
      month: 'Março',
      year: 2025
    }
  },
  {
    id: 4,
    date: {
      startDate: '01',
      endDate: 10,
      month: 'Outubro',
      year: 2025
    }
  }
]

export default expeditions
