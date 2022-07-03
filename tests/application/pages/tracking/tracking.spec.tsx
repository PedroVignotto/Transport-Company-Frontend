import { generateRandomOrder } from '@/tests/mocks'
import { OrderContext } from '@/application/contexts'
import { Tracking } from '@/application/pages'
import { Order } from '@/domain/models'

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

describe('Tracking', () => {
  const makeSut = (order: Order): void => {
    render(
      <OrderContext.Provider value={{ order, setOrder: jest.fn() }}>
        <BrowserRouter>
          <Tracking />
        </BrowserRouter>
      </OrderContext.Provider>
    )
  }

  it('Should show correct trackingCode', async () => {
    const order = generateRandomOrder()

    makeSut(order)

    expect(await screen.findByText(order.trackingCode)).toBeInTheDocument()
  })

  it('Should redirect to home page if order is undefined', async () => {
    makeSut(undefined as any)

    expect(window.location.pathname).toBe('/')
  })

  it('Should show correct delivery steps', async () => {
    const order = generateRandomOrder()
    order.deliveryStatus[0].name = 'Coletado pela transportadora'

    makeSut(order)

    const orderSteps = screen.queryAllByTestId('order')
    expect(orderSteps[0]).toHaveStyle({ opacity: 1 })
    expect(orderSteps[1]).toHaveStyle({ opacity: 0.3 })
    expect(orderSteps[2]).toHaveStyle({ opacity: 0.3 })
  })
})
