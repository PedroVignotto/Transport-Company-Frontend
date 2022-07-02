import { makeHttpClient, makeApiUrl } from '@/main/factories/infra/http'
import { ListOrderByTrackingCode, listOrderByTrackingCodeUseCase } from '@/domain/use-cases'

export const makeListOrderByTrackingCode = (): ListOrderByTrackingCode =>
  listOrderByTrackingCodeUseCase(makeApiUrl(''), makeHttpClient())
