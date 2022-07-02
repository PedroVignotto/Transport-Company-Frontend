import { Footer, Header, Input, Spinner } from '@/application/components'
import { transport } from '@/application/assets'
import { ListOrderByTrackingCode } from '@/domain/use-cases'

import { Container, Content } from './styles'

import { toast } from 'react-toastify'
import React, { useState } from 'react'

type Props = { listOrderByTrackingCode: ListOrderByTrackingCode }

export const Home: React.FC<Props> = ({ listOrderByTrackingCode }) => {
  const [loading, setLoading] = useState(false)
  const [trackingCode, setTrackingCode] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (loading || !trackingCode) return
      setLoading(true)
      await listOrderByTrackingCode({ trackingCode })
    } catch (error: any) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <aside>
          <img src={transport} alt="Transport" />
        </aside>
        <form data-testid="form" onSubmit={handleSubmit}>
          <Input
            name="trackingCode"
            data-testid="trackingCode"
            placeholder="Insira o código de rastreio"
            value={trackingCode}
            setState={setTrackingCode}
          />
          <button type="submit" data-testid="submit-button" disabled={!trackingCode}>{ loading ? <Spinner /> : 'Rastrear' }</button>
        </form>
      </Content>
      <Footer />
    </Container>
  )
}
