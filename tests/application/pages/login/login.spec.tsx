import { generateRandomOrder } from '@/tests/mocks'
import { Home } from '@/application/pages'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

describe('Home', () => {
  let trackingCode: string

  beforeAll(() => {
    trackingCode = generateRandomOrder().trackingCode
  })

  it('Should load with correct initial state', () => {
    render(<Home />)

    expect(screen.getByTestId('submit-button')).toHaveTextContent('Rastrear')
    expect(screen.getByTestId('submit-button')).toBeDisabled()
    expect(screen.getByTestId('trackingCode')).toHaveTextContent('')
  })

  it('Should enable submit button if form is valid', () => {
    render(<Home />)

    fireEvent.input(screen.getByTestId('trackingCode'), { target: { value: trackingCode } })

    expect(screen.getByTestId('submit-button')).toBeEnabled()
  })
})
