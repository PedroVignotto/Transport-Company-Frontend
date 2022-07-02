import { HttpMethod } from '@/domain/contracts/http'
import { Order } from '@/domain/models'

import faker from 'faker'

export const generateRandomOrder = (): Order => ({
  id: faker.datatype.uuid(),
  trackingCode: faker.datatype.uuid(),
  deliveryStatus: [{ id: faker.datatype.uuid(), name: faker.name.findName() }]
})
export const generateRandomHttpClient = (): { url: string, method: HttpMethod, statusCode: number, body: any, data: any } => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']) as HttpMethod,
  statusCode: faker.random.arrayElement([200, 201, 204, 400, 401, 403, 500]),
  body: faker.random.objectElement(),
  data: faker.random.objectElement()
})
