import { GlobalStyle } from '@/application/styles'
import { Home } from '@/application/pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

export const Router: React.FC = () => {
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
