import { Container } from './styles'

import React from 'react'

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>Transport-Company</h1>
      <nav>
        <a href="#">home</a>
      </nav>
    </Container>
  )
}
