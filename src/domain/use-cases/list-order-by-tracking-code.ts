import { FieldNotFoundError, UnexpectedError } from '@/domain/errors'
import { HttpClient } from '@/domain/contracts/http'
import { Order } from '@/domain/models'

type Setup = (url: string, httpClient: HttpClient<Order>) => ListOrderByTrackingCode
type Input = { trackingCode: string }
type Output = Order
export type ListOrderByTrackingCode = (input: Input) => Promise<Output>

export const listOrderByTrackingCodeUseCase: Setup = (url, httpClient) => async ({ trackingCode }) => {
  const { statusCode, data } = await httpClient.request({ url: `${url}/${trackingCode}`, method: 'get' })
  switch (statusCode) {
    case 200: return data!
    case 400: throw new FieldNotFoundError('Código de rastreio')
    default: throw new UnexpectedError()
  }
}
