import { Container } from './styles'

import { Link } from 'react-router-dom'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <Container>
      <h1>Transport-Company</h1>
      <nav>
        <Link to="/">home</Link>
      </nav>
    </Container>
  )
}
