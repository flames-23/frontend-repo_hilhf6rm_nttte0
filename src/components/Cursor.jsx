import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useSpring(1, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onMouseDown = () => scale.set(0.9)
    const onMouseUp = () => scale.set(1)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    const interactiveHover = (e) => {
      const target = e.target
      if (target.closest('a, button, [role="button"], .is-interactive')) {
        scale.set(1.25)
      } else {
        scale.set(1)
      }
    }
    window.addEventListener('mouseover', interactiveHover)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mouseover', interactiveHover)
    }
  }, [scale, x, y])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 backdrop-blur-sm mix-blend-difference"
      style={{ left: x, top: y, scale }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5" />
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-[#A259FF]/20 to-[#FF4D4D]/20" />
    </motion.div>
  )
}
