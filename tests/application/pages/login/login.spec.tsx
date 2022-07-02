import { generateRandomOrder } from '@/tests/mocks'
import { Home } from '@/application/pages'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

describe('Home', () => {
  let trackingCode: string

  const listOrderByTrackingCode: jest.Mock = jest.fn()

  beforeAll(() => {
    trackingCode = generateRandomOrder().trackingCode
  })

  const makeSut = (): void => { render(<Home listOrderByTrackingCode={listOrderByTrackingCode} />) }

  const populateField = (): void => {
    fireEvent.input(screen.getByTestId('trackingCode'), { target: { value: trackingCode } })
  }

  const simulateSubmit = (): void => {
    populateField()
    fireEvent.click(screen.getByTestId('submit-button'))
  }

  it('Should load with correct initial state', () => {
    makeSut()

    expect(screen.getByTestId('submit-button')).toHaveTextContent('Rastrear')
    expect(screen.getByTestId('submit-button')).toBeDisabled()
    expect(screen.getByTestId('trackingCode')).toHaveTextContent('')
  })

  it('Should enable submit button if form is valid', () => {
    makeSut()

    populateField()

    expect(screen.getByTestId('submit-button')).toBeEnabled()
  })

  it('Should show spinner on submit', async () => {
    makeSut()

    simulateSubmit()

    expect(screen.getByTestId('submit-button')).not.toHaveTextContent('Rastrear')
  })

  it('Should call listOrderByTrackingCode with correct value', async () => {
    makeSut()

    simulateSubmit()

    expect(listOrderByTrackingCode).toHaveBeenCalledWith({ trackingCode })
  })

  it('Should call listOrderByTrackingCode only once', async () => {
    makeSut()

    simulateSubmit()
    fireEvent.click(screen.getByTestId('submit-button'))

    expect(listOrderByTrackingCode).toHaveBeenCalledTimes(1)
  })

  it('Should not call listOrderByTrackingCode if form is invalid', async () => {
    makeSut()

    fireEvent.submit(screen.getByTestId('form'))

    expect(listOrderByTrackingCode).not.toHaveBeenCalled()
  })
})
