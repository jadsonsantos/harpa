declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        navigation?: string // Example property, adjust according to your needs
        // Add more properties as needed
      }
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        lazy?: string // Example property, adjust according to your needs
        // Add more properties as needed
      }
    }
  }
}

export {}
