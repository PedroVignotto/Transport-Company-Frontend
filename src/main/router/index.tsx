import { GlobalStyle } from '@/application/styles'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

type Props = {
  Home: React.FC
}

export const Router: React.FC<Props> = ({ Home }) => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
