import { generateRandomOrder } from '@/tests/mocks'
import { OrderContext } from '@/application/contexts'
import { Tracking } from '@/application/pages'
import { Order } from '@/domain/models'

import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

describe('Tracking', () => {
  let order: Order

  beforeAll(() => {
    order = generateRandomOrder()
  })

  const makeSut = (): void => {
    render(
      <OrderContext.Provider value={{ order, setOrder: jest.fn() }}>
        <BrowserRouter>
          <Tracking />
        </BrowserRouter>
      </OrderContext.Provider>
    )
  }

  it('Should show correct trackingCode', async () => {
    makeSut()

    expect(await screen.findByText(order.trackingCode)).toBeInTheDocument()
  })
})
