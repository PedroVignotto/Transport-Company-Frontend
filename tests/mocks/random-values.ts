import faker from 'faker'

export const generateRandomTrackingCode = (): string => faker.datatype.uuid()
export const generateRandomHttpClient = (): { url: string } => ({
  url: faker.internet.url()
})
