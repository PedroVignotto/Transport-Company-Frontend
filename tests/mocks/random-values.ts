import { HttpMethod } from '@/domain/contracts/http'
import { Order } from '@/domain/models'

import faker from 'faker'

export const generateRandomOrder = (): Order => ({
  id: faker.datatype.uuid(),
  trackingCode: faker.datatype.uuid(),
  deliveryStatus: [{ id: faker.datatype.uuid(), name: faker.name.findName() }]
})
export const generateRandomHttpClient = (): { url: string, method: HttpMethod, body: any } => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']) as HttpMethod,
  body: faker.random.objectElement()
})
