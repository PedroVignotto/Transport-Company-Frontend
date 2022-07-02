import { generateRandomHttpClient } from '@/tests/mocks'
import { AxiosAdapter } from '@/infra/http'
import { HttpMethod } from '@/domain/contracts/http'

import axios from 'axios'

jest.mock('axios')

describe('AxiosAdapter', () => {
  let sut: AxiosAdapter
  let url: string
  let method: HttpMethod
  let statusCode: number
  let body: any
  let data: any

  const fakeAxios = axios as jest.Mocked<typeof axios>

  beforeAll(() => {
    url = generateRandomHttpClient().url
    method = generateRandomHttpClient().method
    body = generateRandomHttpClient().body

    fakeAxios.request.mockResolvedValue({ status: statusCode, data })
  })

  beforeEach(() => {
    sut = new AxiosAdapter()
  })

  it('Should call request with correct values', async () => {
    await sut.request({ url, method, body })

    expect(fakeAxios.request).toHaveBeenCalledWith({ url, method, data: body })
    expect(fakeAxios.request).toHaveBeenCalledTimes(1)
  })

  it('Should return correct response', async () => {
    const httpResponse = await sut.request({ url, method, body })

    expect(httpResponse.statusCode).toBe(statusCode)
    expect(httpResponse.data).toEqual(data)
  })

  it('Should return correct error', async () => {
    fakeAxios.request.mockRejectedValueOnce({ response: { status: statusCode, data } })

    const result = await sut.request({ url, method, body })

    expect(result).toEqual({ statusCode, data })
  })
})
