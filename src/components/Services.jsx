import { motion } from 'framer-motion'
import { Monitor, Palette, Package, ImageIcon, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding & Visual Identity',
    description: 'Foundational systems that make brands unmistakable.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Tactile experiences that stand out on any shelf.',
  },
  {
    icon: ImageIcon,
    title: 'Social Media Design',
    description: 'Content with rhythm, cohesion, and stopping power.',
  },
  {
    icon: Monitor,
    title: 'UI/UX & Web Design',
    description: 'Digital products that feel effortless and premium.',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Narratives in motion—purposeful, elegant, memorable.',
  },
]

function Card({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur ring-1 ring-white/10"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90">
        <Icon size={18} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0A0A] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#A259FF]/[0.04] to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">What We Do</h2>
          <p className="text-white/60">Expertise that moves brands forward.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
