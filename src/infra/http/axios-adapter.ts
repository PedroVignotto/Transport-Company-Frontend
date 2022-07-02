import { HttpRequest } from '@/domain/contracts/http'

import axios from 'axios'

export class AxiosAdapter {
  async request ({ url, method, body }: HttpRequest): Promise<void> {
    await axios.request({ url, method, data: body })
  }
}
