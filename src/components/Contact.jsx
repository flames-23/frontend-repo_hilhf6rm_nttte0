import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Dribbble, Globe } from 'lucide-react'

const icons = [
  { Icon: Globe, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Dribbble, href: '#' },
]

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus("Thank you! We’ll get back to you soon.")
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong. Try again.')
      }
    } catch (e) {
      setStatus('Something went wrong. Try again.')
    }
  }

  return (
    <section id="contact" className="relative bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Let’s Create Something Great.</h2>
            <p className="mt-4 text-white/70">Got a project in mind? We’d love to hear from you.</p>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none placeholder:text-white/40 focus:border-[#A259FF]"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none placeholder:text-white/40 focus:border-[#A259FF]"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                rows="5"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none placeholder:text-white/40 focus:border-[#A259FF]"
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="is-interactive rounded-full bg-[#FF4D4D] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,77,77,0.35)] transition hover:bg-[#ff2f2f]">
                Send Message
              </button>
              {status && <p className="text-sm text-white/70">{status}</p>}
            </form>
          </div>

          <div className="lg:pl-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm text-white/70">Based in Colombo, working worldwide.</p>
              <div className="mt-6 flex items-center gap-4">
                {icons.map(({ Icon, href }) => (
                  <a key={href} href={href} className="is-interactive inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-[#A259FF] hover:text-white">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <button className="is-interactive rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-[#A259FF]">Book a Free Discovery Call</button>
              </div>
            </div>
            <p className="mt-6 text-xs text-white/50">© 2025 Zaxen. Made with passion and pixels.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
