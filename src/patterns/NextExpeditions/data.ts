import Expedition from '@/types/Expedition'

const expeditions: Expedition[] = [
  {
    id: 1,
    isClosed: true,
    country: 'Islândia',
    date: {
      startDate: '01',
      endDate: 10,
      month: 'Março',
      year: 2025
    }
  },
  {
    id: 2,
    isClosed: false,
    country: 'Japão',
    date: {
      startDate: 14,
      endDate: 26,
      month: 'Maio',
      year: 2025
    }
  },
  {
    id: 3,
    isClosed: false,
    country: 'Islândia',
    date: {
      startDate: '01',
      endDate: 10,
      month: 'Outubro',
      year: 2025
    }
  }
]

export default expeditions
