import { generateRandomOrder } from '@/tests/mocks'
import { OrderProvider } from '@/application/contexts'
import { Home } from '@/application/pages'
import { UnexpectedError } from '@/domain/errors'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'

describe('Home', () => {
  let trackingCode: string

  const listOrderByTrackingCode: jest.Mock = jest.fn()

  beforeAll(() => {
    trackingCode = generateRandomOrder().trackingCode
  })

  const makeSut = (): void => {
    render(
      <OrderProvider>
        <BrowserRouter>
          <ToastContainer/>
          <Home listOrderByTrackingCode={listOrderByTrackingCode} />
        </BrowserRouter>
      </OrderProvider>
    )
  }

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
    await waitFor(() => screen.getByTestId('form'))

    expect(screen.getByTestId('submit-button')).not.toHaveTextContent('Rastrear')
  })

  it('Should call listOrderByTrackingCode with correct value', async () => {
    makeSut()

    simulateSubmit()
    await waitFor(() => screen.getByTestId('form'))

    expect(listOrderByTrackingCode).toHaveBeenCalledWith({ trackingCode })
  })

  it('Should call listOrderByTrackingCode only once', async () => {
    makeSut()

    simulateSubmit()
    fireEvent.click(screen.getByTestId('submit-button'))
    await waitFor(() => screen.getByTestId('form'))

    expect(listOrderByTrackingCode).toHaveBeenCalledTimes(1)
  })

  it('Should not call listOrderByTrackingCode if form is invalid', async () => {
    makeSut()

    fireEvent.submit(screen.getByTestId('form'))

    expect(listOrderByTrackingCode).not.toHaveBeenCalled()
  })

  it('Should show alert error if listOrderByTrackingCode fails', async () => {
    makeSut()
    listOrderByTrackingCode.mockRejectedValueOnce(new UnexpectedError())

    simulateSubmit()

    expect(await screen.findByText(new UnexpectedError().message)).toBeInTheDocument()
    expect(screen.getByTestId('submit-button')).toHaveTextContent('Rastrear')
  })

  it('Should go to tracking page on success', async () => {
    makeSut()

    simulateSubmit()
    await waitFor(() => screen.getByTestId('form'))

    expect(window.location.pathname).toBe('/tracking')
  })
})
