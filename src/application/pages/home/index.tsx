import { Header, Input, Spinner } from '@/application/components'
import { transport } from '@/application/assets'

import { Container, Content, Footer } from './styles'

import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import React from 'react'

export const Home: React.FC = () => {
  const loading = false

  return (
    <Container>
      <Header />
      <Content>
        <aside>
          <img src={transport} alt="Transport" />
        </aside>
        <form>
          <Input type="text" name="trackingCode" placeholder="Insira o código de rastreio" />
          <button type="submit">{ loading ? <Spinner /> : 'Rastrear' }</button>
        </form>
      </Content>
      <Footer>
        <span>© 2022 Transport Company</span>
        <div>
          <button><FiInstagram /></button>
          <button><FiTwitter /></button>
          <button><FiYoutube /></button>
        </div>
      </Footer>
    </Container>
  )
}
