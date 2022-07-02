import { generateRandomHttpClient, generateRandomOrder } from '@/tests/mocks'
import { ListOrderByTrackingCode, listOrderByTrackingCodeUseCase } from '@/domain/use-cases'
import { FieldNotFoundError, UnexpectedError } from '@/domain/errors'
import { HttpClient } from '@/domain/contracts/http'
import { Order } from '@/domain/models'

import { mock } from 'jest-mock-extended'

describe('listOrderByTrackingCodeUseCase', () => {
  let sut: ListOrderByTrackingCode
  let trackingCode: string
  let url: string
  let order: Order

  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    trackingCode = generateRandomOrder().trackingCode
    url = generateRandomHttpClient().url
    order = generateRandomOrder()

    httpClient.request.mockResolvedValue({ statusCode: 200, data: order })
  })

  beforeEach(() => {
    sut = listOrderByTrackingCodeUseCase(url, httpClient)
  })

  it('Should call HttpClient with correct values', async () => {
    await sut({ trackingCode })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${trackingCode}`, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })

  it('Should throw FieldNotFoundError if HttpClient returns 400', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 400 })

    const promise = sut({ trackingCode })

    await expect(promise).rejects.toThrow(new FieldNotFoundError('Código de rastreio'))
  })

  it('Should throw UnexpectedError if HttpClient returns 500', async () => {
    httpClient.request.mockResolvedValueOnce({ statusCode: 500 })

    const promise = sut({ trackingCode })

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('Should return a order data if HttpClient returns 200', async () => {
    const result = await sut({ trackingCode })

    expect(result).toEqual(order)
  })
})
