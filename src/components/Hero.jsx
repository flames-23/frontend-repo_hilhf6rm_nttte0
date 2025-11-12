import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onWorkClick, onContactClick }) {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-[900] tracking-tight"
          style={{ fontFamily: 'Geist, Inter, system-ui', lineHeight: 1.05 }}
        >
          <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Zaxen — Where Design</span>
          <span className="mt-2 block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Meets Bold Ideas.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
          className="mt-6 text-base text-white/70 sm:text-lg md:text-xl"
          style={{ fontFamily: 'Inter, system-ui' }}
        >
          We craft visual experiences that move brands forward.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onWorkClick} className="is-interactive rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-[#A259FF] hover:bg-white/10">
            Explore Our Work
          </button>
          <button onClick={onContactClick} className="is-interactive rounded-full bg-[#A259FF] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(162,89,255,0.35)] transition hover:bg-[#8c3dff]">
            Let’s Collaborate
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60"
        >
          Scroll ↓ to Discover
        </motion.div>
      </div>
    </section>
  )
}
