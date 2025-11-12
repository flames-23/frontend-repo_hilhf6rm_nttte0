import { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Krisco Redesign',
    tagline: 'Packaging / Visual Identity',
    img: 'https://images.unsplash.com/photo-1585386959984-a4155223169f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Void Studio',
    tagline: 'Brand / Web',
    img: 'https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Aether Motion',
    tagline: 'Motion Graphics',
    img: 'https://images.unsplash.com/photo-1520975682031-ae4cccb293f2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Celeste UI',
    tagline: 'UI/UX',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
  },
]

function Tile({ project }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
    >
      <img src={project.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-left">
        <p className="text-sm text-white/70">{project.tagline}</p>
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </div>
    </motion.button>
  )
}

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Work</h2>
          <p className="text-white/60">Selected projects that blend art and strategy.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <Tile key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
