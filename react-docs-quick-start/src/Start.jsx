
import React from 'react'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import {Index} from './components/Navigation/Pages'
import UseEffectPage from './components/UseEffect'
export default function Start() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/github" element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
