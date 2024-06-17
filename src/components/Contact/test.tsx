import { render, screen } from '@testing-library/react'

import Contact from '.'

describe('<Contact />', () => {
  it('should render the heading', () => {
    const { container } = render(<Contact />)

    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
