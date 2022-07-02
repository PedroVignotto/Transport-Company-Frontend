import { HttpClient } from '@/domain/contracts/http'

type Setup = (url: string, httpClient: HttpClient) => ListOrderByTrackingCode
type Input = { trackingCode: string }
type Output = void
export type ListOrderByTrackingCode = (input: Input) => Promise<Output>

export const listOrderByTrackingCodeUseCase: Setup = (url, httpClient) => async ({ trackingCode }) => {
  await httpClient.request({ url: `${url}/${trackingCode}`, method: 'get' })
}
