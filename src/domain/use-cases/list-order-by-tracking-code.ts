import { FieldNotFoundError, UnexpectedError } from '@/domain/errors'
import { HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => ListOrderByTrackingCode
type Input = { trackingCode: string }
type Output = undefined | Error
export type ListOrderByTrackingCode = (input: Input) => Promise<Output>

export const listOrderByTrackingCodeUseCase: Setup = (url, httpClient) => async ({ trackingCode }) => {
  const { statusCode } = await httpClient.request({ url: `${url}/${trackingCode}`, method: 'get' })

  switch (statusCode) {
    case 200: return undefined
    case 400: throw new FieldNotFoundError('Código de rastreio')
    default: throw new UnexpectedError()
  }
}
