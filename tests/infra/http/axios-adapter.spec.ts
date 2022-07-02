import { generateRandomHttpClient } from '@/tests/mocks'
import { AxiosAdapter } from '@/infra/http'
import { HttpMethod } from '@/domain/contracts/http'

import axios from 'axios'

jest.mock('axios')

describe('AxiosAdapter', () => {
  let sut: AxiosAdapter
  let url: string
  let method: HttpMethod
  let body: any

  const fakeAxios = axios as jest.Mocked<typeof axios>

  beforeAll(() => {
    url = generateRandomHttpClient().url
    method = generateRandomHttpClient().method
    body = generateRandomHttpClient().body
  })

  beforeEach(() => {
    sut = new AxiosAdapter()
  })

  it('Should call request with correct values', async () => {
    await sut.request({ url, method, body })

    expect(fakeAxios.request).toHaveBeenCalledWith({ url, method, data: body })
    expect(fakeAxios.request).toHaveBeenCalledTimes(1)
  })
})
