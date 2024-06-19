import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading text passed as children', () => {
    const headingText = 'Test Heading'
    render(<Heading>{headingText}</Heading>)

    expect(screen.getByText(headingText)).toBeInTheDocument()
  })
})
