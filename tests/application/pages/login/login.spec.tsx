import { Home } from '@/application/pages'

import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Home', () => {
  it('Should load with correct initial state', () => {
    render(<Home />)

    expect(screen.getByTestId('submit-button')).toHaveTextContent('Rastrear')
    expect(screen.getByTestId('submit-button')).toBeDisabled()
    expect(screen.getByTestId('trackingCode')).toHaveTextContent('')
  })
})
