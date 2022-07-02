import { Layout } from '@/application/layouts'
import { order } from '@/application/assets'

import { Content } from './styles'

import { FiBox, FiHome, FiTruck } from 'react-icons/fi'
import React from 'react'

export const Tracking: React.FC = () => {
  return (
    <Layout>
      <Content>
        <aside>
          <img src={order} alt="Sua encomenda" />
        </aside>
        <section>
          <h2>CBABR</h2>
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
