import Header from './components/Header'
import ParticlesBackground from './components/ParticlesBackground'
import FloatingShapes from './components/FloatingShapes'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import GospelToonsEng from './pages/GospelToonsEng'
import GospelToonsTamil from './pages/GospelToonsTamil'
import CatholicDesigns from './pages/CatholicDesigns'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <FloatingShapes />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gospeltoons-eng" element={<GospelToonsEng />} />
        <Route path="/gospeltoons-tamil" element={<GospelToonsTamil />} />
        <Route path="/catholic-designs" element={<CatholicDesigns />} />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
