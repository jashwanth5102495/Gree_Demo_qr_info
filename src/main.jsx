import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Paddy from './pages/Paddy.jsx'
import ChilliPepper from './pages/ChilliPepper.jsx'
import GreenGram from './pages/GreenGram.jsx'
import GroundNut from './pages/GroundNut.jsx'
import Okra from './pages/Okra.jsx'
import Potato from './pages/Potato.jsx'
import Genik from './pages/Genik.jsx'
import Floraco from './pages/Floraco.jsx'
import AllGreen from './pages/AllGreen.jsx'
import BioGold from './pages/BioGold.jsx'
import PowerGold from './pages/PowerGold.jsx'
import Hipro from './pages/Hipro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/paddy" element={<Paddy />} />
        <Route path="/chilli-pepper" element={<ChilliPepper />} />
        <Route path="/green-gram" element={<GreenGram />} />
        <Route path="/ground-nut" element={<GroundNut />} />
        <Route path="/okra" element={<Okra />} />
        <Route path="/potato" element={<Potato />} />
        <Route path="/genik" element={<Genik />} />
        <Route path="/floraco" element={<Floraco />} />
        <Route path="/all-green" element={<AllGreen />} />
        <Route path="/bio-gold" element={<BioGold />} />
        <Route path="/power-gold" element={<PowerGold />} />
        <Route path="/hipro" element={<Hipro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
