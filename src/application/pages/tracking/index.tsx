import { Layout } from '@/application/layouts'
import { Step } from '@/application/components'
import { useOrder } from '@/application/hooks'
import { delivery } from '@/application/assets'

import { Content } from './styles'

import { FiBox, FiHome, FiTruck } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

export const Tracking: React.FC = () => {
  const navigate = useNavigate()
  const { order } = useOrder()

  useEffect(() => {
    if (!order) navigate('/')
  }, [])

  return (
    <Layout>
      <Content>
        <aside>
          <img src={delivery} alt="Sua encomenda" />
        </aside>
        <section>
          <h2>{order?.trackingCode}</h2>
          <ul>
            <Step Icon={FiBox} deliveryStatus={'Coletado pela transportadora'} />
            <Step Icon={FiTruck} deliveryStatus={'Saiu para entrega'} />
            <Step Icon={FiHome} deliveryStatus={'Entregue'} />
          </ul>
        </section>
      </Content>
    </Layout>
  )
}
