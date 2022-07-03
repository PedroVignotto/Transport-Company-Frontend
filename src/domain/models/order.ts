export type Order = {
  id: string
  trackingCode: string
  deliveryStatus: DeliveryStatus[]
}

export type DeliveryStatus = {
  id: string
  name: string
}
