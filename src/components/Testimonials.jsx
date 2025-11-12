import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    logo: 'https://dummyimage.com/100x40/fff/000&text=KR',
    quote: 'Zaxen elevated our entire brand presence. Strategic, bold, and beautifully executed.',
    name: 'Mila Reyes',
    company: 'Krisco Foods',
  },
  {
    logo: 'https://dummyimage.com/100x40/fff/000&text=VO',
    quote: 'A creative partner who truly understands business outcomes.',
    name: 'Daniel Cho',
    company: 'Void Studio',
  },
  {
    logo: 'https://dummyimage.com/100x40/fff/000&text=AE',
    quote: 'The design system feels premium and effortless. Our users noticed instantly.',
    name: 'Ari Chen',
    company: 'Aether Labs',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">What Our Clients Say</h2>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              <img src={testimonials[index].logo} alt="" className="mx-auto h-6 opacity-80" />
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">“{testimonials[index].quote}”</p>
              <p className="mt-4 text-sm text-white/60">{testimonials[index].name} — {testimonials[index].company}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
