import { useOrder } from '@/application/hooks'
import { DeliveryStatus } from '@/domain/models'

import { Container } from './styles'

import { FiBox, FiHome, FiTruck } from 'react-icons/fi'
import React from 'react'

type Props = { Icon: typeof FiBox | typeof FiHome | typeof FiTruck, deliveryStatus: string }

export const Step: React.FC<Props> = ({ Icon, deliveryStatus }) => {
  const { order } = useOrder()

  const deliveryStep = ({ name }: DeliveryStatus): boolean => name === deliveryStatus
  const stepPerformed = !!order?.deliveryStatus.find(deliveryStep)

  return (
    <Container active={stepPerformed} data-testid="order">
      <Icon />
      <span>{deliveryStatus}</span>
    </Container>
  )
}
