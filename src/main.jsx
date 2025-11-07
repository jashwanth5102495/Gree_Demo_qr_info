import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Paddy from './pages/Paddy.jsx'
import ChilliPepper from './pages/ChilliPepper.jsx'
import GreenGram from './pages/GreenGram.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/paddy" element={<Paddy />} />
        <Route path="/chilli-pepper" element={<ChilliPepper />} />
        <Route path="/green-gram" element={<GreenGram />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
