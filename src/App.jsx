import { useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  const workRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Cursor />
      <Hero onWorkClick={() => scrollTo(workRef)} onContactClick={() => scrollTo(contactRef)} />

      <div ref={workRef}>
        <Portfolio />
      </div>
      <Services />
      <Testimonials />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  )
}

export default App
