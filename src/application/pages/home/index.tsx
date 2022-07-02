import { Footer, Header, Input, Spinner } from '@/application/components'
import { transport } from '@/application/assets'

import { Container, Content } from './styles'

import React, { useState } from 'react'

export const Home: React.FC = () => {
  const [loading] = useState(false)

  return (
    <Container>
      <Header />
      <Content>
        <aside>
          <img src={transport} alt="Transport" />
        </aside>
        <form>
          <Input name="trackingCode" placeholder="Insira o código de rastreio" data-testid="trackingCode" />
          <button type="submit" data-testid="submit-button" disabled>{ loading ? <Spinner /> : 'Rastrear' }</button>
        </form>
      </Content>
      <Footer />
    </Container>
  )
}
