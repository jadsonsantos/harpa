import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render copyright text with brand name', () => {
    render(<Footer />)

    expect(screen.getByText(/HÁRPÁ/)).toBeInTheDocument()
    expect(screen.getByText(/Todos os direitos reservados/)).toBeInTheDocument()
  })

  it('should display the current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear().toString()

    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('should render privacy policy link with correct href', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /Política de Privacidade/i })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/politica-de-privacidade')
  })

  it('should match snapshot', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
