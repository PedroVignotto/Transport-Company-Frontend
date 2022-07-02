import { Footer, Header } from '@/application/components'

import { Container } from './styles'

import React from 'react'

type Props = { children: JSX.Element }

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
        {children}
      <Footer />
    </Container>
  )
}
