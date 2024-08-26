export interface DescriptionItem {
  title: string
  description: string[]
}

interface ContentItem {
  title?: string // Opcional, pois nem todos os itens têm título
  description: string[]
}

interface CTA {
  text: string
  href: string
}

export interface InitiativeData {
  title: string
  content?: ContentItem[]
  description?: string[]
  cta?: CTA
  hasAccordion?: boolean // Opcional, pois nem todos os itens têm accordion
  hasOnlyAccordion?: boolean
}
