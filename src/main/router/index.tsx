import { OrderProvider } from '@/application/contexts'
import { GlobalStyle } from '@/application/styles'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'

type Props = {
  Home: React.FC
  Tracking: React.FC
}

export const Router: React.FC<Props> = ({ Home, Tracking }) => {
  return (
    <OrderProvider>
      <ToastContainer autoClose={3000} theme="colored" />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  )
}
