import { GlobalStyle } from '@/application/styles'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React from 'react'

type Props = {
  Home: React.FC
}

export const Router: React.FC<Props> = ({ Home }) => {
  return (
    <>
      <ToastContainer autoClose={3000} theme="colored" />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
