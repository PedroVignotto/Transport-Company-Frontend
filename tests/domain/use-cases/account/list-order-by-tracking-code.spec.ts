import { generateRandomHttpClient, generateRandomTrackingCode } from '@/tests/mocks'
import { ListOrderByTrackingCode, listOrderByTrackingCodeUseCase } from '@/domain/use-cases'
import { HttpClient } from '@/domain/contracts/http'

import { mock } from 'jest-mock-extended'

describe('listOrderByTrackingCodeUseCase', () => {
  let sut: ListOrderByTrackingCode
  let trackingCode: string
  let url: string

  const httpClient = mock<HttpClient>()

  beforeAll(() => {
    trackingCode = generateRandomTrackingCode()
    url = generateRandomHttpClient().url
  })

  beforeEach(() => {
    sut = listOrderByTrackingCodeUseCase(url, httpClient)
  })

  it('Should call HttpClient with correct values', async () => {
    await sut({ trackingCode })

    expect(httpClient.request).toHaveBeenCalledWith({ url: `${url}/${trackingCode}`, method: 'get' })
    expect(httpClient.request).toHaveBeenCalledTimes(1)
  })
})
