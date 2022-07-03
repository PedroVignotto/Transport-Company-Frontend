import { Layout } from '@/application/layouts'
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
            <li>
              <FiBox />
              <span>Coletado pela transportadora</span>
            </li>
            <li>
              <FiTruck />
              <span>Saiu para entrega</span>
            </li>
            <li>
              <FiHome />
              <span>Entregue</span>
            </li>
          </ul>
        </section>
      </Content>
    </Layout>
  )
}
