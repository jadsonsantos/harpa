interface Expedition {
  country?: string
  id: number
  isClosed?: boolean
  date: {
    startDate: number | string
    endDate: number
    month: string
    year: number
  }
}

export default Expedition
