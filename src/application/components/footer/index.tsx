import { Container } from './styles'

import { FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <Container>
      <span>© 2022 Transport Company</span>
      <div>
        <button><FiInstagram /></button>
        <button><FiTwitter /></button>
        <button><FiYoutube /></button>
      </div>
    </Container>
  )
}
